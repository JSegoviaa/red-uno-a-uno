import { FormEvent, useContext, useState } from "react";
import { useRouter } from "next/router";
import dynamic from "next/dynamic";
import { Form } from "react-bootstrap";
import Titulo from "../../../ui/titulo/Titulo";
import AnadirImagenes from "./AnadirImagenes";
import Formulario from "./Formulario";
// import FormStepOne from "./FormStepOne";
import { useForm } from "../../../../hooks/useForm";
import { MapContext } from "../../../../context/map/MapContext";
import Button from "../../../ui/button/Button";
import Steps from "./Steps";
import {
  InmuebleContext,
  InmuebleData,
} from "../../../../context/inmuebles/InmuebleContext";
import { casasC, rentas } from "credentials";

const FormStepOne: any = dynamic(() => import("./FormStepOne"), { ssr: false });

const AnadirInmueble = () => {
  const router = useRouter();
  const { ubicacion, direccion } = useContext(MapContext);
  const { crearInmueble } = useContext(InmuebleContext);
  const [cargando, setCargando] = useState(false);
  const [steps, setSteps] = useState(1);
  const [tipoPropiedad, setTipoPropiedad] = useState(casasC);
  const [categoria, setCategoria] = useState(rentas);
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
    precio: 0,
    comisiones: 0,
    antiguedad: "",
    m2Construidos: 0,
    m2Terreno: 0,
    habitaciones: 0,
    baños: 0,
    medioBaños: 0,
    parking: 0,
    pisos: 0,
    descripcion: "",
    otros: "",
  });

  const {
    titulo,
    precio,
    comisiones,
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
  } = formulario;

  const handleNextStep = () => {
    setSteps(steps + 1);
    router.push("/perfil/agregar-inmueble");
  };
  const handlePrevStep = () => {
    setSteps(steps - 1);
    router.push("/perfil/agregar-inmueble");
  };

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
    setCargando(true);
    e.preventDefault();

    await crearInmueble(dataInmueble);

    setCargando(false);
    handleNextStep();
  };

  return (
    <section>
      <div className="container">
        <Titulo titulo="Agrega un inmueble" />
        <br />
        <div className="row d-flex justify-content-center">
          <Steps steps={steps} />

          <div className="col-sm-12 col-md-12 col-lg-8">
            <Form>
              {steps === 1 ? (
                <>
                  <FormStepOne
                    handleNextStep={handleNextStep}
                    handleChange={handleChange}
                    titulo={titulo}
                    tipoPropiedad={tipoPropiedad}
                    setTipoPropiedad={setTipoPropiedad}
                    precio={precio}
                    comisiones={comisiones}
                    categoria={categoria}
                    setCategoria={setCategoria}
                  />
                </>
              ) : null}

              {steps === 2 ? (
                <>
                  <Formulario
                    handleChange={handleChange}
                    antiguedad={antiguedad}
                    m2Construidos={m2Construidos}
                    m2Terreno={m2Terreno}
                    habitaciones={habitaciones}
                    baños={baños}
                    medioBaños={medioBaños}
                    parking={parking}
                    pisos={pisos}
                    descripcion={descripcion}
                    otros={otros}
                    amueblado={amueblado}
                    setAmueblado={setAmueblado}
                    agua={agua}
                    luz={luz}
                    gas={gas}
                    internet={internet}
                    seguridadPrivada={seguridadPrivada}
                    escuelas={escuelas}
                    mantenimiento={mantenimiento}
                    piscina={piscina}
                    discapacitados={discapacitados}
                    camas={camas}
                    closet={closet}
                    sala={sala}
                    comedor={comedor}
                    cocina={cocina}
                    AA={AA}
                    refrigerador={refrigerador}
                    estufa={estufa}
                    microondas={microondas}
                    minihorno={minihorno}
                    horno={horno}
                    lavadora={lavadora}
                    secadora={secadora}
                    setAgua={setAgua}
                    setLuz={setLuz}
                    setGas={setGas}
                    setInternet={setInternet}
                    setSeguridadPrivada={setSeguridadPrivada}
                    setEscuelas={setEscuelas}
                    setMantenimiento={setMantenimiento}
                    setPiscina={setPiscina}
                    setDiscapacitados={setDiscapacitados}
                    setCamas={setCamas}
                    setCloset={setCloset}
                    setSala={setSala}
                    setComedor={setComedor}
                    setCocina={setCocina}
                    setAA={setAA}
                    setRefrigerador={setRefrigerador}
                    setEstufa={setEstufa}
                    setMicroondas={setMicroondas}
                    setMinihorno={setMinihorno}
                    setHorno={setHorno}
                    setLavadora={setLavadora}
                    setSecadora={setSecadora}
                    cargando={cargando}
                  />
                  <div className="col-12 my-3">
                    {cargando ? (
                      <Button
                        titulo="Anterior"
                        onClick={handlePrevStep}
                        btn="Disabled"
                      />
                    ) : (
                      <Button titulo="Anterior" onClick={handlePrevStep} />
                    )}

                    <span className="mx-2" />
                    {cargando ? (
                      <Button
                        titulo="Siguiente"
                        onClick={handleSubmit}
                        btn="Disabled"
                      />
                    ) : (
                      <Button titulo="Siguiente" onClick={handleSubmit} />
                    )}
                  </div>
                </>
              ) : null}
            </Form>
          </div>
          <div className="col-sm-12 col-md-12 col-lg-8">
            {steps === 3 ? <AnadirImagenes /> : null}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AnadirInmueble;
