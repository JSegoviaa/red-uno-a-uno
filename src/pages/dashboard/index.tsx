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
              {/* wallet */}
              <div className="col-sm-12 col-md-12 col-lg-6 col-xl-5 mb-3">
                <div className={`${styles.Rcard} pointer`}>
                  <div className={`${styles.RcardTitle} text-end`}>
                    <i className="bi bi-wallet2"></i> Wallet
                  </div>
                  <div className={styles.cardName}>
                    <div className={styles.backText}>
                      <i className="bi bi-wallet2"></i> Wallet
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-12 mb-3">
                      <div className={styles.labelC}>
                        Ingresos de hoy
                      </div>
                      <div className={styles.ingreso}>
                        $3,899.00
                      </div>
                    </div>
                    <div className="col-sm-12 col-md-6 col-lg-6 mb-3">
                      <div className={styles.labelC}>
                        Ingresos de la ultima semana
                      </div>
                      <div className={styles.ingreso2}>
                        $125,065.00
                      </div>
                    </div>
                    <div className="col-sm-12 col-md-6 col-lg-6 mb-3">
                      <div className={styles.labelC}>
                        Ingresos del ultimo mes
                      </div>
                      <div className={styles.ingreso2}>
                        $5,125,065.00
                      </div>
                    </div>
                    <hr className="p-0" />
                    <div className="col-12">
                      <div className="row">
                        <div className="col-sm-12 col-md-6 col-lg-6">
                          <div className={styles.labelC}>
                            Ingreso estimado del año
                          </div>
                        </div>
                        <div className="col-sm-12 col-md-6 col-lg-6 text-end">
                          <div className={styles.ingreso3}>
                            $15,125,065.00
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* referencias */}
              <div className="col-sm-12 col-md-12 col-lg-6 col-xl-7 mb-3">
                <div className={`${styles.Rcard} pointer`}>
                  <div className={`${styles.RcardTitle} text-end`}>
                    <i className="bi bi-shuffle"></i> Referencias
                  </div>
                  <div className={styles.cardName}>
                    <div className={styles.backText}>
                      <i className="bi bi-shuffle"></i> Refere
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-3 mb-3">
                      <div className={styles.labelC}>
                        Nuevas referencias
                      </div>
                      <div className={styles.ingreso}>
                        6
                      </div>
                    </div>
                    <div className="col-6 mb-3">
                      <div className={styles.labelC}>
                        Referencias pendientes
                      </div>
                      <div className={styles.ingresoNegativo}>
                        13
                      </div>
                    </div>
                    <div className="col-sm-12 col-md-3 col-lg-4 mb-3">
                      <div className={styles.labelC}>
                        Total de Referencias
                      </div>
                      <div className={styles.ingreso2}>
                        337
                      </div>
                    </div>
                    <div className="col-sm-12 col-md-3 col-lg-4 mb-3">
                      <div className={styles.labelC}>
                        Referencias Vencidas
                      </div>
                      <div className={styles.ingreso2}>
                        37
                      </div>
                    </div>
                    <div className="col-sm-12 col-md-3 col-lg-4 mb-3">
                      <div className={styles.labelC}>
                        Perdida de referencias
                      </div>
                      <div className={styles.ingreso2}>
                        $ 45,873.00
                      </div>
                    </div>
                    <hr className="p-0" />
                    <div className="col-12">
                      <div className="row">
                        <div className="col-sm-12 col-md-6 col-lg-6">
                          <div className={styles.labelC}>
                            Ingreso por referencias aprobadas
                          </div>
                        </div>
                        <div className="col-sm-12 col-md-6 col-lg-6 text-end">
                          <div className={styles.ingreso3}>
                            $125,065.00
                          </div>
                        </div>

                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* users */}
              <div className="col-sm-12 col-md-12 col-lg-6 col-xl-8 mb-3">
                <div className={`${styles.Rcard} pointer`}>
                  <div className={`${styles.RcardTitle} text-end`}>
                    <i className="bi bi-wallet2"></i> Usuarios
                  </div>
                  <div className={styles.cardName}>
                    <div className={styles.backText}>
                      <i className="bi bi-wallet2"></i> Wallet
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-12 mb-3">
                      <div className={styles.labelC}>
                        Ingresos de hoy
                      </div>
                      <div className={styles.ingreso}>
                        $3,899.00
                      </div>
                    </div>
                    <div className="col-sm-12 col-md-6 col-lg-6 mb-3">
                      <div className={styles.labelC}>
                        Ingresos de la ultima semana
                      </div>
                      <div className={styles.ingreso2}>
                        $125,065.00
                      </div>
                    </div>
                    <div className="col-sm-12 col-md-6 col-lg-6 mb-3">
                      <div className={styles.labelC}>
                        Ingresos de la ultima semana
                      </div>
                      <div className={styles.ingreso2}>
                        $125,065.00
                      </div>
                    </div>
                    <div className="col-sm-12 col-md-6 col-lg-6 mb-3">
                      <div className={styles.labelC}>
                        Ingresos de la ultima semana
                      </div>
                      <div className={styles.ingreso2}>
                        $125,065.00
                      </div>
                    </div>
                    <div className="col-sm-12 col-md-6 col-lg-6 mb-3">
                      <div className={styles.labelC}>
                        Ingresos de la ultima semana
                      </div>
                      <div className={styles.ingreso2}>
                        $125,065.00
                      </div>
                    </div>
                    <div className="col-sm-12 col-md-6 col-lg-6 mb-3">
                      <div className={styles.labelC}>
                        Ingresos de la ultima semana
                      </div>
                      <div className={styles.ingreso2}>
                        $125,065.00
                      </div>
                    </div>
                    <div className="col-sm-12 col-md-6 col-lg-6 mb-3">
                      <div className={styles.labelC}>
                        Ingresos del ultimo mes
                      </div>
                      <div className={styles.ingreso2}>
                        $5,125,065.00
                      </div>
                    </div>
                    <hr className="p-0" />
                    <div className="col-12">
                      <div className="row">
                        <div className="col-sm-12 col-md-6 col-lg-6">
                          <div className={styles.labelC}>
                            Ingreso estimado del año
                          </div>
                        </div>
                        <div className="col-sm-12 col-md-6 col-lg-6">
                          <div className={styles.ingreso3}>
                            $15,125,065.00
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Propiedades */}
              <div className="col-sm-12 col-md-12 col-lg-6 col-xl-4 mb-3">
                <div className={`${styles.Rcard} pointer`}>
                  <div className={`${styles.RcardTitle} text-end`}>
                    <i className="bi bi-wallet2"></i> Wallet
                  </div>
                  <div className={styles.cardName}>
                    <div className={styles.backText}>
                      <i className="bi bi-wallet2"></i> Wallet
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-12 mb-3">
                      <div className={styles.labelC}>
                        Ingresos de hoy
                      </div>
                      <div className={styles.ingreso}>
                        $3,899.00
                      </div>
                    </div>
                    <div className="col-sm-12 col-md-6 col-lg-6 mb-3">
                      <div className={styles.labelC}>
                        Ingresos de la ultima semana
                      </div>
                      <div className={styles.ingreso2}>
                        $125,065.00
                      </div>
                    </div>
                    <div className="col-sm-12 col-md-6 col-lg-6 mb-3">
                      <div className={styles.labelC}>
                        Ingresos de la ultima semana
                      </div>
                      <div className={styles.ingreso2}>
                        $125,065.00
                      </div>
                    </div>
                    <div className="col-sm-12 col-md-6 col-lg-6 mb-3">
                      <div className={styles.labelC}>
                        Ingresos de la ultima semana
                      </div>
                      <div className={styles.ingreso2}>
                        $125,065.00
                      </div>
                    </div>
                    <div className="col-sm-12 col-md-6 col-lg-6 mb-3">
                      <div className={styles.labelC}>
                        Ingresos de la ultima semana
                      </div>
                      <div className={styles.ingreso2}>
                        $125,065.00
                      </div>
                    </div>
                    <div className="col-sm-12 col-md-6 col-lg-6 mb-3">
                      <div className={styles.labelC}>
                        Ingresos de la ultima semana
                      </div>
                      <div className={styles.ingreso2}>
                        $125,065.00
                      </div>
                    </div>
                    <div className="col-sm-12 col-md-6 col-lg-6 mb-3">
                      <div className={styles.labelC}>
                        Ingresos del ultimo mes
                      </div>
                      <div className={styles.ingreso2}>
                        $5,125,065.00
                      </div>
                    </div>
                    <hr className="p-0" />
                    <div className="col-12">
                      <div className="row">
                        <div className="col-sm-12 col-md-6 col-lg-6">
                          <div className={styles.labelC}>
                            Ingreso estimado del año
                          </div>
                        </div>
                        <div className="col-sm-12 col-md-6 col-lg-6">
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
