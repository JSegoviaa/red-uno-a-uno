import { useRouter } from "next/router";
import SEO from "../../components/seo/SEO";

const AgregarInmueble = () => {
  const { asPath } = useRouter();

  return (
    <>
      <SEO titulo="Añadir inmueble" url={asPath} />
      <div>Añadir inmueble</div>
    </>
  );
};

export default AgregarInmueble;
