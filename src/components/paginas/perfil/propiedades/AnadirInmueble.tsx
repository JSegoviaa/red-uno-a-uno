import { FormEvent, useContext, useState } from "react";
import { Col, Container, Form, Row } from "react-bootstrap";
import { InmuebleContext } from "../../../../context/inmuebles/InmuebleContext";
import { useForm } from "../../../../hooks/useForm";
import Button from "../../../ui/button/Button";
import Modaltitle from "../../../ui/modaltitle/Modaltitle";
import Titulo from "../../../ui/titulo/Titulo";

const AnadirInmueble = () => {
  const { crearInmueble } = useContext(InmuebleContext);
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState(
    "61ca85313384577442588d29"
  );
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
    categoria: categoriaSeleccionada,
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
    otros: undefined,
  });

  const {
    categoria,
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

  const categoriaRenta = () => {
    setCategoriaSeleccionada("61ca85313384577442588d29");
  };

  const categoriaVenta = () => {
    setCategoriaSeleccionada("61cb51ee11b684e8c30cb7cb");
  };
  console.log(categoria);

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

    setCategoriaSeleccionada("");

    crearInmueble(
      titulo,
      categoria,
      precio,
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

  return (
    <Container>
      <Titulo titulo="Agrega un inmueble" />
      <br />
      <Form onSubmit={handleSubmit}>
        <Form.Check
          inline
          type="radio"
          name="categoria"
          label={"Renta"}
          onClick={categoriaRenta}
          value={categoriaSeleccionada}
          onChange={handleChange}
        />
        <Form.Check
          inline
          type="radio"
          name="categoria"
          label={"Venta"}
          onClick={categoriaVenta}
          value={categoriaSeleccionada}
          onChange={handleChange}
        />

        <Form.Group className="mb-3">
          <Form.Label>Tíulo del inmueble</Form.Label>
          <Form.Control
            type="text"
            value={titulo}
            name="titulo"
            onChange={handleChange}
          />
          <Form.Text className="text-muted">
            Ej. Casa en venta en Palmaris, Cancún
          </Form.Text>
        </Form.Group>
        <hr />
        <br />
        <div className="d-flex justify-content-start">
          <Modaltitle titulo="Detalles del inmueble" />
        </div>

        <Row>
          <Col sm={6}>
            <div>Tipo de propiedad</div>
          </Col>
          <Col sm={6}>
            <Form.Select
              value={propertyType}
              onChange={(e) => setTipoPropiedad(e.target.value)}
            >
              <option></option>
              <option>Casa</option>
              <option>Departamento</option>
            </Form.Select>
          </Col>
        </Row>
        <br />

        <Row>
          <Col>
            <Row></Row>
          </Col>
          <Col>
            <Row>
              <Col>Antigüedad</Col>
              <Col>
                <Form.Group className="mb-3">
                  <Form.Control
                    value={antiguedad}
                    name="antiguedad"
                    onChange={handleChange}
                    type="text"
                  />
                </Form.Group>
              </Col>
            </Row>
          </Col>
        </Row>

        <Row>
          <Col>
            <Row>
              <Col>M2 de construcción</Col>
              <Col>
                <Form.Group className="mb-3">
                  <Form.Control
                    value={m2Construidos}
                    name="m2Construidos"
                    onChange={handleChange}
                    type="number"
                    min={0}
                  />
                </Form.Group>
              </Col>
            </Row>
          </Col>
          <Col>
            <Row>
              <Col>M2 de terreno</Col>
              <Col>
                <Form.Group className="mb-3">
                  <Form.Control
                    value={m2Terreno}
                    name="m2Terreno"
                    onChange={handleChange}
                    type="number"
                    min={0}
                  />
                </Form.Group>
              </Col>
            </Row>
          </Col>
        </Row>

        <Row>
          <Col>
            <Row>
              <Col>Habitaciones</Col>
              <Col>
                <Form.Group className="mb-3">
                  <Form.Control
                    value={habitaciones}
                    name="habitaciones"
                    onChange={handleChange}
                    type="number"
                    min={0}
                  />
                </Form.Group>
              </Col>
            </Row>
          </Col>
          <Col>
            <Row>
              <Col>Baños completos</Col>
              <Col>
                <Form.Group className="mb-3">
                  <Form.Control
                    value={baños}
                    name="baños"
                    onChange={handleChange}
                    type="number"
                    min={0}
                  />
                </Form.Group>
              </Col>
            </Row>
          </Col>
        </Row>

        <Row>
          <Col>
            <Row>
              <Col>Medio baños</Col>
              <Col>
                <Form.Group className="mb-3">
                  <Form.Control
                    value={medioBaños}
                    name="medioBaños"
                    onChange={handleChange}
                    type="number"
                    min={0}
                  />
                </Form.Group>
              </Col>
            </Row>
          </Col>
          <Col>
            <Row>
              <Col>Estacionamientos</Col>
              <Col>
                <Form.Group className="mb-3">
                  <Form.Control
                    value={parking}
                    name="parking"
                    onChange={handleChange}
                    type="number"
                    min={0}
                  />
                </Form.Group>
              </Col>
            </Row>
          </Col>
        </Row>

        <Row>
          <Col>
            <Row>
              <Col>Pisos</Col>
              <Col>
                <Form.Group className="mb-3">
                  <Form.Control
                    value={pisos}
                    name="pisos"
                    onChange={handleChange}
                    type="number"
                    min={0}
                  />
                </Form.Group>
              </Col>
            </Row>
          </Col>
          <Col>
            <Row>
              <Col>Cuenta con agua</Col>
              <Col>
                <Form.Select
                  value={agua}
                  onChange={(e) => setAgua(e.target.value)}
                  className="mb-3"
                >
                  <option>No</option>
                  <option>Sí</option>
                </Form.Select>
              </Col>
            </Row>
          </Col>
        </Row>

        <Row>
          <Col>
            <Row>
              <Col>Cuenta con luz</Col>
              <Col>
                <Form.Select
                  value={luz}
                  onChange={(e) => setLuz(e.target.value)}
                  className="mb-3"
                >
                  <option>No</option>
                  <option>Sí</option>
                </Form.Select>
              </Col>
            </Row>
          </Col>
          <Col>
            <Row>
              <Col>Cuenta con gas</Col>
              <Col>
                <Form.Select
                  value={gas}
                  onChange={(e) => setGas(e.target.value)}
                  className="mb-3"
                >
                  <option>No</option>
                  <option>Sí</option>
                </Form.Select>
              </Col>
            </Row>
          </Col>
        </Row>

        <Row>
          <Col>
            <Row>
              <Col>Internet</Col>
              <Col>
                <Form.Select
                  value={internet}
                  onChange={(e) => setInternet(e.target.value)}
                  className="mb-3"
                >
                  <option>No</option>
                  <option>Sí</option>
                </Form.Select>
              </Col>
            </Row>
          </Col>
          <Col>
            <Row>
              <Col>Seguridad privada</Col>
              <Col>
                <Form.Select
                  value={seguridadPrivada}
                  onChange={(e) => setSeguridadPrivada(e.target.value)}
                  className="mb-3"
                >
                  <option>No</option>
                  <option>Sí</option>
                </Form.Select>
              </Col>
            </Row>
          </Col>
        </Row>

        <Row>
          <Col>
            <Row>
              <Col>Escuelas cercanas</Col>
              <Col>
                <Form.Select
                  value={escuelas}
                  onChange={(e) => setEscuelas(e.target.value)}
                  className="mb-3"
                >
                  <option>No</option>
                  <option>Sí</option>
                </Form.Select>
              </Col>
            </Row>
          </Col>
          <Col>
            <Row>
              <Col>Mantenimiento</Col>
              <Col>
                <Form.Select
                  value={mantenimiento}
                  onChange={(e) => setMantenimiento(e.target.value)}
                  className="mb-3"
                >
                  <option>No</option>
                  <option>Sí</option>
                </Form.Select>
              </Col>
            </Row>
          </Col>
        </Row>

        <Row>
          <Col>
            <Row>
              <Col>Piscina</Col>
              <Col>
                <Form.Select
                  value={piscina}
                  onChange={(e) => setPiscina(e.target.value)}
                  className="mb-3"
                >
                  <option>No</option>
                  <option>Sí</option>
                </Form.Select>
              </Col>
            </Row>
          </Col>
          <Col>
            <Row>
              <Col>Acceso a discapacitados</Col>
              <Col>
                <Form.Select
                  value={discapacitados}
                  onChange={(e) => setDiscapacitados(e.target.value)}
                  className="mb-3"
                >
                  <option>No</option>
                  <option>Sí</option>
                </Form.Select>
              </Col>
            </Row>
          </Col>
        </Row>
        <hr />
        <br />
        <div className="d-flex justify-content-start">
          <Modaltitle titulo="¿El inmueble está amueblado?" />
        </div>

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

        {amueblado ? (
          <>
            <Row>
              <Col>
                <Row>
                  <Col>Camas</Col>
                  <Col>
                    <Form.Select
                      value={camas}
                      onChange={(e) => setCamas(e.target.value)}
                      className="mb-3"
                    >
                      <option>No</option>
                      <option>Sí</option>
                    </Form.Select>
                  </Col>
                </Row>
              </Col>
              <Col>
                <Row>
                  <Col>Closet</Col>
                  <Col>
                    <Form.Select
                      value={closet}
                      onChange={(e) => setCloset(e.target.value)}
                      className="mb-3"
                    >
                      <option>No</option>
                      <option>Sí</option>
                    </Form.Select>
                  </Col>
                </Row>
              </Col>
            </Row>

            <Row>
              <Col>
                <Row>
                  <Col>Sala</Col>
                  <Col>
                    <Form.Select
                      value={sala}
                      onChange={(e) => setSala(e.target.value)}
                      className="mb-3"
                    >
                      <option>No</option>
                      <option>Sí</option>
                    </Form.Select>
                  </Col>
                </Row>
              </Col>
              <Col>
                <Row>
                  <Col>Comedor</Col>
                  <Col>
                    <Form.Select
                      value={comedor}
                      onChange={(e) => setComedor(e.target.value)}
                      className="mb-3"
                    >
                      <option>No</option>
                      <option>Sí</option>
                    </Form.Select>
                  </Col>
                </Row>
              </Col>
            </Row>

            <Row>
              <Col>
                <Row>
                  <Col>Cocina</Col>
                  <Col>
                    <Form.Select
                      value={cocina}
                      onChange={(e) => setCocina(e.target.value)}
                      className="mb-3"
                    >
                      <option>No</option>
                      <option>Sí</option>
                    </Form.Select>
                  </Col>
                </Row>
              </Col>
              <Col>
                <Row>
                  <Col>AA</Col>
                  <Col>
                    <Form.Select
                      value={AA}
                      onChange={(e) => setAA(e.target.value)}
                      className="mb-3"
                    >
                      <option>No</option>
                      <option>Sí</option>
                    </Form.Select>
                  </Col>
                </Row>
              </Col>
            </Row>

            <Row>
              <Col>
                <Row>
                  <Col>Refrigerador</Col>
                  <Col>
                    <Form.Select
                      value={refrigerador}
                      onChange={(e) => setRefrigerador(e.target.value)}
                      className="mb-3"
                    >
                      <option>No</option>
                      <option>Sí</option>
                    </Form.Select>
                  </Col>
                </Row>
              </Col>
              <Col>
                <Row>
                  <Col>Estufa</Col>
                  <Col>
                    <Form.Select
                      value={estufa}
                      onChange={(e) => setEstufa(e.target.value)}
                      className="mb-3"
                    >
                      <option>No</option>
                      <option>Sí</option>
                    </Form.Select>
                  </Col>
                </Row>
              </Col>
            </Row>

            <Row>
              <Col>
                <Row>
                  <Col>Microondas</Col>
                  <Col>
                    <Form.Select
                      value={microondas}
                      onChange={(e) => setMicroondas(e.target.value)}
                      className="mb-3"
                    >
                      <option>No</option>
                      <option>Sí</option>
                    </Form.Select>
                  </Col>
                </Row>
              </Col>
              <Col>
                <Row>
                  <Col>Minihorno</Col>
                  <Col>
                    <Form.Select
                      value={minihorno}
                      onChange={(e) => setMinihorno(e.target.value)}
                      className="mb-3"
                    >
                      <option>No</option>
                      <option>Sí</option>
                    </Form.Select>
                  </Col>
                </Row>
              </Col>
            </Row>
            <Row>
              <Col>
                <Row>
                  <Col>Horno</Col>
                  <Col>
                    <Form.Select
                      value={horno}
                      onChange={(e) => setHorno(e.target.value)}
                      className="mb-3"
                    >
                      <option>No</option>
                      <option>Sí</option>
                    </Form.Select>
                  </Col>
                </Row>
              </Col>
              <Col>
                <Row>
                  <Col>Lavadora</Col>
                  <Col>
                    <Form.Select
                      value={lavadora}
                      onChange={(e) => setLavadora(e.target.value)}
                      className="mb-3"
                    >
                      <option>No</option>
                      <option>Sí</option>
                    </Form.Select>
                  </Col>
                </Row>
              </Col>
            </Row>

            <Row>
              <Col>
                <Row>
                  <Col>Secadora</Col>
                  <Col>
                    <Form.Select
                      value={secadora}
                      onChange={(e) => setSecadora(e.target.value)}
                      className="mb-3"
                    >
                      <option>No</option>
                      <option>Sí</option>
                    </Form.Select>
                  </Col>
                </Row>
              </Col>
              <Col></Col>
            </Row>
            <Form.Group className="mb-3">
              <Form.Label>Otros (opcional)</Form.Label>
              <Form.Control
                type="text"
                value={otros}
                onChange={handleChange}
                name="otros"
              />
            </Form.Group>
          </>
        ) : null}

        <br />
        <br />

        <hr />
        <br />

        <div className="d-flex justify-content-start">
          <Modaltitle titulo="Descripción del inmueble" />
        </div>

        <Form.Group className="mb-3">
          <Form.Control
            as="textarea"
            rows={3}
            value={descripcion}
            name="descripcion"
            onChange={handleChange}
          />
        </Form.Group>
        <br />
        <hr />

        <Row>
          <Col>
            <Row>
              <Col>Valor</Col>
              <Col>
                <Form.Group className="mb-3">
                  <Form.Control
                    value={precio}
                    name="precio"
                    onChange={handleChange}
                    type="number"
                    min={0}
                  />
                </Form.Group>
              </Col>
            </Row>
          </Col>
          <Col>
            <Row>
              <Col>Comisiones</Col>
              <Col>
                <Form.Group className="mb-3">
                  <Form.Control
                    value={comisiones}
                    name="comisiones"
                    onChange={handleChange}
                    type="number"
                    min={0}
                  />
                </Form.Group>
              </Col>
            </Row>
          </Col>
        </Row>

        {precio <= 0 || titulo.length <= 0 ? (
          <Button titulo="Publicar" btn="Disabled" />
        ) : (
          <Button titulo="Publicar" />
        )}
        <div className="py-3" />
      </Form>
    </Container>
  );
};

export default AnadirInmueble;
