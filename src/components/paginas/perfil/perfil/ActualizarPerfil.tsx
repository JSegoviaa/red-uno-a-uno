import { FormEvent, useContext } from "react";
import { Col, Container, Form, Row } from "react-bootstrap";
import { AuthContext } from "../../../../context/auth/AuthContext";
import { useForm } from "../../../../hooks/useForm";
import Button from "../../../ui/button/Button";
import Modaltitle from "../../../ui/modaltitle/Modaltitle";
import Titulo from "../../../ui/titulo/Titulo";

const ActualizarPerfilForm = () => {
  const { auth, actualizarPerfil } = useContext(AuthContext);

  const { formulario, handleChange } = useForm({
    nombre: auth.nombre,
    apellido: auth.apellido,
    perfilEmpresarial: auth.perfilEmpresarial,
    telefonoOficina: auth.telefonoOficina,
    telefonoPersonal: auth.telefonoPersonal,
    nombreInmobiliaria: auth.nombreInmobiliaria,
    direccionFisica: auth.direccionFisica,
    facebookpage: auth.facebookpage,
    instagram: auth.instagram,
    twitter: auth.twitter,
    youtube: auth.youtube,
    linkedin: auth.linkedin,
  });

  const {
    nombre,
    apellido,
    perfilEmpresarial,
    telefonoOficina,
    telefonoPersonal,
    nombreInmobiliaria,
    direccionFisica,
    facebookpage,
    instagram,
    twitter,
    youtube,
    linkedin,
  } = formulario;

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    actualizarPerfil(formulario);
  };

  return (
    <Container>
      <Titulo titulo="Actualiza tu perfil" />
      <br />
      <br />
      <div className="d-flex justify-content-start">
        <Modaltitle titulo="Datos personales" />
      </div>

      <Form onSubmit={onSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>Nombre(s)</Form.Label>
          <Form.Control
            type="text"
            value={nombre}
            name="nombre"
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Apellidos</Form.Label>
          <Form.Control
            type="text"
            value={apellido}
            name="apellido"
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Perfil empresarial</Form.Label>
          <Form.Control
            as="textarea"
            placeholder="Descríbase"
            value={perfilEmpresarial}
            name="perfilEmpresarial"
            onChange={handleChange}
            rows={3}
          />
        </Form.Group>

        <Row>
          <Col sm={6}>
            <Form.Group className="mb-3">
              <Form.Label>Teléfono de oficina</Form.Label>
              <Form.Control
                type="number"
                value={telefonoOficina}
                name="telefonoOficina"
                onChange={handleChange}
              />
            </Form.Group>
          </Col>
          <Col sm={6}>
            <Form.Group className="mb-3">
              <Form.Label>Teléfono de personal</Form.Label>
              <Form.Control
                type="number"
                value={telefonoPersonal}
                name="telefonoPersonal"
                onChange={handleChange}
              />
            </Form.Group>
          </Col>
        </Row>

        <br />
        <br />
        <div className="d-flex justify-content-start">
          <Modaltitle titulo="Datos de la inmobiliaria" />
        </div>

        <Form.Group className="mb-3">
          <Form.Label>Nombre</Form.Label>
          <Form.Control
            type="text"
            value={nombreInmobiliaria}
            name="nombreInmobiliaria"
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Dirección física</Form.Label>
          <Form.Control
            type="text"
            value={direccionFisica}
            name="direccionFisica"
            onChange={handleChange}
          />
        </Form.Group>

        <div>Redes sociales</div>

        <Form.Group className="mb-3">
          <Form.Label>Facebook</Form.Label>
          <Form.Control
            type="text"
            value={facebookpage}
            name="facebookpage"
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Instagram</Form.Label>
          <Form.Control
            type="text"
            value={instagram}
            name="instagram"
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Twiiter</Form.Label>
          <Form.Control
            type="text"
            value={twitter}
            name="twitter"
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>YouTube</Form.Label>
          <Form.Control
            type="text"
            value={youtube}
            name="youtube"
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>LinkedIn</Form.Label>
          <Form.Control
            type="text"
            value={linkedin}
            name="linkedin"
            onChange={handleChange}
          />
        </Form.Group>

        <Button titulo="Actualizar perfil" />
        <br />
        <br />
      </Form>
    </Container>
  );
};

export default ActualizarPerfilForm;
