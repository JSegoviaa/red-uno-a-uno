import { Accordion, AccordionButton, Container, Row } from "react-bootstrap";
import Modaltitle from "../../../ui/modaltitle/Modaltitle";
import styles from "./Inmueble.module.css";

const Detalles = () => {
  return (
    <section>
      <div className="container">
        <div className="row">
          <div className="col-9">
            <div className="row d-flex justify-content-between">
              <div className="col-12">
                <div className={styles.inmuebleTitle}>
                  Apple Park en Palo Alto, California
                </div>
              </div>
              <div className="col-4">
                <div className={styles.inmueblePrecio}>$987,350.00</div>
              </div>
              <div className="col-4">
                <div className="s">
                  <span className={styles.inmuebleTipo}>Venta</span>
                </div>
              </div>
              <div className="col-4">
                <div className={styles.inmuebleTiempo}>
                  Publicado hace 9 días
                </div>
              </div>
            </div>
            <hr />
            <div className="row">
              <div className="col-12">
                <div className={styles.inmuebleSubtitle}>
                  Detalles del inmueble
                </div>
              </div>
              <div className="col-sm-12 col-md-6 col-lg-6 col-xl-4">
                <div className="inmueble-contenido">
                  <table>
                    <tbody>
                      <tr>
                        <td valign="top">
                          <img
                            className="me-3"
                            src="/images/icons/deatails-icons/1.png"
                            alt="..."
                          />
                        </td>
                        <td>
                          <div className={styles.inmuebleContent}>
                            ID del inmueble
                          </div>
                          <div className={`${styles.inmuebleSubcontent} mb-1`}>
                            ED-5451
                            <br />
                            <br />
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <div className="col-sm-12 col-md-6 col-lg-6 col-xl-4">
                <div className="inmueble-contenido">
                  <table>
                    <tbody>
                      <tr>
                        <td valign="top">
                          <img
                            className="me-3"
                            src="/images/icons/deatails-icons/2.png"
                            alt="..."
                          />
                        </td>
                        <td>
                          <div className={styles.inmuebleContent}>
                            M² de construcción
                          </div>
                          <div className={`${styles.inmuebleSubcontent} mb-1`}>
                            ED-5451
                            <br />
                            <br />
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <div className="col-sm-12 col-md-6 col-lg-6 col-xl-4">
                <div className="inmueble-contenido">
                  <table>
                    <tbody>
                      <tr>
                        <td valign="top">
                          <img
                            className="me-3"
                            src="/images/icons/deatails-icons/2.png"
                            alt="..."
                          />
                        </td>
                        <td>
                          <div className={styles.inmuebleContent}>
                            M² de terreno
                          </div>
                          <div className={`${styles.inmuebleSubcontent} mb-1`}>
                            ED-5451
                            <br />
                            <br />
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <div className="col-sm-12 col-md-6 col-lg-6 col-xl-4">
                <div className="inmueble-contenido">
                  <table>
                    <tbody>
                      <tr>
                        <td valign="top">
                          <img
                            className="me-3"
                            src="/images/icons/deatails-icons/3.png"
                            alt="..."
                          />
                        </td>
                        <td>
                          <div className={styles.inmuebleContent}>
                            Habitaciones
                          </div>
                          <div className={`${styles.inmuebleSubcontent} mb-1`}>
                            ED-5451
                            <br />
                            <br />
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <div className="col-sm-12 col-md-6 col-lg-6 col-xl-4">
                <div className="inmueble-contenido">
                  <table>
                    <tbody>
                      <tr>
                        <td valign="top">
                          <img
                            className="me-3"
                            src="/images/icons/deatails-icons/4.png"
                            alt="..."
                          />
                        </td>
                        <td>
                          <div className={styles.inmuebleContent}>
                            Baños completos
                          </div>
                          <div className={`${styles.inmuebleSubcontent} mb-1`}>
                            ED-5451
                            <br />
                            <br />
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <div className="col-sm-12 col-md-6 col-lg-6 col-xl-4">
                <div className="inmueble-contenido">
                  <table>
                    <tbody>
                      <tr>
                        <td valign="top">
                          <img
                            className="me-3"
                            src="/images/icons/deatails-icons/5.png"
                            alt="..."
                          />
                        </td>
                        <td>
                          <div className={styles.inmuebleContent}>
                            Medios baños
                          </div>
                          <div className={`${styles.inmuebleSubcontent} mb-1`}>
                            ED-5451
                            <br />
                            <br />
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <div className="col-sm-12 col-md-6 col-lg-6 col-xl-4">
                <div className="inmueble-contenido">
                  <table>
                    <tbody>
                      <tr>
                        <td valign="top">
                          <img
                            className="me-3"
                            src="/images/icons/deatails-icons/6.png"
                            alt="..."
                          />
                        </td>
                        <td>
                          <div className={styles.inmuebleContent}>
                            Estacionamientos
                          </div>
                          <div className={`${styles.inmuebleSubcontent} mb-1`}>
                            ED-5451
                            <br />
                            <br />
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <div className="col-sm-12 col-md-6 col-lg-6 col-xl-4">
                <div className="inmueble-contenido">
                  <table>
                    <tbody>
                      <tr>
                        <td valign="top">
                          <img
                            className="me-3"
                            src="/images/icons/deatails-icons/7.png"
                            alt="..."
                          />
                        </td>
                        <td>
                          <div className={styles.inmuebleContent}>
                            Pisos
                          </div>
                          <div className={`${styles.inmuebleSubcontent} mb-1`}>
                            ED-5451
                            <br />
                            <br />
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <div className="col-sm-12 col-md-6 col-lg-6 col-xl-4">
                <div className="inmueble-contenido">
                  <table>
                    <tbody>
                      <tr>
                        <td valign="top">
                          <img
                            className="me-3"
                            src="/images/icons/deatails-icons/8.png"
                            alt="..."
                          />
                        </td>
                        <td>
                          <div className={styles.inmuebleContent}>
                            Antigüedad
                          </div>
                          <div className={`${styles.inmuebleSubcontent} mb-1`}>
                            ED-5451
                            <br />
                            <br />
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            <Accordion defaultActiveKey="1" flush>
              <Accordion.Item eventKey="0">
                <div className="row">
                  <div className="col-4">
                    <div className={styles.inmuebleSubtitle}>
                      Detalles adicionales
                    </div>
                  </div>
                  <div className="col-7">
                    <hr className="mt-4" />
                  </div>
                  <div className="col-1">
                    <Accordion.Button className={styles.btnAccordion} />
                  </div>
                </div>
                <Accordion.Body className={styles.acordionContent}>
                  <div className="row">
                    <div className="col-sm-12 col-md-6 col-lg-6 col-xl-4">
                      <div className="inmueble-contenido">
                        <table>
                          <tbody>
                            <tr>
                              <td valign="top">
                                <img
                                  className="me-3"
                                  src="/images/icons/deatails-icons/9.png"
                                  alt="..."
                                />
                              </td>
                              <td>
                                <div className={styles.inmuebleContent}>
                                  Cuenta con agua
                                </div>
                                <div
                                  className={`${styles.inmuebleSubcontent} mb-1`}
                                >
                                  ED-5451
                                  <br />
                                  <br />
                                </div>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                    <div className="col-sm-12 col-md-6 col-lg-6 col-xl-4">
                      <div className="inmueble-contenido">
                        <table>
                          <tbody>
                            <tr>
                              <td valign="top">
                                <img
                                  className="me-3"
                                  src="/images/icons/deatails-icons/10.png"
                                  alt="..."
                                />
                              </td>
                              <td>
                                <div className={styles.inmuebleContent}>
                                  Cuenta con luz
                                </div>
                                <div
                                  className={`${styles.inmuebleSubcontent} mb-1`}
                                >
                                  ED-5451
                                  <br />
                                  <br />
                                </div>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                    <div className="col-sm-12 col-md-6 col-lg-6 col-xl-4">
                      <div className="inmueble-contenido">
                        <table>
                          <tbody>
                            <tr>
                              <td valign="top">
                                <img
                                  className="me-3"
                                  src="/images/icons/deatails-icons/11.png"
                                  alt="..."
                                />
                              </td>
                              <td>
                                <div className={styles.inmuebleContent}>
                                  Cuenta con gas
                                </div>
                                <div
                                  className={`${styles.inmuebleSubcontent} mb-1`}
                                >
                                  ED-5451
                                  <br />
                                  <br />
                                </div>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                    <div className="col-sm-12 col-md-6 col-lg-6 col-xl-4">
                      <div className="inmueble-contenido">
                        <table>
                          <tbody>
                            <tr>
                              <td valign="top">
                                <img
                                  className="me-3"
                                  src="/images/icons/deatails-icons/12.png"
                                  alt="..."
                                />
                              </td>
                              <td>
                                <div className={styles.inmuebleContent}>
                                  Internet
                                </div>
                                <div
                                  className={`${styles.inmuebleSubcontent} mb-1`}
                                >
                                  ED-5451
                                  <br />
                                  <br />
                                </div>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                    <div className="col-sm-12 col-md-6 col-lg-6 col-xl-4">
                      <div className="inmueble-contenido">
                        <table>
                          <tbody>
                            <tr>
                              <td valign="top">
                                <img
                                  className="me-3"
                                  src="/images/icons/deatails-icons/13.png"
                                  alt="..."
                                />
                              </td>
                              <td>
                                <div className={styles.inmuebleContent}>
                                  Seguridad privada
                                </div>
                                <div
                                  className={`${styles.inmuebleSubcontent} mb-1`}
                                >
                                  ED-5451
                                  <br />
                                  <br />
                                </div>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                    <div className="col-sm-12 col-md-6 col-lg-6 col-xl-4">
                      <div className="inmueble-contenido">
                        <table>
                          <tbody>
                            <tr>
                              <td valign="top">
                                <img
                                  className="me-3"
                                  src="/images/icons/deatails-icons/14.png"
                                  alt="..."
                                />
                              </td>
                              <td>
                                <div className={styles.inmuebleContent}>
                                  Escuelas cercanas
                                </div>
                                <div
                                  className={`${styles.inmuebleSubcontent} mb-1`}
                                >
                                  ED-5451
                                  <br />
                                  <br />
                                </div>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                    <div className="col-sm-12 col-md-6 col-lg-6 col-xl-4">
                      <div className="inmueble-contenido">
                        <table>
                          <tbody>
                            <tr>
                              <td valign="top">
                                <img
                                  className="me-3"
                                  src="/images/icons/deatails-icons/15.png"
                                  alt="..."
                                />
                              </td>
                              <td>
                                <div className={styles.inmuebleContent}>
                                  Mantenimiento
                                </div>
                                <div
                                  className={`${styles.inmuebleSubcontent} mb-1`}
                                >
                                  ED-5451
                                  <br />
                                  <br />
                                </div>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                    <div className="col-sm-12 col-md-6 col-lg-6 col-xl-4">
                      <div className="inmueble-contenido">
                        <table>
                          <tbody>
                            <tr>
                              <td valign="top">
                                <img
                                  className="me-3"
                                  src="/images/icons/deatails-icons/16.png"
                                  alt="..."
                                />
                              </td>
                              <td>
                                <div className={styles.inmuebleContent}>
                                  Alberca
                                </div>
                                <div
                                  className={`${styles.inmuebleSubcontent} mb-1`}
                                >
                                  ED-5451
                                  <br />
                                  <br />
                                </div>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                    <div className="col-sm-12 col-md-6 col-lg-6 col-xl-4">
                      <div className="inmueble-contenido">
                        <table>
                          <tbody>
                            <tr>
                              <td valign="top">
                                <img
                                  className="me-3"
                                  src="/images/icons/deatails-icons/17.png"
                                  alt="..."
                                />
                              </td>
                              <td>
                                <div className={styles.inmuebleContent}>
                                  Acceso a discapacitados
                                </div>
                                <div
                                  className={`${styles.inmuebleSubcontent} mb-1`}
                                >
                                  ED-5451
                                  <br />
                                  <br />
                                </div>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </div>


          {/* tarjeta de contacto */}
          <div className="col-3 text-center">
            <table>
              <tbody>
                <tr>
                  <td>
                    <div className={`${styles.socialMiniCard} mb-2`}><img src="/images/icons/deatails-icons/ubicacion.png" alt=""></img></div>
                    <div className={`${styles.socialMiniCard} mb-2`}><img src="/images/icons/deatails-icons/whats.png" alt=""></img></div>
                    <div className={`${styles.socialMiniCard} mb-2`}><img src="/images/icons/deatails-icons/face.png" alt=""></img></div>
                    <div className={`${styles.socialMiniCard} mb-2`}><img src="/images/icons/deatails-icons/insta.png" alt=""></img></div>
                  </td>
                  <td>
                    <div className={styles.perfilCard}>
                      <div className={styles.perfilCardImg}>
                        <img src="/images/icons/deatails-icons/default-perfil.png" alt="..." />
                      </div>
                      {/* <Modaltitle titulo="Juan Pérez Hernández"/> */}
                      <div className={styles.perfilCardNombre}>
                        Juan Pérez Hernández
                      </div>
                      <div className={styles.perfilCardLine}></div>
                      <div className={styles.perfilCardCiudad}>
                        Cancún, Quintana Roo.
                      </div>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          {/* tarjeta de contacto */}


          <div className="col-12">
          <Accordion defaultActiveKey="1" flush>
              <Accordion.Item eventKey="0">
                <div className="row">
                  <div className="col-2">
                    <div className={styles.inmuebleSubtitle}>
                      Equipamiento
                    </div>
                  </div>
                  <div className="col-9">
                    <hr className="mt-4" />
                  </div>
                  <div className="col-1">
                    <Accordion.Button className={styles.btnAccordion} />
                  </div>
                </div>
                <Accordion.Body className={styles.acordionContent}>
                  <div className="row">
                    <div className="col-sm-12 col-md-6 col-lg-4 col-xl-3">
                      <div className="inmueble-contenido">
                        <table>
                          <tbody>
                            <tr>
                              <td valign="top">
                                <img
                                  className="me-3"
                                  src="/images/icons/deatails-icons/9.png"
                                  alt="..."
                                />
                              </td>
                              <td>
                                <div className={styles.inmuebleContent}>
                                  Cuenta con agua
                                </div>
                                <div
                                  className={`${styles.inmuebleSubcontent} mb-1`}
                                >
                                  ED-5451
                                  <br />
                                  <br />
                                </div>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                    <div className="col-sm-12 col-md-6 col-lg-4 col-xl-3">
                      <div className="inmueble-contenido">
                        <table>
                          <tbody>
                            <tr>
                              <td valign="top">
                                <img
                                  className="me-3"
                                  src="/images/icons/deatails-icons/10.png"
                                  alt="..."
                                />
                              </td>
                              <td>
                                <div className={styles.inmuebleContent}>
                                  Cuenta con luz
                                </div>
                                <div
                                  className={`${styles.inmuebleSubcontent} mb-1`}
                                >
                                  ED-5451
                                  <br />
                                  <br />
                                </div>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                    <div className="col-sm-12 col-md-6 col-lg-4 col-xl-3">
                      <div className="inmueble-contenido">
                        <table>
                          <tbody>
                            <tr>
                              <td valign="top">
                                <img
                                  className="me-3"
                                  src="/images/icons/deatails-icons/11.png"
                                  alt="..."
                                />
                              </td>
                              <td>
                                <div className={styles.inmuebleContent}>
                                  Cuenta con gas
                                </div>
                                <div
                                  className={`${styles.inmuebleSubcontent} mb-1`}
                                >
                                  ED-5451
                                  <br />
                                  <br />
                                </div>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                    <div className="col-sm-12 col-md-6 col-lg-4 col-xl-3">
                      <div className="inmueble-contenido">
                        <table>
                          <tbody>
                            <tr>
                              <td valign="top">
                                <img
                                  className="me-3"
                                  src="/images/icons/deatails-icons/12.png"
                                  alt="..."
                                />
                              </td>
                              <td>
                                <div className={styles.inmuebleContent}>
                                  Internet
                                </div>
                                <div
                                  className={`${styles.inmuebleSubcontent} mb-1`}
                                >
                                  ED-5451
                                  <br />
                                  <br />
                                </div>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                    <div className="col-sm-12 col-md-6 col-lg-4 col-xl-3">
                      <div className="inmueble-contenido">
                        <table>
                          <tbody>
                            <tr>
                              <td valign="top">
                                <img
                                  className="me-3"
                                  src="/images/icons/deatails-icons/13.png"
                                  alt="..."
                                />
                              </td>
                              <td>
                                <div className={styles.inmuebleContent}>
                                  Seguridad privada
                                </div>
                                <div
                                  className={`${styles.inmuebleSubcontent} mb-1`}
                                >
                                  ED-5451
                                  <br />
                                  <br />
                                </div>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                    <div className="col-sm-12 col-md-6 col-lg-4 col-xl-3">
                      <div className="inmueble-contenido">
                        <table>
                          <tbody>
                            <tr>
                              <td valign="top">
                                <img
                                  className="me-3"
                                  src="/images/icons/deatails-icons/14.png"
                                  alt="..."
                                />
                              </td>
                              <td>
                                <div className={styles.inmuebleContent}>
                                  Escuelas cercanas
                                </div>
                                <div
                                  className={`${styles.inmuebleSubcontent} mb-1`}
                                >
                                  ED-5451
                                  <br />
                                  <br />
                                </div>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                    <div className="col-sm-12 col-md-6 col-lg-4 col-xl-3">
                      <div className="inmueble-contenido">
                        <table>
                          <tbody>
                            <tr>
                              <td valign="top">
                                <img
                                  className="me-3"
                                  src="/images/icons/deatails-icons/15.png"
                                  alt="..."
                                />
                              </td>
                              <td>
                                <div className={styles.inmuebleContent}>
                                  Mantenimiento
                                </div>
                                <div
                                  className={`${styles.inmuebleSubcontent} mb-1`}
                                >
                                  ED-5451
                                  <br />
                                  <br />
                                </div>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                    <div className="col-sm-12 col-md-6 col-lg-4 col-xl-3">
                      <div className="inmueble-contenido">
                        <table>
                          <tbody>
                            <tr>
                              <td valign="top">
                                <img
                                  className="me-3"
                                  src="/images/icons/deatails-icons/16.png"
                                  alt="..."
                                />
                              </td>
                              <td>
                                <div className={styles.inmuebleContent}>
                                  Alberca
                                </div>
                                <div
                                  className={`${styles.inmuebleSubcontent} mb-1`}
                                >
                                  ED-5451
                                  <br />
                                  <br />
                                </div>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                    <div className="col-sm-12 col-md-6 col-lg-4 col-xl-3">
                      <div className="inmueble-contenido">
                        <table>
                          <tbody>
                            <tr>
                              <td valign="top">
                                <img
                                  className="me-3"
                                  src="/images/icons/deatails-icons/17.png"
                                  alt="..."
                                />
                              </td>
                              <td>
                                <div className={styles.inmuebleContent}>
                                  Acceso a discapacitados
                                </div>
                                <div
                                  className={`${styles.inmuebleSubcontent} mb-1`}
                                >
                                  ED-5451
                                  <br />
                                  <br />
                                </div>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                    <div className="col-sm-12 col-md-6 col-lg-4 col-xl-3">
                      <div className="inmueble-contenido">
                        <table>
                          <tbody>
                            <tr>
                              <td valign="top">
                                <img
                                  className="me-3"
                                  src="/images/icons/deatails-icons/17.png"
                                  alt="..."
                                />
                              </td>
                              <td>
                                <div className={styles.inmuebleContent}>
                                  Acceso a discapacitados
                                </div>
                                <div
                                  className={`${styles.inmuebleSubcontent} mb-1`}
                                >
                                  ED-5451
                                  <br />
                                  <br />
                                </div>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                    <div className="col-sm-12 col-md-6 col-lg-4 col-xl-3">
                      <div className="inmueble-contenido">
                        <table>
                          <tbody>
                            <tr>
                              <td valign="top">
                                <img
                                  className="me-3"
                                  src="/images/icons/deatails-icons/17.png"
                                  alt="..."
                                />
                              </td>
                              <td>
                                <div className={styles.inmuebleContent}>
                                  Acceso a discapacitados
                                </div>
                                <div
                                  className={`${styles.inmuebleSubcontent} mb-1`}
                                >
                                  ED-5451
                                  <br />
                                  <br />
                                </div>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                    <div className="col-sm-12 col-md-6 col-lg-4 col-xl-3">
                      <div className="inmueble-contenido">
                        <table>
                          <tbody>
                            <tr>
                              <td valign="top">
                                <img
                                  className="me-3"
                                  src="/images/icons/deatails-icons/17.png"
                                  alt="..."
                                />
                              </td>
                              <td>
                                <div className={styles.inmuebleContent}>
                                  Acceso a discapacitados
                                </div>
                                <div
                                  className={`${styles.inmuebleSubcontent} mb-1`}
                                >
                                  ED-5451
                                  <br />
                                  <br />
                                </div>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                    <div className="col-sm-12 col-md-6 col-lg-4 col-xl-3">
                      <div className="inmueble-contenido">
                        <table>
                          <tbody>
                            <tr>
                              <td valign="top">
                                <img
                                  className="me-3"
                                  src="/images/icons/deatails-icons/17.png"
                                  alt="..."
                                />
                              </td>
                              <td>
                                <div className={styles.inmuebleContent}>
                                  Acceso a discapacitados
                                </div>
                                <div
                                  className={`${styles.inmuebleSubcontent} mb-1`}
                                >
                                  ED-5451
                                  <br />
                                  <br />
                                </div>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                    <div className="col-sm-12 col-9">
                      <div className="inmueble-contenido">
                        <table>
                          <tbody>
                            <tr>
                              <td valign="top">
                                <img
                                  className="me-3"
                                  src="/images/icons/deatails-icons/17.png"
                                  alt="..."
                                />
                              </td>
                              <td>
                                <div className={styles.inmuebleContent}>
                                  Otros
                                </div>
                                <div
                                  className={`${styles.inmuebleSubcontent} mb-1`}
                                >
                                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero, reprehenderit. Lorem, ipsum.
                                  <br />
                                  <br />
                                </div>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Detalles;