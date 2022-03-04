import SEO from "components/seo/SEO";
import Titulo from "components/ui/titulo/Titulo";
import { PrivateRoute } from "hooks/usePrivateRoute";
import { useRouter } from "next/router";

const Solicitudes = () => {
  const router = useRouter();

  return (
    <>
      <SEO titulo="Mis solicitudes" url={router.asPath} />
      <Titulo titulo="Solicitudes" />
    </>
  );
};

export default PrivateRoute(Solicitudes);
