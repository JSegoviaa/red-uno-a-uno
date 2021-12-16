import { useRouter } from "next/router";
import SEO from "../../../components/seo/SEO";

const DetallesPropiedad = () => {
  const { asPath } = useRouter();

  return (
    <>
      <SEO titulo="Detalles de la propiedad" url={asPath} />
      <div>Detalles de la propiedad</div>
    </>
  );
};

export default DetallesPropiedad;
