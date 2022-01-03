import styles from './Mihistorial.module.css';

const Mihistorial = () => {
    return (
        <section>
            <div className="container">
                <div className="row">
                    <div className="col">
                        <br />
                        <table className={`${styles.customTable}`}>
                            <tbody>


                                {/* ---- empieza fila (datos) ---- */}
                                <tr className={`${styles.thover} pointer`}>
                                    <td className={styles.tNumber}>
                                        10
                                    </td>
                                    <td className={styles.content}>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                    </td>
                                </tr>
                                {/* ---- termina fila (datos) ---- */}

                                {/* ---- empieza fila (datos) ---- */}
                                <tr className={`${styles.thover} pointer`}>
                                    <td className={styles.tNumber}>
                                        2
                                    </td>
                                    <td className={styles.content}>
                                        Lorem ipsum dolor sit amet consectetur.
                                    </td>
                                </tr>
                                {/* ---- termina fila (datos) ---- */}

                                {/* ---- empieza fila (datos) ---- */}
                                <tr className={`${styles.thover} pointer`}>
                                    <td className={styles.tNumber}>
                                        6
                                    </td>
                                    <td className={styles.content}>
                                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione, tempora. Alias, minima?
                                    </td>
                                </tr>
                                {/* ---- termina fila (datos) ---- */}

                                {/* ---- empieza fila (datos) ---- */}
                                <tr className={`${styles.thover} pointer`}>
                                    <td className={styles.tNumber}>
                                        22
                                    </td>
                                    <td className={styles.content}>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, recusandae rerum id dolores ab dicta atque natus officiis in illum!
                                    </td>
                                </tr>
                                {/* ---- termina fila (datos) ---- */}

                                {/* ---- empieza fila (datos) ---- */}
                                <tr className={`${styles.thover} pointer`}>
                                    <td className={styles.tNumber}>
                                        19
                                    </td>
                                    <td className={styles.content}>
                                        Lorem ipsum, dolor sit amet consectetur adi
                                    </td>
                                </tr>
                                {/* ---- termina fila (datos) ---- */}

                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Mihistorial
