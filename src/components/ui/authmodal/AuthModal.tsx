import { Modal } from 'react-bootstrap';
import { useForm } from '../../../hooks/useForm';
import Button from '../button/Button';
import Modaltitle from '../modaltitle/Modaltitle';
import styles from './AuthModal.module.css';

type Autenticacion = 'Registro';

interface Props {
  show: boolean;
  handleClose: () => void;
  type: Autenticacion;
}

const AuthModal = ({ show, handleClose, type = 'Registro' }: Props) => {
  const { formulario, handleChange } = useForm({
    nombre: 'José Acosta',
    apellido: '123456',
    correo: 'test@test.com',
    password: '123456',
    password2: '123456',
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
                  onChange={handleChange}
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
                  onChange={handleChange}
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
                  onChange={handleChange}
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
                  onChange={handleChange}
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
                  onChange={handleChange}
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
    </>
  );
};

export default AuthModal;
