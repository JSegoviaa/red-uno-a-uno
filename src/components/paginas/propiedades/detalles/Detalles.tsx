import { Accordion, Container, Row } from "react-bootstrap";
import styles from "./Inmueble.module.css";

const Detalles = () => {
  return (
    <Container>
      <Row>
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
              <div className={styles.inmuebleTiempo}>Publicado hace 9 días</div>
            </div>
          </div>
          <hr />

          <Row>
            <div className="col-12">
              <div className={styles.inmuebleSubtitle}>
                Detalles del inmueble
              </div>
            </div>
            <div className="col-4">
              <div>
                <table>
                  <tbody>
                    <tr>
                      <td valign="top">
                        <img
                          className="me-3"
                          src="./images/icons/details-icons/i-icon-1.png"
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
          </Row>

          <Row>
            <Accordion defaultActiveKey="0" flush>
              <Accordion.Item eventKey="0">
                <Accordion.Header>
                  <div className={styles.inmuebleSubtitle}>
                    Detalles adicionales
                  </div>
                </Accordion.Header>
                <Accordion.Body>
                  <Row>
                    <div className="col-4">
                      <div>
                        <table>
                          <tbody>
                            <tr>
                              <td valign="top">
                                <img
                                  className="me-3"
                                  src="./images/icons/details-icons/i-icon-1.png"
                                  alt="..."
                                />
                              </td>
                              <td>
                                <div className={styles.inmuebleContent}>
                                  ID del inmueble
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
                    <div className="col-4">
                      <div>
                        <table>
                          <tbody>
                            <tr>
                              <td valign="top">
                                <img
                                  className="me-3"
                                  src="./images/icons/details-icons/i-icon-1.png"
                                  alt="..."
                                />
                              </td>
                              <td>
                                <div className={styles.inmuebleContent}>
                                  ID del inmueble
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
                    <div className="col-4">
                      <div>
                        <table>
                          <tbody>
                            <tr>
                              <td valign="top">
                                <img
                                  className="me-3"
                                  src="./images/icons/details-icons/i-icon-1.png"
                                  alt="..."
                                />
                              </td>
                              <td>
                                <div className={styles.inmuebleContent}>
                                  ID del inmueble
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
                  </Row>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </Row>
        </div>

        <div className="col-3 text-center">
          <table>
            <tbody>
              <tr>
                <td>
                  <div className="fb">F</div>
                  <div className="fb">F</div>
                  <div className="fb">F</div>
                  <div className="fb">F</div>
                </td>
                <td>
                  <div className="perfil-card">
                    <div className="inmueble-perfil-img">
                      <img src="" alt="..." />
                    </div>
                    <div className="inmueble-perfil-nombre">
                      Juan Pérez Hernández
                    </div>
                    <div className="inmueble-perfil-line">--------------</div>
                    <div className="inmueble-perfil-ciudad">
                      Cancún, Quintana Roo.
                    </div>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </Row>
    </Container>
  );
};

export default Detalles;
