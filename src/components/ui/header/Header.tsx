import { useState } from "react";
import Link from "next/link";
import { Container, Nav, Navbar } from "react-bootstrap";
import Button from "../button/Button";
import styles from "./Header.module.css";
import LoginModal from "../authmodal/LoginModal";
import RegisterModal from "../authmodal/AuthModal";

const Header = () => {
  const [show, setShow] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const closeRegister = () => setIsOpen(false);
  const openRegister = () => setIsOpen(true);

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
          <Nav className="ms-auto my-2" navbarScroll>
            <div
              onClick={openRegister}
              className={`${styles.navEnlace} pointer ms-3`}
            >
              Regístrate
            </div>

            <Button titulo="Inicia sesión" onClick={handleShow} />

            <Link href="/perfil">
              <div className={`${styles.navPerfil} pointer ms-3`}>
                <img
                  src="/images/icons/perfil.png"
                  alt="Mi perfil"
                  style={{ width: "100%" }}
                />
              </div>
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
      <LoginModal show={show} handleClose={handleClose} />
      <RegisterModal show={isOpen} handleClose={closeRegister} />
    </Navbar>
  );
};

export default Header;
