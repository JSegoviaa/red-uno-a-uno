import {
  CSSProperties,
  FormEvent,
  useContext,
  useEffect,
  useState,
} from "react";
import { useRouter } from "next/router";
import { Form } from "react-bootstrap";
import { useDropzone } from "react-dropzone";
import { AuthContext } from "../../../../context/auth/AuthContext";
import { InmuebleContext } from "../../../../context/inmuebles/InmuebleContext";
import { useUserInmuebles } from "../../../../hooks/useUserInfo";
import Button from "../../../ui/button/Button";
import styles from "./AgregaImg.module.css";
import Loading from "../../../ui/loading/Loading";

const thumb: CSSProperties = {
  display: "inline-flex",
  borderRadius: 2,
  border: "1px solid #7149BC",
  marginBottom: 8,
  marginRight: 8,
  width: 100,
  height: 100,
  padding: 4,
  boxSizing: "border-box",
};

const thumbInner = {
  display: "flex",
  minWidth: 0,
  overflow: "hidden",
};

const img = {
  display: "block",
  width: "auto",
  height: "100%",
};

const AnadirImagenes = () => {
  const { auth } = useContext(AuthContext);
  const { subirImagenesInmueble } = useContext(InmuebleContext);
  const router = useRouter();
  const [cargando, setCargando] = useState(false);
  const [pictures, setPictures] = useState<any>([]);
  const { inmuebles } = useUserInmuebles(auth.uid);
  const [opciones, setOpciones] = useState(false);
  const [agregarVideo, setAgregarVideo] = useState(false);

  const { getRootProps, getInputProps } = useDropzone({
    accept: "image/*",
    maxFiles: 20,
    onDrop: (acceptedFiles: any) => {
      setPictures(
        acceptedFiles.map((file: any) =>
          Object.assign(file, {
            preview: URL.createObjectURL(file),
          })
        )
      );
    },
  });

  const remove = (file: any) => {
    const newPictures = [...pictures];
    newPictures.splice(file, 1);
    setPictures(newPictures);
  };

  useEffect(() => {
    pictures.forEach((file: any) => URL.revokeObjectURL(file.preview));
  }, [pictures]);

  const thumbs = pictures.map((file: any, i: number) => (
    <div style={thumb} key={file.name}>
      <div style={thumbInner}>
        <img src={file.preview} style={img} />
        <img
          className={`${styles.btnicon} pointer`}
          onClick={() => remove(i)}
          src="/images/icons/properties-icons/rechazado.png"
          alt=""
        />
      </div>
    </div>
  ));

  const ultimoInmueble = inmuebles ? inmuebles[inmuebles!.length - 1] : null;

  const uploadPictures = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setCargando(true);
    const formData = new FormData();

    for (let i = 0; i < pictures.length; i++) {
      formData.append("pictures", pictures[i]);
    }

    await subirImagenesInmueble(formData, auth.uid, ultimoInmueble?._id, "");

    setCargando(false);
    setOpciones(true);
  };

  const inmuebleCreado = () =>
    router.push(`/propiedades/${ultimoInmueble?.slug}`);

  const verMisInmuebles = () => router.push("/perfil/mis-propiedades");

  // const mostrarVideoUpload = () => setAgregarVideo(!agregarVideo);

  return (
    <>
      {
        <>
          {!opciones ? (
            <>
              <div className="cargarImagen" {...getRootProps()}>
                <input {...getInputProps()} />
                <div className="text-center">
                  <img
                    className="my-4 pointer"
                    src="/images/content/agregafoto.png"
                    alt="red1a1"
                    style={{ width: "70%" }}
                  />
                </div>
              </div>
              <div
                style={{ fontSize: 22, fontWeight: 700 }}
                className="text-center"
              >
                Máximo 20 imágenes. Haz seleccionado{" "}
                <span style={{ color: pictures.length > 20 ? "red" : "black" }}>
                  {pictures.length}
                </span>{" "}
                imágenes.
                <br />
                {pictures.length > 20 && "Selecciona menos imágenes por favor"}
              </div>
              <br />
              <div className="text-center">{thumbs}</div>

              {cargando ? <Loading /> : null}
            </>
          ) : null}
        </>
      }

      <br />
      <Form
        onSubmit={uploadPictures}
        encType="multipart/form-data"
        className="d-flex justify-content-center"
      >
        <Form.Group className="mb-3">
          <Form.Control
            style={{ display: "none" }}
            type="file"
            multiple
            accept="image/*"
          />
        </Form.Group>

        {pictures.length > 20 || pictures.length <= 0 || opciones ? null : (
          <Button titulo="Agregar imágenes" />
        )}
      </Form>
      {opciones ? (
        <div className="d-flex justify-content-around">
          {/* <Button
            titulo={!agregarVideo ? "Agregar video" : "Continuar"}
            onClick={!agregarVideo ? mostrarVideoUpload : verMisInmuebles}
          /> */}
          <Button titulo="Ver mis inmuebles" onClick={verMisInmuebles} />
          <Button titulo="Ver inmueble que agregué" onClick={inmuebleCreado} />
        </div>
      ) : null}

      {agregarVideo ? <div>Aquí se va amostrar la carga de vídeo</div> : null}
      <div className="SliderCustom">
        <br />
      </div>
    </>
  );
};

export default AnadirImagenes;
