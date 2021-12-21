import { Modal } from 'react-bootstrap';
import { useForm } from '../../../hooks/useForm';
import Button from '../button/Button';
import Modaltitle from '../modaltitle/Modaltitle';
import styles from './AuthModal.module.css';

type Autenticacion = 'Registro' | 'Login';

interface Props {
  show: boolean;
  handleClose: () => void;
  type: Autenticacion;
}

const AuthModal = ({ show, handleClose, type }: Props) => {
  const { formulario, handleChange } = useForm({
    nombre: 'José Acosta',
    apellido: '123456',
    correo: 'test@test.com',
    password: '123456',
    password2: '123456',
    rememberme: true,
  });

  const { nombre, apellido, correo, password, password2 } = formulario;
  return (
    <>
      {type === 'Registro' ? (
        <Modal
          show={show}
          onHide={handleClose}
          contentClassName={styles.modalContent}
        >
          <Modal.Header
            closeButton
            style={{
              border: 'none',
            }}
          />
          <Modal.Body>
            <div className="row d-flex justify-content-center">
              <Modaltitle titulo="Registrarse" />

              <div className="col-10">
                <label className={styles.modalLabels}>Nombre</label>
                <br />
                <input
                  className={`${styles.modalInputs} mb-4`}
                  type="mail"
                  name="nombre"
                  value={nombre}
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
                  value={apellido}
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
                  value={correo}
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
                  value={password}
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
                  name="password2"
                  value={password2}
                  required
                />
              </div>
              <div className="col-10 mb-3 text-center">
                <Button titulo="Registrarse" />
              </div>
            </div>
          </Modal.Body>
        </Modal>
      ) : null}

      {type === 'Login' ? (
        <Modal
          show={show}
          onHide={handleClose}
          contentClassName={styles.modalContent}
        >
          <Modal.Header
            closeButton
            style={{
              border: 'none',
            }}
          />
          <Modal.Body>
            <div className="row d-flex justify-content-center">
              <Modaltitle titulo="Inicia sesión" />

              <div className="col-10">
                <label className={styles.modalLabels}>Correo electrónico</label>
                <br />
                <input
                  className={`${styles.modalInputs} mb-4`}
                  type="mail"
                  name="correo"
                  value={correo}
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
                  value={password}
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
                    name="rememberme"
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
