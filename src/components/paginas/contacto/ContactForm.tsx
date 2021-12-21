import { Container, Form, Row } from "react-bootstrap";
import { useForm } from "../../../hooks/useForm";
import Button from "../../ui/button/Button";
import styles from "./contactform.module.css";

const ContactForm = () => {
  const { formulario, handleChange } = useForm({
    nombre: "José Manuel",
    apellido: "Acosta Segovia",
    correo: "test@test.com",
    telefono: "9982626821",
    mensaje: "Hola, quiero información sobre esta mierda",
  });

  const { nombre, apellido, correo, telefono, mensaje } = formulario;

  const onSubmit = (e: any) => {
    e.preventDefault();
  };

  return (
    <section className="my-5">
      <Container>
        <Row>
          <div className="col-sm-12 col-md-7 col-lg-8">
            <div className={styles.s1}>
              <Form onSubmit={onSubmit}>
                <Row>
                  <div className="col-sm-12 col-md-6 col-lg-6">
                    <div className="form-floating mb-3">
                      <input
                        type="text"
                        className="form-control"
                        value={nombre}
                        name="nombre"
                        onChange={handleChange}
                      />
                      <label htmlFor="floatingInput">Nombre</label>
                    </div>
                  </div>
                  <div className="col-sm-12 col-md-6 col-lg-6">
                    <div className="form-floating mb-3">
                      <input
                        type="text"
                        className="form-control"
                        onChange={handleChange}
                        value={apellido}
                        name="apellido"
                      />
                      <label htmlFor="floatingInput">Apellido</label>
                    </div>
                  </div>
                  <div className="col-sm-12 col-md-6 col-lg-6">
                    <div className="form-floating mb-3">
                      <input
                        type="email"
                        className="form-control"
                        value={correo}
                        name="correo"
                        onChange={handleChange}
                      />
                      <label htmlFor="floatingInput">Correo</label>
                    </div>
                  </div>
                  <div className="col-sm-12 col-md-6 col-lg-6">
                    <div className="form-floating mb-3">
                      <input
                        type="text"
                        className="form-control"
                        value={telefono}
                        name="telefono"
                        onChange={handleChange}
                      />
                      <label htmlFor="floatingInput">Telefono</label>
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="form-floating">
                      <textarea
                        className="form-control"
                        style={{ height: 150 }}
                        defaultValue={""}
                        value={mensaje}
                        name="mensaje"
                        onChange={handleChange}
                      />
                      <label htmlFor="floatingTextarea2">Mensaje</label>
                    </div>
                  </div>
                  <div className="col-12 my-4">
                    {correo.length > 0 &&
                    nombre.length > 0 &&
                    apellido.length > 0 &&
                    telefono.length > 0 &&
                    mensaje.length > 0 ? (
                      <Button titulo="Enviar" />
                    ) : (
                      <Button titulo="Enviar" btn="Disabled" />
                    )}
                  </div>
                </Row>
              </Form>
            </div>
          </div>
          <div className="col-sm-12 col-md-5 col-lg-4">
            <div className={styles.s2}>
              <div className="row">
                <div className="col-12">
                  <div className={`${styles.cardTel} mb-3`}>
                    <img
                      className={styles.imgBack}
                      src="/images/content/telefono-back.png"
                      alt="..."
                    />
                    <img src="/images/icons/telefono.png" alt="..." />
                    <div className={`${styles.titulo} mb-1`}>Teléfono</div>
                    <div className={`${styles.subtitulo}`}>442 543 9190</div>
                  </div>
                </div>
                <div className="col-12">
                  <div className={`${styles.cardTel} mb-3`}>
                    <img
                      className={styles.imgBack2}
                      src="/images/content/ubicacion-back.png"
                      alt="..."
                    />
                    <img src="/images/icons/ubicacion.png" alt="..." />
                    <div className={`${styles.titulo} mb-1`}>
                      Nuestras oficinas
                    </div>
                    <div className={`${styles.subtitulo}`}>
                      Querétaro, México. C.P. 76230
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Row>
      </Container>
    </section>
  );
};

export default ContactForm;
