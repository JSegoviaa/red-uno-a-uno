import { FormEvent, useState } from "react";
import { Form, Modal } from "react-bootstrap";
import Button from "../../ui/button/Button";
import Modaltitle from "../../ui/modaltitle/Modaltitle";
import styles from "./paquetes.module.css";

const Individual = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Individual");
  };

  return (
    <div className="col-sm-12 col-md-6 col-lg-4 col-xl-3 mb-4">
      <div className={styles.paquetesCard}>
        <div className="d-flex justify-content-center">
          <img src="/images/icons/individual.png" alt="Paquete" />
        </div>
        <div className={`${styles.paquetesCardTitle}  my-4 text-center`}>
          Individual
        </div>
        <hr />
        <ul>
          <table className={styles.tabla}>
            <tbody>
              <tr>
                <td className="tupla">
                  <li className={styles.listItems}>Anual</li>
                </td>
                <td className="tupla">
                  <div className={styles.paquetesCardPrecio2}>$3,999 MXN</div>
                </td>
              </tr>
              <tr>
                <td className="tupla">
                  <li className={styles.listItems}>Semestral</li>
                </td>
                <td className="tupla">
                  <div className={styles.paquetesCardPrecio2}>$1,999 MXN</div>
                </td>
              </tr>
              <tr>
                <td className="tupla">
                  <li className={styles.listItems}>Trimestral</li>
                </td>
                <td className="tupla">
                  <div className={styles.paquetesCardPrecio2}>$1,250 MXN</div>
                </td>
              </tr>
            </tbody>
          </table>
          <li className={styles.listItems}>
            Recomendado para asesor independiente
          </li>
        </ul>
        <div className={`${styles.ajusteBtn} text-center`}>
          <button
            onClick={handleShow}
            type="button"
            className={styles.btnContratar}
          >
            CONTRATAR
          </button>
        </div>
      </div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton />
        <Modal.Body>
          <Modaltitle titulo="Individual" />
          <div className="text-center">Selccione el tipo de plan que desea</div>
          <Form onSubmit={onSubmit}>
            <div className="row d-flex text-center">
              <div className="col-6">Anual</div>
              <div className="col-6">
                <input type="radio" name="individual" />
                <span className={styles.precio}>$3,999 MXN</span>
              </div>
            </div>
            <div className="row d-flex text-center">
              <div className="col-6">Semestral</div>
              <div className="col-6">
                <input type="radio" name="individual" />
                <span className={styles.precio}>$1,999 MXN</span>
              </div>
            </div>
            <div className="row d-flex text-center">
              <div className="col-6">Trimestral</div>
              <div className="col-6">
                <input type="radio" name="individual" />
                <span className={styles.precio}>$1,250 MXN</span>
              </div>
            </div>
            <div className="text-center">
              <Button titulo="Siguiente" />
            </div>
          </Form>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default Individual;
