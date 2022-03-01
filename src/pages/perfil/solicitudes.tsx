import SEO from "components/seo/SEO";
import Titulo from "components/ui/titulo/Titulo";
import { useRouter } from "next/router";

const solicitudes = () => {
  const router = useRouter();

  return (
    <>
      <SEO titulo="Mis solicitudes" url={router.asPath} />
      <Titulo titulo="Solicitudes" />
    </>
  );
};

export default solicitudes;