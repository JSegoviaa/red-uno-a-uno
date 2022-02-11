import { useContext, useState } from "react";
import { Container, Pagination, Row } from "react-bootstrap";
import { AuthContext } from "../../../../context/auth/AuthContext";
import { InmuebleContext } from "../../../../context/inmuebles/InmuebleContext";
import { useUserInmuebles } from "../../../../hooks/useUserInfo";
import Loading from "../../../ui/loading/Loading";
import PropertiesCard from "../../../ui/propertiescard/PropertiesCard";
import styles from "./MisPropiedades.module.css";

const MiListaPropiedades = () => {
  const { auth } = useContext(AuthContext);
  const { eliminarInmueble, actualizarInmueble } = useContext(InmuebleContext);
  const [desde, setDesde] = useState(0);
  const { cargando, inmuebles, total, setInmuebles } = useUserInmuebles(
    auth.uid,
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

  const handleDelete = async (pid: string) => {
    await eliminarInmueble(pid);
    const nuevosInmuebles = inmuebles?.filter(
      (inmueble) => inmueble._id !== pid
    );
    setInmuebles(nuevosInmuebles);
  };

  const handleActivar = async (pid: string) => {
    await actualizarInmueble({ publicado: true }, pid);

    const inmuebleActualizado = inmuebles?.map((inmueble) => {
      if (inmueble._id === pid) {
        return { ...inmueble, publicado: true };
      }

      return inmueble;
    });

    setInmuebles(inmuebleActualizado);
  };

  const handleDesactivar = async (pid: string) => {
    await actualizarInmueble({ publicado: false }, pid);

    const inmuebleActualizado = inmuebles?.map((inmueble) => {
      if (inmueble._id === pid) {
        return { ...inmueble, publicado: false };
      }

      return inmueble;
    });

    setInmuebles(inmuebleActualizado);
  };

  return (
    <Container>
      <Row>
        {cargando ? (
          <Loading />
        ) : (
          <>
            {inmuebles?.length === 0 ? (
              <h1 className={`${styles.titulo} text-center`}>
                Al parecer aún no tienes ningún inmueble
              </h1>
            ) : (
              <>
                {inmuebles?.map((inmueble) => (
                  <PropertiesCard
                    key={inmueble._id}
                    id={inmueble._id}
                    slug={inmueble.slug}
                    titulo={inmueble.titulo}
                    imgs={inmueble.imgs}
                    isActive={inmueble.publicado}
                    handleDelete={handleDelete}
                    handleActivar={handleActivar}
                    handleDesactivar={handleDesactivar}
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

export default MiListaPropiedades;
