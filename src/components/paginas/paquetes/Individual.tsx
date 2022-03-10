import { FormEvent, useContext, useState } from "react";
import { useRouter } from "next/router";
import moment from "moment";
import { Form, Modal } from "react-bootstrap";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { toast } from "react-toastify";
import { AuthContext } from "../../../context/auth/AuthContext";
import { formatPrice } from "../../../helpers/formatPrice";
import { usePaqueteInd } from "../../../hooks/usePaquetes";
import Button from "../../ui/button/Button";
import Loading from "../../ui/loading/Loading";
import Modaltitle from "../../ui/modaltitle/Modaltitle";
import styles from "./paquetes.module.css";
import {
  anadirPaqueteInv,
  generarRefInd,
  nuevoPedido,
  nuevoPedidoAdmin,
} from "../../../helpers/fetch";
import { Pedido } from "../../../interfaces/PedidosInterface";
import { NuevoPedido, NuevoPedidoAdmin } from "interfaces/ContactInterface";
import { production } from "credentials/credentials";

const Individual = () => {
  const { auth, abrirLogin, actualizarRol } = useContext(AuthContext);
  const [precioSeleccionado, setPrecioSeleccionado] = useState("");
  const router = useRouter();
  const stripe = useStripe();
  const elements = useElements();
  const [show, setShow] = useState(false);
  const [loading, setLoading] = useState(false);
  const { paquete, cargando } = usePaqueteInd();
  const [mostrarPago, setMostrarPago] = useState(false);
  const [mostrarTransferencia, setMostrarTransferencia] = useState(false);

  const handleClose = () => {
    setPrecioSeleccionado("");
    setShow(false);
  };

  const handleNext = () => setShow(false);
  const handleShow = () => setShow(true);
  const ocultarPago = () => setMostrarPago(false);
  const ocultarTransferencia = () => setMostrarTransferencia(false);

  const pagar = () => {
    handleNext();
    setMostrarPago(true);
  };

  const pagarTransferencia = () => {
    handleNext();
    setMostrarTransferencia(true);
  };

  const generarReferencia = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const body = {
      usuario: auth.uid,
      paquete: paquete?._id,
      referencia: Math.floor(
        1_000_000_000_000 + Math.random() * 9_000_000_000_000
      ),
      precio: Number(precioSeleccionado),
      importe: Number(precioSeleccionado),
      totalUsuarios: 1,
      estado: false,
    };

    const res = await generarRefInd("referencias", body);
    if (res.ok) {
      toast.success(res.msg);
      router.push("/perfil/referencias-de-pago");
    } else {
      toast.success("Error al generear la referencia. Inténtelo de nuevo");
    }
  };

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!stripe || !elements) return;

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: elements.getElement(CardElement)!,
    });

    setLoading(true);

    const fechaPago = moment().format();
    const fechaVencimiento = moment(fechaPago).add(1, "y").format();
    const fechaVencimientoSem = moment(fechaPago).add(6, "M").format();
    const fechaVencimientoTri = moment(fechaPago).add(3, "M").format();

    if (!error) {
      const pago = paymentMethod;
      const body: Pedido = {
        usuario: auth.uid,
        paquete: paquete?._id,
        precio: Number(precioSeleccionado),
        importe: Number(precioSeleccionado),
        fechaPago,
        fechaVencimiento:
          Number(precioSeleccionado) === 1250
            ? fechaVencimientoTri
            : Number(precioSeleccionado) === 2799
            ? fechaVencimientoSem
            : fechaVencimiento,
        metodoPago: pago?.type,
        vigencia: true,
        idPago: pago?.id,
        totalUsuarios: 1,
      };

      const correoPedido: NuevoPedido = {
        apellido: auth.apellido,
        nombre: auth.nombre,
        correo: auth.correo,
        idCompra: pago?.id,
        nombrePaquete: paquete?.nombre,
        precio: Number(precioSeleccionado),
        importe: Number(precioSeleccionado),
      };

      const correoPedidoAdmin: NuevoPedidoAdmin = {
        apellido: auth.apellido,
        nombre: auth.nombre,
        idCompra: pago?.id,
        nombrePaquete: paquete?.nombre,
        precio: Number(precioSeleccionado),
        importe: Number(precioSeleccionado),
      };

      try {
        const resp = await anadirPaqueteInv("pedidos", body);
        auth.role !== "Administrador"
          ? await actualizarRol(
              {
                role: paquete?.nombre,
                paqueteAdquirido: paquete?._id,
              },
              auth.uid
            )
          : null;

        await nuevoPedido("correos/nuevo-pedido", correoPedido);
        await nuevoPedidoAdmin("correos/nuevo-pedido-admin", correoPedidoAdmin);

        if (resp.ok) {
          toast.success(resp.msg);
          ocultarPago();
          router.push("/perfil/historial-de-pagos");
        }

        if (!resp.ok) toast.error(resp.msg);

        setLoading(false);
      } catch (error) {
        console.log(error);
      }
      setLoading(false);
    }
  };

  return (
    <div className="col-sm-12 col-md-6 col-lg-4 col-xl-3 mb-4">
      <div className={styles.paquetesCard}>
        {cargando ? (
          <Loading />
        ) : (
          <>
            <div className="d-flex justify-content-center">
              <img src="/images/icons/individual.png" alt="Paquete" />
            </div>
            <div className={`${styles.paquetesCardTitle}  my-4 text-center`}>
              {paquete?.nombre}
            </div>
            <hr />
            <ul>
              <table className={styles.tabla}>
                <tbody>
                  <tr>
                    <td className="tupla">
                      <li className={styles.listItems}>Anual</li>
                    </td>
                    <td className="tupla">
                      <div className={styles.paquetesCardPrecio2}>
                        {formatPrice(paquete!.precioAnual)}MXN
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td className="tupla">
                      <li className={styles.listItems}>Semestral</li>
                    </td>
                    <td className="tupla">
                      <div className={styles.paquetesCardPrecio2}>
                        {formatPrice(paquete!.precioSemestral)}MXN
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td className="tupla">
                      <li className={styles.listItems}>Trimestral</li>
                    </td>
                    <td className="tupla">
                      <div className={styles.paquetesCardPrecio2}>
                        {formatPrice(paquete!.precioTrimestral)}MXN
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
              <li className={styles.listItems}>{paquete?.descripcion}</li>
            </ul>
            <div className={`${styles.ajusteBtn} text-center`}>
              {auth.uid ? (
                <>
                  {auth.role === "Individual" ? (
                    <Button titulo="Contratado" btn="Disabled" />
                  ) : (
                    <>
                      {auth.role === "Básico" ||
                      auth.role === "Intermedio" ||
                      auth.role === "Avanzado" ? (
                        <Button titulo="Contratar" btn="Disabled" />
                      ) : (
                        <button
                          onClick={handleShow}
                          type="button"
                          className={styles.btnContratar}
                        >
                          CONTRATAR
                        </button>
                      )}
                    </>
                  )}
                </>
              ) : (
                <button
                  onClick={abrirLogin}
                  type="button"
                  className={styles.btnContratar}
                >
                  CONTRATAR
                </button>
              )}
            </div>
          </>
        )}
      </div>
      <Modal show={show} onHide={handleClose} contentClassName={styles.modalS1}>
        <Modal.Header closeButton className={styles.modalS1header} />
        <Modal.Body>
          <div className={styles.headTitle}>
            <Modaltitle titulo="Individual" />
          </div>
          <div className={`${styles.S1content} text-center mt-5 mb-4`}>
            Selecciona el tipo de plan que desea.
          </div>
          {loading ? <Loading /> : null}
          <div>
            <div className="row d-flex justify-content-center">
              <div className="col-sm-12 col-md-12 col-lg-9">
                <div className="row d-flex justify-content-center">
                  <div className="col-4">
                    <div className={`${styles.S1labels}`}>Anual</div>
                  </div>
                  <div className="col-7 text-end mb-2">
                    <input
                      value={paquete?.precioAnual}
                      onChange={(e) => setPrecioSeleccionado(e.target.value)}
                      type="radio"
                      name="individual"
                    />
                    <span className={`${styles.precio} ms-2`}>
                      {paquete ? (
                        <>{formatPrice(paquete?.precioAnual)} MXN</>
                      ) : null}
                    </span>
                  </div>
                  <div className="col-4">
                    <div className={`${styles.S1labels}`}>Semestral</div>
                  </div>
                  <div className="col-7 text-end mb-2">
                    <input
                      value={paquete?.precioSemestral}
                      onChange={(e) => setPrecioSeleccionado(e.target.value)}
                      type="radio"
                      name="individual"
                    />
                    <span className={`${styles.precio} ms-2`}>
                      {paquete ? (
                        <>{formatPrice(paquete.precioSemestral)} MXN</>
                      ) : null}
                    </span>
                  </div>
                  <div className="col-4">
                    <div className={`${styles.S1labels}`}>Trimestral</div>
                  </div>
                  <div className="col-7 text-end mb-2">
                    <input
                      value={paquete?.precioTrimestral}
                      type="radio"
                      name="individual"
                      onChange={(e) => setPrecioSeleccionado(e.target.value)}
                    />
                    <span className={`${styles.precio} ms-2`}>
                      {paquete ? (
                        <>{formatPrice(paquete!.precioTrimestral)} MXN</>
                      ) : null}
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="text-center mt-5">
              {precioSeleccionado ? (
                <>
                  <Button titulo="Pagar con tarjeta" onClick={pagar} />
                  <Button
                    titulo="Transferencia bancaria"
                    onClick={pagarTransferencia}
                  />
                </>
              ) : (
                <>
                  <Button titulo="Pago con tarjeta" btn="Disabled" />
                  <Button titulo="Transferencia bancaria" btn="Disabled" />
                </>
              )}
            </div>
          </div>
        </Modal.Body>
      </Modal>

      <Modal
        contentClassName={styles.modalS1}
        show={mostrarPago}
        onHide={ocultarPago}
      >
        <Modal.Header closeButton className={styles.modalS1header} />
        <Modaltitle titulo="Paquete individual" />

        <div className={`${styles.S1content} text-center`}>
          Cantidad a pagar:{" "}
          <span className={`${styles.precio}`}>
            {formatPrice(Number(precioSeleccionado))} MXN
          </span>
        </div>

        <br />
        <Form onSubmit={onSubmit}>
          <div className="form-group px-4">
            <CardElement
              options={{
                style: {
                  base: {
                    iconColor: "#2C2C2C",
                    color: "#2C2C2C",
                    fontWeight: "500",
                    fontFamily: "Roboto, Open Sans, Segoe UI, sans-serif",
                    fontSize: "16px",
                    "::placeholder": {
                      color: "#757575",
                    },
                  },
                  invalid: {
                    iconColor: "#E44122",
                    color: "#E44122",
                  },
                },
              }}
            />
          </div>

          <div className="text-center my-3">
            {!stripe ? (
              <Button titulo="Pagar" btn="Disabled" />
            ) : (
              <div>
                {loading ? <Loading /> : <Button titulo="Finalizar pedido" />}
              </div>
            )}
          </div>
        </Form>
      </Modal>

      <Modal
        contentClassName={styles.modalS1}
        show={mostrarTransferencia}
        onHide={ocultarTransferencia}
      >
        <Modal.Header closeButton className={styles.modalS1header} />
        <Modaltitle titulo="Paquete individual" />

        <div className={`${styles.S1content} text-center`}>
          Cantidad a pagar:{" "}
          <span className={`${styles.precio}`}>
            {formatPrice(Number(precioSeleccionado))} MXN
          </span>
        </div>

        <br />
        <Form onSubmit={generarReferencia}>
          <div className="text-center">
            <div className="p-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Id
              maiores neque harum distinctio cumque ratione dolorum quam aperiam
              aut repudiandae in quas architecto molestias quo est obcaecati,
              similique, voluptatum consectetur!
            </div>
            <Button titulo="Generar referencia" />
          </div>
          <br />
        </Form>
      </Modal>
    </div>
  );
};

export default Individual;
