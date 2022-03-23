import { useRouter } from "next/router";
import SEO from "components/seo/SEO";
import NotificacionResp from "components/ui/responsive/NotificacionResp";
import Titulo from "components/ui/titulo/Titulo";
import { PrivateRoute } from "hooks/usePrivateRoute";

const Solicitudes = () => {
  const router = useRouter();

  return (
    <>
      <SEO titulo="Mis solicitudes" url={router.asPath} />
      <Titulo titulo="Solicitudes" />
      <NotificacionResp />
    </>
  );
};

export default PrivateRoute(Solicitudes);
