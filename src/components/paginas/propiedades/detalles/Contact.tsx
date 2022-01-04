import { Col, Container, Row } from 'react-bootstrap';
import Button from '../../../ui/button/Button';
import styles from './Inmueble.module.css';

const Contact = () => {
  return (
    <section>
      <div className="row w-100 gx-0">
        <div className="col-sm-12 col-md-12 col-lg-5">
          <div className={styles.contenidoContactoDerecha}>
            <div className={styles.miniTutuloC}>
              Datos del contacto
            </div>
            <div className={`${styles.nombreC} mb-2`}>
              <img className='me-2' src="/images/icons/deatails-icons/propietario.png" alt="" /> Juan Pérez Hernández
            </div>
            <div className={styles.telefonoC}>
              <img className='me-2' src="/images/icons/deatails-icons/telefono.png" alt="" /> 998 123 4567
            </div>
          </div>
        </div>
        <div className="col-sm-12 col-md-12 col-lg-7">
          <div className={styles.contenidoContactoIzquierda}>
            <div className={`${styles.LeftTitulo} text-center mb-4`}>
              Inicia una conversación con el asesor <br /> de este inmueble
            </div>
            <div className="text-center">
              <Button titulo='iniciar Chat' />
            </div>
          </div>
        </div>
      </div>
      
    </section>
  );
};

export default Contact;
