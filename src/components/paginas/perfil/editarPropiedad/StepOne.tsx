import { ChangeEvent, Dispatch, SetStateAction } from "react";
import { Col, Form, Row } from "react-bootstrap";
import { ActualizarInmueble } from "context/inmuebles/InmuebleContext";
import styles from "./Editar.module.css";
import Button from "components/ui/button/Button";
import SeleccionarLugar from "components/ui/buscador/SeleccionarLugar";
import MapaUbicacion from "../propiedades/MapaUbicacion";
import Loading from "components/ui/loading/Loading";
import { TipoPropiedad } from "interfaces/PropertyType";
import { Categoria } from "interfaces/InmueblesInterface";

interface Props {
  handleChange: ({
    target,
  }: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  handleNextStep: () => void;
  cargando: boolean;
  loading: boolean;
  setInmuebleState: Dispatch<SetStateAction<ActualizarInmueble>>;
  propertyTypes: TipoPropiedad[];
  categorias: Categoria[];
  inmuebleState: ActualizarInmueble;
}

const StepOne = (props: Props) => {
  const {
    handleChange,
    handleNextStep,
    cargando,
    loading,
    setInmuebleState,
    propertyTypes,
    categorias,
    inmuebleState,
  } = props;

  const longitudTitulo = inmuebleState.titulo?.length;

  return (
    <>
      <Form.Group className="mb-3">
        <Form.Label className={`${styles.subTitulo}`}>
          Título del inmueble
        </Form.Label>
        <Form.Control
          type="text"
          value={inmuebleState.titulo}
          name="titulo"
          onChange={handleChange}
          autoComplete="off"
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
                color: longitudTitulo! > 75 ? "red" : "black",
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
                  value={inmuebleState.tipoPropiedad}
                  onChange={(e) =>
                    setInmuebleState({
                      ...inmuebleState,
                      tipoPropiedad: e.target.value,
                    })
                  }
                >
                  {propertyTypes.map((propertyType) => (
                    <option key={propertyType._id} value={propertyType._id}>
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
                  value={inmuebleState.categoria}
                  onChange={(e) =>
                    setInmuebleState({
                      ...inmuebleState,
                      categoria: e.target.value,
                    })
                  }
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
                  value={inmuebleState.precio}
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
                  value={inmuebleState.comisiones}
                  name="comisiones"
                  onChange={handleChange}
                  min={0}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="col-12 my-4">
          {inmuebleState.titulo?.length === 0 ||
          (inmuebleState.precio !== undefined && inmuebleState.precio <= 0) ||
          !inmuebleState.direccion ? (
            <Button titulo="Siguiente" btn="Disabled" />
          ) : (
            <Button titulo="Siguiente" onClick={handleNextStep} />
          )}
        </div>
      </div>
    </>
  );
};

export default StepOne;
