import { useState } from "react";
import { Col, Form, Row } from "react-bootstrap";
import { useForm } from "../../../../hooks/useForm";
import Loading from "../../../ui/loading/Loading";
import styles from "./FormDesign.module.css";
import {
    useCategories,
    useTipoPropiedad,
} from "../../../../hooks/useCategories";
import {InmuebleData,} from "../../../../context/inmuebles/InmuebleContext";
import SeleccionarLugar from "../../../ui/buscador/SeleccionarLugar";
import MapaUbicacion from "./MapaUbicacion";
import Button from "../../../ui/button/Button";


const FormStepOne = () => {
    const [tipoPropiedad, setTipoPropiedad] = useState("61e99edd0d3bd9163e4a4b3a");
    const [categoria, setCategoria] = useState("61e99f0e0d3bd9163e4a4b42");
    const { categorias, cargando } = useCategories();
    const { loading, propertyTypes } = useTipoPropiedad();
    const { formulario, handleChange } = useForm({
        titulo: "",
        precio: 0,
        comisiones: 0,
    });
    const {
        titulo,
        comisiones,
        precio,
    } = formulario;
    const longitudTitulo = titulo.length;
    // const dataInmueble: InmuebleData = {
    //     titulo,
    //     categoria,
    //     precio,
    //     tipoPropiedad,
    //     descripcion,

    // };
    return (
        <>
            <Form.Group className="mb-3">
                <Form.Label className={`${styles.subTitulo}`}>
                    Título del inmueble
                </Form.Label>
                <Form.Control
                    type="text"
                    value={titulo}
                    name="titulo"
                    onChange={handleChange}
                />
                <Row>
                    <Col>
                        <Form.Text className="text-muted">
                            Ej. Casa en venta en Palmaris, Cancún
                        </Form.Text>
                    </Col>
                    <Col className="d-flex justify-content-end">
                        <span
                            style={{
                                color: longitudTitulo > 75 ? "red" : "black",
                            }}
                        >
                            {longitudTitulo}
                        </span>
                        /75
                    </Col>
                </Row>
            </Form.Group>


            <Row>
                <Col md={6}>
                    <div className="row mb-3">
                        <div className="col-sm-5 col-md-4 col-lg-6">
                            <div className={styles.content}>Tipo de inmueble</div>
                        </div>
                        <div className="col-sm-7 col-md-8 col-lg-6">
                            {loading ? (
                                <Loading />
                            ) : (
                                <Form.Select
                                    value={tipoPropiedad}
                                    onChange={(e) => setTipoPropiedad(e.target.value)}
                                >
                                    {propertyTypes.map((propertyType) => (
                                        <option
                                            key={propertyType._id}
                                            value={propertyType._id}
                                        >
                                            {propertyType.nombre}
                                        </option>
                                    ))}
                                </Form.Select>
                            )}
                        </div>
                    </div>
                </Col>
                <Col md={6}>
                    <div className="row mb-3">
                        <div className="col-sm-5 col-md-4 col-lg-6">
                            <div className={styles.content}>Tipo de operación</div>
                        </div>
                        <div className="col-sm-7 col-md-8 col-lg-6">
                            {cargando ? (
                                <Loading />
                            ) : (
                                <Form.Select
                                    value={categoria}
                                    onChange={(e) => setCategoria(e.target.value)}
                                >
                                    {categorias.map((categoria) => (
                                        <option key={categoria._id} value={categoria._id}>
                                            {categoria.nombre}
                                        </option>
                                    ))}
                                </Form.Select>
                            )}
                        </div>
                    </div>
                </Col>
            </Row>

            <div className={styles.MiniSub}>Ubicación</div>
            <div className={styles.line}></div>
            <br />
            <div className="row">
              <div className="col-12 mb-3">
                <SeleccionarLugar />
              </div>
              <div className="col-12 mb-5">
                <MapaUbicacion />
              </div>
              <div className="col-sm-12 col-md-6 col-xxl-6">
                <div className="row d-flex justify-content-start">
                  <div className="col-sm-12 col-xxl-3">
                    <div className={styles.labels2}>Valor</div>
                  </div>
                  <div className="col-sm-12 col-xxl-7">
                    <div className="input-group mb-3">
                      <span className="input-group-text">$</span>
                      <input
                        type="number"
                        className="form-control"
                        placeholder="5,000.00"
                        value={precio}
                        name="precio"
                        onChange={handleChange}
                        min={0}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-sm-12 col-md-6 col-xxl-6">
                <div className="row d-flex justify-content-end">
                  <div className="col-sm-12 col-xxl-5">
                    <div className={styles.labels2}>Comisiones</div>
                  </div>
                  <div className="col-sm-12 col-xxl-5">
                    <div className="input-group mb-3">
                      <span className="input-group-text">%</span>
                      <input
                        type="number"
                        className="form-control"
                        placeholder="5"
                        value={comisiones}
                        name="comisiones"
                        onChange={handleChange}
                        min={0}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-12 my-4">
                  <Button titulo="Guardar paso 1"/>
              </div>
            </div>
        </>
    );
};

export default FormStepOne;
