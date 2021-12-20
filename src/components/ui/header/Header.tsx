import Link from "next/link";
import { Container, Nav, Navbar } from "react-bootstrap";
import Button from "../button/Button";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <Navbar className={styles.navStyle} bg="light" expand="lg">
      <Container>
        <div className="my-2">
          <img src="/images/logos/red1-color.png" alt="..." />
        </div>
        <Navbar.Toggle />
        <Navbar.Collapse>
          <Nav className="ms-auto my-2" navbarScroll>
                <Link href="/"><div className={`${styles.navEnlace} pointer mx-2`}>Regístrate</div></Link>
                <Link href="/contacto"><div className={`${styles.sesionBtn} pointer mx-2`}>Inicia Sesión</div></Link>
                <Link href="/perfil"><div className={`${styles.navPerfil} pointer mx-2`}><img src="" alt="..." /></div></Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
