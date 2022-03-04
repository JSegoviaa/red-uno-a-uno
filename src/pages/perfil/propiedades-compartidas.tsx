import { useRouter } from "next/router";
import SEO from "components/seo/SEO";
import FiltroCompartidas from "components/paginas/perfil/compartidas/FiltroCompartidas";
import CompartidasCard from "components/paginas/perfil/compartidas/CompartidasCard";
import Titulo from "components/ui/titulo/Titulo";
import { PrivateRoute } from "hooks/usePrivateRoute";

const PropiedadesCompartidas = () => {
  const router = useRouter();

  return (
    <>
      <SEO titulo="Propiedades compartidas" url={router.asPath} />
      <Titulo titulo="Propiedades compartidas" />
      <FiltroCompartidas />
      <CompartidasCard />
    </>
  );
};

export default PrivateRoute(PropiedadesCompartidas);
