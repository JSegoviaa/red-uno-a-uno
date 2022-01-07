import { useRouter } from "next/router";
import { Col } from "react-bootstrap";
import styles from "./Properties.module.css";

interface Props {
  id: string;
  image?: string;
  titulo: string;
  slug: string;
}

const Properties = ({ titulo, id, image, slug }: Props) => {
  const router = useRouter();

  const goToProperty = () => router.push("/propiedades/" + slug);

  return (
    <Col xs={6} md={4} lg={4} xl={3} className="py-3 text-center">
      <div className={`${styles.customCard} card`}>
        <div onClick={goToProperty} className="pointer">
          <img src={image} alt={titulo} />
          <div className={`${styles.proContent} my-3`}>{titulo}</div>
        </div>
        <div
          className="btn-group"
          role="group"
          aria-label="Basic mixed styles example"
        >
          <button type="button" className={`${styles.customBtn2} btn`}></button>
          <button type="button" className={`${styles.customBtn3} btn`}></button>
          <button type="button" className={`${styles.customBtn4} btn`}></button>
        </div>
      </div>
    </Col>
  );
};

export default Properties;
