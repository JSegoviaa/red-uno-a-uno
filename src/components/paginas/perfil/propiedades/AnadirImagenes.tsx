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

const thumb: any = {
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

const thumbInner: CSSProperties = {
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
  const router = useRouter();
  const [cargando, setCargando] = useState(false);
  const [pictures, setPictures] = useState<any>([]);
  const { inmuebles } = useUserInmuebles(auth.uid);
  const { subirImagenesInmueble } = useContext(InmuebleContext);

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

  const ultimoInmueble =
    inmuebles?.inmueblesUsuario[inmuebles.inmueblesUsuario.length - 1];

  const uploadPictures = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setCargando(true);
    const formData = new FormData();

    for (let i = 0; i < pictures.length; i++) {
      formData.append("pictures", pictures[i]);
    }

    await subirImagenesInmueble(formData, auth.uid, ultimoInmueble?._id);

    setCargando(false);
    router.push(`/propiedades/${ultimoInmueble?.slug}`);
  };

  return (
    <>
      <div className="cargarImagen" {...getRootProps()}>
        <input {...getInputProps()} />
        <div className={`${styles.contenedorClipboard} pointer`}>
          <div className="text1">Arrastra tus imágenes aquí</div>
          <div className="my-3">
            <i className={`${styles.iconAdd} bi bi-plus-circle`}></i>
          </div>
          <div className="text2">o da click para agregarlas</div>
        </div>
      </div>
      <div style={{ fontSize: 18 }}>
        Máximo 20 imágenes. Haz seleccionado{" "}
        <span style={{ color: pictures.length > 20 ? "red" : "black" }}>
          {pictures.length}
        </span>{" "}
        imágenes.
        <br />
        {pictures.length > 20 && "Selecciona menos imágenes por favor"}
      </div>
      <br />
      <div>{thumbs}</div>
      {cargando ? "Tus imágenes se están subiendo" : null}

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
        {pictures.length > 20 || pictures.length <= 0 ? null : (
          <Button titulo="Agregar imágenes" />
        )}
      </Form>
      <div className="SliderCustom">
        <br />
      </div>
    </>
  );
};

export default AnadirImagenes;
