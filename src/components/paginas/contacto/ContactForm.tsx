import { Col, Container, Form, Row } from "react-bootstrap";
import Button from "../../ui/button/Button";
import styles from "./contactform.module.css"

const ContactForm = () => {
  return (
    <section className="my-5">
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-md-7 col-lg-8">
            <div className={styles.s1}>
              <div className="row">
                <div className="col-sm-12 col-md-6 col-lg-6">
                  <div className="form-floating mb-3">
                    <input type="text" className="form-control" id="floatingInput" placeholder="xx" />
                    <label htmlFor="floatingInput">Nombre</label>
                  </div>
                </div>
                <div className="col-sm-12 col-md-6 col-lg-6">
                  <div className="form-floating mb-3">
                    <input type="text" className="form-control" id="floatingInput" placeholder="xx" />
                    <label htmlFor="floatingInput">Apellido</label>
                  </div>
                </div>
                <div className="col-sm-12 col-md-6 col-lg-6">
                  <div className="form-floating mb-3">
                    <input type="email" className="form-control" id="floatingInput" placeholder="xx" />
                    <label htmlFor="floatingInput">Correo</label>
                  </div>
                </div>
                <div className="col-sm-12 col-md-6 col-lg-6">
                  <div className="form-floating mb-3">
                    <input type="text" className="form-control" id="floatingInput" placeholder="xx" />
                    <label htmlFor="floatingInput">Telefono</label>
                  </div>
                </div>
                <div className="col-12">
                  <div className="form-floating">
                    <textarea className="form-control" placeholder="Leave a comment here" id="floatingTextarea2" style={{ height: 150 }} defaultValue={""} />
                    <label htmlFor="floatingTextarea2">Mensaje</label>
                  </div>
                </div>
                <div className="col-12 my-4">
                  <Button titulo="Enviar" />
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-12 col-md-5 col-lg-4">
            <div className={styles.s2}>
              <div className="row">
                <div className="col-12">
                  <div className={`${styles.cardTel} mb-3`}>
                    <img className={styles.imgBack} src="/images/content/telefono-back.png" alt="..." />
                    <img src="/images/icons/telefono.png" alt="..." />
                    <div className={`${styles.titulo} mb-1`}>
                      Teléfono
                    </div>
                    <div className={`${styles.subtitulo}`}>
                      442 543 9190
                    </div>
                  </div>
                </div>
                <div className="col-12">
                  <div className={`${styles.cardTel} mb-3`}>
                  <img className={styles.imgBack2} src="/images/content/ubicacion-back.png" alt="..." />
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
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
