import { useContext, useState } from "react";
import { Container, Pagination, Row } from "react-bootstrap";
import { AuthContext } from "../../../../context/auth/AuthContext";
import { useUserInmuebles } from "../../../../hooks/useUserInfo";
import Loading from "../../../ui/loading/Loading";
import PropertiesCard from "../../../ui/propertiescard/PropertiesCard";
import styles from "./MisPropiedades.module.css";

const MiListaPropiedades = () => {
  const { auth } = useContext(AuthContext);
  const { cargando, inmuebles } = useUserInmuebles(auth.uid);
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
            {inmuebles?.inmueblesUsuario.length === 0 ? (
              <h1 className={`${styles.titulo} text-center`}>
                Al parecer aún no tienes ningún inmueble
              </h1>
            ) : (
              <>
                {inmuebles?.inmueblesUsuario.map((inmueble) => (
                  <PropertiesCard
                    key={inmueble._id}
                    id={inmueble._id}
                    slug={inmueble.slug}
                    titulo={inmueble.titulo}
                    imgs={inmueble.imgs}
                    isActive={inmueble.publicado}
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

export default MiListaPropiedades;
