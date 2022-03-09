import { useRouter } from "next/router";
import DashboardLayout from "components/layout/Dashboard";
import SEO from "components/seo/SEO";
import { AdminRoute } from "hooks/useAdminRoute";

const Categorias = () => {
  const router = useRouter();

  return (
    <>
      <SEO titulo="Categorías" url={router.asPath} />
      <DashboardLayout titulo="Categorías">Categorías</DashboardLayout>
    </>
  );
};

export default AdminRoute(Categorias);
