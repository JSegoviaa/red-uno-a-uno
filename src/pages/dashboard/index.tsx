import { useRouter } from "next/router";
import SEO from "components/seo/SEO";
import { AdminRoute } from "hooks/useAdminRoute";
import DashboardLayout from "components/layout/Dashboard";
import WalletCard from "components/paginas/dashboard/resumen/WalletCard";
import ReferenciasCard from "components/paginas/dashboard/resumen/ReferenciasCard";
import PropiedadesCard from "components/paginas/dashboard/resumen/PropiedadesCard";
import UsuariosCard from "components/paginas/dashboard/resumen/UsuariosCard";

const Index = () => {
  const router = useRouter();

  return (
    <>
      <SEO titulo="Panel de administración" url={router.asPath} />
      <DashboardLayout titulo="RESUMEN">
        <section className="my-5">
          <div className="container">
            <div className="row ">
              <WalletCard />
              <ReferenciasCard />
              <PropiedadesCard />
              <UsuariosCard />
            </div>
          </div>
        </section>
      </DashboardLayout>
    </>
  );
};

export default AdminRoute(Index);
