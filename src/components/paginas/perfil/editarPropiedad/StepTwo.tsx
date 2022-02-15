import {
  ChangeEvent,
  Dispatch,
  SetStateAction,
  useEffect,
  useState,
} from "react";
import Select from "react-select";
import { Col, Form, Row } from "react-bootstrap";
import Button from "components/ui/button/Button";
import Loading from "components/ui/loading/Loading";
import { ActualizarInmueble } from "context/inmuebles/InmuebleContext";
import styles from "./Editar.module.css";

const options: any = [
  { value: false, label: "No" },
  { value: true, label: "Sí" },
];

interface Props {
  handlePrevStep: () => void;
  inmuebleState: ActualizarInmueble;
  handleChange: ({
    target,
  }: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  creando: boolean;
  setInmuebleState: Dispatch<SetStateAction<ActualizarInmueble>>;
  antiguedad: string | undefined;
  m2Construidos: number | undefined;
  m2Terreno: number | undefined;
  habitaciones: number | undefined;
  baños: number | undefined;
  medioBaños: number | undefined;
  parking: number | undefined;
  pisos: number | undefined;
  descripcion: string | undefined;
  otros: string | undefined;
  cargando: boolean;
}

const StepTwo = (props: Props) => {
  const {
    handlePrevStep,
    inmuebleState,
    handleChange,
    setInmuebleState,
    creando,
    antiguedad,
    m2Construidos,
    m2Terreno,
    habitaciones,
    baños,
    medioBaños,
    parking,
    pisos,
    descripcion,
    otros,
  } = props;
  const [amueblado, setAmueblado] = useState(inmuebleState.amueblado);
  const [agua, setAgua] = useState<any>(inmuebleState.agua);
  const [luz, setLuz] = useState<any>(inmuebleState.luz);
  const [gas, setGas] = useState<any>(inmuebleState.gas);
  const [internet, setInternet] = useState<any>(inmuebleState.internet);
  const [seguridadPrivada, setSeguridadPrivada] = useState<any>(
    inmuebleState.seguridadPrivada
  );
  const [escuelas, setEscuelas] = useState<any>(inmuebleState.escuelas);
  const [mantenimiento, setMantenimiento] = useState<any>(
    inmuebleState.mantenimiento
  );
  const [piscina, setPiscina] = useState<any>(inmuebleState.piscinas);
  const [discapacitados, setDiscapacitados] = useState<any>(
    inmuebleState.discapacitados
  );
  const [camas, setCamas] = useState<any>(inmuebleState.camas);
  const [closet, setCloset] = useState<any>(inmuebleState.closet);
  const [sala, setSala] = useState<any>(inmuebleState.sala);
  const [comedor, setComedor] = useState<any>(inmuebleState.comedor);
  const [cocina, setCocina] = useState<any>(inmuebleState.cocina);
  const [AA, setAA] = useState<any>(inmuebleState.AA);
  const [refrigerador, setRefrigerador] = useState<any>(
    inmuebleState.refrigerador
  );
  const [estufa, setEstufa] = useState<any>(inmuebleState.estufa);
  const [microondas, setMicroondas] = useState<any>(inmuebleState.microondas);
  const [minihorno, setMinihorno] = useState<any>(inmuebleState.minihorno);
  const [horno, setHorno] = useState<any>(inmuebleState.horno);
  const [lavadora, setLavadora] = useState<any>(inmuebleState.lavadora);
  const [secadora, setSecadora] = useState<any>(inmuebleState.secadora);

  useEffect(() => {
    setInmuebleState({
      ...inmuebleState,
      antiguedad,
      agua: agua?.value,
      luz: luz?.value,
      gas: gas?.value,
      internet: internet?.value,
      seguridadPrivada: seguridadPrivada?.value,
      escuelas: escuelas?.value,
      mantenimiento: mantenimiento?.value,
      piscinas: piscina?.value,
      discapacitados: discapacitados?.value,
      camas: camas?.value,
      closet: closet?.value,
      sala: sala?.value,
      comedor: comedor?.value,
      cocina: cocina?.value,
      AA: AA?.value,
      refrigerador: refrigerador?.value,
      estufa: estufa?.value,
      microondas: microondas?.value,
      minihorno: minihorno?.value,
      horno: horno?.value,
      lavadora: lavadora?.value,
      secadora: secadora?.value,
      otros,
      descripcion,
      amueblado: inmuebleState.amueblado,
    });
  }, [
    agua,
    luz,
    gas,
    internet,
    seguridadPrivada,
    escuelas,
    mantenimiento,
    piscina,
    discapacitados,
    camas,
    closet,
    sala,
    comedor,
    cocina,
    AA,
    refrigerador,
    estufa,
    microondas,
    minihorno,
    horno,
    lavadora,
    secadora,
    antiguedad,
    m2Construidos,
    m2Terreno,
    habitaciones,
    baños,
    medioBaños,
    parking,
    pisos,
  ]);
  const longitudOtros = inmuebleState.otros?.length;

  return (
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
                  value={inmuebleState.antiguedad}
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
                  value={inmuebleState.m2Construidos}
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
                  value={inmuebleState.m2Terreno}
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
                  value={inmuebleState.habitaciones}
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
                  value={inmuebleState.baños}
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
                  value={inmuebleState.medioBaños}
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
                  value={inmuebleState.parking}
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
                  value={inmuebleState.pisos}
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
                  placeholder={agua ? "Sí" : "No"}
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
                  placeholder={luz ? "Sí" : "No"}
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
                  placeholder={gas ? "Sí" : "No"}
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
                  placeholder={internet ? "Sí" : "No"}
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
                  placeholder={seguridadPrivada ? "Sí" : "No"}
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
                  placeholder={escuelas ? "Sí" : "No"}
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
                  placeholder={mantenimiento ? "Sí" : "No"}
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
                  placeholder={piscina ? "Sí" : "No"}
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
                  placeholder={discapacitados ? "Sí" : "No"}
                />
              </div>
            </div>
          </div>
        </div>
        <hr />
        <div className={styles.MiniSub}>¿El inmueble está amueblado?</div>
        <div className={styles.line} />
        <br />
        <div className="row">
          <div className="col-12 mb-3">
            <Form.Check
              inline
              type="radio"
              name="group2"
              label="Sí"
              onClick={() => {
                setInmuebleState({ ...inmuebleState, amueblado: true });
              }}
            />
            <Form.Check
              inline
              type="radio"
              name="group2"
              label="No"
              onClick={() => {
                setInmuebleState({ ...inmuebleState, amueblado: false });
              }}
            />
          </div>
          {inmuebleState.amueblado ? (
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
                      placeholder={camas ? "Sí" : "No"}
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
                      placeholder={closet ? "Sí" : "No"}
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
                      placeholder={sala ? "Sí" : "No"}
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
                      placeholder={comedor ? "Sí" : "No"}
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
                      placeholder={cocina ? "sí" : "No"}
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
                      placeholder={AA ? "Sí" : "No"}
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
                      placeholder={refrigerador ? "Sí" : "No"}
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
                      placeholder={estufa ? "Sí" : "No"}
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
                      placeholder={microondas ? "Sí" : "No"}
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
                      placeholder={minihorno ? "Sí" : "No"}
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
                      placeholder={horno ? "Sí" : "No"}
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
                      placeholder={lavadora ? "Sí" : "No"}
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
                      placeholder={secadora ? "Sí" : "No"}
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
                      value={inmuebleState.otros}
                      onChange={handleChange}
                      name="otros"
                    />
                    <Row>
                      <Col />
                      <Col className="d-flex justify-content-end">
                        <span
                          style={{
                            color:
                              longitudOtros && longitudOtros > 100
                                ? "red"
                                : "black",
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
          <div className="col-12 mb-3 ">
            <Form.Control
              as="textarea"
              rows={7}
              value={inmuebleState.descripcion}
              name="descripcion"
              onChange={handleChange}
              placeholder="Escribe una breve descripción del inmueble..."
            />
            <div className="d-flex justify-content-center py-4">
              <Button titulo="Anterior" onClick={handlePrevStep} />
              <Button titulo="Terminar edición" />
              {creando ? <Loading /> : null}
            </div>
          </div>
        </div>
      </div>
      <br />
    </div>
  );
};

export default StepTwo;
