import { useRouter } from "next/router";
import { Col } from "react-bootstrap";
import { toast } from "react-toastify";
import { eliminarFavorito } from "../../../helpers/fetch";
import styles from "./FavsCard.module.css";

interface Props {
  id: string;
  slug: string;
  image?: string;
  titulo: string;
  icon?: string;
}

const FavPropertiesCard = ({ titulo, id, image, icon, slug }: Props) => {
  const router = useRouter();
  const goToProperty = () => router.push(`/propiedades/${slug}`);

  const eliminarFav = async () => {
    const resp = await eliminarFavorito(`favoritos/${id}`);
    if (resp.ok) {
      toast.success(resp.msg);
    }
  };

  return (
    <Col xs={6} md={4} lg={4} xl={3} className="py-3 text-center pointer">
      <div className={`${styles.customCard} card`}>
        <div onClick={goToProperty}>
          <img className={styles.iconoF} src={icon} alt="..." />
          <img src={image} alt={titulo} />
          <div className={`${styles.proContent} my-3`}>{titulo}</div>
        </div>
        <div
          className="btn-group"
          role="group"
          aria-label="Basic mixed styles example"
        >
          <button type="button" className={`${styles.customBtn2} btn`} />
          <button type="button" className={`${styles.customBtn3} btn`} />
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
