import { useState } from "react";
import { Container, Form } from "react-bootstrap";
import styles from "./Compartidas.module.css";

const FiltroCompartidas = () => {
  const [compartidas, setCompartidas] = useState("");

  return (
    <Container>
      <section>
        <div className="container mt-4">
          <div className="row d-flex justify-content-end">
            <div className="col-sm-6 col-md-6 col-lg-4 col-xl-4">
              <Form.Select
                aria-label="Default select example"
                className={`${styles.customSelect} mb-4`}
                // value={dueño}
                // onChange={(e) => setDueño(e.target.value)}
              >
                <option value="compartidas">Compartidas</option>
                <option value="mis-compartidas">
                  Mis propiedades compartidas
                </option>
              </Form.Select>
            </div>
          </div>
        </div>
      </section>
    </Container>
  );
};

export default FiltroCompartidas;
