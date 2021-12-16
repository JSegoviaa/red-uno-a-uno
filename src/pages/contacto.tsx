import { useRouter } from "next/router";
import SEO from "../components/seo/SEO";

const Contacto = () => {
  const { asPath } = useRouter();

  return (
    <>
      <SEO titulo="Contáctanos" url={asPath} />
      <div>Contacto</div>
    </>
  );
};

export default Contacto;
