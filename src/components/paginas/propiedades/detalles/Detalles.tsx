import { useContext } from "react";
import { Accordion } from "react-bootstrap";
import { AuthContext } from "../../../../context/auth/AuthContext";
import styles from "./Inmueble.module.css";

const Detalles = () => {
  const { auth } = useContext(AuthContext);

  return (
    <section>
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-md-12 col-lg-12 col-xl-9">
            <div className="row d-flex justify-content-between">
              <div className="col-12">
                <div className={`${styles.inmuebleTitle} mb-3`}>
                  Apple Park en Palo Alto, California
                </div>
              </div>
              <div className="col-sm-12 col-md-4 col-lg-4 text-start">
                <div className={styles.inmueblePrecio}>$987,350.00</div>
              </div>
              <div className="col-sm-12 col-md-3 col-lg-3 text-sm-start text-md-start text-lg-center text-start">
                <div className="mt-3">
                  <span className={styles.inmuebleTipo}>Venta</span>
                </div>
              </div>
              <div className="col-sm-12 col-md-4 col-lg-4 text-sm-start text-md-start text-lg-end text-start">
                <div className={`${styles.inmuebleTiempo} mt-3`}>
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
                          <div className={styles.inmuebleContent}>Pisos</div>
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

            {/*-------- detalles adicionales ------------*/}
            <Accordion defaultActiveKey="1" flush>
              <Accordion.Item eventKey="0">
                <div className="row">
                  <div className="col-sm-7 col-md-6 col-lg-4 col-xl-5 col-xxl-4 col-7">
                    <div className={styles.inmuebleSubtitle}>
                      Detalles adicionales
                    </div>
                  </div>
                  <div className="col-sm-4 col-md-5 col-lg-7 col-xl-6 col-xxl-7 col-3">
                    <hr className="mt-4" />
                  </div>
                  <div className="col-sm-1 col-md-1 col-lg-1 col-xl-1 col-xxl-1 col-1">
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
            {/*-------- detalles adicionales ------------*/}
          </div>

          {/* tarjeta de contacto */}
          {auth.uid ? (
            <div className="col-sm-12 col-md-2 col-lg-2 col-xl-3 text-center d-none d-xl-block">
              <table>
                <tbody>
                  <tr>
                    <td>
                      <div
                        className={`${styles.socialMiniCard} mb-2 pointer d-none d-xxl-block`}
                      >
                        <img
                          src="/images/icons/deatails-icons/ubicacion.png"
                          alt=""
                        ></img>
                      </div>
                      <div
                        className={`${styles.socialMiniCard} mb-2 pointer d-none d-xxl-block`}
                      >
                        <img
                          src="/images/icons/deatails-icons/whats.png"
                          alt=""
                        ></img>
                      </div>
                      <div
                        className={`${styles.socialMiniCard} mb-2 pointer d-none d-xxl-block`}
                      >
                        <img
                          src="/images/icons/deatails-icons/face.png"
                          alt=""
                        ></img>
                      </div>
                      <div
                        className={`${styles.socialMiniCard} mb-2 pointer d-none d-xxl-block`}
                      >
                        <img
                          src="/images/icons/deatails-icons/insta.png"
                          alt=""
                        ></img>
                      </div>
                    </td>
                    <td>
                      <div className={styles.perfilCard}>
                        <div className={styles.perfilCardImg}>
                          <img
                            src="/images/icons/deatails-icons/default-perfil.png"
                            alt="..."
                          />
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
          ) : null}

          {/* tarjeta de contacto */}

          {/*-------- equipamiento ------------*/}
          <div className="col-12">
            <Accordion defaultActiveKey="1" flush>
              <Accordion.Item eventKey="0">
                <div className="row">
                  <div className="col-sm-5 col-md-4 col-lg-3 col-xl-3 col-xxl-2 col-7">
                    <div className={styles.inmuebleSubtitle}>Equipamiento</div>
                  </div>
                  <div className="col-sm-6 col-md-7 col-lg-8 col-xl-8 col-xxl-9 col-3">
                    <hr className="mt-4" />
                  </div>
                  <div className="col-sm-1 col-md-1 col-lg-1 col-xl-1 col-xxl-1 col-1">
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
                    <div className="col-sm-12 col-md-6 col-lg-9">
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
                                  Lorem ipsum dolor sit, amet consectetur
                                  adipisicing elit. Vero, reprehenderit. Lorem,
                                  ipsum.
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
          {/*-------- equipamiento ------------*/}
        </div>
      </div>
    </section>
  );
};

export default Detalles;
