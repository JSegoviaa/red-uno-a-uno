import { Col, Container, Form, Row } from "react-bootstrap";
import Button from "../../ui/button/Button";

const ContactForm = () => {
  return (
    <Container>
      <div className="py-5">
        <Form>
          <Row>
            <Col>
              <Form.Group className="mb-3">
                <Form.Control type="text" placeholder="Nombre" />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Control type="text" placeholder="Apellido" />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group className="mb-3">
                <Form.Control type="email" placeholder="Correo electrónico" />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Control type="text" placeholder="Número telefónico" />
              </Form.Group>
            </Col>
          </Row>

          <Form.Group className="mb-3">
            <Form.Control as="textarea" rows={3} placeholder="Mensaje" />
          </Form.Group>

          <Button titulo="Enviar" />
        </Form>
      </div>
    </Container>
  );
};

export default ContactForm;
