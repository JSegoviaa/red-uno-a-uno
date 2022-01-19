import { FormEvent, useContext, useEffect, useState } from "react";
import { Form } from "react-bootstrap";
import { useDropzone } from "react-dropzone";
import { AuthContext } from "../../../../context/auth/AuthContext";
import { useUserInmuebles } from "../../../../hooks/useUserInfo";
import Button from "../../../ui/button/Button";

const thumb: any = {
  display: "inline-flex",
  borderRadius: 2,
  border: "1px solid #eaeaea",
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
  const [pictures, setPictures] = useState([]);
  const { inmuebles } = useUserInmuebles(auth.uid);

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
      </div>
      {/* onClick={() => remove(i)} */}
    </div>
  ));

  const uploadPictures = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Se suben imágenes");
  };

  return (
    <>
      <div className="cargarImagen" {...getRootProps()}>
        <input {...getInputProps()} />
        <img
          className="pointer my-4"
          src="/images/content/agregafoto.png"
          alt="red1a1"
        />
      </div>
      <div style={{ fontSize: 23 }}>
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
