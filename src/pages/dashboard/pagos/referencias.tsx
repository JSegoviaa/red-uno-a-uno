import { useRouter } from "next/router";
import DashboardLayout from "components/layout/Dashboard";
import SEO from "components/seo/SEO";
import { Col, Form, Row } from "react-bootstrap";
import { useForm } from "hooks/useForm";
import { useReferenciaNumero } from "hooks/useReferencias";
import Loading from "components/ui/loading/Loading";
import styles from "components/paginas/dashboard/Dashboard.module.css";
import styleRef from "components/paginas/dashboard/Referencias.module.css";

const Referencias = () => {
  const router = useRouter();

  const { formulario, handleChange } = useForm({
    numero: "",
  });

  const { numero } = formulario;
  const { cargando, referencia } = useReferenciaNumero(numero);

  return (
    <>
      <SEO titulo="Referencias" url={router.asPath} />
      <DashboardLayout titulo="REFERENCIAS">
        <section className={styles.dashContain}>
          <section className="mt-5">
            <div className="container">
              <div className="row">
                <div className="col-12">
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
                  <div className="row d-flex justify-content-center my-4">
                    <div className="col-sm-12 col-md-12 col-lg-10 col-xl-9 col-xxl-8">
                      <div className={styleRef.refCard}>
                        <div className="row">
                          <div className="col-sm-12 col-md-3 col-lg-3 text-center">
                            <div className={styleRef.paqueteBG}>
                              <div className={styleRef.paqueteNombre}>
                                Intermedio
                              </div>
                            </div>
                          </div>
                          <div className="col-sm-12 col-md-9 col-lg-9 p-0">
                            <div className={styleRef.refCardContenido}>
                              <div className="row">
                                <div className="col-10 mb-3">
                                  <div className={`${styleRef.TituloCard} mb-2`}>
                                    Detalle de Referencia
                                  </div>
                                </div>
                                <div className="col-2 text-center">
                                  <button className={styleRef.btnClose}><i className="bi bi-x-lg"></i></button>
                                </div>
                                <div className="col-8 mb-3">
                                  <div className={`${styleRef.labelsCard}`}>
                                    Referencia
                                    <div className={`${styleRef.contentCard}`}>
                                      9841654186876516384
                                    </div>
                                  </div>
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-4 mb-3">
                                  <div className={`${styleRef.labelsCard}`}>
                                    Generada
                                    <div className={`${styleRef.contentCard}`}>
                                      09-03-2022
                                    </div>
                                  </div>
                                </div>
                                <div className="col-12 mb-3">
                                  <div className={`${styleRef.labelsCard}`}>
                                    Usuario
                                    <div className={`${styleRef.contentCard}`}>
                                      <i className="bi bi-person-circle me-2"
                                        style={{ color: '#7149bc', fontSize: '20px' }}>
                                      </i> Juanito Espinito de la Cruz
                                    </div>
                                  </div>
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-4 mb-3">
                                  <div className={`${styleRef.labelsCard}`}>
                                    Precio de Paquete
                                    <div className={`${styleRef.contentCard}`}>
                                      <i className="bi bi-currency-dollar"
                                        style={{ color: 'green', fontSize: '20px' }}>
                                      </i> 1,900.00
                                    </div>
                                  </div>
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-4 mb-3">
                                  <div className={`${styleRef.labelsCard}`}>
                                    Usuarios adquiridos
                                    <div className={`${styleRef.contentCard}`}>
                                      <i className="bi bi-person-lines-fill me-2"
                                        style={{ color: '#7149bc', fontSize: '20px' }}>
                                      </i> 11
                                    </div>
                                  </div>
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-4 mb-3">
                                  <div className={`${styleRef.labelsCard}`}>
                                    Importe
                                    <div className={`${styleRef.contentCard}`}>
                                      <i className="bi bi-currency-dollar"
                                        style={{ color: 'green', fontSize: '20px' }}>
                                      </i> 15,971.00
                                    </div>
                                  </div>
                                </div>
                                <div className="col-12 mt-3 text-end pe-4">
                                  <button className={`${styleRef.btnAp}`}>Confirmar</button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
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
                        <td className={styleRef.headersT}>
                          #
                        </td>
                        <td className={styleRef.headersT}>
                          Referencia
                        </td>
                        <td className={styleRef.headersT}>
                          Fecha
                        </td>
                        <td className={styleRef.headersT}>
                          Usuario
                        </td>
                        <td className={styleRef.headersT}>
                          Paquete
                        </td>
                        <td className={styleRef.headersT}>
                          Precio Paquete
                        </td>
                        <td className={styleRef.headersT}>
                          Usuarios
                        </td>
                        <td className={styleRef.headersT}>
                          Importe
                        </td>
                        <td className={styleRef.headersT}>

                        </td>
                      </tr>
                      <tr className={styleRef.rowT}>
                        <td className={styleRef.contentT}>
                          1
                        </td>
                        <td className={styleRef.contentT}>
                          654781879512034070
                        </td>
                        <td className={styleRef.contentT}>
                          09-03-2022
                        </td>
                        <td className={styleRef.contentT}>
                          Juanito Espinito Torres
                        </td>
                        <td className={styleRef.contentT}>
                          Intermedio
                        </td>
                        <td className={styleRef.contentT}>
                          $ 2,599.00
                        </td>
                        <td className={styleRef.contentT}>
                          11
                        </td>
                        <td className={styleRef.contentT}>
                          $ 28,589.00
                        </td>
                        <td className={styleRef.contentT}>
                          <button className={`${styleRef.btnT1} px-2 mx-1`}><i className="bi bi-eye"></i></button>
                          <button className={`${styleRef.btnT2} px-2 mx-1`}><i className="bi bi-trash"></i></button>
                        </td>
                      </tr>
                      <tr className={styleRef.rowT}>
                        <td className={styleRef.contentT}>
                          1
                        </td>
                        <td className={styleRef.contentT}>
                          654781879512034070
                        </td>
                        <td className={styleRef.contentT}>
                          09-03-2022
                        </td>
                        <td className={styleRef.contentT}>
                          Juanito Espinito Torres
                        </td>
                        <td className={styleRef.contentT}>
                          Intermedio
                        </td>
                        <td className={styleRef.contentT}>
                          $ 2,599.00
                        </td>
                        <td className={styleRef.contentT}>
                          11
                        </td>
                        <td className={styleRef.contentT}>
                          $ 28,589.00
                        </td>
                        <td className={styleRef.contentT}>
                          <button className={`${styleRef.btnT1} px-2 mx-1`}><i className="bi bi-eye"></i></button>
                          <button className={`${styleRef.btnT2} px-2 mx-1`}><i className="bi bi-trash"></i></button>
                        </td>
                      </tr>
                      <tr className={styleRef.rowT}>
                        <td className={styleRef.contentT}>
                          1
                        </td>
                        <td className={styleRef.contentT}>
                          654781879512034070
                        </td>
                        <td className={styleRef.contentT}>
                          09-03-2022
                        </td>
                        <td className={styleRef.contentT}>
                          Juanito Espinito Torres
                        </td>
                        <td className={styleRef.contentT}>
                          Intermedio
                        </td>
                        <td className={styleRef.contentT}>
                          $ 2,599.00
                        </td>
                        <td className={styleRef.contentT}>
                          11
                        </td>
                        <td className={styleRef.contentT}>
                          $ 28,589.00
                        </td>
                        <td className={styleRef.contentT}>
                          <button className={`${styleRef.btnT1} px-2 mx-1`}><i className="bi bi-eye"></i></button>
                          <button className={`${styleRef.btnT2} px-2 mx-1`}><i className="bi bi-trash"></i></button>
                        </td>
                      </tr>
                      <tr className={styleRef.rowT}>
                        <td className={styleRef.contentT}>
                          1
                        </td>
                        <td className={styleRef.contentT}>
                          654781879512034070
                        </td>
                        <td className={styleRef.contentT}>
                          09-03-2022
                        </td>
                        <td className={styleRef.contentT}>
                          Juanito Espinito Torres
                        </td>
                        <td className={styleRef.contentT}>
                          Intermedio
                        </td>
                        <td className={styleRef.contentT}>
                          $ 2,599.00
                        </td>
                        <td className={styleRef.contentT}>
                          11
                        </td>
                        <td className={styleRef.contentT}>
                          $ 28,589.00
                        </td>
                        <td className={styleRef.contentT}>
                          <button className={`${styleRef.btnT1} px-2 mx-1`}><i className="bi bi-eye"></i></button>
                          <button className={`${styleRef.btnT2} px-2 mx-1`}><i className="bi bi-trash"></i></button>
                        </td>
                      </tr>
                      <tr className={styleRef.rowT}>
                        <td className={styleRef.contentT}>
                          1
                        </td>
                        <td className={styleRef.contentT}>
                          654781879512034070
                        </td>
                        <td className={styleRef.contentT}>
                          09-03-2022
                        </td>
                        <td className={styleRef.contentT}>
                          Juanito Espinito Torres
                        </td>
                        <td className={styleRef.contentT}>
                          Intermedio
                        </td>
                        <td className={styleRef.contentT}>
                          $ 2,599.00
                        </td>
                        <td className={styleRef.contentT}>
                          11
                        </td>
                        <td className={styleRef.contentT}>
                          $ 28,589.00
                        </td>
                        <td className={styleRef.contentT}>
                          <button className={`${styleRef.btnT1} px-2 mx-1`}><i className="bi bi-eye"></i></button>
                          <button className={`${styleRef.btnT2} px-2 mx-1`}><i className="bi bi-trash"></i></button>
                        </td>
                      </tr>
                      <tr className={styleRef.rowT}>
                        <td className={styleRef.contentT}>
                          1
                        </td>
                        <td className={styleRef.contentT}>
                          654781879512034070
                        </td>
                        <td className={styleRef.contentT}>
                          09-03-2022
                        </td>
                        <td className={styleRef.contentT}>
                          Juanito Espinito Torres
                        </td>
                        <td className={styleRef.contentT}>
                          Intermedio
                        </td>
                        <td className={styleRef.contentT}>
                          $ 2,599.00
                        </td>
                        <td className={styleRef.contentT}>
                          11
                        </td>
                        <td className={styleRef.contentT}>
                          $ 28,589.00
                        </td>
                        <td className={styleRef.contentT}>
                          <button className={`${styleRef.btnT1} px-2 mx-1`}><i className="bi bi-eye"></i></button>
                          <button className={`${styleRef.btnT2} px-2 mx-1`}><i className="bi bi-trash"></i></button>
                        </td>
                      </tr>
                      <tr className={styleRef.rowT}>
                        <td className={styleRef.contentT}>
                          1
                        </td>
                        <td className={styleRef.contentT}>
                          654781879512034070
                        </td>
                        <td className={styleRef.contentT}>
                          09-03-2022
                        </td>
                        <td className={styleRef.contentT}>
                          Juanito Espinito Torres
                        </td>
                        <td className={styleRef.contentT}>
                          Intermedio
                        </td>
                        <td className={styleRef.contentT}>
                          $ 2,599.00
                        </td>
                        <td className={styleRef.contentT}>
                          11
                        </td>
                        <td className={styleRef.contentT}>
                          $ 28,589.00
                        </td>
                        <td className={styleRef.contentT}>
                          <button className={`${styleRef.btnT1} px-2 mx-1`}><i className="bi bi-eye"></i></button>
                          <button className={`${styleRef.btnT2} px-2 mx-1`}><i className="bi bi-trash"></i></button>
                        </td>
                      </tr>
                      <tr className={styleRef.rowT}>
                        <td className={styleRef.contentT}>
                          1
                        </td>
                        <td className={styleRef.contentT}>
                          654781879512034070
                        </td>
                        <td className={styleRef.contentT}>
                          09-03-2022
                        </td>
                        <td className={styleRef.contentT}>
                          Juanito Espinito Torres
                        </td>
                        <td className={styleRef.contentT}>
                          Intermedio
                        </td>
                        <td className={styleRef.contentT}>
                          $ 2,599.00
                        </td>
                        <td className={styleRef.contentT}>
                          11
                        </td>
                        <td className={styleRef.contentT}>
                          $ 28,589.00
                        </td>
                        <td className={styleRef.contentT}>
                          <button className={`${styleRef.btnT1} px-2 mx-1`}><i className="bi bi-eye"></i></button>
                          <button className={`${styleRef.btnT2} px-2 mx-1`}><i className="bi bi-trash"></i></button>
                        </td>
                      </tr>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <br /><br />
        </section>
      </DashboardLayout>
    </>
  );
};

export default Referencias;
