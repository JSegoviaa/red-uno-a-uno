import { useContext } from "react";
import { useRouter } from "next/router";
import { Col, Container, Row } from "react-bootstrap";
import { AuthContext } from "../../../../context/auth/AuthContext";
import Button from "../../../ui/button/Button";
import styles from "./Perfil.module.css";

const Perfil = () => {
  const router = useRouter();

  const misPaquetes = () => router.push("/perfil/mis-paquetes");

  const misPropiedades = () => router.push("/perfil/mis-propiedades");

  const { auth } = useContext(AuthContext);

  return (
    <Container>
      <div className="d-flex justify-content-center">
        <div className="text-center">
          <div className="pt-5 pb-3">
            <img src="/images/icons/perfil.png" />
          </div>
          <div className={styles.nombre}>Juan Pérez Hernández</div>
          <div className={styles.paquete}>Paquete básico</div>
          <div className={styles.empresa}>Karls and Wallace</div>
          <div className={styles.correo}>juan.perez.h@karlsandwallace.com</div>
          <div className={styles.telefono}>112 23 34 455</div>
        </div>
      </div>
      <hr />
      <div className="py-5">
        <Row className="d-flex justify-content-center text-center">
          <Col className="py-3">
            <Button
              titulo="Mis paquetes"
              btn="Secondary"
              onClick={misPaquetes}
            />
          </Col>
          <Col className="py-3">
            <Button titulo="Historial de inmuebles" btn="Secondary" />
          </Col>
          <Col className="py-3">
            <Button
              titulo="Mis propiedades"
              btn="Secondary"
              onClick={misPropiedades}
            />
          </Col>
        </Row>
      </div>
    </Container>
  );
};

export default Perfil;
