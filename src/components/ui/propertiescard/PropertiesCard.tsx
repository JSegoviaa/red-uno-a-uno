import { useContext } from "react";
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
  handleDelete: (pid: string) => Promise<void>;
}

const PropertiesCard = (props: Props) => {
  const { titulo, id, slug, imgs, isActive, handleDelete } = props;
  const { actualizarInmueble } = useContext(InmuebleContext);
  const router = useRouter();
  const goToProperty = () => router.push("/propiedades/" + slug);
  const editarInmueble = () => router.push("/perfil/editar-inmueble");

  const compartir = () => toast.success(`Se ha copiado al portapapeles`);

  const desactivarInmueble = async (pid: string) =>
    await actualizarInmueble({ publicado: false }, pid);

  const activarInmueble = async (pid: string) =>
    await actualizarInmueble({ publicado: true }, pid);

  return (
    <Col xs={6} md={4} lg={4} xl={3} className="py-3 text-center ">
      <div className={`${styles.customCard} card pointer`}>
        <div onClick={goToProperty}>
          <div className={styles.imgContainer}>
            {imgs.length > 0 ? (
              <div
                className={styles.cardImg}
                style={{
                  backgroundImage: imgs.length > 0 ? `url(${imgs[0]})` : "",
                }}
              >
                {isActive ? null : (
                  <div className={styles.imgPausa}>
                    <div className={styles.imgTituloPausa}>
                      Inmueble en pausa
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <div className={styles.noImage}>
                <div className={styles.noImageText}>
                  Aún no hay imagenes para mostrar{" :("}
                </div>
              </div>
            )}
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
          {isActive ? (
            <button
              onClick={() => desactivarInmueble(id)}
              className={`${styles.customBtn1} btn`}
            />
          ) : (
            <button
              onClick={() => activarInmueble(id)}
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
            onClick={() => handleDelete(id)}
            type="button"
            className={`${styles.customBtn4} btn`}
          />
        </div>
      </div>
    </Col>
  );
};

export default PropertiesCard;
