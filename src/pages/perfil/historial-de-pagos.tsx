import { useRouter } from "next/router";
import HistorialPagos from "../../components/paginas/perfil/historial/HistorialPagos";
import SEO from "../../components/seo/SEO";
import Titulo from "../../components/ui/titulo/Titulo";

const HistorialDePagos = () => {
  const router = useRouter();

  return (
    <div>
      <SEO titulo="Historial de pagos" url={router.asPath} />
      <Titulo titulo="Mis pagos" />
      <HistorialPagos />
    </div>
  );
};

export default HistorialDePagos;
