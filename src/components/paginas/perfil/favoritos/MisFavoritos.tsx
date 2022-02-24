import { InmuebleContext } from "context/inmuebles/InmuebleContext";
import { useContext, useState } from "react";
import { Container, Pagination, Row } from "react-bootstrap";
import { toast } from "react-toastify";
import { AuthContext } from "../../../../context/auth/AuthContext";
import { eliminarFavorito } from "../../../../helpers/fetch";
import { useMisFavoritos } from "../../../../hooks/useFavoritos";
import Loading from "../../../ui/loading/Loading";
import FavPropertiesCard from "../../../ui/propertiescard/FavPropertiesCard";
import styles from "./FiltrosFavs.module.css";

const MiListaFavoritos = () => {
  const { auth } = useContext(AuthContext);
  const { dueño } = useContext(InmuebleContext);
  const [desde, setDesde] = useState(0);
  const { misFavoritos, cargando, total, setMisFavoritos } = useMisFavoritos(
    auth.uid,
    dueño,
    desde
  );

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

  const handleDelete = async (id: string) => {
    const resp = await eliminarFavorito(`favoritos/${id}`);
    if (resp.ok) {
      toast.success(resp.msg);
    }

    const nuevosFavoritos = misFavoritos.filter(
      (favorito) => favorito._id !== id
    );

    setMisFavoritos(nuevosFavoritos);
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
                    propietario={favorito.propietario}
                    handleDelete={handleDelete}
                  />
                ))}
                {total > 20 ? (
                  <div className="d-flex justify-content-center">
                    <Pagination>
                      <Pagination.Prev onClick={handlePrevPage} />
                      <Pagination.Next onClick={handleNextPage} />
                    </Pagination>
                  </div>
                ) : null}
              </>
            )}
          </>
        )}
      </Row>
    </Container>
  );
};

export default MiListaFavoritos;
