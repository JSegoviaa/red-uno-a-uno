import { useRouter } from "next/router";
import Caracteristicas1 from "../components/paginas/nosotros/Caracteristicas1";
import Características2 from "../components/paginas/nosotros/Características2";
import Info from "../components/paginas/nosotros/Info";
import SEO from "../components/seo/SEO";
import Titulo from "../components/ui/titulo/Titulo";

const Nosotros = () => {
  const { asPath } = useRouter();

  return (
    <>
      <SEO titulo="Acerca de nosotros" url={asPath} />
      <Titulo titulo="Nosotros" />
      <Info />
      <Caracteristicas1 />
      <Características2 />
    </>
  );
};

export default Nosotros;
