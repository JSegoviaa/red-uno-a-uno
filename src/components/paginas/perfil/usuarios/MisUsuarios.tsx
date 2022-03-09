import { FormEvent, useContext, useState } from "react";
import { Container, Form, Row } from "react-bootstrap";
import { toast } from "react-toastify";
import { AuthContext } from "../../../../context/auth/AuthContext";
import { useForm } from "../../../../hooks/useForm";
import { useMisUsuarios } from "../../../../hooks/useUserInfo";
import { UsuariosPagado } from "../../../../interfaces/MisUsuariosInterface";
import Button from "../../../ui/button/Button";
import Loading from "../../../ui/loading/Loading";
import styles from "./MisUsuarios.module.css";

const MisUsuarios = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showPassword2, setShowPassword2] = useState(false);
  const { auth, crearUsuario } = useContext(AuthContext);
  const { misUsuarios, cargando, setMisUsuarios } = useMisUsuarios(auth.uid);
  const { formulario, handleChange, setFormulario } = useForm({
    nombre: "",
    apellido: "",
    correo: "",
    password: "",
    password2: "",
    role: "UsuarioPagado",
  });

  const { nombre, apellido, correo, password, password2, role } = formulario;
  const propietario = auth.uid;

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (password !== password2) toast.error("Las contraseñas no coinciden");

    if (password.length < 6) {
      toast.error("La contraseña tiene que ser de al menos 6 caracteres");
    }
    if (password === password2) {
      const resp = await crearUsuario(
        nombre,
        apellido,
        correo,
        password,
        role,
        propietario
      );

      if (resp.ok) {
        setMisUsuarios([...misUsuarios, resp.usuario]);
        setFormulario({
          nombre: "",
          apellido: "",
          correo: "",
          password: "",
          password2: "",
          role: "UsuarioPagado",
        });
        toast.success(resp.msg);
      }

      if (resp.errors) {
        resp.errors.map((e) => {
          return toast.error(e.msg);
        });
      }
    }
  };

  const mostrarContraseña = () => setShowPassword(!showPassword);

  const mostrarContraseña2 = () => setShowPassword2(!showPassword2);

  const borrarUsuario = async () => {
    console.log("Usuario borrado");
  };

  return (
    <>
      {(auth.usuarios && auth.usuarios > misUsuarios.length) ||
      auth.role === "Administrador" ? (
        <Form onSubmit={handleSubmit}>
          <Container>
            <Row>
              <div className="col-sm-12 col-md-12 col-lg-9">
                <div className="row">
                  <div className="col-sm-12 col-md-12 col-lg-6">
                    <Form.Group className="mb-3">
                      <Form.Label>Nombre(s)</Form.Label>
                      <Form.Control
                        autoComplete="off"
                        value={nombre}
                        onChange={handleChange}
                        name="nombre"
                        type="text"
                      />
                    </Form.Group>
                  </div>
                  <div className="col-sm-12 col-md-12 col-lg-6">
                    <Form.Group className="mb-3">
                      <Form.Label>Apellidos</Form.Label>
                      <Form.Control
                        autoComplete="off"
                        value={apellido}
                        onChange={handleChange}
                        name="apellido"
                        type="text"
                      />
                    </Form.Group>
                  </div>
                </div>
                <div className="row">
                  <div className="col-sm-12 col-md-12 col-lg-4">
                    <Form.Group className="mb-3">
                      <Form.Label>Correo</Form.Label>
                      <Form.Control
                        autoComplete="off"
                        type="email"
                        value={correo}
                        onChange={handleChange}
                        name="correo"
                        placeholder="ejemplo@example.com"
                      />
                    </Form.Group>
                  </div>
                  <div className="col-sm-12 col-md-12 col-lg-4">
                    <Form.Group className="mb-3">
                      <Form.Label>Contraseña</Form.Label>
                      <div className={styles.relative}>
                        <Form.Control
                          type={showPassword ? "text" : "password"}
                          value={password}
                          onChange={handleChange}
                          name="password"
                        />
                        <i
                          onClick={mostrarContraseña}
                          className={`${
                            showPassword ? "bi bi-eye-slash" : "bi bi-eye"
                          } ${styles.mostrarContraseña}`}
                        />
                      </div>
                    </Form.Group>
                  </div>
                  <div className="col-sm-12 col-md-12 col-lg-4">
                    <Form.Group className="mb-3">
                      <Form.Label>Confirma contraseña</Form.Label>
                      <div className={styles.relative}>
                        <Form.Control
                          type={showPassword2 ? "text" : "password"}
                          value={password2}
                          onChange={handleChange}
                          name="password2"
                        />
                        <i
                          onClick={mostrarContraseña2}
                          className={`${
                            showPassword2 ? "bi bi-eye-slash" : "bi bi-eye"
                          } ${styles.mostrarContraseña}`}
                        />
                      </div>
                    </Form.Group>
                  </div>
                </div>
              </div>
              <div className="col-sm-12 col-md-12 col-lg-3 text-lg-end text-center">
                <br />
                <Button titulo="Guardar" btn="Green" />
              </div>
            </Row>
            <hr />
          </Container>
        </Form>
      ) : (
        <div className={`${styles.titulo} text-center`}>
          Ya no puedes agregar más usuarios
        </div>
      )}

      <br />

      <Container>
        <Row>
          <div className="col-12">
            <div className="table-responsive-xxl">
              {misUsuarios.length === 0 ? (
                <div className={`${styles.titulo} text-center`}>
                  No has agregado ningún usuario
                </div>
              ) : (
                <table className={`${styles.customTable} table caption-top`}>
                  <caption>
                    Total de usuarios permitidos: {auth.usuarios}
                  </caption>

                  <th className="text-center">#</th>
                  <th>Nombre</th>
                  <th>Apellido</th>
                  <th>Correo</th>
                  <th></th>

                  <tbody>
                    {cargando ? (
                      <Loading />
                    ) : (
                      <>
                        {misUsuarios.map(
                          (usuario: UsuariosPagado, i: number) => (
                            <tr
                              key={usuario.uid}
                              className={`${styles.thover}`}
                            >
                              <td className={styles.tNumber}>{i + 1}</td>
                              <td className={styles.content}>
                                {usuario.nombre}
                              </td>
                              <td className={styles.content}>
                                {usuario.apellido}
                              </td>
                              <td className={styles.content}>
                                {usuario.correo}
                              </td>
                              <td className={`${styles.content} text-center`}>
                                <button
                                  className={styles.btnBorrar}
                                  onClick={borrarUsuario}
                                >
                                  <img
                                    src="/images/icons/properties-icons/4-white.png"
                                    alt="borrar usuario"
                                  />
                                </button>
                              </td>
                            </tr>
                          )
                        )}
                      </>
                    )}
                  </tbody>
                </table>
              )}
            </div>
          </div>
        </Row>
      </Container>
    </>
  );
};

export default MisUsuarios;
