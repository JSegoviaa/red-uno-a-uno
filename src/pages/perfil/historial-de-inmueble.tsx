import { useRouter } from "next/router";
import Mihistorial from "../../components/paginas/perfil/historial/Mihistorial";
import SEO from "../../components/seo/SEO";
import Titulo from "../../components/ui/titulo/Titulo";
import { PrivateRoute } from "../../hooks/usePrivateRoute";

const HistorialInmueble = () => {
  const { asPath } = useRouter();

  return (
    <>
      <SEO titulo="Historial de inmuebles" url={asPath} />
      <Titulo titulo="Historial de inmuebles" />
      <Mihistorial />
    </>
  );
};

<<<<<<< HEAD
export default HistorialInmueble;
=======
export default PrivateRoute(HistorialInmueble);
>>>>>>> 0f2eb67b4acc7a543c19a02552237f21db5f2472
