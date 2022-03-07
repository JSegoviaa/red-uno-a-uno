import { useRouter } from "next/router";
import SEO from "components/seo/SEO";
import { AdminRoute } from "hooks/useAdminRoute";
import DashboardLayout from "components/layout/Dashboard";

const Index = () => {
  const router = useRouter();

  return (
    <>
      <SEO titulo="Panel de administración" url={router.asPath} />
      <DashboardLayout>Inicio</DashboardLayout>
    </>
  );
};

export default AdminRoute(Index);
