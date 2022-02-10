import { useContext, useRef, useState } from "react";
import Link from "next/link";
import { Container, Nav, Navbar, Overlay } from "react-bootstrap";
import Button from "../button/Button";
import styles from "./Header.module.css";
import LoginModal from "../authmodal/LoginModal";
import RegisterModal from "../authmodal/AuthModal";
import { AuthContext } from "../../../context/auth/AuthContext";
import MisChats from "../../paginas/perfil/chats/MisChats";
import { ChatContext } from "../../../context/chat/ChatContext";

const Header = () => {
  const { auth, logOut, abrirRegistro, abrirLogin } = useContext(AuthContext);
  const { chatState } = useContext(ChatContext);
  const [mostrarMenu, setMostrarMenu] = useState(false);
  const target = useRef(null);

  const cerrarSesion = () => {
    logOut();
    setMostrarMenu(false);
    chatState.chatActivo = null;
  };

  const [showCanvas, setShowCanvas] = useState(false);
  const handleCloseCanvas = () => setShowCanvas(false);
  const handleShowCanvas = () => setShowCanvas(true);

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
                  style={{ width: "100%", height: "100%", borderRadius: "50%" }}
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

                    {auth.role === "Individual" ? null : (
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
