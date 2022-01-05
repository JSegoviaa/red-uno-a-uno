import { useContext } from "react";
import { Container, Row } from "react-bootstrap";
import { AuthContext } from "../../../../context/auth/AuthContext";
import { useUserInmuebles } from "../../../../hooks/useUserInfo";
import Loading from "../../../ui/loading/Loading";
import PropertiesCard from "../../../ui/propertiescard/PropertiesCard";

const MiListaPropiedades = () => {
  const { auth } = useContext(AuthContext);
  const { cargando, inmuebles } = useUserInmuebles(auth.uid);

  return (
    <Container>
      <Row>
        {cargando ? (
          <Loading />
        ) : (
          <>
            {inmuebles?.inmueblesUsuario.map((inmueble) => (
              <PropertiesCard
                key={inmueble._id}
                id={inmueble._id}
                titulo={inmueble.titulo}
              />
            ))}
          </>
        )}
      </Row>
    </Container>
  );
};

export default MiListaPropiedades;
