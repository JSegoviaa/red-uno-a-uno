import { ChangeEvent, FormEvent, useContext, useEffect } from "react";
import { useRouter } from "next/router";
import { Col, Form, Row } from "react-bootstrap";
import {
  ActualizarInmueble,
  InmuebleContext,
} from "context/inmuebles/InmuebleContext";
import { useInmueble } from "hooks/useInmuebles";
import styles from "./Editar.module.css";
import Loading from "components/ui/loading/Loading";
import { useCategories, useTipoPropiedad } from "hooks/useCategories";
import SeleccionarLugar from "components/ui/buscador/SeleccionarLugar";
import MapaUbicacion from "../propiedades/MapaUbicacion";
import Button from "components/ui/button/Button";
import { MapContext } from "context/map/MapContext";

const EditarInformacion = () => {
  const { idInmueble, setInmuebleState, inmuebleState, actualizarInmueble } =
    useContext(InmuebleContext);
  const { ubicacion, direccion } = useContext(MapContext);
  const router = useRouter();
  const { inmueble, cargando } = useInmueble(idInmueble);
  const { categorias } = useCategories();
  const { loading, propertyTypes } = useTipoPropiedad();

  useEffect(() => {
    setInmuebleState({
      AA: inmueble?.AA,
      agua: inmueble?.agua,
      amueblado: inmueble?.amueblado,
      antiguedad: inmueble?.antiguedad,
      baños: inmueble?.baños,
      camas: inmueble?.camas,
      categoria: inmueble?.categoria._id,
      closet: inmueble?.closet,
      cocina: inmueble?.cocina,
      comedor: inmueble?.comedor,
      comisiones: inmueble?.comisiones,
      descripcion: inmueble?.descripcion,
      direccion: inmueble?.direccion,
      discapacitados: inmueble?.discapacitados,
      escuelas: inmueble?.escuelas,
      estufa: inmueble?.estufa,
      gas: inmueble?.gas,
      habitaciones: inmueble?.habitaciones,
      horno: inmueble?.horno,
      internet: inmueble?.internet,
      lat: inmueble?.lat,
      lavadora: inmueble?.lavadora,
      lng: inmueble?.lng,
      luz: inmueble?.luz,
      m2Construidos: inmueble?.m2Construidos,
      m2Terreno: inmueble?.m2Terreno,
      mantenimiento: inmueble?.mantenimiento,
      medioBaños: inmueble?.medioBaños,
      microondas: inmueble?.microondas,
      minihorno: inmueble?.minihorno,
      otros: inmueble?.otros,
      parking: inmueble?.parking,
      piscinas: inmueble?.piscinas,
      pisos: inmueble?.pisos,
      precio: inmueble?.precio,
      publicado: inmueble?.publicado,
      refrigerador: inmueble?.refrigerador,
      sala: inmueble?.sala,
      secadora: inmueble?.secadora,
      tipoPropiedad: inmueble?.tipoPropiedad._id,
      titulo: inmueble?.titulo,
    });
  }, [cargando]);

  const handleChange = ({
    target,
  }: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = target;

    setInmuebleState({ ...inmuebleState, [name]: value });
  };

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const data: ActualizarInmueble = {
      ...inmuebleState,
      titulo: inmuebleState.titulo,
      tipoPropiedad: inmuebleState.tipoPropiedad,
      categoria: inmuebleState.categoria,
      lat: ubicacion.lat,
      lng: ubicacion.lng,
      direccion,
      precio: Number(inmuebleState.precio),
      comisiones: Number(inmuebleState.comisiones),
    };

    console.log(data);

    const res = await actualizarInmueble(data, idInmueble);

    console.log(res, "res");
    router.push("/perfil/mis-propiedades");
  };

  const longitudTitulo = inmuebleState.titulo?.length;

  return (
    <div className="row d-flex justify-content-center">
      <div className="col-sm-12 col-md-12 col-lg-8">
        <Form onSubmit={onSubmit}>
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
        </Form>

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
              <Button
                titulo="Siguiente"
                //   onClick={handleNextStep}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditarInformacion;
