import { FormEvent, useContext, useState } from "react";
import { useRouter } from "next/router";
import { Col, Form } from "react-bootstrap";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { InmuebleContext } from "../../../context/inmuebles/InmuebleContext";
import styles from "./PropertiesCard.module.css";
import { toast } from "react-toastify";

interface Props {
  id: string;
  titulo: string;
  slug: string;
  imgs: string[];
}

const PropertiesCard = ({ titulo, id, slug, imgs }: Props) => {
  const { eliminarInmueble, actualizarInmueble } = useContext(InmuebleContext);
  const router = useRouter();
  const [publicado, setPublicado] = useState(true);
  const goToProperty = () => router.push("/propiedades/" + slug);
  const editarInmueble = () => router.push("/perfil/editar-inmueble");

  const compartir = () => toast.success(`Se ha copiado al portapapeles`);

  const pausarInmueble = async (pid: string) => {
    setPublicado(!publicado);

    await actualizarInmueble({ publicado: false }, pid);
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
            ></div>
          </div>
          <div className={styles.tituloContainer}>
            <div className={`${styles.proContent} my-2`}>{titulo}</div>
          </div>
        </div>
        <div
          className="btn-group"
          role="group"
          aria-label="Basic mixed styles example"
        >
          <button
            onClick={() => pausarInmueble(id)}
            type="submit"
            className={`${styles.customBtn1} btn`}
          />

          <CopyToClipboard
            onCopy={compartir}
            text={`red1a1.com/app/propiedades/${slug}`}
          >
            <button type="button" className={`${styles.customBtn2} btn`} />
          </CopyToClipboard>
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
