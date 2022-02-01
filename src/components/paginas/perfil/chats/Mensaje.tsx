import styles from "./Contenido.module.css";
import { MensajeGuardado } from "../../../../interfaces/ChatInterface";
import { horaMes } from "../../../../helpers/horaMes";

interface Props {
  mensaje: MensajeGuardado;
  propio: boolean;
}

const Mensaje = ({ mensaje, propio }: Props) => {
  return (
    <div className="col-11 mb-2">
      <div className={propio ? styles.mensaje2 : styles.mensaje1}>
        {mensaje.mensaje}
        <div className={`d-flex justify-content-end ${styles.hora}`}>
          {horaMes(mensaje && mensaje.createdAt)}
        </div>
      </div>
    </div>
  );
};

export default Mensaje;
