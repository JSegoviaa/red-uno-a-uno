import { useContext, useState } from "react";
import { useRouter } from "next/router";
import { Col } from "react-bootstrap";
import { toast } from "react-toastify";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { InmuebleContext } from "../../../context/inmuebles/InmuebleContext";
import styles from "./PropertiesCard.module.css";

interface Props {
  id: string;
  titulo: string;
  slug: string;
  imgs: string[];
  isActive: boolean;
}

const PropertiesCard = ({ titulo, id, slug, imgs, isActive }: Props) => {
  const { eliminarInmueble, actualizarInmueble } = useContext(InmuebleContext);
  const router = useRouter();
  const [publicado, setPublicado] = useState(true);
  const goToProperty = () => router.push("/propiedades/" + slug);
  const editarInmueble = () => router.push("/perfil/editar-inmueble");

  const compartir = () => toast.success(`Se ha copiado al portapapeles`);

  const desactivarInmueble = async (pid: string) => {
    setPublicado(false);

    await actualizarInmueble({ publicado: false }, pid);
  };

  const activarInmueble = async (pid: string) => {
    setPublicado(true);

    await actualizarInmueble({ publicado: true }, pid);
  };

  return (
    <Col xs={6} md={4} lg={4} xl={3} className="py-3 text-center ">
      <div className={`${styles.customCard} card pointer`}>
        <div onClick={goToProperty}>
          <div className={styles.imgContainer}>
            <div
              className={styles.cardImg}
              style={{
                backgroundImage: imgs.length > 0 ? `url(${imgs[0]})` : "",
              }}
            >
              {isActive ? null : (
                <div className={styles.imgPausa}>
                  <div className={styles.imgTituloPausa}>Inmueble en pausa</div>
                </div>
              )}
            </div>
          </div>
          <div className={styles.tituloContainer}>
            <div
              className={`${
                isActive ? styles.proContent : styles.proContentFalse
              } my-2`}
            >
              {titulo}
            </div>
          </div>
        </div>
        <div
          className="btn-group"
          role="group"
          aria-label="Basic mixed styles example"
        >
          {publicado ? (
            <button
              onClick={() => desactivarInmueble(id)}
              type="submit"
              className={`${styles.customBtn1} btn`}
            />
          ) : (
            <button
              onClick={() => activarInmueble(id)}
              type="submit"
              className={`${styles.customBtn1} btn`}
            />
          )}

          {isActive ? (
            <CopyToClipboard
              onCopy={compartir}
              text={`red1a1.com/app/propiedades/${slug}`}
            >
              <button type="button" className={`${styles.customBtn2} btn`} />
            </CopyToClipboard>
          ) : null}

          <button
            onClick={editarInmueble}
            type="button"
            className={`${styles.customBtn3} btn`}
          />
          <button
            onClick={() => eliminarInmueble(id)}
            type="button"
            className={`${styles.customBtn4} btn`}
          />
        </div>
      </div>
    </Col>
  );
};

export default PropertiesCard;
