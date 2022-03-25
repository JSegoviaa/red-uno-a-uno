import styles from "./Resume.module.css";

const ReferenciasCard = () => {
  return (
    <div className="col-sm-12 col-md-12 col-lg-6 col-xl-7 mb-3">
      <div className={`${styles.Rcard} pointer`}>
        <div className={`${styles.RcardTitle} text-end`}>
          <i className="bi bi-shuffle"></i> Referencias
        </div>
        <div className={styles.cardName2}>
          <div className={styles.backText}>
            <i className="bi bi-shuffle"></i> Referencias
          </div>
        </div>
        <div className="row">
          <div className="col-3 mb-3">
            <div className={styles.labelC}>Nuevas referencias</div>
            <div className={styles.ingreso}>6</div>
          </div>
          <div className="col-6 mb-3">
            <div className={styles.labelC}>Referencias pendientes</div>
            <div className={styles.ingresoNegativo}>13</div>
          </div>
          <div className="col-sm-12 col-md-3 col-lg-4 mb-3">
            <div className={styles.labelC}>Total de Referencias</div>
            <div className={styles.ingreso2}>337</div>
          </div>
          <div className="col-sm-12 col-md-3 col-lg-4 mb-3">
            <div className={styles.labelC}>Referencias Vencidas</div>
            <div className={styles.ingreso2}>37</div>
          </div>
          <div className="col-sm-12 col-md-3 col-lg-4 mb-3">
            <div className={styles.labelC}>Perdida de referencias</div>
            <div className={styles.ingreso2}>$ 45,873.00</div>
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
                <div className={styles.ingreso3}>$125,065.00</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReferenciasCard;
