import { FormEvent, useContext, useEffect, useState } from "react";
import { useRouter } from "next/router";
import { Form, Modal } from "react-bootstrap";
import { ToastContainer, toast } from "react-toastify";
import { GoogleLogin } from "react-google-login";
import { AuthContext } from "../../../context/auth/AuthContext";
import { useForm } from "../../../hooks/useForm";
import Button from "../button/Button";
import Modaltitle from "../modaltitle/Modaltitle";
import styles from "./AuthModal.module.css";
import "react-toastify/dist/ReactToastify.css";
import { googleClientId } from "credentials";

const LoginModal = () => {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const { login, mostrarLogin, cerrarLogin, abrirRegistro, signInWithGoogle } =
    useContext(AuthContext);
  const { formulario, handleChange, setFormulario } = useForm({
    correo: "",
    password: "",
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

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    rememberme
      ? localStorage.setItem("correo", correo)
      : localStorage.removeItem("correo");

    const resp = await login(correo, password);
    if (!resp.ok) {
      toast.error(resp.msg);
    }

    if (resp.ok) {
      router.push("/perfil");
      cerrarLogin();
    }
  };

  const mostrarContraseña = () => setShowPassword(!showPassword);

  const handleModals = () => {
    cerrarLogin();
    abrirRegistro();
  };

  return (
    <Modal
      show={mostrarLogin}
      onHide={cerrarLogin}
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
              <div>
                <input
                  className={`${styles.modalInputs} mb-4`}
                  type={showPassword ? "text" : "password"}
                  name="password"
                  value={password}
                  onChange={handleChange}
                  required
                />
                <i
                  onClick={mostrarContraseña}
                  className={`${
                    showPassword ? "bi bi-eye-slash" : "bi bi-eye"
                  } ${styles.mostrarContraseña}`}
                />
              </div>
            </div>
            <div className="col-4 my-4">
              <hr />
            </div>
            <div className="col-2 text-center my-4 modal-labels">O</div>
            <div className="col-4 my-4">
              <hr />
            </div>

            <GoogleLogin
              clientId={googleClientId}
              buttonText="Inicia sesión con google"
              onSuccess={signInWithGoogle}
              onFailure={signInWithGoogle}
              cookiePolicy={"single_host_origin"}
              render={(renderProps) => (
                <div
                  onClick={renderProps.onClick}
                  className="col-10 mb-3 text-center pointer"
                >
                  <div className={styles.modalGoogleBtn}>
                    <img
                      className="me-3"
                      src="/images/icons/google-icon.png"
                      alt="Inicia sesión con google"
                    />
                    Inicia sesión con Google
                  </div>
                </div>
              )}
            />

            {/* <div className="col-10 mb-3 text-center">
              <div className={styles.modalFbBtn}>
                <img
                  className="me-3"
                  src="/images/icons/fb-icon.png"
                  alt="Inicia sesión con facebook"
                />
                Inicia sesión con Facebook
              </div>
            </div> */}
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
              {correo.length > 0 && password.length > 0 ? (
                <Button titulo="Iniciar sesión" />
              ) : (
                <Button titulo="Iniciar sesión" btn="Disabled" />
              )}
            </div>
            <div className="text-center" style={{ color: "#3D87F6" }}>
              <span onClick={handleModals} className="pointer">
                ¿Aún no tienes cuenta? ¡Regístrate!
              </span>
            </div>
          </div>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default LoginModal;
