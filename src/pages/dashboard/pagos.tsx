import { useRouter } from "next/router";
import DashboardLayout from "components/layout/Dashboard";
import SEO from "components/seo/SEO";
import { AdminRoute } from "hooks/useAdminRoute";

const pagos = () => {
  const router = useRouter();
  return (
    <>
      <SEO titulo="Pagos" url={router.asPath} />
      <DashboardLayout>Pagos</DashboardLayout>
    </>
  );
};

export default AdminRoute(pagos);
