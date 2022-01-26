import { FormEvent, useContext, useState } from "react";
import { useRouter } from "next/router";
import { Col, Form, Row } from "react-bootstrap";
import Select from "react-select";
import {
  InmuebleContext,
  InmuebleData,
} from "../../../../context/inmuebles/InmuebleContext";
import { MapContext } from "../../../../context/map/MapContext";
import {
  useCategories,
  useTipoPropiedad,
} from "../../../../hooks/useCategories";
import { useForm } from "../../../../hooks/useForm";
import SeleccionarLugar from "../../../ui/buscador/SeleccionarLugar";
import Button from "../../../ui/button/Button";
import Loading from "../../../ui/loading/Loading";
import styles from "./FormDesign.module.css";
import MapaUbicacion from "./MapaUbicacion";
import FormStepOne from "./FormStepOne";

const options = [
  { value: false, label: "No" },
  { value: true, label: "Sí" },
];

interface Props {
  handlePrevStep: () => void;
  handleNextStep: () => void;
}

const Formulario = (props: Props) => {
  const { handlePrevStep, handleNextStep } = props;

  const router = useRouter();
  const { ubicacion, direccion } = useContext(MapContext);
  const { crearInmueble, setMostrarImgFrom, mostrarImgFrom } =
    useContext(InmuebleContext);
  const { categorias, cargando } = useCategories();
  const [creando, setCreando] = useState(false);

  const { loading, propertyTypes } = useTipoPropiedad();
  const [mostrarPublicar, setMostrarPublicar] = useState(true);
  const [categoria, setCategoria] = useState("61e99f0e0d3bd9163e4a4b42");
  const [tipoPropiedad, setTipoPropiedad] = useState(
    "61e99edd0d3bd9163e4a4b3a"
  );
  const [amueblado, setAmueblado] = useState(false);
  const [agua, setAgua] = useState<any>(false);
  const [luz, setLuz] = useState<any>(false);
  const [gas, setGas] = useState<any>(false);
  const [internet, setInternet] = useState<any>(false);
  const [seguridadPrivada, setSeguridadPrivada] = useState<any>(false);
  const [escuelas, setEscuelas] = useState<any>(false);
  const [mantenimiento, setMantenimiento] = useState<any>(false);
  const [piscina, setPiscina] = useState<any>(false);
  const [discapacitados, setDiscapacitados] = useState<any>(false);
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
    antiguedad: "",
    m2Construidos: 0,
    m2Terreno: 0,
    habitaciones: 0,
    baños: 0,
    medioBaños: 0,
    parking: 0,
    pisos: 0,
    descripcion: "",
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

  const dataInmueble: InmuebleData = {
    titulo,
    categoria,
    precio,
    direccion,
    lat: ubicacion.lat,
    lng: ubicacion.lng,
    tipoPropiedad,
    descripcion,
    AA: AA.value,
    agua: agua.value,
    amueblado,
    antiguedad,
    baños,
    camas: camas.value,
    closet: closet.value,
    cocina: cocina.value,
    comedor: comedor.value,
    comisiones,
    discapacitados: discapacitados.value,
    escuelas: escuelas.value,
    estufa: estufa.value,
    gas: gas.value,
    habitaciones,
    horno: horno.value,
    internet: internet.value,
    lavadora: lavadora.value,
    luz: luz.value,
    m2Construidos,
    m2Terreno,
    mantenimiento: mantenimiento.value,
    medioBaños,
    microondas: microondas.value,
    minihorno: minihorno.value,
    otros,
    parking,
    piscinas: piscina.value,
    pisos,
    refrigerador: refrigerador.value,
    sala: sala.value,
    secadora: secadora.value,
    seguridadPrivada: seguridadPrivada.value,
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setCreando(true);

    await crearInmueble(dataInmueble);

    setMostrarImgFrom(true);
    setMostrarPublicar(false);
    setCreando(false);
    router.push("/perfil/agregar-inmueble");
  };

  const longitudTitulo = titulo.length;
  const longitudOtros = otros.length;

  return (
    <>
      <div className="row">
        <div className="col-sm-12 col-md-12 col-lg-12 px-4">
          <hr />
          <div className={styles.MiniSub}>Detalles del inmueble</div>
          <div className={styles.line}></div>
          <br />

          <div className="row">
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
                    placeholder="Ej: 5 años"
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
                  <Select
                    options={options}
                    defaultValue={agua}
                    onChange={setAgua}
                    placeholder=""
                  />
                </div>
              </div>
            </div>
            <div className="col-6 mb-3">
              <div className="row">
                <div className="col-sm-12 col-md-8 col-lg-7 col-xl-7 col-xxl-8">
                  <div className={styles.labels}>Cuenta con luz</div>
                </div>
                <div className="col-sm-12 col-md-4 col-lg-5 col-xl-5 col-xxl-4">
                  <Select
                    options={options}
                    defaultValue={luz}
                    onChange={setLuz}
                    placeholder=""
                  />
                </div>
              </div>
            </div>
            <div className="col-6 mb-3">
              <div className="row">
                <div className="col-sm-12 col-md-8 col-lg-7 col-xl-7 col-xxl-8">
                  <div className={styles.labels}>Cuenta con gas</div>
                </div>
                <div className="col-sm-12 col-md-4 col-lg-5 col-xl-5 col-xxl-4">
                  <Select
                    options={options}
                    defaultValue={gas}
                    onChange={setGas}
                    placeholder=""
                  />
                </div>
              </div>
            </div>
            <div className="col-6 mb-3">
              <div className="row">
                <div className="col-sm-12 col-md-8 col-lg-7 col-xl-7 col-xxl-8">
                  <div className={styles.labels}>Internet</div>
                </div>
                <div className="col-sm-12 col-md-4 col-lg-5 col-xl-5 col-xxl-4">
                  <Select
                    options={options}
                    defaultValue={internet}
                    onChange={setInternet}
                    placeholder=""
                  />
                </div>
              </div>
            </div>
            <div className="col-6 mb-3">
              <div className="row">
                <div className="col-sm-12 col-md-8 col-lg-7 col-xl-7 col-xxl-8">
                  <div className={styles.labels}>Seguridad privada</div>
                </div>
                <div className="col-sm-12 col-md-4 col-lg-5 col-xl-5 col-xxl-4">
                  <Select
                    options={options}
                    defaultValue={seguridadPrivada}
                    onChange={setSeguridadPrivada}
                    placeholder=""
                  />
                </div>
              </div>
            </div>
            <div className="col-6 mb-3">
              <div className="row">
                <div className="col-sm-12 col-md-8 col-lg-7 col-xl-7 col-xxl-8">
                  <div className={styles.labels}>Escuelas cercanas</div>
                </div>
                <div className="col-sm-12 col-md-4 col-lg-5 col-xl-5 col-xxl-4">
                  <Select
                    options={options}
                    defaultValue={escuelas}
                    onChange={setEscuelas}
                    placeholder=""
                  />
                </div>
              </div>
            </div>
            <div className="col-6 mb-3">
              <div className="row">
                <div className="col-sm-12 col-md-8 col-lg-7 col-xl-7 col-xxl-8">
                  <div className={styles.labels}>Mantenimiento</div>
                </div>
                <div className="col-sm-12 col-md-4 col-lg-5 col-xl-5 col-xxl-4">
                  <Select
                    options={options}
                    defaultValue={mantenimiento}
                    onChange={setMantenimiento}
                    placeholder=""
                  />
                </div>
              </div>
            </div>
            <div className="col-6 mb-3">
              <div className="row">
                <div className="col-sm-12 col-md-8 col-lg-7 col-xl-7 col-xxl-8">
                  <div className={styles.labels}>Alberca</div>
                </div>
                <div className="col-sm-12 col-md-4 col-lg-5 col-xl-5 col-xxl-4">
                  <Select
                    options={options}
                    defaultValue={piscina}
                    onChange={setPiscina}
                    placeholder=""
                  />
                </div>
              </div>
            </div>
            <div className="col-6 mb-3">
              <div className="row">
                <div className="col-sm-12 col-md-8 col-lg-7 col-xl-7 col-xxl-8">
                  <div className={styles.labels}>Acceso a discapacitados</div>
                </div>
                <div className="col-sm-12 col-md-4 col-lg-5 col-xl-5 col-xxl-4">
                  <Select
                    options={options}
                    defaultValue={discapacitados}
                    onChange={setDiscapacitados}
                    placeholder=""
                  />
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
                      <Select
                        options={options}
                        defaultValue={camas}
                        onChange={setCamas}
                        placeholder=""
                      />
                    </div>
                  </div>
                </div>
                <div className="col-6 mb-3">
                  <div className="row">
                    <div className="col-sm-12 col-md-7 col-lg-6 col-xxl-7">
                      <div className={styles.labels}>Closet</div>
                    </div>
                    <div className="col-sm-12 col-md-4 col-lg-6 col-xxl-4">
                      <Select
                        options={options}
                        defaultValue={closet}
                        onChange={setCloset}
                        placeholder=""
                      />
                    </div>
                  </div>
                </div>
                <div className="col-6 mb-3">
                  <div className="row">
                    <div className="col-sm-12 col-md-7 col-lg-6 col-xxl-7">
                      <div className={styles.labels}>Sala</div>
                    </div>
                    <div className="col-sm-12 col-md-4 col-lg-6 col-xxl-4">
                      <Select
                        options={options}
                        defaultValue={sala}
                        onChange={setSala}
                        placeholder=""
                      />
                    </div>
                  </div>
                </div>
                <div className="col-6 mb-3">
                  <div className="row">
                    <div className="col-sm-12 col-md-7 col-lg-6 col-xxl-7">
                      <div className={styles.labels}>Comedor</div>
                    </div>
                    <div className="col-sm-12 col-md-4 col-lg-6 col-xxl-4">
                      <Select
                        options={options}
                        defaultValue={comedor}
                        onChange={setComedor}
                        placeholder=""
                      />
                    </div>
                  </div>
                </div>
                <div className="col-6 mb-3">
                  <div className="row">
                    <div className="col-sm-12 col-md-7 col-lg-6 col-xxl-7">
                      <div className={styles.labels}>Cocina</div>
                    </div>
                    <div className="col-sm-12 col-md-4 col-lg-6 col-xxl-4">
                      <Select
                        options={options}
                        defaultValue={cocina}
                        onChange={setCocina}
                        placeholder=""
                      />
                    </div>
                  </div>
                </div>
                <div className="col-6 mb-3">
                  <div className="row">
                    <div className="col-sm-12 col-md-7 col-lg-6 col-xxl-7">
                      <div className={styles.labels}>AA</div>
                    </div>
                    <div className="col-sm-12 col-md-4 col-lg-6 col-xxl-4">
                      <Select
                        options={options}
                        defaultValue={AA}
                        onChange={setAA}
                        placeholder=""
                      />
                    </div>
                  </div>
                </div>
                <div className="col-6 mb-3">
                  <div className="row">
                    <div className="col-sm-12 col-md-7 col-lg-6 col-xxl-7">
                      <div className={styles.labels}>Refrigerador</div>
                    </div>
                    <div className="col-sm-12 col-md-4 col-lg-6 col-xxl-4">
                      <Select
                        options={options}
                        defaultValue={refrigerador}
                        onChange={setRefrigerador}
                        placeholder=""
                      />
                    </div>
                  </div>
                </div>
                <div className="col-6 mb-3">
                  <div className="row">
                    <div className="col-sm-12 col-md-7 col-lg-6 col-xxl-7">
                      <div className={styles.labels}>Estufa</div>
                    </div>
                    <div className="col-sm-12 col-md-4 col-lg-6 col-xxl-4">
                      <Select
                        options={options}
                        defaultValue={estufa}
                        onChange={setEstufa}
                        placeholder=""
                      />
                    </div>
                  </div>
                </div>
                <div className="col-6 mb-3">
                  <div className="row">
                    <div className="col-sm-12 col-md-7 col-lg-6 col-xxl-7">
                      <div className={styles.labels}>Microondas</div>
                    </div>
                    <div className="col-sm-12 col-md-4 col-lg-6 col-xxl-4">
                      <Select
                        options={options}
                        defaultValue={microondas}
                        onChange={setMicroondas}
                        placeholder=""
                      />
                    </div>
                  </div>
                </div>
                <div className="col-6 mb-3">
                  <div className="row">
                    <div className="col-sm-12 col-md-7 col-lg-6 col-xxl-7">
                      <div className={styles.labels}>Mini horno</div>
                    </div>
                    <div className="col-sm-12 col-md-4 col-lg-6 col-xxl-4">
                      <Select
                        options={options}
                        defaultValue={minihorno}
                        onChange={setMinihorno}
                        placeholder=""
                      />
                    </div>
                  </div>
                </div>
                <div className="col-6 mb-3">
                  <div className="row">
                    <div className="col-sm-12 col-md-7 col-lg-6 col-xxl-7">
                      <div className={styles.labels}>Horno</div>
                    </div>
                    <div className="col-sm-12 col-md-4 col-lg-6 col-xxl-4">
                      <Select
                        options={options}
                        defaultValue={horno}
                        onChange={setHorno}
                        placeholder=""
                      />
                    </div>
                  </div>
                </div>
                <div className="col-6 mb-3">
                  <div className="row">
                    <div className="col-sm-12 col-md-7 col-lg-6 col-xxl-7">
                      <div className={styles.labels}>Lavadora</div>
                    </div>
                    <div className="col-sm-12 col-md-4 col-lg-6 col-xxl-4">
                      <Select
                        options={options}
                        defaultValue={lavadora}
                        onChange={setLavadora}
                        placeholder=""
                      />
                    </div>
                  </div>
                </div>
                <div className="col-6 mb-3">
                  <div className="row">
                    <div className="col-sm-12 col-md-7 col-lg-6 col-xxl-7">
                      <div className={styles.labels}>Secadora</div>
                    </div>
                    <div className="col-sm-12 col-md-4 col-lg-6 col-xxl-4">
                      <Select
                        options={options}
                        defaultValue={secadora}
                        onChange={setSecadora}
                        placeholder=""
                      />
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
          </div>
        </div>
        <br />
        <div className="col-12 my-3">
          <Button titulo="Anterior" onClick={handlePrevStep} />
          <span className="mx-2" />
          <Button titulo="Siguiente" onClick={handleNextStep} />
        </div>
      </div>
    </>
  );
};

export default Formulario;
