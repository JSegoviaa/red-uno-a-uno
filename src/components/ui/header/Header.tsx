import { useContext, useEffect, useRef, useState } from "react";
import Link from "next/link";
import { Container, Nav, Navbar } from "react-bootstrap";
import Button from "../button/Button";
import styles from "./Header.module.css";
import LoginModal from "../authmodal/LoginModal";
import RegisterModal from "../authmodal/AuthModal";
import { AuthContext } from "../../../context/auth/AuthContext";
import MisChats from "../../paginas/perfil/chats/MisChats";
import { SocketContext } from "context/socket/SocketContext";
import { useSolicitudes } from "hooks/useSolicitudes";
import MenuUsuario from "./MenuUsuario";
import Notificaciones from "./Notificaciones";

// interface Notificacion {
//   de: string;
//   para: string;
//   nombre: string;
//   apellido: string;
//   mensaje: string;
// }

const Header = () => {
  const { auth, abrirRegistro, abrirLogin } = useContext(AuthContext);
  const { socket } = useContext(SocketContext);
  const [mostrarMenu, setMostrarMenu] = useState(false);
  const target = useRef(null);
  const [notificaciones, setNotificaciones] = useState(false);
  const [showCanvas, setShowCanvas] = useState(false);
  const { solicitudes, cargando, setSolicitudes } = useSolicitudes(auth.uid);

  // const [nuevaNotificacion, setNuevaNotificacion] = useState<Notificacion[]>(
  //   []
  // );
  // const uniqueValues = new Set();

  const handleCloseCanvas = () => setShowCanvas(false);
  const handleShowCanvas = () => setShowCanvas(true);

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

              <MenuUsuario
                setMostrarMenu={setMostrarMenu}
                target={target}
                setNotificaciones={setNotificaciones}
                mostrarMenu={mostrarMenu}
              />

              <Notificaciones
                notificaciones={notificaciones}
                setNotificaciones={setNotificaciones}
                target={target}
                cargando={cargando}
                solicitudes={solicitudes}
              />
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
