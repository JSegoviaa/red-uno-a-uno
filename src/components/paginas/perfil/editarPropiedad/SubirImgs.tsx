import {
  CSSProperties,
  FormEvent,
  useContext,
  useEffect,
  useState,
} from "react";
import { Form } from "react-bootstrap";
import { useDropzone } from "react-dropzone";
import { AuthContext } from "context/auth/AuthContext";
import styles from "./Editar.module.css";
import { InmuebleContext } from "context/inmuebles/InmuebleContext";
import Button from "components/ui/button/Button";
import Loading from "components/ui/loading/Loading";
import { useInmueble } from "hooks/useInmuebles";
import { useRouter } from "next/router";

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

const SubirImgs = () => {
  const { auth } = useContext(AuthContext);
  const {
    idInmueble,
    subirImagenesInmueble,
    actualizarInmueble,
    inmuebleState,
  } = useContext(InmuebleContext);
  const [pictures, setPictures] = useState<any>([]);
  const [cargando, setCargando] = useState(false);
  const router = useRouter();
  const { imgs } = useInmueble(idInmueble);
  const maximo = 20 - imgs.length;

  const { getRootProps, getInputProps } = useDropzone({
    accept: "image/*",
    maxFiles: maximo,
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

  const uploadPictures = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setCargando(true);
    const formData = new FormData();

    for (let i = 0; i < pictures.length; i++) {
      formData.append("pictures", pictures[i]);
    }

    const resp = await subirImagenesInmueble(
      formData,
      auth.uid,
      idInmueble,
      "actualizar/"
    );

    const imgsResp = resp.files;

    imgs.push(...imgsResp);
    await actualizarInmueble({ ...inmuebleState, imgs }, idInmueble);

    setCargando(false);

    router.push("/perfil/mis-propiedades");
  };

  return (
    <Form onSubmit={uploadPictures}>
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
      {imgs.length === 0 ? null : (
        <div style={{ fontSize: 22, fontWeight: 700 }}>
          Tienes {imgs.length} agregadas en este inmueble
          <div>
            {imgs.map((img) => (
              <img style={thumb} key={img} src={img} alt={img} />
            ))}
          </div>
        </div>
      )}

      <div style={{ fontSize: 22, fontWeight: 700 }} className="text-center">
        Máximo {maximo} imágenes. Haz seleccionado{" "}
        <span style={{ color: pictures.length > maximo ? "red" : "black" }}>
          {pictures.length}
        </span>{" "}
        imágenes.
        <br />
        {pictures.length > maximo && "Selecciona menos imágenes por favor"}
      </div>
      <br />
      <div className="text-center">{thumbs}</div>
      {cargando ? <Loading /> : null}
      <Button titulo="Subir imágenes" />

      <br />
      <br />
    </Form>
  );
};

export default SubirImgs;
