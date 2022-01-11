import { useContext } from "react";
import { Accordion } from "react-bootstrap";
import { AuthContext } from "../../../../context/auth/AuthContext";
import { InmueblesUsuario } from "../../../../interfaces/CrearInmuebleInterface";
import styles from "./Inmueble.module.css";

interface Props {
  inmuebles: {
    inmueble: InmueblesUsuario;
    ok: boolean;
  };
}

const Detalles = ({ inmuebles }: Props) => {
  const { auth } = useContext(AuthContext);

  return (
    <section>
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-md-12 col-lg-12 col-xl-9">
            <div className="row d-flex justify-content-between">
              <div className="col-12">
                <div className={`${styles.inmuebleTitle} mb-3`}>
                  {inmuebles.inmueble.titulo}
                </div>
              </div>
              <div className="col-sm-12 col-md-5 col-lg-5 text-start">
                <div className={styles.inmueblePrecio}>
                  {new Intl.NumberFormat("es-MX", {
                    style: "currency",
                    currency: "MXN",
                  }).format(inmuebles.inmueble.precio)}
                </div>
              </div>
              <div className="col-sm-12 col-md-2 col-lg-2 text-sm-start text-md-start text-lg-center text-start">
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
                          <div
                            className={`${styles.inmuebleSubcontent} mb-1`}
                            style={{ fontSize: "16px" }}
                          >
                            {inmuebles.inmueble._id}
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
                            {inmuebles.inmueble.m2Construidos
                              ? inmuebles.inmueble.m2Construidos
                              : "S/N"}
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
                            {inmuebles.inmueble.m2Terreno
                              ? inmuebles.inmueble.m2Terreno
                              : "S/N"}
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
                            {inmuebles.inmueble.habitaciones
                              ? inmuebles.inmueble.habitaciones
                              : "S/N"}
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
                            {inmuebles.inmueble.baños
                              ? inmuebles.inmueble.baños
                              : "S/N"}
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
                            {inmuebles.inmueble.medioBaños
                              ? inmuebles.inmueble.medioBaños
                              : "S/N"}
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
                            {inmuebles.inmueble.parking
                              ? inmuebles.inmueble.parking
                              : "S/N"}
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
                            {inmuebles.inmueble.pisos
                              ? inmuebles.inmueble.pisos
                              : "S/N"}
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
                            {inmuebles.inmueble.antiguedad
                              ? inmuebles.inmueble.antiguedad
                              : "S/N"}
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
                                  {inmuebles.inmueble.agua ? "Sí" : "No"}
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
                                  {inmuebles.inmueble.luz ? "Sí" : "No"}
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
                                  {inmuebles.inmueble.gas ? "Sí" : "No"}
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
                                  {inmuebles.inmueble.internet ? "Sí" : "No"}
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
                                  {inmuebles.inmueble.seguridadPrivada
                                    ? "Sí"
                                    : "No"}
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
                                  {inmuebles.inmueble.escuelas ? "Sí" : "No"}
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
                                  {inmuebles.inmueble.mantenimiento
                                    ? "Sí"
                                    : "No"}
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
                                  {inmuebles.inmueble.piscinas ? "Sí" : "No"}
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
                                  {inmuebles.inmueble.discapacitados
                                    ? "Sí"
                                    : "No"}
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
                      {/* <div
                        className={`${styles.socialMiniCard} mb-2 pointer d-none d-xxl-block`}
                      >
                        <img
                          src="/images/icons/deatails-icons/ubicacion.png"
                          alt=""
                        ></img>
                      </div> */}
                      <>
                        {inmuebles.inmueble.usuario.telefonoPersonal ? (
                          <div
                            className={`${styles.socialMiniCard} mb-2 pointer d-none d-xxl-block`}
                          >
                            <a
                              href={`https://api.whatsapp.com/send?phone=${inmuebles.inmueble.usuario.telefonoPersonal}&text=%C2%A1Hola!%20acabo%20de%20ver%20una%20propiedad%20tuya.%20Quisiera%20m%C3%A1s%20informaci%C3%B3n.`}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <img
                                src="/images/icons/deatails-icons/whats.png"
                                alt=""
                              />
                            </a>
                          </div>
                        ) : null}
                      </>

                      <>
                        {inmuebles.inmueble.usuario.facebookpage ? (
                          <div
                            className={`${styles.socialMiniCard} mb-2 pointer d-none d-xxl-block`}
                          >
                            <a
                              href={`https://www.${inmuebles.inmueble.usuario.facebookpage}`}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <img
                                src="/images/icons/deatails-icons/face.png"
                                alt=""
                              />
                            </a>
                          </div>
                        ) : null}
                      </>
                      <>
                        {inmuebles.inmueble.usuario.instagram ? (
                          <div
                            className={`${styles.socialMiniCard} mb-2 pointer d-none d-xxl-block`}
                          >
                            <a
                              href={`https://www.${inmuebles.inmueble.usuario.instagram}`}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <img
                                src="/images/icons/deatails-icons/insta.png"
                                alt=""
                              />
                            </a>
                          </div>
                        ) : null}
                      </>
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
                          {inmuebles.inmueble.usuario.nombre}{" "}
                          {inmuebles.inmueble.usuario.apellido}
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
                                  Camas
                                </div>
                                <div
                                  className={`${styles.inmuebleSubcontent} mb-1`}
                                >
                                  {inmuebles.inmueble.camas ? "Sí" : "No"}
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
                                  Closet
                                </div>
                                <div
                                  className={`${styles.inmuebleSubcontent} mb-1`}
                                >
                                  {inmuebles.inmueble.closet ? "Sí" : "No"}
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
                                  Sala
                                </div>
                                <div
                                  className={`${styles.inmuebleSubcontent} mb-1`}
                                >
                                  {inmuebles.inmueble.sala ? "Sí" : "No"}
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
                                  Comedor
                                </div>
                                <div
                                  className={`${styles.inmuebleSubcontent} mb-1`}
                                >
                                  {inmuebles.inmueble.comedor ? "Sí" : "No"}
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
                                  Cocina
                                </div>
                                <div
                                  className={`${styles.inmuebleSubcontent} mb-1`}
                                >
                                  {inmuebles.inmueble.cocina ? "Sí" : "No"}
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
                                <div className={styles.inmuebleContent}>AA</div>
                                <div
                                  className={`${styles.inmuebleSubcontent} mb-1`}
                                >
                                  {inmuebles.inmueble.AA ? "Sí" : "No"}
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
                                  Refrigerador
                                </div>
                                <div
                                  className={`${styles.inmuebleSubcontent} mb-1`}
                                >
                                  {inmuebles.inmueble.refrigerador
                                    ? "Sí"
                                    : "No"}
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
                                  Estufa
                                </div>
                                <div
                                  className={`${styles.inmuebleSubcontent} mb-1`}
                                >
                                  {inmuebles.inmueble.estufa ? "Sí" : "No"}
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
                                  Microondas
                                </div>
                                <div
                                  className={`${styles.inmuebleSubcontent} mb-1`}
                                >
                                  {inmuebles.inmueble.microondas ? "Sí" : "No"}
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
                                  Mini Horno
                                </div>
                                <div
                                  className={`${styles.inmuebleSubcontent} mb-1`}
                                >
                                  {inmuebles.inmueble.minihorno ? "Sí" : "No"}
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
                                  Horno
                                </div>
                                <div
                                  className={`${styles.inmuebleSubcontent} mb-1`}
                                >
                                  {inmuebles.inmueble.horno ? "Sí" : "No"}
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
                                  Lavadora
                                </div>
                                <div
                                  className={`${styles.inmuebleSubcontent} mb-1`}
                                >
                                  {inmuebles.inmueble.lavadora ? "Sí" : "No"}
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
                                  Secadora
                                </div>
                                <div
                                  className={`${styles.inmuebleSubcontent} mb-1`}
                                >
                                  {inmuebles.inmueble.secadora ? "Sí" : "No"}
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
                                  {inmuebles.inmueble.otros
                                    ? inmuebles.inmueble.otros
                                    : 'No hay descripción para "Otros"'}
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
