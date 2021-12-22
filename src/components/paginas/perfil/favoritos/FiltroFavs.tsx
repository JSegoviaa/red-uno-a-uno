import React from 'react'
import { Form } from 'react-bootstrap'
import styles from "./FiltrosFavs.module.css"

const FiltroFavs = () => {
    return (
        <div>
            <section>
                <div className="container mt-4">
                    <div className="row d-flex justify-content-end">
                        <div className="col-sm-6 col-md-6 col-lg-4 col-xl-4">
                            <Form.Select aria-label="Default select example" className={`${styles.customSelect} mb-4`}>
                                <option>Agentes:</option>
                                <option value="1">Juan Pérez Ríos</option>
                                <option value="2">Carlos Hernández Torres</option>
                                <option value="3">Miguel González Mendoza</option>
                                <option value="3">Ramón Olivo Becerra</option>
                                <option value="3">Ángeles Rosa Gutiérrez</option>
                            </Form.Select>
                        </div>
                        <div className="col-sm-6 col-md-6 col-lg-4 col-xl-4">
                            <Form.Select aria-label="Default select example" className={`${styles.customSelect} mb-4`}>
                                <option>Solicitudes:</option>
                                <option value="1">En Solicitud</option>
                                <option value="2">Aprobados</option>
                                <option value="3">Rechazados</option>
                            </Form.Select>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default FiltroFavs
