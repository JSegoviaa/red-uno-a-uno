import { useContext, useState } from "react";
import { useRouter } from "next/router";
import { Col, Container, Form, Row } from "react-bootstrap";
import { AuthContext } from "../../../../context/auth/AuthContext";
import Button from "../../../ui/button/Button";
import styles from "./Perfil.module.css";

const Perfil = () => {
  const router = useRouter();
  const { auth, fotoPerfil } = useContext(AuthContext);
  const [picture, setPicture] = useState("");
  const misPaquetes = () => router.push("/perfil/mis-paquetes");
  const misPropiedades = () => router.push("/perfil/mis-propiedades");
  const actualizarPerfil = () => router.push("/perfil/actualizar-perfil");

  const handlePicture = async (e: any) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("picture", picture);

    await fotoPerfil(formData);
  };
  return (
    <Container>
      <div className="d-flex justify-content-center">
        <div className="text-center">
          <div className="pt-5 pb-3">
            <img
              src={auth.img}
              style={{ borderRadius: "50%" }}
              alt="Foto de perfil red1a1"
            />
          </div>
          <div className={styles.nombre}>
            {auth.nombre} {auth.apellido}
          </div>
          <div className={styles.paquete}>Paquete básico</div>
          <div className={styles.empresa}>{auth.nombreInmobiliaria}</div>
          <div className={styles.correo}>{auth.correo} </div>
          <div className={styles.telefono}>{auth.telefonoPersonal}</div>
        </div>
      </div>
      <hr />
      <Form onSubmit={handlePicture} encType="multipart/form-data">
        <Form.Group className="mb-3">
          <Form.Control
            type="file"
            onChange={(e: any) => setPicture(e.target.files[0])}
          />
        </Form.Group>
        <button>enviar</button>
      </Form>

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
            <Button
              titulo="Mis propiedades"
              btn="Secondary"
              onClick={misPropiedades}
            />
          </Col>
          <Col className="py-3">
            <Button
              titulo="Actualizar perfil"
              btn="Secondary"
              onClick={actualizarPerfil}
            />
          </Col>
        </Row>
      </div>
    </Container>
  );
};

export default Perfil;
