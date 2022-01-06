import { useRouter } from "next/router";
import { useContext } from "react";
import { Col } from "react-bootstrap";
import { InmuebleContext } from "../../../context/inmuebles/InmuebleContext";
import styles from "./PropertiesCard.module.css";

interface Props {
  id: string;
  image?: string;
  titulo: string;
  slug: string;
}

const PropertiesCard = ({ titulo, id, image, slug }: Props) => {
  const { eliminarInmueble } = useContext(InmuebleContext);
  const router = useRouter();

  const goToProperty = () => router.push("/propiedades/" + slug);
  const editarInmueble = () => router.push("/perfil/editar-inmueble");

  return (
    <Col xs={6} md={4} lg={4} xl={3} className="py-3 text-center ">
      <div className={`${styles.customCard} card pointer`}>
        <div onClick={goToProperty}>
          <img src={image} alt={titulo} />
          <div className={`${styles.proContent} my-3`}>{titulo}</div>
        </div>
        <div
          className="btn-group"
          role="group"
          aria-label="Basic mixed styles example"
        >
          <button type="button" className={`${styles.customBtn1} btn`} />
          <button type="button" className={`${styles.customBtn2} btn`} />
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
