import { FormEvent, useContext, useState } from "react";
import { Col, Form, Row } from "react-bootstrap";
import { InmuebleContext } from "../../../../context/inmuebles/InmuebleContext";
import { MapContext } from "../../../../context/map/MapContext";
import { useForm } from "../../../../hooks/useForm";
import styles from "./FormDesign.module.css";
import SeleccionarLugar from "../../../ui/buscador/SeleccionarLugar";
import Button from "../../../ui/button/Button";
import Titulo from "../../../ui/titulo/Titulo";
import MapaUbicacion from "./MapaUbicacion";
import useCategories from "../../../../hooks/useCategories";
import Loading from "../../../ui/loading/Loading";

const AnadirInmueble = () => {
  const { crearInmueble } = useContext(InmuebleContext);
  const { ubicacion, direccion } = useContext(MapContext);
  const { categorias, cargando } = useCategories();
  const [categoria, setCategoria] = useState("61cb51ee11b684e8c30cb7cb");
  const [propertyType, setTipoPropiedad] = useState("");
  const [agua, setAgua] = useState<any>(false);
  const [luz, setLuz] = useState<any>(false);
  const [gas, setGas] = useState<any>(false);
  const [internet, setInternet] = useState<any>(false);
  const [seguridadPrivada, setSeguridadPrivada] = useState<any>(false);
  const [escuelas, setEscuelas] = useState<any>(false);
  const [mantenimiento, setMantenimiento] = useState<any>(false);
  const [piscina, setPiscina] = useState<any>(false);
  const [discapacitados, setDiscapacitados] = useState<any>(false);
  const [amueblado, setAmueblado] = useState(false);
  const [camas, setCamas] = useState<any>(false);
  const [closet, setCloset] = useState<any>(false);
  const [sala, setSala] = useState<any>(false);
  const [comedor, setComedor] = useState<any>(false);
  const [cocina, setCocina] = useState<any>(false);
  const [AA, setAA] = useState<any>(false);
  const [refrigerador, setRefrigerador] = useState<any>(false);
  const [estufa, setEstufa] = useState<any>(false);
  const [microondas, setMicroondas] = useState<any>(false);
  const [minihorno, setMinihorno] = useState<any>(false);
  const [horno, setHorno] = useState<any>(false);
  const [lavadora, setLavadora] = useState<any>(false);
  const [secadora, setSecadora] = useState<any>(false);

  const { formulario, handleChange } = useForm({
    titulo: "",
    propertyType,
    antiguedad: undefined,
    m2Construidos: 0,
    m2Terreno: 0,
    habitaciones: 0,
    baños: 0,
    medioBaños: 0,
    parking: 0,
    pisos: 0,
    agua,
    luz,
    gas,
    internet,
    seguridadPrivada,
    escuelas,
    mantenimiento,
    piscina,
    discapacitados,
    descripcion: undefined,
    precio: 0,
    comisiones: 0,
    otros: "",
  });

  const {
    titulo,
    antiguedad,
    m2Construidos,
    m2Terreno,
    habitaciones,
    baños,
    medioBaños,
    parking,
    pisos,
    descripcion,
    precio,
    comisiones,
    otros,
  } = formulario;

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (agua === "Sí") setAgua(true);
    if (agua === "No") setAgua(false);

    if (luz === "Sí") setLuz(true);
    if (luz === "No") setLuz(false);

    if (gas === "Sí") setGas(true);
    if (gas === "No") setGas(false);

    if (internet === "Sí") setInternet(true);
    if (internet === "No") setInternet(false);

    if (seguridadPrivada === "Sí") setSeguridadPrivada(true);
    if (seguridadPrivada === "No") setSeguridadPrivada(false);

    if (escuelas === "Sí") setEscuelas(true);
    if (escuelas === "No") setEscuelas(false);

    if (mantenimiento === "Sí") setMantenimiento(true);
    if (mantenimiento === "No") setMantenimiento(false);

    if (piscina === "Sí") setPiscina(true);
    if (piscina === "No") setPiscina(false);

    if (discapacitados === "Sí") setDiscapacitados(true);
    if (discapacitados === "No") setDiscapacitados(false);

    if (camas === "Sí") setCamas(true);
    if (camas === "No") setCamas(false);

    if (closet === "Sí") setCloset(true);
    if (closet === "No") setCloset(false);

    if (sala === "Sí") setSala(true);
    if (sala === "No") setSala(false);

    if (comedor === "Sí") setComedor(true);
    if (comedor === "No") setComedor(false);

    if (cocina === "Sí") setCocina(true);
    if (cocina === "No") setCocina(false);

    if (AA === "Sí") setAA(true);
    if (AA === "No") setAA(false);

    if (refrigerador === "Sí") setRefrigerador(true);
    if (refrigerador === "No") setRefrigerador(false);

    if (estufa === "Sí") setEstufa(true);
    if (estufa === "No") setEstufa(false);

    if (microondas === "Sí") setMicroondas(true);
    if (microondas === "No") setMicroondas(false);

    if (minihorno === "Sí") setMinihorno(true);
    if (minihorno === "No") setMinihorno(false);

    if (horno === "Sí") setHorno(true);
    if (horno === "No") setHorno(false);

    if (lavadora === "Sí") setLavadora(true);
    if (lavadora === "No") setLavadora(false);

    if (secadora === "Sí") setSecadora(true);
    if (secadora === "No") setSecadora(false);

    crearInmueble(
      titulo,
      categoria,
      precio,
      direccion,
      ubicacion.lat,
      ubicacion.lng,
      descripcion,
      agua,
      AA,
      amueblado,
      antiguedad,
      baños,
      camas,
      closet,
      cocina,
      comedor,
      comisiones,
      discapacitados,
      escuelas,
      estufa,
      gas,
      habitaciones,
      horno,
      internet,
      lavadora,
      luz,
      m2Construidos,
      m2Terreno,
      mantenimiento,
      medioBaños,
      microondas,
      minihorno,
      otros,
      parking,
      piscina,
      pisos,
      propertyType,
      refrigerador,
      sala,
      secadora,
      seguridadPrivada
    );
  };

  const longitudTitulo = titulo.length;
  const longitudOtros = otros.length;

  return (
    <section>
      <div className="container">
        <Titulo titulo="Agrega un inmueble" />
        <br />
        <Form onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-sm-12 col-md-12 col-lg-6 px-4">
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
                      style={{ color: longitudTitulo > 75 ? "red" : "black" }}
                    >
                      {longitudTitulo}
                    </span>
                    /75
                  </Col>
                </Row>
              </Form.Group>

              <br />
              <br />

              <Row>
                <Col md={6}>
                  <div className="row mb-3">
                    <div className="col-sm-5 col-md-4 col-lg-4">
                      <div className={styles.content}>Tipo</div>
                    </div>
                    <div className="col-sm-7 col-md-8 col-lg-8">
                      <Form.Select
                        value={propertyType}
                        onChange={(e) => setTipoPropiedad(e.target.value)}
                      >
                        <option>Casa</option>
                        <option>Departamento</option>
                      </Form.Select>
                    </div>
                  </div>
                </Col>
                <Col md={6}>
                  <div className="row mb-3">
                    <div className="col-sm-5 col-md-4 col-lg-4">
                      <div className={styles.content}></div>
                    </div>
                    <div className="col-sm-7 col-md-8 col-lg-8">
                      {cargando ? (
                        <Loading />
                      ) : (
                        <Form.Select
                          value={categoria}
                          onChange={(e) => setCategoria(e.target.value)}
                        >
                          {categorias.map((categoria) => (
                            <>
                              <option key={categoria._id} value={categoria._id}>
                                {categoria.nombre}
                              </option>
                            </>
                          ))}
                        </Form.Select>
                      )}
                    </div>
                  </div>
                </Col>
              </Row>

              <hr />
              <div className={styles.MiniSub}>Detalles del inmueble</div>
              <div className={styles.line}></div>
              <br />

              <div className="row">
                {/* <div className="col-6 mb-3">
                  <div className="row">
                    <div className="col-sm-12 col-md-8 col-lg-7 col-xl-7 col-xxl-8">
                      <div className={styles.labels}>ID de inmueble</div>
                    </div>
                    <div className="col-sm-12 col-md-4 col-lg-5 col-xl-5 col-xxl-4">
                      <Form.Control
                        value={"id"}
                        name="id"
                        onChange={handleChange}
                        type="text"
                      />
                    </div>
                  </div>
                </div> */}
                <div className="col-6 mb-3">
                  <div className="row">
                    <div className="col-sm-12 col-md-8 col-lg-7 col-xl-7 col-xxl-8">
                      <div className={styles.labels}>Antigüedad</div>
                    </div>
                    <div className="col-sm-12 col-md-4 col-lg-5 col-xl-5 col-xxl-4">
                      <Form.Control
                        value={antiguedad}
                        name="antiguedad"
                        onChange={handleChange}
                        type="text"
                      />
                    </div>
                  </div>
                </div>
                <div className="col-6 mb-3">
                  <div className="row">
                    <div className="col-sm-12 col-md-8 col-lg-7 col-xl-7 col-xxl-8">
                      <div className={styles.labels}>M² de construcción</div>
                    </div>
                    <div className="col-sm-12 col-md-4 col-lg-5 col-xl-5 col-xxl-4">
                      <Form.Control
                        value={m2Construidos}
                        name="m2Construidos"
                        onChange={handleChange}
                        type="number"
                        min={0}
                      />
                    </div>
                  </div>
                </div>
                <div className="col-6 mb-3">
                  <div className="row">
                    <div className="col-sm-12 col-md-8 col-lg-7 col-xl-7 col-xxl-8">
                      <div className={styles.labels}>M² de terreno</div>
                    </div>
                    <div className="col-sm-12 col-md-4 col-lg-5 col-xl-5 col-xxl-4">
                      <Form.Control
                        value={m2Terreno}
                        name="m2Terreno"
                        onChange={handleChange}
                        type="number"
                        min={0}
                      />
                    </div>
                  </div>
                </div>
                <div className="col-6 mb-3">
                  <div className="row">
                    <div className="col-sm-12 col-md-8 col-lg-7 col-xl-7 col-xxl-8">
                      <div className={styles.labels}>Habitaciones</div>
                    </div>
                    <div className="col-sm-12 col-md-4 col-lg-5 col-xl-5 col-xxl-4">
                      <Form.Control
                        value={habitaciones}
                        name="habitaciones"
                        onChange={handleChange}
                        type="number"
                        min={0}
                      />
                    </div>
                  </div>
                </div>
                <div className="col-6 mb-3">
                  <div className="row">
                    <div className="col-sm-12 col-md-8 col-lg-7 col-xl-7 col-xxl-8">
                      <div className={styles.labels}>Baños completos</div>
                    </div>
                    <div className="col-sm-12 col-md-4 col-lg-5 col-xl-5 col-xxl-4">
                      <Form.Control
                        value={baños}
                        name="baños"
                        onChange={handleChange}
                        type="number"
                        min={0}
                      />
                    </div>
                  </div>
                </div>
                <div className="col-6 mb-3">
                  <div className="row">
                    <div className="col-sm-12 col-md-8 col-lg-7 col-xl-7 col-xxl-8">
                      <div className={styles.labels}>Medios baños</div>
                    </div>
                    <div className="col-sm-12 col-md-4 col-lg-5 col-xl-5 col-xxl-4">
                      <Form.Control
                        value={medioBaños}
                        name="medioBaños"
                        onChange={handleChange}
                        type="number"
                        min={0}
                      />
                    </div>
                  </div>
                </div>
                <div className="col-6 mb-3">
                  <div className="row">
                    <div className="col-sm-12 col-md-8 col-lg-7 col-xl-7 col-xxl-8">
                      <div className={styles.labels}>Estacionamientos</div>
                    </div>
                    <div className="col-sm-12 col-md-4 col-lg-5 col-xl-5 col-xxl-4">
                      <Form.Control
                        value={parking}
                        name="parking"
                        onChange={handleChange}
                        type="number"
                        min={0}
                      />
                    </div>
                  </div>
                </div>
                <div className="col-6 mb-3">
                  <div className="row">
                    <div className="col-sm-12 col-md-8 col-lg-7 col-xl-7 col-xxl-8">
                      <div className={styles.labels}>Pisos</div>
                    </div>
                    <div className="col-sm-12 col-md-4 col-lg-5 col-xl-5 col-xxl-4">
                      <Form.Control
                        value={pisos}
                        name="pisos"
                        onChange={handleChange}
                        type="number"
                        min={0}
                      />
                    </div>
                  </div>
                </div>
                <div className="col-6 mb-3">
                  <div className="row">
                    <div className="col-sm-12 col-md-8 col-lg-7 col-xl-7 col-xxl-8">
                      <div className={styles.labels}>Cuenta con agua</div>
                    </div>
                    <div className="col-sm-12 col-md-4 col-lg-5 col-xl-5 col-xxl-4">
                      <Form.Select
                        value={agua}
                        onChange={(e) => setAgua(e.target.value)}
                      >
                        <option>No</option>
                        <option>Sí</option>
                      </Form.Select>
                    </div>
                  </div>
                </div>
                <div className="col-6 mb-3">
                  <div className="row">
                    <div className="col-sm-12 col-md-8 col-lg-7 col-xl-7 col-xxl-8">
                      <div className={styles.labels}>Cuenta con luz</div>
                    </div>
                    <div className="col-sm-12 col-md-4 col-lg-5 col-xl-5 col-xxl-4">
                      <Form.Select
                        value={luz}
                        onChange={(e) => setLuz(e.target.value)}
                      >
                        <option>No</option>
                        <option>Sí</option>
                      </Form.Select>
                    </div>
                  </div>
                </div>
                <div className="col-6 mb-3">
                  <div className="row">
                    <div className="col-sm-12 col-md-8 col-lg-7 col-xl-7 col-xxl-8">
                      <div className={styles.labels}>Cuenta con gas</div>
                    </div>
                    <div className="col-sm-12 col-md-4 col-lg-5 col-xl-5 col-xxl-4">
                      <Form.Select
                        value={gas}
                        onChange={(e) => setGas(e.target.value)}
                      >
                        <option>No</option>
                        <option>Sí</option>
                      </Form.Select>
                    </div>
                  </div>
                </div>
                <div className="col-6 mb-3">
                  <div className="row">
                    <div className="col-sm-12 col-md-8 col-lg-7 col-xl-7 col-xxl-8">
                      <div className={styles.labels}>Internet</div>
                    </div>
                    <div className="col-sm-12 col-md-4 col-lg-5 col-xl-5 col-xxl-4">
                      <Form.Select
                        value={internet}
                        onChange={(e) => setInternet(e.target.value)}
                      >
                        <option>No</option>
                        <option>Sí</option>
                      </Form.Select>
                    </div>
                  </div>
                </div>
                <div className="col-6 mb-3">
                  <div className="row">
                    <div className="col-sm-12 col-md-8 col-lg-7 col-xl-7 col-xxl-8">
                      <div className={styles.labels}>Seguridad privada</div>
                    </div>
                    <div className="col-sm-12 col-md-4 col-lg-5 col-xl-5 col-xxl-4">
                      <Form.Select
                        value={seguridadPrivada}
                        onChange={(e) => setSeguridadPrivada(e.target.value)}
                      >
                        <option>No</option>
                        <option>Sí</option>
                      </Form.Select>
                    </div>
                  </div>
                </div>
                <div className="col-6 mb-3">
                  <div className="row">
                    <div className="col-sm-12 col-md-8 col-lg-7 col-xl-7 col-xxl-8">
                      <div className={styles.labels}>Escuelas cercanas</div>
                    </div>
                    <div className="col-sm-12 col-md-4 col-lg-5 col-xl-5 col-xxl-4">
                      <Form.Select
                        value={escuelas}
                        onChange={(e) => setEscuelas(e.target.value)}
                      >
                        <option>No</option>
                        <option>Sí</option>
                      </Form.Select>
                    </div>
                  </div>
                </div>
                <div className="col-6 mb-3">
                  <div className="row">
                    <div className="col-sm-12 col-md-8 col-lg-7 col-xl-7 col-xxl-8">
                      <div className={styles.labels}>Mantenimiento</div>
                    </div>
                    <div className="col-sm-12 col-md-4 col-lg-5 col-xl-5 col-xxl-4">
                      <Form.Select
                        value={mantenimiento}
                        onChange={(e) => setMantenimiento(e.target.value)}
                      >
                        <option>No</option>
                        <option>Sí</option>
                      </Form.Select>
                    </div>
                  </div>
                </div>
                <div className="col-6 mb-3">
                  <div className="row">
                    <div className="col-sm-12 col-md-8 col-lg-7 col-xl-7 col-xxl-8">
                      <div className={styles.labels}>Alberca</div>
                    </div>
                    <div className="col-sm-12 col-md-4 col-lg-5 col-xl-5 col-xxl-4">
                      <Form.Select
                        value={piscina}
                        onChange={(e) => setPiscina(e.target.value)}
                      >
                        <option>No</option>
                        <option>Sí</option>
                      </Form.Select>
                    </div>
                  </div>
                </div>
                <div className="col-6 mb-3">
                  <div className="row">
                    <div className="col-sm-12 col-md-8 col-lg-7 col-xl-7 col-xxl-8">
                      <div className={styles.labels}>
                        Acceso a discapacitados
                      </div>
                    </div>
                    <div className="col-sm-12 col-md-4 col-lg-5 col-xl-5 col-xxl-4">
                      <Form.Select
                        value={discapacitados}
                        onChange={(e) => setDiscapacitados(e.target.value)}
                      >
                        <option>No</option>
                        <option>Sí</option>
                      </Form.Select>
                    </div>
                  </div>
                </div>
              </div>
              <hr />
              <div className={styles.MiniSub}>¿El inmueble está amueblado?</div>
              <div className={styles.line}></div>
              <br />
              <div className="row">
                <div className="col-12 mb-3">
                  <Form.Check
                    inline
                    type="radio"
                    name="group2"
                    label="Sí"
                    onClick={() => {
                      setAmueblado(true);
                    }}
                  />
                  <Form.Check
                    inline
                    type="radio"
                    name="group2"
                    label="No"
                    onClick={() => {
                      setAmueblado(false);
                    }}
                  />
                </div>
                {amueblado ? (
                  <>
                    <div className="col-6 mb-3">
                      <div className="row">
                        <div className="col-sm-12 col-md-7 col-lg-6 col-xxl-7">
                          <div className={styles.labels}>Camas</div>
                        </div>
                        <div className="col-sm-12 col-md-4 col-lg-6 col-xxl-4">
                          <Form.Select
                            value={camas}
                            onChange={(e) => setCamas(e.target.value)}
                          >
                            <option>No</option>
                            <option>Sí</option>
                          </Form.Select>
                        </div>
                      </div>
                    </div>
                    <div className="col-6 mb-3">
                      <div className="row">
                        <div className="col-sm-12 col-md-7 col-lg-6 col-xxl-7">
                          <div className={styles.labels}>Closet</div>
                        </div>
                        <div className="col-sm-12 col-md-4 col-lg-6 col-xxl-4">
                          <Form.Select
                            value={closet}
                            onChange={(e) => setCloset(e.target.value)}
                          >
                            <option>No</option>
                            <option>Sí</option>
                          </Form.Select>
                        </div>
                      </div>
                    </div>
                    <div className="col-6 mb-3">
                      <div className="row">
                        <div className="col-sm-12 col-md-7 col-lg-6 col-xxl-7">
                          <div className={styles.labels}>Sala</div>
                        </div>
                        <div className="col-sm-12 col-md-4 col-lg-6 col-xxl-4">
                          <Form.Select
                            value={sala}
                            onChange={(e) => setSala(e.target.value)}
                          >
                            <option>No</option>
                            <option>Sí</option>
                          </Form.Select>
                        </div>
                      </div>
                    </div>
                    <div className="col-6 mb-3">
                      <div className="row">
                        <div className="col-sm-12 col-md-7 col-lg-6 col-xxl-7">
                          <div className={styles.labels}>Comedor</div>
                        </div>
                        <div className="col-sm-12 col-md-4 col-lg-6 col-xxl-4">
                          <Form.Select
                            value={comedor}
                            onChange={(e) => setComedor(e.target.value)}
                          >
                            <option>No</option>
                            <option>Sí</option>
                          </Form.Select>
                        </div>
                      </div>
                    </div>
                    <div className="col-6 mb-3">
                      <div className="row">
                        <div className="col-sm-12 col-md-7 col-lg-6 col-xxl-7">
                          <div className={styles.labels}>Cocina</div>
                        </div>
                        <div className="col-sm-12 col-md-4 col-lg-6 col-xxl-4">
                          <Form.Select
                            value={cocina}
                            onChange={(e) => setCocina(e.target.value)}
                          >
                            <option>No</option>
                            <option>Sí</option>
                          </Form.Select>
                        </div>
                      </div>
                    </div>
                    <div className="col-6 mb-3">
                      <div className="row">
                        <div className="col-sm-12 col-md-7 col-lg-6 col-xxl-7">
                          <div className={styles.labels}>AA</div>
                        </div>
                        <div className="col-sm-12 col-md-4 col-lg-6 col-xxl-4">
                          <Form.Select
                            value={AA}
                            onChange={(e) => setAA(e.target.value)}
                          >
                            <option>No</option>
                            <option>Sí</option>
                          </Form.Select>
                        </div>
                      </div>
                    </div>
                    <div className="col-6 mb-3">
                      <div className="row">
                        <div className="col-sm-12 col-md-7 col-lg-6 col-xxl-7">
                          <div className={styles.labels}>Refrigerador</div>
                        </div>
                        <div className="col-sm-12 col-md-4 col-lg-6 col-xxl-4">
                          <Form.Select
                            value={refrigerador}
                            onChange={(e) => setRefrigerador(e.target.value)}
                          >
                            <option>No</option>
                            <option>Sí</option>
                          </Form.Select>
                        </div>
                      </div>
                    </div>
                    <div className="col-6 mb-3">
                      <div className="row">
                        <div className="col-sm-12 col-md-7 col-lg-6 col-xxl-7">
                          <div className={styles.labels}>Estufa</div>
                        </div>
                        <div className="col-sm-12 col-md-4 col-lg-6 col-xxl-4">
                          <Form.Select
                            value={estufa}
                            onChange={(e) => setEstufa(e.target.value)}
                          >
                            <option>No</option>
                            <option>Sí</option>
                          </Form.Select>
                        </div>
                      </div>
                    </div>
                    <div className="col-6 mb-3">
                      <div className="row">
                        <div className="col-sm-12 col-md-7 col-lg-6 col-xxl-7">
                          <div className={styles.labels}>Microondas</div>
                        </div>
                        <div className="col-sm-12 col-md-4 col-lg-6 col-xxl-4">
                          <Form.Select
                            value={microondas}
                            onChange={(e) => setMicroondas(e.target.value)}
                          >
                            <option>No</option>
                            <option>Sí</option>
                          </Form.Select>
                        </div>
                      </div>
                    </div>
                    <div className="col-6 mb-3">
                      <div className="row">
                        <div className="col-sm-12 col-md-7 col-lg-6 col-xxl-7">
                          <div className={styles.labels}>Mini horno</div>
                        </div>
                        <div className="col-sm-12 col-md-4 col-lg-6 col-xxl-4">
                          <Form.Select
                            value={minihorno}
                            onChange={(e) => setMinihorno(e.target.value)}
                          >
                            <option>No</option>
                            <option>Sí</option>
                          </Form.Select>
                        </div>
                      </div>
                    </div>
                    <div className="col-6 mb-3">
                      <div className="row">
                        <div className="col-sm-12 col-md-7 col-lg-6 col-xxl-7">
                          <div className={styles.labels}>Horno</div>
                        </div>
                        <div className="col-sm-12 col-md-4 col-lg-6 col-xxl-4">
                          <Form.Select
                            value={horno}
                            onChange={(e) => setHorno(e.target.value)}
                          >
                            <option>No</option>
                            <option>Sí</option>
                          </Form.Select>
                        </div>
                      </div>
                    </div>
                    <div className="col-6 mb-3">
                      <div className="row">
                        <div className="col-sm-12 col-md-7 col-lg-6 col-xxl-7">
                          <div className={styles.labels}>Lavadora</div>
                        </div>
                        <div className="col-sm-12 col-md-4 col-lg-6 col-xxl-4">
                          <Form.Select
                            value={lavadora}
                            onChange={(e) => setLavadora(e.target.value)}
                          >
                            <option>No</option>
                            <option>Sí</option>
                          </Form.Select>
                        </div>
                      </div>
                    </div>
                    <div className="col-6 mb-3">
                      <div className="row">
                        <div className="col-sm-12 col-md-7 col-lg-6 col-xxl-7">
                          <div className={styles.labels}>Secadora</div>
                        </div>
                        <div className="col-sm-12 col-md-4 col-lg-6 col-xxl-4">
                          <Form.Select
                            value={secadora}
                            onChange={(e) => setSecadora(e.target.value)}
                          >
                            <option>No</option>
                            <option>Sí</option>
                          </Form.Select>
                        </div>
                      </div>
                    </div>
                    <div className="col-12 mb-3">
                      <div className="row">
                        <div className="col-3">
                          <div className={styles.labels}>Otros (opcional):</div>
                        </div>
                        <div className="col-9">
                          <Form.Control
                            type="text"
                            value={otros}
                            onChange={handleChange}
                            name="otros"
                          />
                          <Row>
                            <Col></Col>
                            <Col className="d-flex justify-content-end">
                              <span
                                style={{
                                  color: longitudOtros > 100 ? "red" : "black",
                                }}
                              >
                                {longitudOtros}
                              </span>
                              /100
                            </Col>
                          </Row>
                        </div>
                      </div>
                    </div>
                  </>
                ) : null}
              </div>
              <hr />
              <div className={styles.MiniSub}>Descripción del inmueble</div>
              <div className={styles.line}></div>
              <br />
              <div className="row">
                <div className="col-12 mb-3">
                  <Form.Control
                    as="textarea"
                    rows={7}
                    value={descripcion}
                    name="descripcion"
                    onChange={handleChange}
                    placeholder="Escribe una breve descripción del inmueble..."
                  />
                </div>
                <div className="col-12">
                  <hr />
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
              </div>
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
              </div>
            </div>
            <div className="col-sm-12 col-md-12 col-lg-6">
              <h2>**/ preview load images /**</h2>
            </div>
            <br />
            <div className="col-12 mb-5">
              {precio <= 0 || titulo.length <= 0 ? (
                <Button titulo="Publicar" btn="Disabled" />
              ) : (
                <Button titulo="Publicar" />
              )}
            </div>
          </div>
        </Form>
      </div>
    </section>
  );
};

export default AnadirInmueble;
