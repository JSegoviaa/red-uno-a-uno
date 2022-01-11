import { useRouter } from "next/router";
import AnadirInmueble from "../../components/paginas/perfil/propiedades/AnadirInmueble";
import SEO from "../../components/seo/SEO";
import { PrivateRoute } from "../../hooks/usePrivateRoute";

const AgregarInmueble = () => {
  const { asPath } = useRouter();

  return (
    <>
      <SEO titulo="Añadir inmueble" url={asPath} />
      <AnadirInmueble />
    </>
  );
};

export default PrivateRoute(AgregarInmueble);
