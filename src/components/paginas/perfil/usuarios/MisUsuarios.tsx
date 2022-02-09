import React, { FormEvent } from "react";
import { Container, Form, Row } from "react-bootstrap";
import { useForm } from "../../../../hooks/useForm";
import Button from "../../../ui/button/Button";
import styles from "./MisUsuarios.module.css";

const usuarios = [
  {
    id: 1,
    nombre: "Juan",
    apellido: "Espinito",
    correo: "juan@test.com",
    estado: true,
  },
  {
    id: 2,
    nombre: "Juan",
    apellido: "Espinito",
    correo: "juan@test.com",
    estado: true,
  },
  {
    id: 3,
    nombre: "Juan",
    apellido: "Espinito",
    correo: "juan@test.com",
    estado: true,
  },
  {
    id: 4,
    nombre: "Juan",
    apellido: "Espinito",
    correo: "juan@test.com",
    estado: true,
  },
  {
    id: 5,
    nombre: "Juan",
    apellido: "Espinito",
    correo: "juan@test.com",
    estado: true,
  },
];

const MisUsuarios = () => {
  const { formulario, handleChange, setFormulario } = useForm({
    nombre: "",
    apellido: "",
    correo: "",
    password: "",
    password2: "",
  });

  const { nombre, apellido, correo, password, password2 } = formulario;

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormulario({
      nombre: "",
      apellido: "",
      correo: "",
      password: "",
      password2: "",
    });
  };

  const borrarUsuario = async () => {
    console.log("Usuario borrado");
  };

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <Container>
          <Row>
            <div className="col-sm-12 col-md-12 col-lg-9">
              <div className="row">
                <div className="col-sm-12 col-md-12 col-lg-6">
                  <Form.Group className="mb-3">
                    <Form.Label>Nombre(s)</Form.Label>
                    <Form.Control
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
                    <Form.Control
                      type="password"
                      value={password}
                      onChange={handleChange}
                      name="password"
                    />
                  </Form.Group>
                </div>
                <div className="col-sm-12 col-md-12 col-lg-4">
                  <Form.Group className="mb-3">
                    <Form.Label>Confirma contraseña</Form.Label>
                    <Form.Control
                      type="password"
                      value={password2}
                      onChange={handleChange}
                      name="password2"
                    />
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
      <br />
      <section>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="table-responsive-xxl">
                <table className={`${styles.customTable} table caption-top`}>
                  <caption>Total de usuarios permitidos: 9</caption>

                  <th className="text-center">#</th>
                  <th>Nombre</th>
                  <th>Apellido</th>
                  <th>Correo</th>
                  <th>Estatus</th>
                  <th></th>

                  <tbody>
                    {usuarios.map((usuario) => (
                      <tr key={usuario.id} className={`${styles.thover} `}>
                        <td className={styles.tNumber}>{usuario.id}</td>
                        <td className={styles.content}>{usuario.nombre}</td>
                        <td className={styles.content}>{usuario.apellido}</td>
                        <td className={styles.content}>{usuario.correo} </td>
                        <td className={styles.sign}>
                          {usuario.estado ? "Activo" : "Inactivo"}
                        </td>
                        <td className={`${styles.content} text-center`}>
                          <button
                            className={styles.btnBorrar}
                            onClick={borrarUsuario}
                          >
                            <img
                              src="/images/icons/properties-icons/4-white.png"
                              alt="..."
                            />
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default MisUsuarios;
