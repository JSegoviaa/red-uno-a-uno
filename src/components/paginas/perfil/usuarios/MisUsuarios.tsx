import React from 'react'
import { Form } from 'react-bootstrap'
import Button from '../../../ui/button/Button'
import styles from './MisUsuarios.module.css'

const MisUsuarios = () => {
    return (
        <div>
            <section>
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12 col-md-12 col-lg-9">
                            <div className="row">
                                <div className="col-sm-12 col-md-12 col-lg-6">
                                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                        <Form.Label>Nombre(s)</Form.Label>
                                        <Form.Control type="text" />
                                    </Form.Group>
                                </div>
                                <div className="col-sm-12 col-md-12 col-lg-6">
                                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                        <Form.Label>Apellidos</Form.Label>
                                        <Form.Control type="text" />
                                    </Form.Group>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-sm-12 col-md-12 col-lg-4">
                                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                        <Form.Label>Correo</Form.Label>
                                        <Form.Control type="email" placeholder="ejemplo@example.com" />
                                    </Form.Group>
                                </div>
                                <div className="col-sm-12 col-md-12 col-lg-4">
                                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                        <Form.Label>Contraseña</Form.Label>
                                        <Form.Control type="password" />
                                    </Form.Group>
                                </div>
                                <div className="col-sm-12 col-md-12 col-lg-4">
                                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                        <Form.Label>Confirma contraseña</Form.Label>
                                        <Form.Control type="password" />
                                    </Form.Group>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-12 col-lg-3 text-lg-end text-center">
                            <br />
                            <Button titulo='Guardar' btn='Green' />
                        </div>
                    </div>
                    <hr />
                </div>
            </section>
            <br />
            <section>
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="table-responsive-xxl">
                                <table className={`${styles.customTable} table caption-top`}>
                                    <caption>Total de usuarios permitidos: 9</caption>
                                    <thead>
                                        <th className='text-center'>#</th>
                                        <th>Nombre</th>
                                        <th>Apellido</th>
                                        <th>Correo</th>
                                        <th>Estatus</th>
                                        <th></th>
                                    </thead>
                                    <tbody>
                                        {/* ---- empieza fila (datos) ---- */}
                                        <tr className={`${styles.thover} `}>
                                            <td className={styles.tNumber}>
                                                1
                                            </td>
                                            <td className={styles.content}>
                                                Juanito
                                            </td>
                                            <td className={styles.content}>
                                                Espinito Sanchez
                                            </td>
                                            <td className={styles.content}>
                                                juanito_espinito@hotmail.com
                                            </td>
                                            <td className={styles.sign}>
                                                Activo
                                            </td>
                                            <td className={`${styles.content} text-center`}>
                                                <button className={styles.btnBorrar}><img src="/images/icons/properties-icons/4-white.png" alt="..." /></button>
                                            </td>
                                        </tr>
                                        {/* ---- termina fila (datos) ---- */}
                                        {/* ---- empieza fila (datos) ---- */}
                                        <tr className={`${styles.thover} `}>
                                            <td className={styles.tNumber}>
                                                1
                                            </td>
                                            <td className={styles.content}>
                                                Juanito
                                            </td>
                                            <td className={styles.content}>
                                                Espinito Sanchez
                                            </td>
                                            <td className={styles.content}>
                                                juanito_espinito@hotmail.com
                                            </td>
                                            <td className={styles.sign}>
                                                Activo
                                            </td>
                                            <td className={`${styles.content} text-center`}>
                                                <button className={styles.btnBorrar}><img src="/images/icons/properties-icons/4-white.png" alt="..." /></button>
                                            </td>
                                        </tr>
                                        {/* ---- termina fila (datos) ---- */}
                                        {/* ---- empieza fila (datos) ---- */}
                                        <tr className={`${styles.thover} `}>
                                            <td className={styles.tNumber}>
                                                1
                                            </td>
                                            <td className={styles.content}>
                                                Juanito
                                            </td>
                                            <td className={styles.content}>
                                                Espinito Sanchez
                                            </td>
                                            <td className={styles.content}>
                                                juanito_espinito@hotmail.com
                                            </td>
                                            <td className={styles.sign}>
                                                Activo
                                            </td>
                                            <td className={`${styles.content} text-center`}>
                                                <button className={styles.btnBorrar}><img src="/images/icons/properties-icons/4-white.png" alt="..." /></button>
                                            </td>
                                        </tr>
                                        {/* ---- termina fila (datos) ---- */}
                                        {/* ---- empieza fila (datos) ---- */}
                                        <tr className={`${styles.thover} `}>
                                            <td className={styles.tNumber}>
                                                1
                                            </td>
                                            <td className={styles.content}>
                                                Juanito
                                            </td>
                                            <td className={styles.content}>
                                                Espinito Sanchez
                                            </td>
                                            <td className={styles.content}>
                                                juanito_espinito@hotmail.com
                                            </td>
                                            <td className={styles.sign}>
                                                Activo
                                            </td>
                                            <td className={`${styles.content} text-center`}>
                                                <button className={styles.btnBorrar}><img src="/images/icons/properties-icons/4-white.png" alt="..." /></button>
                                            </td>
                                        </tr>
                                        {/* ---- termina fila (datos) ---- */}
                                        {/* ---- empieza fila (datos) ---- */}
                                        <tr className={`${styles.thover} `}>
                                            <td className={styles.tNumber}>
                                                1
                                            </td>
                                            <td className={styles.content}>
                                                Juanito
                                            </td>
                                            <td className={styles.content}>
                                                Espinito Sanchez
                                            </td>
                                            <td className={styles.content}>
                                                juanito_espinito@hotmail.com
                                            </td>
                                            <td className={styles.sign}>
                                                Activo
                                            </td>
                                            <td className={`${styles.content} text-center`}>
                                                <button className={styles.btnBorrar}><img src="/images/icons/properties-icons/4-white.png" alt="..." /></button>
                                            </td>
                                        </tr>
                                        {/* ---- termina fila (datos) ---- */}
                                        {/* ---- empieza fila (datos) ---- */}
                                        <tr className={`${styles.thover} `}>
                                            <td className={styles.tNumber}>
                                                1
                                            </td>
                                            <td className={styles.content}>
                                                Juanito
                                            </td>
                                            <td className={styles.content}>
                                                Espinito Sanchez
                                            </td>
                                            <td className={styles.content}>
                                                juanito_espinito@hotmail.com
                                            </td>
                                            <td className={styles.sign}>
                                                Activo
                                            </td>
                                            <td className={`${styles.content} text-center`}>
                                                <button className={styles.btnBorrar}><img src="/images/icons/properties-icons/4-white.png" alt="..." /></button>
                                            </td>
                                        </tr>
                                        {/* ---- termina fila (datos) ---- */}
                                        {/* ---- empieza fila (datos) ---- */}
                                        <tr className={`${styles.thover} `}>
                                            <td className={styles.tNumber}>
                                                1
                                            </td>
                                            <td className={styles.content}>
                                                Juanito
                                            </td>
                                            <td className={styles.content}>
                                                Espinito Sanchez
                                            </td>
                                            <td className={styles.content}>
                                                juanito_espinito@hotmail.com
                                            </td>
                                            <td className={styles.sign}>
                                                Activo
                                            </td>
                                            <td className={`${styles.content} text-center`}>
                                                    <button className={styles.btnBorrar}><img src="/images/icons/properties-icons/4-white.png" alt="..." /></button>
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
        </div>
    )
}

export default MisUsuarios
