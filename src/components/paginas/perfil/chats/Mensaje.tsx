import Linkify from "linkify-react";
import styles from "./Contenido.module.css";
import { MensajeGuardado } from "../../../../interfaces/ChatInterface";
import { horaMes } from "../../../../helpers/horaMes";

interface Props {
  mensaje: MensajeGuardado;
  propio: boolean;
}
const options = {
  defaultProtocol: "https",
  target: "_blank",
  rel: "noopener noreferrer",
};

const Mensaje = ({ mensaje, propio }: Props) => {
  return (
    <div className="col-11 mb-2">
      <div className={propio ? styles.mensaje2 : styles.mensaje1}>
        <Linkify options={options}>{mensaje.mensaje}</Linkify>
        <div className={`d-flex justify-content-end ${styles.hora}`}>
          {horaMes(mensaje && mensaje.createdAt)}
        </div>
      </div>
    </div>
  );
};

export default Mensaje;
