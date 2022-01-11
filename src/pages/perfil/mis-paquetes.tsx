import { useRouter } from "next/router";
import PaquetesCards from "../../components/paginas/paquetes/Paquetes";
import SEO from "../../components/seo/SEO";
import Titulo from "../../components/ui/titulo/Titulo";
import { PrivateRoute } from "../../hooks/usePrivateRoute";

const MisPaquetes = () => {
  const { asPath } = useRouter();

  return (
    <>
      <SEO titulo="Mis paquetes" url={asPath} />
      <Titulo titulo="Mis paquetes" />
      <PaquetesCards />
    </>
  );
};

export default PrivateRoute(MisPaquetes);
