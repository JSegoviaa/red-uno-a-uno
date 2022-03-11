import { FormEvent, useContext, useEffect, useRef, useState } from "react";
import { useRouter } from "next/router";
import { Form, Pagination } from "react-bootstrap";
import { toast } from "react-toastify";
import moment from "moment";
import { v4 as uuidv4 } from "uuid";
import DashboardLayout from "components/layout/Dashboard";
import SEO from "components/seo/SEO";
import { useForm } from "hooks/useForm";
import { useReferenciaNumero, useReferencias } from "hooks/useReferencias";
import Loading from "components/ui/loading/Loading";
import styles from "components/paginas/dashboard/Dashboard.module.css";
import styleRef from "components/paginas/dashboard/Referencias.module.css";
import { formatPrice } from "helpers/formatPrice";
import { horaMes } from "helpers/horaMes";
import {
  aprobarRef,
  anadirPaqueteInv,
  nuevoPedido,
} from "../../../helpers/fetch";
import { Pedido } from "interfaces/PedidosInterface";
import { AuthContext } from "context/auth/AuthContext";
import { NuevoPedido } from "interfaces/ContactInterface";
import { AdminRoute } from "hooks/useAdminRoute";
import { actualizarRolUsuario } from "../../../helpers/fetch";

const Referencias = () => {
  const router = useRouter();
  const { actualizarRol } = useContext(AuthContext);
  const refTop = useRef<HTMLElement>(null);
  const [seleccionado, setSeleccionado] = useState("");
  const [desde, setDesde] = useState(0);
  const { formulario, handleChange } = useForm({
    numero: "",
  });
  const { numero } = formulario;
  const { referencia, setReferencia } = useReferenciaNumero(seleccionado);
  const {
    referencias,
    total,
    cargando: loading,
    setReferencias,
  } = useReferencias(desde);

  const seleccionarReferencia = (ref: string) => {
    setSeleccionado(ref);
  };

  useEffect(() => {
    refTop.current?.scrollIntoView({ behavior: "smooth" });
  }, [seleccionado, refTop]);

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSeleccionado(numero);
  };

  const cerrarReferencia = () => setSeleccionado("");

  const handlePrevPage = () => {
    if (desde === 0) {
      return;
    } else {
      setDesde(desde - 15);
    }
  };

  const handleNextPage = () => {
    if (desde < total - 15) {
      setDesde(desde + 15);
    } else {
      return;
    }
  };

  const confirmarRef = async (
    refId: string,
    uid: string,
    nombre: string,
    apellido: string,
    correo: string,
    pid: string,
    precio: number,
    paquete: string,
    usuarios: number,
    role: string
  ) => {
    const pagoId = uuidv4();

    const fechaPago = moment().format();
    const fechaVencimiento = moment(fechaPago).add(1, "y").format();
    const fechaVencimientoSem = moment(fechaPago).add(6, "M").format();
    const fechaVencimientoTri = moment(fechaPago).add(3, "M").format();

    const correoPedido: NuevoPedido = {
      apellido: apellido,
      nombre: nombre,
      correo: correo,
      idCompra: pagoId,
      nombrePaquete: paquete,
      precio: Number(precio),
      importe: Number(precio) * Number(usuarios),
    };

    const body: Pedido = {
      usuario: uid,
      paquete: pid,
      precio: Number(precio),
      importe:
        paquete === "Individual"
          ? Number(precio)
          : Number(precio) * Number(usuarios),
      fechaPago,
      fechaVencimiento:
        Number(precio) === 1250
          ? fechaVencimientoTri
          : Number(precio) === 1999
          ? fechaVencimientoSem
          : fechaVencimiento,
      metodoPago: "Transferencia",
      vigencia: true,
      idPago: pagoId,
      totalUsuarios: paquete === "Individual" ? 1 : usuarios,
    };

    const resIndi = await anadirPaqueteInv("pedidos/ref", body);
    if (resIndi.ok) {
      const res = await aprobarRef(`referencias/${refId}`);
      if (res.ok) {
        toast.success(res.msg);
        const refAprobada = referencias?.map((ref) => {
          if (ref._id === refId) {
            return { ...ref, estado: true };
          }

          return ref;
        });
        setReferencia({ ...referencia, estado: true });
        setReferencias(refAprobada);
      }
      toast.success(resIndi.msg);

      role !== "Administrador"
        ? await actualizarRolUsuario(`usuarios/rol/${uid}`, {
            role: paquete,
            paqueteAdquirido: pid,
            usuarios: usuarios,
          })
        : null;

      await nuevoPedido("correos/nuevo-pedido", correoPedido);
    }
  };

  return (
    <>
      <SEO titulo="Referencias" url={router.asPath} />
      <DashboardLayout titulo="REFERENCIAS">
        <section ref={refTop} className={styles.dashContain}>
          <section className="mt-5">
            <div className="container">
              <div className="row">
                <div className="col-12">
                  {seleccionado === referencia?.referencia ? (
                    <div className="row d-flex justify-content-center my-4">
                      <div className="col-sm-12 col-md-12 col-lg-10 col-xl-9 col-xxl-8">
                        <div className={styleRef.refCard}>
                          <div className="row">
                            <div className="col-sm-12 col-md-3 col-lg-3 text-center">
                              <div
                                className={`${styleRef.paqueteBG} ${
                                  referencia?.paquete.nombre === "Individual"
                                    ? styleRef.PaqIndivi
                                    : referencia?.paquete.nombre === "Básico"
                                    ? styleRef.PaqBasic
                                    : referencia?.paquete.nombre ===
                                      "Intermedio"
                                    ? styleRef.PaqInter
                                    : referencia?.paquete.nombre === "Avanzado"
                                    ? styleRef.PaqAvanza
                                    : ""
                                }`}
                              >
                                <div className={styleRef.paqueteNombre}>
                                  {referencia?.paquete.nombre}
                                </div>
                              </div>
                            </div>
                            <div className="col-sm-12 col-md-9 col-lg-9 p-0">
                              <div className={styleRef.refCardContenido}>
                                <div className="row">
                                  <div className="col-10 mb-3">
                                    <div
                                      className={`${styleRef.TituloCard} mb-2`}
                                    >
                                      Detalle de Referencia
                                    </div>
                                  </div>
                                  <div className="col-2 text-center">
                                    <button className={styleRef.btnClose}>
                                      <i
                                        onClick={cerrarReferencia}
                                        className="bi bi-x-lg"
                                      />
                                    </button>
                                  </div>
                                  <div className="col-sm-6 col-md-6 col-lg-8 mb-3">
                                    <div className={`${styleRef.labelsCard}`}>
                                      Referencia
                                      <div
                                        className={`${styleRef.contentCard}`}
                                      >
                                        {referencia?.referencia}
                                      </div>
                                    </div>
                                  </div>
                                  <div className="col-sm-6 col-md-6 col-lg-4 mb-3">
                                    <div className={`${styleRef.labelsCard}`}>
                                      Generada
                                      <div
                                        className={`${styleRef.contentCard}`}
                                      >
                                        {horaMes(referencia?.createdAt)}
                                      </div>
                                    </div>
                                  </div>
                                  <div className="col-8 mb-3">
                                    <div className={`${styleRef.labelsCard}`}>
                                      Usuario
                                      <div
                                        className={`${styleRef.contentCard}`}
                                      >
                                        <i
                                          className="bi bi-person-circle me-2"
                                          style={{
                                            color: "#7149bc",
                                            fontSize: "20px",
                                          }}
                                        ></i>{" "}
                                        {referencia?.usuario.nombre}{" "}
                                        {referencia?.usuario.apellido}
                                      </div>
                                    </div>
                                  </div>
                                  <div className="col-sm-12 col-md-6 col-lg-4 mb-3">
                                    <div className={`${styleRef.labelsCard}`}>
                                      Oficina
                                      <div
                                        className={`${styleRef.contentCard}`}
                                      >
                                        <i
                                          className="bi bi-telephone"
                                          style={{
                                            color: "#7149bc",
                                            fontSize: "20px",
                                          }}
                                        ></i>{" "}
                                        {referencia?.usuario.telefonoOficina}
                                      </div>
                                    </div>
                                  </div>
                                  <div className="col-sm-12 col-md-6 col-lg-8 mb-3">
                                    <div className={`${styleRef.labelsCard}`}>
                                      E-mail
                                      <div
                                        className={`${styleRef.contentCard}`}
                                      >
                                        <i
                                          className="bi bi-envelope"
                                          style={{
                                            color: "#7149bc",
                                            fontSize: "20px",
                                          }}
                                        ></i>{" "}
                                        {referencia?.usuario.correo}
                                      </div>
                                    </div>
                                  </div>
                                  <div className="col-sm-12 col-md-6 col-lg-4 mb-3">
                                    <div className={`${styleRef.labelsCard}`}>
                                      Teléfono
                                      <div
                                        className={`${styleRef.contentCard}`}
                                      >
                                        <i
                                          className="bi bi-phone"
                                          style={{
                                            color: "#7149bc",
                                            fontSize: "20px",
                                          }}
                                        ></i>{" "}
                                        {referencia?.usuario.telefonoPersonal}
                                      </div>
                                    </div>
                                  </div>
                                  <div className="col-sm-6 col-md-4 col-lg-4 mb-3">
                                    <div className={`${styleRef.labelsCard}`}>
                                      Precio de Paquete
                                      <div
                                        className={`${styleRef.contentCard}`}
                                      >
                                        {formatPrice(
                                          Number(referencia?.precio)
                                        )}
                                      </div>
                                    </div>
                                  </div>
                                  <div className="col-sm-6 col-md-4 col-lg-4 mb-3">
                                    <div className={`${styleRef.labelsCard}`}>
                                      Usuarios adquiridos
                                      <div
                                        className={`${styleRef.contentCard}`}
                                      >
                                        <i
                                          className="bi bi-person-lines-fill me-2"
                                          style={{
                                            color: "#7149bc",
                                            fontSize: "20px",
                                          }}
                                        ></i>{" "}
                                        {referencia &&
                                        referencia?.totalUsuarios >= 3
                                          ? referencia?.totalUsuarios
                                          : "N/A"}
                                      </div>
                                    </div>
                                  </div>
                                  <div className="col-sm-6 col-md-4 col-lg-4 mb-3">
                                    <div className={`${styleRef.labelsCard}`}>
                                      Importe
                                      <div
                                        className={`${styleRef.contentCard}`}
                                      >
                                        {formatPrice(
                                          Number(referencia?.importe)
                                        )}
                                      </div>
                                    </div>
                                  </div>
                                  <div className="col-sm-12 col-md-12 col-lg-6 mt-3 text-center ">
                                    {referencia.comprobante ? (
                                      <button className={styleRef.btnTicket}>
                                        <a
                                          target="_blank"
                                          rel="noopener noreferrer"
                                          href={referencia.comprobante}
                                        >
                                          Comprobante
                                        </a>
                                      </button>
                                    ) : (
                                      <button
                                        disabled
                                        className={styleRef.btnTicket}
                                      >
                                        <a
                                          target="_blank"
                                          rel="noopener noreferrer"
                                          href={referencia.comprobante}
                                        >
                                          Sin comprobante
                                        </a>
                                      </button>
                                    )}
                                  </div>
                                  <div className="col-sm-12 col-md-12 col-lg-6 mt-3 text-center">
                                    {referencia.estado ? (
                                      <button
                                        disabled
                                        className={`${styleRef.btnAp}`}
                                      >
                                        Aprobado
                                      </button>
                                    ) : (
                                      <>
                                        {referencia.comprobante ? (
                                          <button
                                            onClick={() =>
                                              confirmarRef(
                                                referencia._id,
                                                referencia.usuario._id,
                                                referencia.usuario.nombre,
                                                referencia.usuario.apellido,
                                                referencia.usuario.correo,
                                                referencia.paquete._id,
                                                referencia.precio,
                                                referencia.paquete.nombre,
                                                referencia.totalUsuarios,
                                                referencia.usuario.role
                                              )
                                            }
                                            className={`${styleRef.btnAp}`}
                                          >
                                            Confirmar
                                          </button>
                                        ) : (
                                          <button
                                            disabled
                                            className={`${styleRef.btnAp}`}
                                          >
                                            <i className="bi bi-lock-fill" />{" "}
                                            Confirmar
                                          </button>
                                        )}
                                      </>
                                    )}
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ) : seleccionado === "" ? null : (
                    <Loading />
                  )}
                  <div className="row d-flex justify-content-between mb-3">
                    <div className="col-sm-12 col-md-6 col-lg-4 mb-sm-3 mb-md-0 mb-lg-0 mb-3">
                      <Form onSubmit={onSubmit}>
                        <Form.Control
                          type="text"
                          placeholder="Buscar por referencia"
                          value={numero}
                          name="numero"
                          onChange={handleChange}
                          autoComplete="off"
                        />
                      </Form>
                    </div>
                    {/* <div className="col-sm-12 col-md-6 col-lg-4 mb-sm-3 mb-md-0 mb-lg-0 mb-3">
                      <Form.Select aria-label="Default select example">
                        <option>Ordenar por:</option>
                        <option value="1">Fecha</option>
                        <option value="2">Paquetes</option>
                      </Form.Select>
                    </div> */}
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section>
            <div className="container">
              <div className="row">
                <div className="col-12 p-2">
                  <div className={`${styleRef.tablaRef} table-responsive`}>
                    <div className={styleRef.headerRef}>
                      Ultimas referencias generadas
                    </div>
                    <table className="w-100">
                      <tr className={styleRef.rowT}>
                        <td className={styleRef.headersT}>Referencia</td>
                        <td className={styleRef.headersT}>Fecha</td>
                        <td className={styleRef.headersT}>Usuario</td>
                        <td className={styleRef.headersT}>Paquete</td>
                        <td className={styleRef.headersT}>Precio Paquete</td>
                        <td className={styleRef.headersT}>Usuarios</td>
                        <td className={styleRef.headersT}>Importe</td>
                        <td className={styleRef.headersT}>Estado</td>
                        <td className={styleRef.headersT}></td>
                      </tr>
                      {loading ? (
                        <Loading />
                      ) : (
                        <>
                          {referencias.map((referencia) => (
                            <tr key={referencia._id} className={styleRef.rowT}>
                              <td className={styleRef.contentT}>
                                {referencia.referencia}
                              </td>
                              <td className={styleRef.contentT}>
                                {horaMes(referencia.createdAt)}
                              </td>
                              <td className={styleRef.contentT}>
                                {referencia.usuario.nombre}{" "}
                                {referencia.usuario.apellido}
                              </td>
                              <td className={styleRef.contentT}>
                                {referencia.paquete.nombre}
                              </td>
                              <td className={styleRef.contentT}>
                                {formatPrice(referencia.precio)}
                              </td>
                              <td className={styleRef.contentT}>
                                {referencia.totalUsuarios >= 3
                                  ? referencia.totalUsuarios
                                  : "N/A"}
                              </td>
                              <td className={styleRef.contentT}>
                                {formatPrice(referencia.importe)}
                              </td>
                              <td className={styleRef.contentT}>
                                {referencia.estado ? "Aprobado" : "Pendiente"}
                              </td>
                              <td className={styleRef.contentT}>
                                <button
                                  onClick={() =>
                                    seleccionarReferencia(referencia.referencia)
                                  }
                                  className={`${styleRef.btnT1} px-2 mx-1`}
                                >
                                  <i className="bi bi-eye" />
                                </button>
                                <button
                                  className={`${styleRef.btnT2} px-2 mx-1`}
                                >
                                  <i className="bi bi-trash"></i>
                                </button>
                              </td>
                            </tr>
                          ))}
                        </>
                      )}
                    </table>
                    {referencias.length === 0 ? (
                      <h2 className="text-center py-5">
                        Aún no hay referencias
                      </h2>
                    ) : null}
                  </div>
                </div>
              </div>
            </div>
          </section>

          {referencias && total > 15 ? (
            <div className="d-flex justify-content-center">
              <Pagination>
                <Pagination.Prev onClick={handlePrevPage} />
                <Pagination.Next onClick={handleNextPage} />
              </Pagination>
            </div>
          ) : null}
        </section>
      </DashboardLayout>
    </>
  );
};

export default AdminRoute(Referencias);
