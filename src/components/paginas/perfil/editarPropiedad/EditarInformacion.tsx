import { ChangeEvent, FormEvent, useContext, useEffect, useState } from "react";
import { useRouter } from "next/router";
import { Container, Form } from "react-bootstrap";
import {
  ActualizarInmueble,
  InmuebleContext,
} from "context/inmuebles/InmuebleContext";
import { useInmueble } from "hooks/useInmuebles";
import styles from "./Editar.module.css";
import { useCategories, useTipoPropiedad } from "hooks/useCategories";
import { MapContext } from "context/map/MapContext";
import Steps from "../propiedades/Steps";
import StepOne from "./StepOne";
import StepTwo from "./StepTwo";
import Button from "components/ui/button/Button";

const EditarInformacion = () => {
  const { idInmueble, setInmuebleState, inmuebleState, actualizarInmueble } =
    useContext(InmuebleContext);
  const { ubicacion, direccion } = useContext(MapContext);
  const [steps, setSteps] = useState(1);
  const [creando, setCreando] = useState(false);
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

  const handleNextStep = () => {
    setSteps(steps + 1);
    router.push("/perfil/editar-inmueble");
  };

  const handlePrevStep = () => {
    setSteps(steps - 1);
    router.push("/perfil/editar-inmueble");
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

    const res = await actualizarInmueble(data, idInmueble);

    router.push("/perfil/mis-propiedades");
  };

  console.log(inmuebleState, "??");

  return (
    <Container>
      <div className="row d-flex justify-content-center">
        <Steps steps={steps} editar />
        <div className="col-sm-12 col-md-12 col-lg-8">
          <Form onSubmit={onSubmit}>
            {steps === 1 ? (
              <>
                <StepOne
                  handleChange={handleChange}
                  handleNextStep={handleNextStep}
                  cargando={cargando}
                  loading={loading}
                  setInmuebleState={setInmuebleState}
                  propertyTypes={propertyTypes}
                  categorias={categorias}
                  inmuebleState={inmuebleState}
                />
              </>
            ) : null}
            {steps === 2 ? (
              <StepTwo
                handlePrevStep={handlePrevStep}
                inmuebleState={inmuebleState}
                handleChange={handleChange}
                setInmuebleState={setInmuebleState}
                antiguedad={inmuebleState.antiguedad}
                m2Construidos={inmuebleState.m2Construidos}
                m2Terreno={inmuebleState.m2Terreno}
                habitaciones={inmuebleState.habitaciones}
                baños={inmuebleState.baños}
                medioBaños={inmuebleState.medioBaños}
                parking={inmuebleState.parking}
                pisos={inmuebleState.pisos}
                descripcion={inmuebleState.descripcion}
                otros={inmuebleState.otros}
                creando={creando}
                cargando={cargando}
              />
            ) : null}
          </Form>
        </div>
      </div>
    </Container>
  );
};

export default EditarInformacion;
