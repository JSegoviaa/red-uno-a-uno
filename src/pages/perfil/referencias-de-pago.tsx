import { useRouter } from "next/router";
import SEO from "components/seo/SEO";
import ListaReferencias from "components/paginas/perfil/referencias/ListaReferencias";
import DatosReferencias from "components/paginas/perfil/referencias/DatosReferencias";
import Titulo from "components/ui/titulo/Titulo";

const ReferenciasPago = () => {
  const router = useRouter();

  return (
    <>
      <SEO titulo="Referenias de pago" url={router.asPath} />
      <Titulo titulo="Referencias de pago" />
      {/* <DatosReferencias /> */}
      <ListaReferencias />
    </>
  );
};

export default ReferenciasPago;
