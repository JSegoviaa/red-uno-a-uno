import { useRouter } from "next/router";
import SEO from "../components/seo/SEO";

const Nosotros = () => {
  const { asPath } = useRouter();

  return (
    <>
      <SEO titulo="Acerca de nosotros" url={asPath} />
      <div>Acerca de nosotros</div>
    </>
  );
};

export default Nosotros;
