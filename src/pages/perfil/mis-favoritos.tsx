import { useRouter } from "next/router";
import FiltroFavoritos from "../../components/paginas/perfil/favoritos/filtroFavoritos";
import MiListaFavoritos from "../../components/paginas/perfil/favoritos/MisFavoritos";
import SEO from "../../components/seo/SEO";
import Titulo from "../../components/ui/titulo/Titulo";

const MisFavoritos = () => {
  const { asPath } = useRouter();

  return (
    <>
      <SEO titulo="Mis favoritos" url={asPath} />
      <Titulo titulo="Mis favoritos" />
      <FiltroFavoritos />
      <MiListaFavoritos />
    </>
  );
};

export default MisFavoritos;
