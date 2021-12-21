import { useContext, useEffect } from "react";
import { Form, Modal } from "react-bootstrap";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AuthContext } from "../../../context/auth/AuthContext";
import { useForm } from "../../../hooks/useForm";
import Button from "../button/Button";
import Modaltitle from "../modaltitle/Modaltitle";
import styles from "./AuthModal.module.css";

interface Props {
  show: boolean;
  handleClose: () => void;
}

const LoginModal = ({ show, handleClose }: Props) => {
  const { login } = useContext(AuthContext);
  const { formulario, handleChange, setFormulario } = useForm({
    correo: "test@test.com",
    password: "123456",
    rememberme: false,
  });

  useEffect(() => {
    const correo = localStorage.getItem("correo");

    if (correo) {
      setFormulario({
        ...formulario,
        correo,
        rememberme: true,
      });
    }
  }, []);

  const { correo, password, rememberme } = formulario;

  const toggleCheck = () => {
    setFormulario({ ...formulario, rememberme: !rememberme });
  };

  const onSubmit = async (e: any) => {
    e.preventDefault();

    rememberme
      ? localStorage.setItem("correo", correo)
      : localStorage.removeItem("correo");

    const ok = await login(correo, password);
    if (!ok!) {
      toast.error("Error al momento de iniciar sesión");
    }
  };

  return (
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
      <ToastContainer />
      <Modal.Body>
        <Form onSubmit={onSubmit}>
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
            <div className="col-4 my-4">
              <hr />
            </div>
            <div className="col-2 text-center my-4 modal-labels">O</div>
            <div className="col-4 my-4">
              <hr />
            </div>

            <div className="col-10 mb-3 text-center">
              <div className={styles.modalGoogleBtn}>
                <img
                  className="me-3"
                  src="/images/icons/google-icon.png"
                  alt="Inicia sesión con google"
                />
                Inicia sesión con Google
              </div>
            </div>
            <div className="col-10 mb-3 text-center">
              <div className={styles.modalFbBtn}>
                <img
                  className="me-3"
                  src="/images/icons/fb-icon.png"
                  alt="Inicia sesión con facebook"
                />
                Inicia sesión con Facebook
              </div>
            </div>
            <div className="col-10 mb-3">
              <div className="form-check" onClick={() => toggleCheck()}>
                <input
                  className="form-check-input"
                  type="checkbox"
                  name="rememberme"
                  checked={rememberme}
                  readOnly
                />
                <label className="modal-labels">Recordarme</label>
              </div>
            </div>

            <div className="col-10 mb-3 text-center">
              <Button titulo="Iniciar sesión" />
            </div>
          </div>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default LoginModal;
