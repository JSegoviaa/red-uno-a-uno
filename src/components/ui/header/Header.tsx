import Link from "next/link";
import { Container, Nav, Navbar } from "react-bootstrap";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand>Navbar scroll</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse>
          <Nav className="ms-auto my-2 my-lg-0" navbarScroll>
            <Nav.Link>
              <Link href="/nosotros">Nosotros</Link>
            </Nav.Link>
            <Nav.Link>
              <Link href="/contacto">Contacto</Link>
            </Nav.Link>
            <Nav.Link>
              <Link href="/paquetes">Paquetes</Link>
            </Nav.Link>
            <Nav.Link>
              <Link href="/perfil">Mi perfil</Link>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
