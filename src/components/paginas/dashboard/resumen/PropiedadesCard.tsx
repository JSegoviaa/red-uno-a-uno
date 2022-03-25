import styles from "./Resume.module.css";
import {
  useAllInmuebles,
  useCategoriaInmueble,
  useFechaInmueble,
  useTipoInmueble,
} from "../../../../hooks";
import Loading from "components/ui/loading/Loading";

const PropiedadesCard = () => {
  const { cargando, total } = useAllInmuebles();
  const { casas, departamentos, desarrollos, bodegas, locales, oficinas } =
    useTipoInmueble();

  const { venta, renta } = useCategoriaInmueble();

  const { hoy, mes, semana } = useFechaInmueble();

  return (
    <>
      {cargando ? (
        <Loading />
      ) : (
        <div className="col-sm-12 col-md-12 col-lg-6 col-xl-8 mb-3">
          <div className={`${styles.Rcard} pointer`}>
            <div className={`${styles.RcardTitle} text-end`}>
              <i className="bi bi-house" /> Propiedades
            </div>
            <div className={styles.cardName3}>
              <div className={styles.backText}>
                <i className="bi bi-house" />
                Propiedades
              </div>
            </div>
            <div className="row">
              <div className="col-sm-6 col-md-6 col-lg-4 mb-3">
                <div className={styles.labelC}>Nuevos inmuebles</div>
                <div className={styles.ingresoIndividual}>{hoy}</div>
              </div>
              <div className="col-sm-6 col-md-6 col-lg-4 col-xl-4 col-6 mb-3">
                <div className={styles.labelC}>
                  Nuevos inmuebles en la ultima semana
                </div>
                <div className={styles.ingreso2}>{semana}</div>
              </div>
              <div className="col-sm-6 col-md-6 col-lg-4 col-xl-4 col-6 mb-3">
                <div className={styles.labelC}>
                  Nuevos inmuebles en los ultimos 30 dias
                </div>
                <div className={styles.ingreso2}>{mes}</div>
              </div>

              <div className="col-sm-5 col-md-4 col-lg-4 col-xl-3 col-xxl-2 col-6 mb-3">
                <div className={styles.labelC}>Casas</div>
                <div className={styles.ingreso2}>{casas}</div>
              </div>
              <div className="col-sm-5 col-md-4 col-lg-4 col-xl-3 col-xxl-2 col-6 mb-3">
                <div className={styles.labelC}>Departamentos</div>
                <div className={styles.ingreso2}>{departamentos}</div>
              </div>
              <div className="col-sm-5 col-md-4 col-lg-4 col-xl-3 col-xxl-2 col-6 mb-3">
                <div className={styles.labelC}>Desarrollos</div>
                <div className={styles.ingreso2}>{desarrollos}</div>
              </div>
              <div className="col-sm-5 col-md-4 col-lg-4 col-xl-3 col-xxl-2 col-6 mb-3">
                <div className={styles.labelC}>Locales</div>
                <div className={styles.ingreso2}>{locales}</div>
              </div>
              <div className="col-sm-5 col-md-4 col-lg-4 col-xl-3 col-xxl-2 col-6 mb-3">
                <div className={styles.labelC}>Oficinas</div>
                <div className={styles.ingreso2}>{oficinas}</div>
              </div>
              <div className="col-sm-5 col-md-4 col-lg-4 col-xl-3 col-xxl-2 col-6 mb-3">
                <div className={styles.labelC}>Bodegas</div>
                <div className={styles.ingreso2}>{bodegas}</div>
              </div>

              <div className="col-sm-6 col-md-6 col-lg-4 col-xl-3 col-6 mb-3">
                <div className={styles.labelC}>
                  Total de inmuebles <br /> en renta
                </div>
                <div className={styles.ingreso2}>{renta}</div>
              </div>
              <div className="col-sm-6 col-md-6 col-lg-4 col-xl-3 col-6 mb-3">
                <div className={styles.labelC}>
                  Total de inmuebles <br /> en venta
                </div>
                <div className={styles.ingreso2}>{venta}</div>
              </div>
              <hr className="p-0" />
              <div className="col-12">
                <div className="row">
                  <div className="col-sm-12 col-md-6 col-lg-6">
                    <div className={styles.labelC}>
                      Total del propiedades publicadas
                    </div>
                  </div>
                  <div className="col-sm-12 col-md-6 col-lg-6 text-end">
                    <div className={styles.ingreso3}>{total}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default PropiedadesCard;
