import styles from './Contenido.module.css';
import { MensajeGuardado } from '../../../../interfaces/ChatInterface';
import { horaMes } from '../../../../helpers/horaMes';

interface Props {
  mensaje: MensajeGuardado;
  propio: boolean;
}

const Mensaje = ({ mensaje, propio }: Props) => {
  return (
    <div className="col-11 mb-2">
      <div className={propio ? styles.mensaje2 : styles.mensaje1}>
        {mensaje.mensaje}
      </div>
      <div>{horaMes(mensaje.createdAt)}</div>
    </div>
  );
};

export default Mensaje;
