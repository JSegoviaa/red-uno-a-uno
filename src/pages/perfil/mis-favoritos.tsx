import { useRouter } from "next/router";
import SEO from "../../components/seo/SEO";

const MisFavoritos = () => {
  const { asPath } = useRouter();

  return (
    <>
      <SEO titulo="Mis favoritos" url={asPath} />
      <div>Mis favoritos</div>
    </>
  );
};

export default MisFavoritos;
