import { useRouter } from "next/router";
import PaquetesCards from "../components/paginas/paquetes/Paquetes";
import SEO from "../components/seo/SEO";
import Titulo from "../components/ui/titulo/Titulo";

const Paquetes = () => {
  const { asPath } = useRouter();

  return (
    <>
      <SEO titulo="Añade un paquete" url={asPath} />
      <Titulo titulo="Paquetes"/>
      <PaquetesCards/>
    </>
  );
};

export default Paquetes;
