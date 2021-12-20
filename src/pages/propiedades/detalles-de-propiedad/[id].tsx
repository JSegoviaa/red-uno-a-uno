import { useRouter } from "next/router";
import Detalles from "../../../components/paginas/propiedades/detalles/Detalles";
import Slider from "../../../components/paginas/propiedades/detalles/Slider";
import SEO from "../../../components/seo/SEO";
import Contacto from "../../contacto";

const DetallesPropiedad = () => {
  const { asPath } = useRouter();

  return (
    <>
      <SEO titulo="Detalles de la propiedad" url={asPath} />
      <Slider />
      <Detalles />
      <Contacto />
    </>
  );
};

export default DetallesPropiedad;
