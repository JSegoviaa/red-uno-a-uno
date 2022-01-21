import { useRouter } from "next/router";
import { Col } from "react-bootstrap";
import CopyToClipboard from "react-copy-to-clipboard";
import { toast } from "react-toastify";
import { eliminarFavorito } from "../../../helpers/fetch";
import styles from "./FavsCard.module.css";

interface Props {
  id: string;
  slug: string;
  img: string[] | string;
  titulo: string;
}

const FavPropertiesCard = ({ titulo, id, img, slug }: Props) => {
  const router = useRouter();
  const goToProperty = () => router.push(`/propiedades/${slug}`);

  const eliminarFav = async () => {
    const resp = await eliminarFavorito(`favoritos/${id}`);
    if (resp.ok) {
      toast.success(resp.msg);
    }
  };

  const compartir = () => toast.success(`Se ha copiado al portapapeles`);

  return (
    <Col xs={6} md={4} lg={4} xl={3} className="py-3 text-center pointer">
      <div className={`${styles.customCard} card`}>
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
          <button type="button" className={`${styles.customBtn2} btn`} />
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
