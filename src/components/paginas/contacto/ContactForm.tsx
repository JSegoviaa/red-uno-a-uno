import { FormEvent } from "react";
import { Container, Form, Row } from "react-bootstrap";
import { toast, ToastContainer } from "react-toastify";
import { useForm } from "../../../hooks/useForm";
import Button from "../../ui/button/Button";
import styles from "./contactform.module.css";
import "react-toastify/dist/ReactToastify.css";
import { fetchContactForm } from "../../../helpers/fetch";

const ContactForm = () => {
  const { formulario, handleChange, setFormulario } = useForm({
    nombre: "",
    apellido: "",
    correo: "",
    telefono: "",
    mensaje: "",
  });

  const { nombre, apellido, correo, telefono, mensaje } = formulario;

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (correo.trim().length <= 1) {
      toast.error("El correo es obligatorio");
    }
    if (nombre.trim().length <= 1) {
      toast.error("El nombre es obligatorio");
    }
    if (apellido.trim().length <= 1) {
      toast.error("El apellido es obligatorio");
    }

    const resp = await fetchContactForm("correos/contacto", formulario);

    if (!resp.ok) {
      toast.error(resp.msg);
    }

    if (resp.errors) {
      resp.errors.map((e) => {
        return toast.error(e.msg);
      });
    }

    if (resp.ok) {
      toast.success(resp.msg);
    }

    setFormulario({
      nombre: "",
      apellido: "",
      correo: "",
      telefono: "",
      mensaje: "",
    });
  };

  return (
    <section className="my-5">
      <Container>
        <ToastContainer autoClose={10000} />
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
                        required
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
                        required
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
                        required
                      />
                      <label htmlFor="floatingInput">Correo</label>
                    </div>
                  </div>
                  <div className="col-sm-12 col-md-6 col-lg-6">
                    <div className="form-floating mb-3">
                      <input
                        type="number"
                        className="form-control"
                        value={telefono}
                        name="telefono"
                        onChange={handleChange}
                        required
                      />
                      <label htmlFor="floatingInput">Telefono</label>
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="form-floating">
                      <textarea
                        className="form-control"
                        style={{ height: 150 }}
                        value={mensaje}
                        name="mensaje"
                        onChange={handleChange}
                        required
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
