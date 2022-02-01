import { useRouter } from "next/router";
import { useContext } from "react";
import { Col } from "react-bootstrap";
import CopyToClipboard from "react-copy-to-clipboard";
import { toast } from "react-toastify";
import { AuthContext } from "../../../context/auth/AuthContext";
import { ChatContext, CrearChat } from "../../../context/chat/ChatContext";
import { eliminarFavorito } from "../../../helpers/fetch";
import styles from "./FavsCard.module.css";

type Solicitud = "Pendiente" | "Aprobado" | "Rechazado";

interface Props {
  id: string;
  slug: string;
  img: string[] | string;
  titulo: string;
  solicitud: Solicitud;
  propietario: string;
}

const FavPropertiesCard = (props: Props) => {
  const { titulo, id, img, slug, solicitud, propietario } = props;
  const router = useRouter();
  const { auth } = useContext(AuthContext);
  const { iniciarChat } = useContext(ChatContext);
  const goToProperty = () => router.push(`/propiedades/${slug}`);

  const eliminarFav = async () => {
    const resp = await eliminarFavorito(`favoritos/${id}`);
    if (resp.ok) {
      toast.success(resp.msg);
    }
  };

  const compartir = () => toast.success(`Se ha copiado al portapapeles`);

  const data: CrearChat = {
    remitente: auth.uid,
    destinatario: propietario,
  };

  return (
    <Col xs={6} md={4} lg={4} xl={3} className="py-3 text-center">
      <div className={`${styles.customCard} card pointer`}>
        {/* {solicitud === "Pendiente" ? (
          <img
            className={styles.iconoF}
            src="/images/icons/properties-icons/pendiente.png"
            alt=""
          />
        ) : null}
        {solicitud === "Aprobado" ? (
          <img
            className={styles.iconoF}
            src="/images/icons/properties-icons/aprobado.png"
            alt=""
          />
        ) : null}
        {solicitud === "Rechazado" ? (
          <img
            className={styles.iconoF}
            src="/images/icons/properties-icons/rechazado.png"
            alt=""
          />
        ) : null} */}

        <div onClick={goToProperty}>
          <div className={styles.imgContainer}>
            <div
              className={styles.cardImg}
              style={{
                backgroundImage: img.length > 0 ? `url(${img[0]})` : "",
              }}
            />
          </div>
          <div className={styles.tituloContainer}>
            <div className={`${styles.proContent} my-3`}>{titulo}</div>
          </div>
        </div>
        <div
          className="btn-group"
          role="group"
          aria-label="Basic mixed styles example"
        >
          <button
            onClick={async () => await iniciarChat(data)}
            type="button"
            className={`${styles.customBtn2} btn`}
          />
          <CopyToClipboard
            onCopy={compartir}
            text={`red1a1.com/app/propiedades/${slug}`}
          >
            <button type="button" className={`${styles.customBtn3} btn`} />
          </CopyToClipboard>
          <button
            type="button"
            className={`${styles.customBtn4} btn`}
            onClick={eliminarFav}
          />
        </div>
      </div>
    </Col>
  );
};

export default FavPropertiesCard;
