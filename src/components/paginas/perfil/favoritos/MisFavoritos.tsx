import { useContext } from "react";
import { Container, Row } from "react-bootstrap";
import { AuthContext } from "../../../../context/auth/AuthContext";
import { useFavoritos } from "../../../../hooks/useFavoritos";
import Loading from "../../../ui/loading/Loading";
import FavPropertiesCard from "../../../ui/propertiescard/FavPropertiesCard";

const MiListaFavoritos = () => {
  const { auth } = useContext(AuthContext);
  const { favoritos, cargando } = useFavoritos(auth.uid);

  return (
    <Container>
      <Row>
        {cargando ? (
          <Loading />
        ) : (
          <>
            {favoritos.map((favorito) => (
              <FavPropertiesCard
                key={favorito._id}
                id={favorito._id}
                // titulo={favorito.titulo}
                // image={favorito.image}
                // icon={favorito.icon}
              />
            ))}
          </>
        )}
      </Row>
    </Container>
  );
};

export default MiListaFavoritos;
