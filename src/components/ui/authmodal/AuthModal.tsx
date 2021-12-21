import { Form, Modal } from "react-bootstrap";
import { ToastContainer, toast } from "react-toastify";
import { useForm } from "../../../hooks/useForm";
import Button from "../button/Button";
import Modaltitle from "../modaltitle/Modaltitle";
import styles from "./AuthModal.module.css";
import "react-toastify/dist/ReactToastify.css";

interface Props {
  show: boolean;
  handleClose: () => void;
}

const RegisterModal = ({ show, handleClose }: Props) => {
  const { formulario, handleChange } = useForm({
    nombre: "",
    apellido: "",
    correo: "",
    password: "",
    password2: "",
  });

  const { nombre, apellido, correo, password, password2 } = formulario;

  const onSubmit = (e: any) => {
    e.preventDefault();

    if (password !== password2) toast.error("Las contraseñas no coinciden");

    if (password.length < 6) {
      toast.error("La contraseña tiene que ser de al menos 6 caracteres");
    }

    if (nombre.trim().length <= 2) {
      toast.error("El nombre debe tener mínimo 3 caracteres");
    }

    if (correo.trim().length <= 2) {
      toast.error("El correo debe tener mínimo 3 caracteres");
    }
    if (apellido.trim().length <= 2) {
      toast.error("El apellido debe tener mínimo 3 caracteres");
    }
  };

  return (
    <>
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
        <ToastContainer autoClose={10000} />

        <Modal.Body>
          <Form onSubmit={onSubmit}>
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
                {nombre.length > 0 &&
                apellido.length > 0 &&
                correo.length > 0 &&
                password.length > 0 ? (
                  <Button titulo="Registrarse" />
                ) : (
                  <Button titulo="Registrarse" btn="Disabled" />
                )}
              </div>
            </div>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default RegisterModal;
