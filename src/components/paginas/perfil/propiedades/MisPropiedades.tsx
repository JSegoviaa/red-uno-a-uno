import { useContext } from "react";
import { Container, Row } from "react-bootstrap";
import { AuthContext } from "../../../../context/auth/AuthContext";
import { useUserInmuebles } from "../../../../hooks/useUserInfo";
import Loading from "../../../ui/loading/Loading";
import PropertiesCard from "../../../ui/propertiescard/PropertiesCard";
import styles from "./MisPropiedades.module.css";

const MiListaPropiedades = () => {
  const { auth } = useContext(AuthContext);
  const { cargando, inmuebles } = useUserInmuebles(auth.uid);

  return (
    <Container>
      <Row>{cargando ? <Loading /> : <div>hola</div>}</Row>
    </Container>
  );
};

export default MiListaPropiedades;
