import { CSSProperties, useContext, useEffect } from "react";
import { useRouter } from "next/router";
import {
  ActualizarInmueble,
  InmuebleContext,
} from "context/inmuebles/InmuebleContext";
import { useInmueble } from "hooks/useInmuebles";
import Loading from "components/ui/loading/Loading";
import styles from "./Editar.module.css";
import Button from "components/ui/button/Button";

const imagen: CSSProperties = {
  display: "block",
  width: 200,
  height: 200,
};

const thumbInner = {
  display: "flex",
  minWidth: 0,
  overflow: "hidden",
};

const EditarImgs = () => {
  const { idInmueble, actualizarInmueble, inmuebleState, setInmuebleState } =
    useContext(InmuebleContext);
  const router = useRouter();

  const { imgs, cargando, setImgs, inmueble } = useInmueble(idInmueble);

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

  const handleDelete = (id: string) => {
    const nuevasImg = imgs?.filter((img) => img !== id);

    setImgs(nuevasImg);
  };

  const actualizarImgs = async () => {
    const data: ActualizarInmueble = { ...inmuebleState, imgs };
    console.log(data);
    await actualizarInmueble(data, idInmueble);
  };

  const cancelar = () => router.push("/perfil/mis-propiedades");

  return (
    <div>
      <br />
      {cargando ? (
        <Loading />
      ) : (
        <>
          {imgs?.length === 0 ? (
            <div>Este inmueble no tiene imágenes</div>
          ) : (
            <div className="d-flex justify-content-center">
              {imgs?.map((img) => (
                <div key={img} style={thumbInner}>
                  <img style={imagen} src={img} />
                  <img
                    className={`${styles.btnicon} pointer`}
                    onClick={() => handleDelete(img)}
                    src="/images/icons/properties-icons/rechazado.png"
                    alt=""
                  />
                </div>
              ))}
            </div>
          )}
        </>
      )}
      <br />
      <div className="d-flex justify-content-center">
        <Button titulo="Cancelar" onClick={cancelar} />
        <div className="px-3" />
        <Button titulo="Actualizar imágenes" onClick={actualizarImgs} />
      </div>
      <br />
    </div>
  );
};

export default EditarImgs;
