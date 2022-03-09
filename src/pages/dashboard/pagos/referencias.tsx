import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/router";
import { Form, Pagination } from "react-bootstrap";
import DashboardLayout from "components/layout/Dashboard";
import SEO from "components/seo/SEO";
import { useForm } from "hooks/useForm";
import { useReferenciaNumero, useReferencias } from "hooks/useReferencias";
import Loading from "components/ui/loading/Loading";
import styles from "components/paginas/dashboard/Dashboard.module.css";
import styleRef from "components/paginas/dashboard/Referencias.module.css";
import { formatPrice } from "helpers/formatPrice";
import { horaMes } from "helpers/horaMes";

const Referencias = () => {
  const router = useRouter();
  const refTop = useRef<HTMLElement>(null);
  const [seleccionado, setSeleccionado] = useState("");
  const [desde, setDesde] = useState(0);
  const { formulario, handleChange } = useForm({
    numero: "",
  });
  const { numero } = formulario;
  const { cargando, referencia } = useReferenciaNumero(seleccionado);
  const { referencias, total, cargando: loading } = useReferencias(desde);

  const seleccionarReferencia = (ref: string) => {
    setSeleccionado(ref);
  };

  useEffect(() => {
    refTop.current?.scrollIntoView({ behavior: "smooth" });
  }, [seleccionado, refTop]);

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

  return (
    <>
      <SEO titulo="Referencias" url={router.asPath} />
      <DashboardLayout titulo="REFERENCIAS">
        <section ref={refTop} className={styles.dashContain}>
          <section className="mt-5">
            <div className="container">
              <div className="row">
                <div className="col-12">
                  {seleccionado !== "" ? (
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
                                  <div className="col-8 mb-3">
                                    <div className={`${styleRef.labelsCard}`}>
                                      Referencia
                                      <div
                                        className={`${styleRef.contentCard}`}
                                      >
                                        {referencia?.referencia}
                                      </div>
                                    </div>
                                  </div>
                                  <div className="col-sm-6 col-md-4 col-lg-4 mb-3">
                                    <div className={`${styleRef.labelsCard}`}>
                                      Generada
                                      <div
                                        className={`${styleRef.contentCard}`}
                                      >
                                        {horaMes(referencia?.createdAt)}
                                      </div>
                                    </div>
                                  </div>
                                  <div className="col-12 mb-3">
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
                                  <div className="col-12 mt-3 text-end pe-4">
                                    <button className={`${styleRef.btnAp}`}>
                                      Confirmar
                                    </button>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ) : null}
                  <div className="row d-flex justify-content-between mb-3">
                    <div className="col-sm-12 col-md-6 col-lg-4 mb-sm-3 mb-md-0 mb-lg-0 mb-3">
                      <Form.Control
                        type="text"
                        placeholder="Buscar por referencia"
                      />
                    </div>
                    <div className="col-sm-12 col-md-6 col-lg-4 mb-sm-3 mb-md-0 mb-lg-0 mb-3">
                      <Form.Select aria-label="Default select example">
                        <option>Ordenar por:</option>
                        <option value="1">Fecha</option>
                        <option value="2">Paquetes</option>
                      </Form.Select>
                    </div>
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
                                  className={`${styleRef.btnT1} px-2 mx-1`}
                                >
                                  <i
                                    className="bi bi-eye"
                                    onClick={() =>
                                      seleccionarReferencia(
                                        referencia.referencia
                                      )
                                    }
                                  />
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

export default Referencias;
