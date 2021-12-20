import { useState } from "react";
import Link from "next/link";
import { Container, Nav, Navbar } from "react-bootstrap";
import AuthModal from "../authmodal/AuthModal";
import Button from "../button/Button";
import styles from "./Header.module.css";

const Header = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

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
            <Link href="/">
              <div className={`${styles.navEnlace} pointer ms-3`}>
                Regístrate
              </div>
            </Link>

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
      <AuthModal show={show} handleClose={handleClose} />
    </Navbar>
  );
};

export default Header;
