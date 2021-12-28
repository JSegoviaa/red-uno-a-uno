import { useContext } from 'react';
import { useRouter } from 'next/router';
import { Col, Container, Row } from 'react-bootstrap';
import { AuthContext } from '../../../../context/auth/AuthContext';
import Button from '../../../ui/button/Button';
import styles from './Perfil.module.css';
import { useUserInfo } from '../../../../hooks/useUserInfo';

const Perfil = () => {
  const router = useRouter();

  const misPaquetes = () => router.push('/perfil/mis-paquetes');

  const misPropiedades = () => router.push('/perfil/mis-propiedades');

  const { auth, logOut } = useContext(AuthContext);

  const { user } = useUserInfo();

  return (
    <Container>
      <div className="d-flex justify-content-center">
        <div className="text-center">
          <div className="pt-5 pb-3">
            <img src="/images/icons/perfil.png" />
          </div>
          <div className={styles.nombre}>
            {auth.nombre} {auth.apellido}
          </div>
          <div className={styles.paquete}>Paquete básico</div>
          <div className={styles.empresa}>Karls and Wallace</div>
          <div className={styles.correo}>{auth.correo} </div>
          <div className={styles.telefono}>112 23 34 455</div>
        </div>
      </div>
      <hr />
      <h3 className="d-flex justify-content-center pointer" onClick={logOut}>
        Cerrar sesión
      </h3>

      <div className="py-5">
        <Row className="d-flex justify-content-center text-center">
          <Col className="py-3">
            <Button
              titulo="Mis paquetes"
              btn="Secondary"
              onClick={misPaquetes}
            />
          </Col>
          <Col className="py-3">
            <Button titulo="Historial de inmuebles" btn="Secondary" />
          </Col>
          <Col className="py-3">
            <Button
              titulo="Mis propiedades"
              btn="Secondary"
              onClick={misPropiedades}
            />
          </Col>
        </Row>
      </div>
    </Container>
  );
};

export default Perfil;
