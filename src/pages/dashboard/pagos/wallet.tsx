import DashboardLayout from "components/layout/Dashboard";
import styles from "./wallet.module.css"

const wallet = () => {
  return (
    <DashboardLayout titulo="WALLET">

      <section className="py-4">
        <div className="container">
          <div className="row">
            <div className="col-7">
              <div className={styles.cardGeneralInfo}>
                <div className="row">
                  <div className="col-12">
                    <div className={styles.GeneralInfoHeader}>
                      Total de ingresos filtrado
                    </div>
                  </div>
                  <div className="col-4">
                    <div className={styles.labelFijo}>
                      Total por referencias:
                    </div>
                    <div className={styles.monto}>
                      $1,565,165
                    </div>
                  </div>
                  <div className="col-4">
                    <div className={styles.labelFijo}>
                      Total por referencias:
                    </div>
                    <div className={styles.monto}>
                      $1,565,165
                    </div>
                  </div>
                  <div className="col-4">
                    <div className={styles.labelFijo}>
                      Total por referencias:
                    </div>
                    <div className={styles.monto}>
                      $1,565,165
                    </div>
                  </div>
                  <div className="col-12">
                    
                  </div>
                </div>
              </div>
            </div>
            <div className="col-5">
              <div className={styles.cardGeneralInfo}>
                <div className="row">
                  <div className="col-12">
                    <div className={styles.GeneralInfoHeader}>
                      Total de ingresos generales
                    </div>
                  </div>
                  <div className="col-6">
                    <div className={styles.labelFijo}>
                      Total por referencias:
                    </div>
                  </div>
                  <div className="col-6">
                    <div className={`${styles.monto} text-end`}>
                      $1,565,165
                    </div>
                  </div>
                  <div className="col-6">
                    <div className={styles.labelFijo}>
                      Total por Stripe:
                    </div>
                  </div>
                  <div className="col-6">
                    <div className={`${styles.monto} text-end`}>
                      $1,565,165
                    </div>
                  </div>
                  <div className="col-6">
                    <div className={styles.labelFijo}>
                      Total general:
                    </div>
                  </div>
                  <div className="col-6">
                    <div className={`${styles.monto} text-end`}>
                      $1,565,165
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="row">
            <div className="col-12 p-2">
              <div className={`${styles.tablaRef} table-responsive`}>
                <div className={styles.headerRef}>
                  Ingresos
                </div>
                <table className="w-100">
                  <tr className={styles.rowT}>
                    <td className={styles.headersT}>ID de pago</td>
                    <td className={styles.headersT}>Fecha</td>
                    <td className={styles.headersT}>Usuario</td>
                    <td className={styles.headersT}>Paquete</td>
                    <td className={styles.headersT}>Precio Paquete</td>
                    <td className={styles.headersT}>Usuarios</td>
                    <td className={styles.headersT}>Importe</td>
                    <td className={styles.headersT}>Tipo de pago</td>
                    <td className={styles.headersT}></td>
                  </tr>

                  <tr className={styles.rowT}>
                    <td className={styles.contentT}>
                      6516035543813
                    </td>
                    <td className={styles.contentT}>
                      2022-02-21
                    </td>
                    <td className={styles.contentT}>
                      Juanito Espinito
                    </td>
                    <td className={styles.contentT}>
                      Individual
                    </td>
                    <td className={styles.contentT}>
                      $3,900
                    </td>
                    <td className={styles.contentT}>
                      4
                    </td>
                    <td className={styles.contentT}>
                      $10,500
                    </td>
                    <td className={styles.contentT}>
                      Referencia
                    </td>
                    <td className={styles.contentT}>
                      <button className={`${styles.btnT1} px-2 mx-1`}>
                        <i className="bi bi-eye" />
                      </button>
                    </td>
                  </tr>
                  <tr className={styles.rowT}>
                    <td className={styles.contentT}>
                      6516035543813
                    </td>
                    <td className={styles.contentT}>
                      2022-02-21
                    </td>
                    <td className={styles.contentT}>
                      Juanito Espinito
                    </td>
                    <td className={styles.contentT}>
                      Individual
                    </td>
                    <td className={styles.contentT}>
                      $3,900
                    </td>
                    <td className={styles.contentT}>
                      4
                    </td>
                    <td className={styles.contentT}>
                      $10,500
                    </td>
                    <td className={styles.contentT}>
                      Stripe
                    </td>
                    <td className={styles.contentT}>
                      <button className={`${styles.btnT1} px-2 mx-1`}>
                        <i className="bi bi-eye" />
                      </button>
                    </td>
                  </tr>
                </table>
                {/* 
              <h2 className="text-center py-5">
                Aún no hay referencias
              </h2> */}
              </div>
            </div>
          </div>
        </div>
      </section >
    </DashboardLayout>

  )
}

export default wallet