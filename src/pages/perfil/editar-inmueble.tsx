import { useContext } from "react";
import { useRouter } from "next/router";
import { Container } from "react-bootstrap";
import SEO from "components/seo/SEO";
import { InmuebleContext } from "context/inmuebles/InmuebleContext";
import { PrivateRoute } from "hooks/usePrivateRoute";
import { useInmueble } from "hooks/useInmuebles";
import Loading from "components/ui/loading/Loading";
import EditarInformacion from "components/paginas/perfil/editarPropiedad/EditarInformacion";
import EditarImgs from "components/paginas/perfil/editarPropiedad/EditarImgs";
import Titulo from "components/ui/titulo/Titulo";

const EditarInmueble = () => {
  const { editar, idInmueble } = useContext(InmuebleContext);
  const router = useRouter();
  const { cargando } = useInmueble(idInmueble);

  return (
    <>
      <SEO titulo="Editar inmueble" url={router.asPath} />
      <Titulo
        titulo={
          editar === "Información" ? "Editar información" : "Editar imágenes"
        }
      />
      <Container className="text-center">
        {editar === "Información" ? (
          <>{cargando ? <Loading /> : <EditarInformacion />}</>
        ) : (
          <>{cargando ? <Loading /> : <EditarImgs />}</>
        )}
      </Container>
    </>
  );
};

export default PrivateRoute(EditarInmueble);
