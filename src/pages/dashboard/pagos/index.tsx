import { useRouter } from "next/router";
import SEO from "components/seo/SEO";
import DashboardLayout from "components/layout/Dashboard";

const index = () => {
  const router = useRouter();

  return (
    <>
      <SEO titulo="Pagos" url={router.asPath} />
      <DashboardLayout titulo="Pagos">Pagos</DashboardLayout>
    </>
  );
};

export default index;
