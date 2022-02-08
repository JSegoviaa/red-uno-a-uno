import { FormEvent, useContext, useState } from "react";
import {
  PaymentElement,
  useElements,
  useStripe,
} from "@stripe/react-stripe-js";
import { Form, Modal } from "react-bootstrap";
import Select from "react-select";
import { AuthContext } from "../../../context/auth/AuthContext";
import { formatPrice } from "../../../helpers/formatPrice";
import { useForm } from "../../../hooks/useForm";
import Button from "../../ui/button/Button";
import Modaltitle from "../../ui/modaltitle/Modaltitle";
import styles from "./paquetes.module.css";

interface Props {
  titulo: string;
  precio: number;
  descripcion: string;
  options?: any;
  avanzado?: boolean;
  usuario?: number;
}

const PaqueteMultiple = (props: Props) => {
  const { titulo, precio, descripcion, options, avanzado, usuario } = props;
  const { auth, abrirLogin } = useContext(AuthContext);
  const [show, setShow] = useState(false);
  const [mostrarPago, setMostrarPago] = useState(false);
  const stripe = useStripe();
  const elements = useElements();
  const [usuariosSeleccionados, setUsuariosSeleccionados] =
    useState<any>(usuario);
  const { formulario, handleChange } = useForm({ usuarios: 11 });
  const { usuarios } = formulario;

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const ocultarPago = () => setMostrarPago(false);
  const handleNext = () => setShow(false);

  const pagar = () => {
    handleNext();
    setMostrarPago(true);
  };

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!stripe || !elements) return;
  };

  return (
    <div className="col-sm-12 col-md-6 col-lg-4 col-xl-3 mb-4">
      <div className={styles.paquetesCard}>
        <div className="d-flex justify-content-center">
          <img src="/images/icons/basico.png" alt="..." />
        </div>
        <div className={`${styles.paquetesCardTitle}  my-4 text-center`}>
          {titulo}
        </div>
        <hr />
        <div className={`${styles.paquetesCardPrecio} text-center`}>
          {formatPrice(precio)} MXN
        </div>
        <ul>
          <li className={styles.listItems}>Anuales</li>
          <li className={styles.listItems}>{descripcion}</li>
        </ul>
        <div className={`${styles.ajusteBtn} text-center`}>
          <>
            {auth.uid ? (
              <button
                onClick={handleShow}
                type="button"
                className={styles.btnContratar}
              >
                CONTRATAR
              </button>
            ) : (
              <button
                onClick={abrirLogin}
                type="button"
                className={styles.btnContratar}
              >
                CONTRATAR
              </button>
            )}
          </>
        </div>
      </div>
      <Modal show={show} onHide={handleClose} contentClassName={styles.modalS2}>
        <Modal.Header closeButton className={styles.modalS2header} />
        <Modal.Body>
          <div className={styles.headTitle}>
            <Modaltitle titulo={titulo} />
          </div>
          <div className={`${styles.S2content} text-center mt-5 mb-4`}>
            Especifique el número de <br /> usuarios a contratar.
          </div>
          <Form onSubmit={onSubmit}>
            {avanzado ? (
              <>
                <div className="row d-flex justify-content-center">
                  <div className="col-10">
                    <div className="row d-flex justify-content-between">
                      <div className="col-9">
                        <div className={`${styles.S2labels}`}>
                          Digite el número de usuarios
                        </div>
                      </div>
                      <div className="col-3">
                        <input
                          type="number"
                          min={11}
                          name="usuarios"
                          value={usuarios}
                          onChange={handleChange}
                          className={styles.inputS2}
                        />
                      </div>
                      {usuarios < 11 ? (
                        <div
                          className={`col-12 text-center my-4 ${styles.paqueteInvalido}`}
                        >
                          Paquete válido para 11 usuarios en adelante
                        </div>
                      ) : (
                        <>
                          <div
                            className={`${styles.precioAPagar} col-12 text-center mt-4 mb-5`}
                          >
                            {formatPrice(precio * usuarios)}
                          </div>
                          <div className="col-12 text-center">
                            <Button titulo="Siguiente" onClick={pagar} />
                          </div>
                        </>
                      )}
                    </div>
                  </div>
                </div>
              </>
            ) : (
              <>
                <div className="row d-flex justify-content-center ">
                  <div className="col-sm-12 col-md-12 col-lg-9">
                    <div className="row d-flex justify-content-between">
                      <div className="col-8">
                        <div className={`${styles.S2labels}`}>
                          Número de usuarios
                        </div>
                      </div>
                      <div className="col-4">
                        <Select
                          defaultValue={usuariosSeleccionados}
                          onChange={setUsuariosSeleccionados}
                          options={options}
                          classNamePrefix={styles.selectS2}
                        />
                      </div>
                      <div className="col-12">
                        <div className="text-center mt-4">
                          {usuariosSeleccionados.value ? (
                            <div
                              className={`${styles.precioAPagar} text-center`}
                            >
                              {formatPrice(
                                precio * usuariosSeleccionados.value
                              ) + " MXN"}
                            </div>
                          ) : null}
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="text-center mt-5">
                          {!usuariosSeleccionados.value ? (
                            <Button titulo="Siguiente" btn="Disabled" />
                          ) : (
                            <Button titulo="Siguiente" onClick={pagar} />
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            )}
          </Form>
        </Modal.Body>
      </Modal>

      <Modal show={mostrarPago} onHide={ocultarPago}>
        <Modal.Header closeButton className={styles.modalS2header} />
        <PaymentElement id="payment-element" />
      </Modal>
    </div>
  );
};

export default PaqueteMultiple;
