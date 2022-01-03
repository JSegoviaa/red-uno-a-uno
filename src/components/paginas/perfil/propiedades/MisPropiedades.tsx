import { Container, Row } from "react-bootstrap";
import { useUserInfo } from "../../../../hooks/useUserInfo";
import PropertiesCard from "../../../ui/propertiescard/PropertiesCard";
import styles from "./MisPropiedades.module.css";

const MiListaPropiedades = () => {
  const { user } = useUserInfo();
  return (
    <Container>
      <Row>
        {user?.inmuebles.map((propiedad) => (
          <PropertiesCard
            key={propiedad._id}
            id={propiedad._id}
            titulo={propiedad.titulo}
            // image={propiedad.image}
          />
        ))}
      </Row>
    </Container>
  );
};

export default MiListaPropiedades;
