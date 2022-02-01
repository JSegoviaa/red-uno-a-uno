import { useContext, useState } from "react";
import { Container, Pagination, Row } from "react-bootstrap";
import { AuthContext } from "../../../../context/auth/AuthContext";
import { useMisFavoritos } from "../../../../hooks/useFavoritos";
import Loading from "../../../ui/loading/Loading";
import FavPropertiesCard from "../../../ui/propertiescard/FavPropertiesCard";
import styles from "./FiltrosFavs.module.css";

const MiListaFavoritos = () => {
  const { auth } = useContext(AuthContext);
  const [desde, setDesde] = useState(0);
  const { misFavoritos, cargando, total } = useMisFavoritos(auth.uid, desde);

  const handlePrevPage = () => {
    if (desde === 0) {
      return;
    } else {
      setDesde(desde - 20);
    }
  };

  const handleNextPage = () => {
    if (desde < total - 20) {
      setDesde(desde + 20);
    } else {
      return;
    }
  };

  return (
    <Container>
      <Row>
        {cargando ? (
          <Loading />
        ) : (
          <>
            {misFavoritos.length === 0 ? (
              <div className={`${styles.titulo} text-center`}>
                Aún no has agregado favoritos
              </div>
            ) : (
              <>
                {misFavoritos.map((favorito) => (
                  <FavPropertiesCard
                    key={favorito._id}
                    id={favorito._id}
                    titulo={
                      favorito.inmueble
                        ? favorito.inmueble.titulo
                        : "Inmueble dado de baja por el promotor"
                    }
                    slug={favorito.inmueble ? favorito.inmueble.slug : ""}
                    img={favorito.inmueble ? favorito.inmueble.imgs : ""}
                    solicitud={favorito.solicitud}
                  />
                ))}
                <div className="d-flex justify-content-center">
                  <Pagination>
                    <Pagination.Prev onClick={handlePrevPage} />
                    <Pagination.Next onClick={handleNextPage} />
                  </Pagination>
                </div>
              </>
            )}
          </>
        )}
      </Row>
    </Container>
  );
};

export default MiListaFavoritos;
