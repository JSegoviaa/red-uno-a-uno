import { Modal } from "react-bootstrap";
import Button from "../button/Button";
import styles from "./AuthModal.module.css";

type Autenticacion = "Registro" | "Login";

interface Props {
  show: boolean;
  handleClose: () => void;
  type: Autenticacion;
}

const AuthModal = ({ show, handleClose, type }: Props) => {
  return (
    <>
      {type === "Registro" ? (
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Registrarse</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="row d-flex justify-content-center">
              <div className="text-center">
                <h3 className={styles.loginTitle}>Registro</h3>
                <div className={styles.line} />
              </div>

              <div className="col-10">
                <label className={styles.modalLabels}>Nombre</label>
                <br />
                <input
                  className={`${styles.modalInputs} mb-4`}
                  type="mail"
                  name="nombre"
                  required
                />
              </div>
              <div className="col-10">
                <label className={styles.modalLabels}>Apellidos</label>
                <br />
                <input
                  className={`${styles.modalInputs} mb-4`}
                  type="mail"
                  name="apellido"
                  required
                />
              </div>
              <div className="col-10">
                <label className={styles.modalLabels}>Correo electrónico</label>
                <br />
                <input
                  className={`${styles.modalInputs} mb-4`}
                  type="mail"
                  name="correo"
                  required
                />
              </div>

              <div className="col-10">
                <label className={styles.modalLabels}>Contraseña</label>
                <br />
                <input
                  className={`${styles.modalInputs} mb-4`}
                  type="password"
                  name="password"
                  required
                />
              </div>
              <div className="col-10">
                <label className={styles.modalLabels}>
                  Confirme su contraseña
                </label>
                <br />
                <input
                  className={`${styles.modalInputs} mb-4`}
                  type="password"
                  name="password"
                  required
                />
              </div>
              <div className="col-10 mb-3 text-center">
                <Button titulo="Registrarse" />
              </div>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <div onClick={handleClose}>Cerrar</div>
          </Modal.Footer>
        </Modal>
      ) : null}

      {type === "Login" ? (
        <Modal
          show={show}
          onHide={handleClose}
          contentClassName={styles.modalContent}
        >
          <Modal.Header
            closeButton
            style={{
              border: "none",
            }}
          />
          <Modal.Body>
            <div className="row d-flex justify-content-center">
              <div className="text-center">
                <h3 className={styles.loginTitle}>Inicia sesión</h3>
                <div className={styles.line} />
              </div>

              <div className="col-10">
                <label className={styles.modalLabels}>Correo electrónico</label>
                <br />
                <input
                  className={`${styles.modalInputs} mb-4`}
                  type="mail"
                  name="correo"
                  required
                />
              </div>
              <div className="col-10">
                <label className={styles.modalLabels}>Contraseña</label>
                <br />
                <input
                  className={`${styles.modalInputs} mb-4`}
                  type="password"
                  name="password"
                  required
                />
              </div>
              <div className="col-4 my-4">
                <hr />
              </div>
              <div className="col-2 text-center my-4 modal-labels">O</div>
              <div className="col-4 my-4">
                <hr />
              </div>

              <div className="col-10 mb-3 text-center">
                <button className={styles.modalGoogleBtn}>
                  <img
                    className="me-3"
                    src="/images/icons/google-icon.png"
                    alt="Inicia sesión con google"
                  />
                  Inicia sesión con Google
                </button>
              </div>
              <div className="col-10 mb-3 text-center">
                <button className={styles.modalFbBtn}>
                  <img
                    className="me-3"
                    src="/images/icons/fb-icon.png"
                    alt="Inicia sesión con facebook"
                  />
                  Inicia sesión con Facebook
                </button>
              </div>
              <div className="col-10 mb-3">
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value=""
                    id="flexCheckDefault"
                  />
                  <label className="modal-labels">Recordarme</label>
                </div>
              </div>

              <div className="col-10 mb-3 text-center">
                <Button titulo="Iniciar sesión" />
              </div>
            </div>
          </Modal.Body>
        </Modal>
      ) : null}
    </>
  );
};

export default AuthModal;
