import { FormEvent, useState } from "react";
import { Form, Modal } from "react-bootstrap";
import Select from "react-select";
import { formatPrice } from "../../../helpers/formatPrice";
import { useForm } from "../../../hooks/useForm";
import Button from "../../ui/button/Button";
import Modaltitle from "../../ui/modaltitle/Modaltitle";
import styles from "./paquetes.module.css";

interface Props {
  titulo: string;
  precio: number;
  descripcion: string;
  options?: Options[];
  avanzado?: boolean;
}

interface Options {
  value: number;
  label: string;
}

const PaqueteMultiple = (props: Props) => {
  const { titulo, precio, descripcion, options, avanzado } = props;
  const [show, setShow] = useState(false);
  const [usuariosSeleccionados, setUsuariosSeleccionados] = useState(0);
  const { formulario, handleChange } = useForm({ usuarios: 11 });
  const { usuarios } = formulario;

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(titulo);
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
          <Modaltitle titulo={titulo} />
          <div className="text-center">
            Especifique el número de usuarios a contratar
          </div>
          <Form onSubmit={onSubmit}>
            <div className="row">
              {avanzado ? (
                <>
                  <div className="col-6">Digite el número de usuarios</div>
                  <div className="col-6">
                    <input
                      type="number"
                      min={11}
                      name="usuarios"
                      value={usuarios}
                      onChange={handleChange}
                    />
                  </div>
                  {usuarios < 11 ? (
                    <div className={`text-center ${styles.paqueteInvalido}`}>
                      Paquete válido para 11 usuarios en adelante
                    </div>
                  ) : (
                    <div className={`${styles.precioAPagar} text-center`}>
                      {formatPrice(precio * usuarios)}
                    </div>
                  )}
                </>
              ) : (
                <>
                  <div className="col-6">Número de usuarios</div>
                  <div className="col-6">
                    <Select options={options} />
                  </div>
                </>
              )}
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

export default PaqueteMultiple;
