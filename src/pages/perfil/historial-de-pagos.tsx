import { useRouter } from "next/router";
import { useContext } from "react";
import HistorialPagos from "../../components/paginas/perfil/historial/HistorialPagos";
import SEO from "../../components/seo/SEO";
import Titulo from "../../components/ui/titulo/Titulo";
import { AuthContext } from "../../context/auth/AuthContext";
import { useHistorialPagos } from "../../hooks/useUserInfo";

const HistorialDePagos = () => {
  const router = useRouter();
  const { auth } = useContext(AuthContext);
  // const { total, cargando, historialPago } = useHistorialPagos(auth.uid);
  // console.log(historialPago);
  return (
    <div>
      <SEO titulo="Historial de pagos" url={router.asPath} />
      <Titulo titulo="Mis pagos" />
      <HistorialPagos />
    </div>
  );
};

export default HistorialDePagos;
