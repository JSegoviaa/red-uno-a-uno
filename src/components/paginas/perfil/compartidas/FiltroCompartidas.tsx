import { useState } from "react";
import { Container, Form } from "react-bootstrap";
import styles from "./Compartidas.module.css";

const FiltroCompartidas = () => {
  const [compartidas, setCompartidas] = useState("compartidas");

  return (
    <Container>
      <div className="container mt-4">
        <div className="row d-flex justify-content-end">
          <div className="col-sm-6 col-md-6 col-lg-4 col-xl-4">
            <Form.Select
              className={`${styles.customSelect} mb-4`}
              value={compartidas}
              onChange={(e) => setCompartidas(e.target.value)}
            >
              <option value="compartidas">Compartidas</option>
              <option value="mis-compartidas">
                Mis propiedades compartidas
              </option>
            </Form.Select>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default FiltroCompartidas;
