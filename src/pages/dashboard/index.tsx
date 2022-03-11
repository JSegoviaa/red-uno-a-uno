import { useRouter } from "next/router";
import SEO from "components/seo/SEO";
import { AdminRoute } from "hooks/useAdminRoute";
import DashboardLayout from "components/layout/Dashboard";
import styles from './Resume.module.css'

const Index = () => {
  const router = useRouter();

  return (
    <>
      <SEO titulo="Panel de administración" url={router.asPath} />
      <DashboardLayout titulo="RESUMEN">
        <section className="my-5">
          <div className="container">
            <div className="row ">
              <div className="col-5">
                <div className={styles.Rcard}>
                  <div className="row">
                    <div className="col-12 mb-3">
                      <div className={styles.labelC}>
                        Ingresos de hoy
                      </div>
                      <div className={styles.ingreso}>
                        $0.00
                      </div>
                    </div>
                    <div className="col-6 mb-3">
                      <div className={styles.labelC}>
                        Ingresos de la ultima semana
                      </div>
                      <div className={styles.ingreso2}>
                        $5,125,065.00
                      </div>
                    </div>
                    <div className="col-6 mb-3">
                      <div className={styles.labelC}>
                        Ingresos del ultimo mes
                      </div>
                      <div className={styles.ingreso2}>
                        $5,125,065.00
                      </div>
                    </div>
                    <hr />
                    <div className="col-12">
                      <div className="row">
                        <div className="col-6">
                          <div className={styles.labelC}>
                            Ingreso estimado del año
                          </div>
                        </div>
                        <div className="col-6">
                          <div className={styles.ingreso3}>
                            $15,125,065.00
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </DashboardLayout>
    </>
  );
};

export default AdminRoute(Index);
