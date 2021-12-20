import { useRouter } from "next/router";
import Contact from "../../../components/paginas/propiedades/detalles/Contact";
import Detalles from "../../../components/paginas/propiedades/detalles/Detalles";
import Slider from "../../../components/paginas/propiedades/detalles/Slider";
import SEO from "../../../components/seo/SEO";

const DetallesPropiedad = () => {
  const { asPath } = useRouter();

  return (
    <>
      <SEO titulo="Detalles de la propiedad" url={asPath} />
      <Slider />
      <Detalles />
      <Contact />
    </>
  );
};

export default DetallesPropiedad;
