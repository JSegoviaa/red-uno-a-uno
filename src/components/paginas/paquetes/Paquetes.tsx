import styles from "./paquetes.module.css"

const PaquetesCards = () => {
    return (
        <div>
            <section className="my-5">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12 col-md-6 col-lg-4 col-xl-3 mb-4">
                            <div className={styles.paquetesCard}>
                                <div className="d-flex justify-content-center">
                                    <img src="/images/icons/individual.png" alt="..." />
                                </div>
                                <div className={`${styles.paquetesCardTitle}  my-4 text-center`}>
                                    Individual
                                </div>
                                <hr />
                                <ul>
                                    <table className={styles.tabla}>
                                        <tbody>
                                            <tr>
                                                <td className="tupla">
                                                    <li className={styles.listItems}>
                                                        Anual
                                                    </li>
                                                </td>
                                                <td className="tupla">
                                                    <div className={styles.paquetesCardPrecio2}>
                                                        $3,999 MXN
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="tupla">
                                                    <li className={styles.listItems}>
                                                        Semestral
                                                    </li>
                                                </td>
                                                <td className="tupla">
                                                    <div className={styles.paquetesCardPrecio2}>
                                                        $1,999 MXN
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="tupla">
                                                    <li className={styles.listItems}>
                                                        Trimestral
                                                    </li>
                                                </td>
                                                <td className="tupla">
                                                    <div className={styles.paquetesCardPrecio2}>
                                                        $1,250 MXN
                                                    </div>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                    <li className={styles.listItems}>
                                        Recomendado para asesor independiente
                                    </li>
                                </ul>
                                <div className={`${styles.ajusteBtn} text-center`}>
                                    <button type="button" className={styles.btnContratar}>CONTRATAR</button>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-6 col-lg-4 col-xl-3 mb-4">
                            <div className={styles.paquetesCard}>
                                <div className="d-flex justify-content-center">
                                    <img src="/images/icons/basico.png" alt="..." />
                                </div>
                                <div className={`${styles.paquetesCardTitle}  my-4 text-center`}>
                                    Básico
                                </div>
                                <hr />
                                <div className={`${styles.paquetesCardPrecio} text-center`}>
                                    $3,199 MXN*
                                </div>
                                <ul>
                                    <li className={styles.listItems}>
                                        Anuales
                                    </li>
                                    <li className={styles.listItems}>
                                        Precio especial al contratar de 3 a 5 usuarios.
                                    </li>
                                </ul>
                                <div className={`${styles.ajusteBtn} text-center`}>
                                    <button type="button" className={styles.btnContratar}>CONTRATAR</button>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-6 col-lg-4 col-xl-3 mb-4">
                            <div className={styles.paquetesCard}>
                                <div className="d-flex justify-content-center">
                                    <img src="/images/icons/intermedio.png" alt="..." />
                                </div>
                                <div className={`${styles.paquetesCardTitle}  my-4 text-center`}>
                                    Intermedio
                                </div>
                                <hr />
                                <div className={`${styles.paquetesCardPrecio} text-center`}>
                                    $2,799 MXN*
                                </div>
                                <ul>
                                    <li className={styles.listItems}>
                                        Anuales
                                    </li>
                                    <li className={styles.listItems}>
                                        Precio especial al contratar de 6 a 10 usuarios.
                                    </li>
                                </ul>
                                <div className={`${styles.ajusteBtn} text-center`}>
                                    <button type="button" className={styles.btnContratar}>CONTRATAR</button>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-6 col-lg-4 col-xl-3 mb-4">
                            <div className={styles.paquetesCard}>
                                <div className="d-flex justify-content-center">
                                    <img src="/images/icons/avanzado.png" alt="..." />
                                </div>
                                <div className={`${styles.paquetesCardTitle}  my-4 text-center`}>
                                    Avanzado
                                </div>
                                <hr />
                                <div className={`${styles.paquetesCardPrecio} text-center`}>
                                    $2,499 MXN*
                                </div>
                                <ul>
                                    <li className={styles.listItems}>
                                        Anuales
                                    </li>
                                    <li className={styles.listItems}>
                                        Precio especial de 11 usuarios en adelante.
                                    </li>
                                </ul>
                                <div className={`${styles.ajusteBtn} text-center`}>
                                    <button type="button" className={styles.btnContratar}>CONTRATAR</button>
                                </div>
                            </div>
                        </div>
                        <div className="col-12">
                            <div className={`${styles.advice} text-center`}>
                                *Precios indicados son por cada usuario.
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default PaquetesCards
