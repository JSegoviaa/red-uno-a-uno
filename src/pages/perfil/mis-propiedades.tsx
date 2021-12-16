import { useRouter } from "next/router";
import SEO from "../../components/seo/SEO";

const MisPropiedades = () => {
  const { asPath } = useRouter();

  return (
    <>
      <SEO titulo="Mis Propiedades" url={asPath} />
      <div>Mis propiedades</div>
    </>
  );
};

export default MisPropiedades;
