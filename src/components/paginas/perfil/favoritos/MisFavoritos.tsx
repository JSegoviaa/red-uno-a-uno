import { useContext } from "react";
import { Container, Row } from "react-bootstrap";
import { AuthContext } from "../../../../context/auth/AuthContext";
import { useFavoritos } from "../../../../hooks/useFavoritos";
import Loading from "../../../ui/loading/Loading";
import FavPropertiesCard from "../../../ui/propertiescard/FavPropertiesCard";
import styles from "./FiltrosFavs.module.css";

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
            {favoritos.length === 0 ? (
              <div className={`${styles.titulo} text-center`}>
                Aún no has agregado favoritos
              </div>
            ) : (
              <>
                {favoritos.map((favorito) => (
                  <FavPropertiesCard
                    key={favorito._id}
                    id={favorito._id}
                    titulo={
                      favorito.inmueble
                        ? favorito.inmueble.titulo
                        : "Inmueble dado de baja por el promotor"
                    }
                    slug={favorito.inmueble ? favorito.inmueble.slug : ""}
                    img={favorito.inmueble.imgs}
                    // icon={favorito.icon}
                  />
                ))}
              </>
            )}
          </>
        )}
      </Row>
    </Container>
  );
};

export default MiListaFavoritos;
