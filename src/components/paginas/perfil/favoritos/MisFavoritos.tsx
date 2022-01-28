import { useContext, useState } from "react";
import { Container, Pagination, Row } from "react-bootstrap";
import { AuthContext } from "../../../../context/auth/AuthContext";
import { useFavoritos } from "../../../../hooks/useFavoritos";
import Loading from "../../../ui/loading/Loading";
import FavPropertiesCard from "../../../ui/propertiescard/FavPropertiesCard";
import styles from "./FiltrosFavs.module.css";

const MiListaFavoritos = () => {
  const { auth } = useContext(AuthContext);
  const { favoritos, cargando } = useFavoritos(auth.uid);
  const [desde, setDesde] = useState(0);

  const handlePrevPage = () => {
    // if (desde === 0) {
    //   return;
    // } else {
    //   setDesde(desde - 15);
    // }
    console.log("Página anterior");
  };

  const handleNextPage = () => {
    // if (desde < 15) {
    //   setDesde(desde + 15);
    // } else {
    //   return;
    // }
    console.log("Página siguiente");
  };

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
