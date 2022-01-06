import React from 'react'
import { Form } from 'react-bootstrap'

const MisUsuarios = () => {
    return (
        <div>
            <section>
                <div className="container">
                    <div className="row">
                        <div className="col-2">
                            <div className="form-floating mb-3">
                                <input type="text" className="form-control" id="floatingInput" placeholder="name@example.com" />
                                <label htmlFor="floatingInput">Nombre</label>
                            </div>
                        </div>
                        <div className="col-3">
                            <div className="form-floating mb-3">
                                <input type="text" className="form-control" id="floatingInput" placeholder="name@example.com" />
                                <label htmlFor="floatingInput">Nombre</label>
                            </div>
                        </div>
                        <div className="col-3">
                            <div className="form-floating mb-3">
                                <input type="text" className="form-control" id="floatingInput" placeholder="name@example.com" />
                                <label htmlFor="floatingInput">Nombre</label>
                            </div>
                        </div>
                        <div className="col-2">
                            <div className="form-floating mb-3">
                                <input type="text" className="form-control" id="floatingInput" placeholder="name@example.com" />
                                <label htmlFor="floatingInput">Nombre</label>
                            </div>
                        </div>
                        <div className="col-1">
                            <button>guardar</button>
                        </div>
                    </div>
                </div>
            </section>
            <br /><br />
            <h2>listaaaaa</h2>
        </div>
    )
}

export default MisUsuarios
