import { useRouter } from "next/router";
import { Container } from "react-bootstrap";
import Button from "../../../ui/button/Button";
import styles from "./Perfil.module.css";

const Perfil = () => {
  const router = useRouter();

  const misPaquetes = () => router.push("/perfil/mis-paquetes");

  const misPropiedades = () => router.push("/perfil/mis-paquetes");

  return (
    <Container>
      <div className="d-flex justify-content-center">
        <div className="text-center">
          <div className="pt-5 pb-3">
            <img src="/images/icons/perfil.png" />
          </div>
          <div className={styles.nombre}>Juan Pérez Hernández</div>
          <div className={styles.paquete}>Paquete básico</div>
          <div className={styles.empresa}>Karls and Wallace</div>
          <div className={styles.correo}>juan.perez.h@karlsandwallace.com</div>
          <div className={styles.telefono}>112 23 34 455</div>
        </div>
      </div>
      <hr />
      <div className="py-5">
        <div className="d-flex justify-content-around">
          <Button titulo="Mis paquetes" btn="Secondary" onClick={misPaquetes} />
          <Button titulo="Historial de inmuebles" btn="Secondary" />
          <Button
            titulo="Mis propiedades"
            btn="Secondary"
            onClick={misPropiedades}
          />
        </div>
      </div>
    </Container>
  );
};

export default Perfil;
