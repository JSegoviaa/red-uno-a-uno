import { Col } from "react-bootstrap";
import styles from "./PropertiesCard.module.css";

interface Props {
  id: number;
  image: string;
  titulo: string;
}

const PropertiesCard = ({ titulo, id, image }: Props) => {
  return (
    <Col md={3} xs={6} key={id} className="py-3">
      <div className="card">
        <img src={image} alt={titulo} />
        <div>{titulo}</div>
      </div>
    </Col>
  );
};

export default PropertiesCard;
