import { useContext, useEffect, useRef, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { Container, Nav, Navbar, Overlay } from "react-bootstrap";
import Button from "../button/Button";
import styles from "./Header.module.css";
import LoginModal from "../authmodal/LoginModal";
import RegisterModal from "../authmodal/AuthModal";
import { AuthContext } from "../../../context/auth/AuthContext";
import MisChats from "../../paginas/perfil/chats/MisChats";
import { ChatContext } from "../../../context/chat/ChatContext";
import { SocketContext } from "context/socket/SocketContext";
import { useSolicitudes } from "hooks/useSolicitudes";
import Loading from "../loading/Loading";

// interface Notificacion {
//   de: string;
//   para: string;
//   nombre: string;
//   apellido: string;
//   mensaje: string;
// }

const Header = () => {
  const { auth, logOut, abrirRegistro, abrirLogin } = useContext(AuthContext);
  const { chatState, iniciarChat } = useContext(ChatContext);
  const { socket } = useContext(SocketContext);
  const [mostrarMenu, setMostrarMenu] = useState(false);
  const target = useRef(null);
  const [notificaciones, setNotificaciones] = useState(false);
  const [aprobadoColor, setAprobadoColor] = useState(false);
  const [showCanvas, setShowCanvas] = useState(false);
  const router = useRouter();
  const { solicitudes, cargando, setSolicitudes, total } = useSolicitudes(
    auth.uid
  );

  // const [nuevaNotificacion, setNuevaNotificacion] = useState<Notificacion[]>(
  //   []
  // );
  // const uniqueValues = new Set();

  const cerrarSesion = () => {
    logOut();
    setMostrarMenu(false);
    setNotificaciones(false);
    chatState.chatActivo = null;
  };

  const handleCloseCanvas = () => setShowCanvas(false);
  const handleShowCanvas = () => setShowCanvas(true);
  const mostrarNotificaciones = () => setNotificaciones(!notificaciones);
  const goToProperty = (slug: string) => router.push(`propiedades/${slug}`);

  const goToSolicitudes = () => {
    router.push("/perfil/solicitudes");
    setNotificaciones(false);
  };

  const aprobarSolicitud = () => {
    setAprobadoColor(true);
  };

  useEffect(() => {
    socket?.on("obtener-solicitud", (solicitud) => {
      setSolicitudes([...solicitudes, solicitud]);
    });
  }, [socket]);

  // useEffect(() => {
  //   socket?.on("obtener-notificacion", (notificacion) => {
  //     console.log(notificacion, "sa");
  //     setNuevaNotificacion((noti) => [...noti, notificacion]);
  //   });
  // }, []);

  return (
    <Navbar className={styles.navStyle} bg="light" expand="lg">
      <Container>
        <div className="my-2">
          <Link href="/">
            <img
              src="/images/logos/red1-color.png"
              alt="Red 1 a 1"
              className="pointer"
            />
          </Link>
        </div>
        <Navbar.Toggle />
        <Navbar.Collapse>
          {!auth.logged ? (
            <Nav className="ms-auto my-2" navbarScroll>
              <div
                onClick={abrirRegistro}
                className={`${styles.navEnlace} pointer ms-3`}
              >
                Regístrate
              </div>

              <Button titulo="Inicia sesión" onClick={abrirLogin} />
            </Nav>
          ) : (
            <Nav className="ms-auto my-2" navbarScroll>
              <Link href="/">
                <div className="pointer mx-4 d-flex align-items-center">
                  INICIO
                </div>
              </Link>
              <Button titulo="mis chats" onClick={handleShowCanvas} />

              <div
                className={`${styles.navPerfil} pointer ms-3`}
                ref={target}
                onClick={() => setMostrarMenu(!mostrarMenu)}
              >
                <img
                  src={auth.img}
                  alt="Mi perfil"
                  style={{
                    width: 50,
                    height: 50,
                    borderRadius: "50%",
                  }}
                />
              </div>
              <Overlay
                target={target.current}
                show={mostrarMenu}
                placement="right"
              >
                {({ placement, arrowProps, show: _show, popper, ...props }) => (
                  <div
                    className={styles.menu}
                    {...props}
                    style={{
                      ...props.style,
                    }}
                  >
                    {auth.role === "Administrador" ? (
                      <Link href="/dashboard">
                        <div
                          className={`${styles.menuItem} pointer mx-3 my-2`}
                          onClick={() => {
                            setMostrarMenu(false);
                          }}
                        >
                          Dashboard
                        </div>
                      </Link>
                    ) : null}

                    <Link href="/perfil">
                      <div
                        className={`${styles.menuItem} pointer mx-3 my-2`}
                        onClick={() => {
                          setMostrarMenu(false);
                        }}
                      >
                        Mi Perfil
                      </div>
                    </Link>

                    {auth.role === "Individual" ||
                    auth.role === "Usuario" ||
                    auth.role === "UsuarioPagado" ? null : (
                      <Link href="/perfil/mis-usuarios">
                        <div
                          className={`${styles.menuItem} pointer mx-3 my-2`}
                          onClick={() => {
                            setMostrarMenu(false);
                          }}
                        >
                          Mis Usuarios
                        </div>
                      </Link>
                    )}

                    <Link href="/perfil/mis-paquetes">
                      <div
                        className={`${styles.menuItem} pointer mx-3 my-2`}
                        onClick={() => {
                          setMostrarMenu(false);
                        }}
                      >
                        Mis Paquetes
                      </div>
                    </Link>
                    <Link href="/perfil/historial-de-pagos">
                      <div
                        className={`${styles.menuItem} pointer mx-3 my-2`}
                        onClick={() => {
                          setMostrarMenu(false);
                        }}
                      >
                        Mis Pagos
                      </div>
                    </Link>
                    <div
                      className={`${styles.menuCerrar} pointer mx-3 my-2`}
                      onClick={cerrarSesion}
                    >
                      Cerrar sesion
                    </div>
                  </div>
                )}
              </Overlay>
              <div style={{ position: "relative" }}>
                <i
                  onClick={mostrarNotificaciones}
                  style={{ fontSize: 30, color: "#7149BC", marginTop: 5 }}
                  className="bi bi-bell pointer px-2"
                />
                {solicitudes.length > 0 ? (
                  <span
                    style={{ position: "absolute", top: 10, right: -2 }}
                    className="translate-middle p-2 bg-danger border border-light rounded-circle"
                  />
                ) : null}
              </div>
              <Overlay
                target={target.current}
                show={notificaciones}
                placement="right"
              >
                {({ placement, arrowProps, show: _show, popper, ...props }) => (
                  <div
                    className={styles.notificaciones}
                    {...props}
                    style={{
                      ...props.style,
                    }}
                  >
                    {cargando ? (
                      <Loading />
                    ) : (
                      <>
                        {solicitudes?.map((solicitud) => (
                          <div
                            key={solicitud._id}
                            style={{
                              backgroundColor: aprobadoColor
                                ? "#fff"
                                : "#EDF3F9",
                            }}
                          >
                            <div>
                              <b>
                                {solicitud.usuario.nombre}{" "}
                                {solicitud.usuario.apellido}{" "}
                              </b>
                              quiere que le compartas este inmueble: <br />
                              <b
                                className="pointer"
                                onClick={() =>
                                  goToProperty(solicitud.inmueble.slug)
                                }
                              >
                                {solicitud.inmueble.titulo}
                              </b>
                              <br />
                              {!aprobadoColor ? (
                                <div className="d-flex justify-content-center">
                                  <button
                                    onClick={aprobarSolicitud}
                                    className="btn btn-primary mx-2"
                                  >
                                    Aprobar
                                  </button>
                                  <button
                                    onClick={aprobarSolicitud}
                                    className="btn btn-danger mx-2"
                                  >
                                    Rechazar
                                  </button>
                                </div>
                              ) : null}
                              <hr />
                            </div>
                          </div>
                        ))}
                        <span className="pointer" onClick={goToSolicitudes}>
                          Ver todas las solicitudes
                        </span>
                      </>
                    )}
                  </div>
                )}
              </Overlay>
            </Nav>
          )}
        </Navbar.Collapse>
      </Container>
      <LoginModal />
      <RegisterModal />
      <MisChats showCanvas={showCanvas} handleCloseCanvas={handleCloseCanvas} />
    </Navbar>
  );
};

export default Header;
