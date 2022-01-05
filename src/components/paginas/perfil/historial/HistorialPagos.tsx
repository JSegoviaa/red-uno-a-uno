import React from 'react'
import Titulo from '../../../ui/titulo/Titulo'
import styles from './HistorialPagos.module.css';

const HistorialPagos = () => {
    return (
        <section>
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="table-responsive-xxl">
                            <table className={`${styles.customTable} table`}>
                                <tbody>
                                    <th className='text-center'>#</th>
                                    <th>id</th>
                                    <th>Fecha y hora</th>
                                    <th>Paquete</th>
                                    <th></th>
                                    <th>PPU</th>
                                    <th className='text-center'>Usuarios</th>
                                    <th></th>
                                    <th>Importe</th>

                                    {/* ---- empieza fila (datos) ---- */}
                                    <tr className={`${styles.thover} `}>
                                        <td className={styles.tNumber}>
                                            1
                                        </td>
                                        <td className={styles.content}>
                                            as5c1a6sc8a6sfd1a6
                                        </td>
                                        <td className={styles.content}>
                                            05/12/2021-17:15:01
                                        </td>
                                        <td className={styles.content}>
                                            Avanzado
                                        </td>
                                        <td className={styles.sign}>
                                            $
                                        </td>
                                        <td className={styles.content}>
                                            1,000.00
                                        </td>
                                        <td className={`${styles.content} text-center`}>
                                            8
                                        </td>
                                        <td className={styles.sign}>
                                            $
                                        </td>
                                        <td className={styles.content}>
                                            8,000.00
                                        </td>
                                    </tr>
                                    {/* ---- termina fila (datos) ---- */}
                                    {/* ---- empieza fila (datos) ---- */}
                                    <tr className={`${styles.thover} `}>
                                        <td className={styles.tNumber}>
                                            1
                                        </td>
                                        <td className={styles.content}>
                                            as5c1a6sc8a6sfd1a6
                                        </td>
                                        <td className={styles.content}>
                                            05/12/2021-17:15:01
                                        </td>
                                        <td className={styles.content}>
                                            Avanzado
                                        </td>
                                        <td className={styles.content}>
                                            $
                                        </td>
                                        <td className={styles.content}>
                                            1,000.00
                                        </td>
                                        <td className={`${styles.content} text-center`}>
                                            8
                                        </td>
                                        <td className={styles.content}>
                                            $
                                        </td>
                                        <td className={styles.content}>
                                            8,000.00
                                        </td>
                                    </tr>
                                    {/* ---- termina fila (datos) ---- */}
                                    {/* ---- empieza fila (datos) ---- */}
                                    <tr className={`${styles.thover} `}>
                                        <td className={styles.tNumber}>
                                            1
                                        </td>
                                        <td className={styles.content}>
                                            as5c1a6sc8a6sfd1a6
                                        </td>
                                        <td className={styles.content}>
                                            05/12/2021-17:15:01
                                        </td>
                                        <td className={styles.content}>
                                            Avanzado
                                        </td>
                                        <td className={styles.content}>
                                            $
                                        </td>
                                        <td className={styles.content}>
                                            1,000.00
                                        </td>
                                        <td className={`${styles.content} text-center`}>
                                            8
                                        </td>
                                        <td className={styles.content}>
                                            $
                                        </td>
                                        <td className={styles.content}>
                                            8,000.00
                                        </td>
                                    </tr>
                                    {/* ---- termina fila (datos) ---- */}
                                    {/* ---- empieza fila (datos) ---- */}
                                    <tr className={`${styles.thover} `}>
                                        <td className={styles.tNumber}>
                                            1
                                        </td>
                                        <td className={styles.content}>
                                            as5c1a6sc8a6sfd1a6
                                        </td>
                                        <td className={styles.content}>
                                            05/12/2021-17:15:01
                                        </td>
                                        <td className={styles.content}>
                                            Avanzado
                                        </td>
                                        <td className={styles.content}>
                                            $
                                        </td>
                                        <td className={styles.content}>
                                            1,000.00
                                        </td>
                                        <td className={`${styles.content} text-center`}>
                                            8
                                        </td>
                                        <td className={styles.content}>
                                            $
                                        </td>
                                        <td className={styles.content}>
                                            8,000.00
                                        </td>
                                    </tr>
                                    {/* ---- termina fila (datos) ---- */}
                                    {/* ---- empieza fila (datos) ---- */}
                                    <tr className={`${styles.thover} `}>
                                        <td className={styles.tNumber}>
                                            1
                                        </td>
                                        <td className={styles.content}>
                                            as5c1a6sc8a6sfd1a6
                                        </td>
                                        <td className={styles.content}>
                                            05/12/2021-17:15:01
                                        </td>
                                        <td className={styles.content}>
                                            Avanzado
                                        </td>
                                        <td className={styles.content}>
                                            $
                                        </td>
                                        <td className={styles.content}>
                                            1,000.00
                                        </td>
                                        <td className={`${styles.content} text-center`}>
                                            8
                                        </td>
                                        <td className={styles.content}>
                                            $
                                        </td>
                                        <td className={styles.content}>
                                            8,000.00
                                        </td>
                                    </tr>
                                    {/* ---- termina fila (datos) ---- */}
                                    {/* ---- empieza fila (datos) ---- */}
                                    <tr className={`${styles.thover} `}>
                                        <td className={styles.tNumber}>
                                            1
                                        </td>
                                        <td className={styles.content}>
                                            as5c1a6sc8a6sfd1a6
                                        </td>
                                        <td className={styles.content}>
                                            05/12/2021-17:15:01
                                        </td>
                                        <td className={styles.content}>
                                            Avanzado
                                        </td>
                                        <td className={styles.content}>
                                            $
                                        </td>
                                        <td className={styles.content}>
                                            1,000.00
                                        </td>
                                        <td className={`${styles.content} text-center`}>
                                            8
                                        </td>
                                        <td className={styles.content}>
                                            $
                                        </td>
                                        <td className={styles.content}>
                                            8,000.00
                                        </td>
                                    </tr>
                                    {/* ---- termina fila (datos) ---- */}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HistorialPagos


