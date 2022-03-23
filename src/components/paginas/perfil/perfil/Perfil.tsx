import { useContext, useRef, useState } from "react";
import { useRouter } from "next/router";
import { Container, Form } from "react-bootstrap";
import { AuthContext } from "../../../../context/auth/AuthContext";
import Button from "../../../ui/button/Button";
import styles from "./Perfil.module.css";
import Loading from "../../../ui/loading/Loading";

const Perfil = () => {
  const router = useRouter();
  const { auth, fotoPerfil, logOut } = useContext(AuthContext);
  const [picture, setPicture] = useState("");
  const [hover, setHover] = useState(false);
  const [cargando, setCargando] = useState(false);
  const inputFile = useRef<HTMLInputElement>(null);
  const misPaquetes = () => router.push("/perfil/mis-paquetes");
  const misPropiedades = () => router.push("/perfil/mis-propiedades");
  const actualizarPerfil = () => router.push("/perfil/actualizar-perfil");
  const referencias = () => router.push("/perfil/referencias-de-pago");
  const historialPagos = () => router.push("/perfil/historial-de-pagos");

  const abrirInputfile = () => inputFile.current?.click();

  const handlePicture = async (e: any) => {
    e.preventDefault();
    setCargando(true);
    const formData = new FormData();
    formData.append("picture", picture);

    await fotoPerfil(formData);
    setCargando(false);
  };

  const onMouseEnter = () => setHover(true);
  const onMouseLeave = () => setHover(false);

  return (
    <Container>
      {cargando ? <Loading /> : null}
      <div className="d-flex justify-content-center">
        <div className="text-center">
          <div className={`${styles.imagencontainer} mt-5 mb-2`}>
            <img
              onClick={abrirInputfile}
              onMouseEnter={onMouseEnter}
              onMouseLeave={onMouseLeave}
              className={`${styles.perfilImg} pointer`}
              src={auth.img}
              alt="Foto de perfil red1a1"
            />
            {hover ? (
              <div
                onMouseEnter={onMouseEnter}
                onMouseLeave={onMouseLeave}
                onClick={abrirInputfile}
                className={`${styles.cargaImg} pointer`}
              >
                Cambiar imagen <br /> de perfil
              </div>
            ) : null}
          </div>

          <Form
            onSubmit={handlePicture}
            encType="multipart/form-data"
            className="d-flex justify-content-center"
          >
            <Form.Group className="mb-3">
              <Form.Control
                type="file"
                ref={inputFile}
                style={{ display: "none" }}
                accept="image/*"
                onChange={(e: any) => setPicture(e.target.files[0])}
              />
            </Form.Group>
            <>{picture ? <Button titulo="Subir imagen" /> : null}</>
          </Form>

          <div className={styles.nombre}>
            {auth.nombre} {auth.apellido}{" "}
            <i
              onClick={actualizarPerfil}
              className={`${styles.edicionIcon} bi bi-pencil-square pointer`}
            ></i>
          </div>

          {auth.paqueteAdquirido ? (
            <div className={styles.paquete}>
              {auth.role === "Administrador" ? null : "Paquete"} {auth.role}
            </div>
          ) : null}

          <div className={styles.empresa}>{auth.nombreInmobiliaria}</div>
          <div className={styles.correo}>{auth.correo}</div>
          <div className={styles.telefono}>{auth.telefonoPersonal}</div>
          <div className={styles.telefono}>{auth.direccionFisica}</div>
        </div>
      </div>

      <hr />

      <div className="row d-flex justify-content-center">
        <div className="col-sm-12 col-md-6 col-lg-4 col-xl-3 text-center mb-3">
          <Button titulo="Mis paquetes" btn="Secondary" onClick={misPaquetes} />
        </div>
        <div className="col-sm-12 col-md-6 col-lg-4 col-xl-3 text-center mb-3">
          <Button
            titulo="Mis propiedades"
            btn="Secondary"
            onClick={misPropiedades}
          />
        </div>

        <div className="col-sm-12 col-md-6 col-lg-4 col-xl-3 text-center mb-3">
          <Button titulo="Mis pagos" btn="Secondary" onClick={historialPagos} />
        </div>

        <div className="col-sm-12 col-md-6 col-lg-4 col-xl-3 text-center mb-3">
          <Button
            titulo="Mis Referencias"
            btn="Secondary"
            onClick={referencias}
          />
        </div>
        <div className="col-12 text-center my-4">
          <span className={styles.btnSession} onClick={logOut}>
            <i className="bi bi-box-arrow-right" /> Cerrar sesión
          </span>
        </div>
      </div>
    </Container>
  );
};

export default Perfil;
