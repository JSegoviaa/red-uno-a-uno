import { useContext } from "react";
import { Container, Form } from "react-bootstrap";
import { AuthContext } from "context/auth/AuthContext";
import { InmuebleContext } from "context/inmuebles/InmuebleContext";
import styles from "./Compartidas.module.css";

const FiltroCompartidas = () => {
  const { auth } = useContext(AuthContext);
  const { estado, setEstado, misCompUser, setMisCompUser } =
    useContext(InmuebleContext);

  const id: any = auth.uid;

  return (
    <Container>
      <div className="container mt-4">
        <div className="row d-flex justify-content-end">
          <div className="col-sm-6 col-md-6 col-lg-4 col-xl-4">
            <Form.Select
              className={`${styles.customSelect} mb-4`}
              value={estado}
              onChange={(e) => setEstado(e.target.value)}
            >
              <option value="Pendiente">Pendiente</option>
              <option value="Aprobado">Aprobado</option>
              <option value="Rechazado">Rechazado</option>
            </Form.Select>
          </div>
          <div className="col-sm-6 col-md-6 col-lg-4 col-xl-4">
            <Form.Select
              className={`${styles.customSelect} mb-4`}
              value={misCompUser}
              onChange={(e) => setMisCompUser(e.target.value)}
            >
              <option value={""}>Propiedades que comparto</option>
              <option value={id}>Propiedades que me comparten</option>
            </Form.Select>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default FiltroCompartidas;
