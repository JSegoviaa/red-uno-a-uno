import { useRouter } from "next/router";
import DashboardLayout from "components/layout/Dashboard";
import SEO from "components/seo/SEO";

const AprobarPagos = () => {
  const router = useRouter();

  return (
    <>
      <SEO titulo="Aprobar pagos" url={router.asPath} />
      <DashboardLayout>Aprobar pagos</DashboardLayout>
    </>
  );
};

export default AprobarPagos;
