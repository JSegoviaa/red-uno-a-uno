import { useContext, useRef, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { Container, Nav, Navbar, Overlay } from "react-bootstrap";
import Button from "../button/Button";
import styles from "./Header.module.css";
import LoginModal from "../authmodal/LoginModal";
import RegisterModal from "../authmodal/AuthModal";
import { AuthContext } from "../../../context/auth/AuthContext";
const Header = () => {
  const router = useRouter();
  const { auth } = useContext(AuthContext);
  const [show, setShow] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const closeRegister = () => setIsOpen(false);
  const openRegister = () => setIsOpen(true);

  const [show1, setShow1] = useState(false);
  const target = useRef(null);

  const chats = () => router.push("/perfil/mis-chats");

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
                onClick={openRegister}
                className={`${styles.navEnlace} pointer ms-3`}
              >
                Regístrate
              </div>

              <Button titulo="Inicia sesión" onClick={handleShow} />
            </Nav>
          ) : (
            <Nav className="ms-auto my-2" navbarScroll>
              <Link href="/">
                <div className="pointer mx-4 d-flex align-items-center">
                  INICIO
                </div>
              </Link>
              <Button titulo="mis chats" onClick={chats} />


              <div className={`${styles.navPerfil} pointer ms-3`} ref={target} onClick={() => setShow1(!show1)}>
                <img
                  src="/images/icons/perfil.png"
                  alt="Mi perfil"
                  style={{ width: "100%" }}
                />
              </div>
              <Overlay target={target.current} show={show1} placement="right">
                {({ placement, arrowProps, show: _show, popper, ...props }) => (
                  <div
                    {...props}
                    style={{
                      backgroundColor: 'white',
                      padding: '2px 10px',
                      color: 'grey',
                      
                      borderRadius: 3,
                      ...props.style,
                    }}
                  >
                    Simple tooltip <br />
                    <Link href="/">
                      <div className="pointer mx-4 d-flex align-items-center">
                        INICIO
                      </div>
                    </Link>
                    <Link href="/">
                      <div className="pointer mx-4 d-flex align-items-center">
                        INICIO
                      </div>
                    </Link>
                    
                  </div>
                )}
              </Overlay>

            </Nav>
          )}
        </Navbar.Collapse>
      </Container>
      <LoginModal show={show} handleClose={handleClose} />
      <RegisterModal show={isOpen} handleClose={closeRegister} />
    </Navbar>
  );
};

export default Header;
