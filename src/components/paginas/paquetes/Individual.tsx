import { FormEvent, useContext, useState } from "react";
import moment from "moment";
import { Form, Modal } from "react-bootstrap";
import { AuthContext } from "../../../context/auth/AuthContext";
import { formatPrice } from "../../../helpers/formatPrice";
import { usePaqueteInd } from "../../../hooks/usePaquetes";
import Button from "../../ui/button/Button";
import Loading from "../../ui/loading/Loading";
import Modaltitle from "../../ui/modaltitle/Modaltitle";
import styles from "./paquetes.module.css";
import { actualizarRolUsuario, anadirPaqueteInv } from "../../../helpers/fetch";
import { Pedido } from "../../../interfaces/PedidosInterface";
import { toast } from "react-toastify";

const Individual = () => {
  const { auth, abrirLogin, actualizarRol } = useContext(AuthContext);
  const [precioSeleccionado, setPrecioSeleccionado] = useState("");
  const [show, setShow] = useState(false);
  const [loading, setLoading] = useState(false);
  const { paquete, cargando } = usePaqueteInd();
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fechaPago = moment().format();
    const fechaVencimiento = moment(fechaPago).add(1, "y").format();

    setLoading(true);

    const body: Pedido = {
      usuario: auth.uid,
      paquete: paquete?._id,
      precio: Number(precioSeleccionado),
      importe: Number(precioSeleccionado),
      fechaPago,
      fechaVencimiento,
      metodoPago: "Tarjeta",
      vigencia: true,
      idStripe: "123123",
    };

    const resp = await anadirPaqueteInv("pedidos", body);

    await actualizarRol({
      role: paquete?.nombre,
      paqueteAdquirido: paquete?._id,
    });

    if (resp.ok) {
      toast.success(resp.msg);
    }
    setLoading(false);
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
                <button
                  onClick={handleShow}
                  type="button"
                  className={styles.btnContratar}
                >
                  CONTRATAR
                </button>
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
          <Form onSubmit={onSubmit}>
            <div className="row d-flex justify-content-center">
              <div className="col-sm-12 col-md-12 col-lg-9">
                <div className="row d-flex justify-content-center">
                  <div className="col-4">
                    <div className={`${styles.S1labels}`}>
                      Anual
                    </div>
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
                    <div className={`${styles.S1labels}`}>
                      Semestral
                    </div>
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
                    <div className={`${styles.S1labels}`}>
                      Trimestral
                    </div>
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
              <Button titulo="Siguiente" />
            </div>
          </Form>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default Individual;
