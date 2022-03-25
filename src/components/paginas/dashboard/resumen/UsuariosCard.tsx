import styles from "./Resume.module.css";

const UsuariosCard = () => {
  return (
    <div className="col-sm-12 col-md-12 col-lg-6 col-xl-4 mb-3">
      <div className={`${styles.Rcard} pointer`}>
        <div className={`${styles.RcardTitle} text-end`}>
          <i className="bi bi-person-plus"></i> Usuarios
        </div>
        <div className={styles.cardName4}>
          <div className={styles.backText}>
            <i className="bi bi-person-plus"></i> Usuarios
          </div>
        </div>
        <div className="row">
          <div className="col-12 mb-3">
            <div className={styles.labelC}>Nuevos Usuarios</div>
            <div className={styles.ingresoIndividual}>12</div>
          </div>
          <div className="col-sm-12 col-md-6 col-lg-6 mb-3">
            <div className={styles.labelC}>
              Nuevos Usuarios en la ultima semana
            </div>
            <div className={styles.ingreso2}>28</div>
          </div>
          <div className="col-sm-12 col-md-6 col-lg-6 mb-3">
            <div className={styles.labelC}>
              Nuevos Usuarios en los ultimos 30 dias
            </div>
            <div className={styles.ingreso2}>64</div>
          </div>
          <div className="col-sm-12 col-md-6 col-lg-6 mb-3">
            <div className={styles.labelC}>Usuarios hijos</div>
            <div className={styles.ingreso2}>148</div>
          </div>
          <div className="col-sm-12 col-md-6 col-lg-6 mb-3">
            <div className={styles.labelC}>Usuarios padres</div>
            <div className={styles.ingreso2}>12</div>
          </div>
          <hr className="p-0" />
          <div className="col-12">
            <div className="row">
              <div className="col-sm-12 col-md-6 col-lg-6">
                <div className={styles.labelC}>Total de usuarios</div>
              </div>
              <div className="col-sm-12 col-md-6 col-lg-6 text-end">
                <div className={styles.ingreso3}>1,681</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UsuariosCard;
