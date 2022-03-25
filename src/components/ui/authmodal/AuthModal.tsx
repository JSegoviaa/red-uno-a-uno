import { FormEvent, useContext, useState } from "react";
import { useRouter } from "next/router";
import { Form, Modal } from "react-bootstrap";
import { ToastContainer, toast } from "react-toastify";
import { useForm } from "../../../hooks/useForm";
import Button from "../button/Button";
import Modaltitle from "../modaltitle/Modaltitle";
import styles from "./AuthModal.module.css";
import "react-toastify/dist/ReactToastify.css";
import { AuthContext } from "../../../context/auth/AuthContext";
import GoogleLogin from "react-google-login";
import { production, googleClientId } from "credentials/credentials";

const RegisterModal = () => {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [showPassword2, setShowPassword2] = useState(false);

  const {
    register,
    mostrarRegistro,
    cerrarRegistro,
    abrirLogin,
    signInWithGoogle,
  } = useContext(AuthContext);

  const { formulario, handleChange } = useForm({
    nombre: "",
    apellido: "",
    correo: "",
    password: "",
    password2: "",
    role: "Usuario",
  });

  const { nombre, apellido, correo, password, password2, role } = formulario;

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (password !== password2) toast.error("Las contraseñas no coinciden");

    if (password.length < 6) {
      toast.error("La contraseña tiene que ser de al menos 6 caracteres");
    }

    if (password === password2) {
      const resp = await register(nombre, apellido, correo, password, role);

      if (resp.errors) {
        resp.errors.map((e) => {
          return toast.error(e.msg);
        });
      }

      if (resp.ok) {
        const bienvida = {
          nombre: resp.usuario.nombre,
          apellido: resp.usuario.apellido,
          correo: resp.usuario.correo,
        };

        await fetch(`${production}/correos/bienvenida`, {
          method: "POST",
          headers: { "Content-type": "application/json" },
          body: JSON.stringify(bienvida),
        });
        router.push("/perfil/actualizar-perfil");
        cerrarRegistro();
      }
    }
  };

  const handleModals = () => {
    cerrarRegistro();
    abrirLogin();
  };

  const mostrarContraseña = () => setShowPassword(!showPassword);

  const mostrarContraseña2 = () => setShowPassword2(!showPassword2);

  return (
    <>
      <Modal
        show={mostrarRegistro}
        onHide={cerrarRegistro}
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
              <div className="col-10">
                <label className={styles.modalLabels}>
                  Confirme su contraseña
                </label>
                <br />
                <div>
                  <input
                    className={`${styles.modalInputs} mb-4`}
                    type={showPassword2 ? "text" : "password"}
                    name="password2"
                    value={password2}
                    onChange={handleChange}
                    required
                  />
                  <i
                    onClick={mostrarContraseña2}
                    className={`${
                      showPassword2 ? "bi bi-eye-slash" : "bi bi-eye"
                    } ${styles.mostrarContraseña}`}
                  />
                </div>
              </div>
              <div className="col-10 mb-3 text-center">
                {nombre.length > 0 &&
                apellido.length > 0 &&
                correo.length > 0 &&
                password.length > 0 &&
                password2.length > 0 ? (
                  <Button titulo="Registrarse" />
                ) : (
                  <Button titulo="Registrarse" btn="Disabled" />
                )}
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
                      Regístrate con Google
                    </div>
                  </div>
                )}
              />

              <div className="text-center">
                <span
                  onClick={handleModals}
                  className="pointer"
                  style={{ color: "#3D87F6" }}
                >
                  ¿Ya tienes cuenta? ¡Inicia sesión!
                </span>
              </div>
            </div>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default RegisterModal;
