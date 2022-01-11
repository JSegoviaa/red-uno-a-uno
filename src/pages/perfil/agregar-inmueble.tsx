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

<<<<<<< HEAD
export default AgregarInmueble;
=======
export default PrivateRoute(AgregarInmueble);
>>>>>>> 0f2eb67b4acc7a543c19a02552237f21db5f2472
