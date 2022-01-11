import { useRouter } from "next/router";
import FiltroFavs from "../../components/paginas/perfil/favoritos/FiltroFavs";
import MiListaFavoritos from "../../components/paginas/perfil/favoritos/MisFavoritos";
import SEO from "../../components/seo/SEO";
import Titulo from "../../components/ui/titulo/Titulo";
import { PrivateRoute } from "../../hooks/usePrivateRoute";

const MisFavoritos = () => {
  const { asPath } = useRouter();

  return (
    <>
      <SEO titulo="Mis favoritos" url={asPath} />
      <Titulo titulo="Mis favoritos" />
      <FiltroFavs />
      <MiListaFavoritos />
    </>
  );
};

export default PrivateRoute(MisFavoritos);
