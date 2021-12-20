import { Col } from "react-bootstrap";
import styles from "./PropertiesCard.module.css";

interface Props {
  id: number;
  image: string;
  titulo: string;
}

const PropertiesCard = ({ titulo, id, image }: Props) => {
  return (
    <Col xs={6} md={4} lg={4} xl={3} className="py-3">
      <div className="card" style={{border: "2px solid red"}}> 
        <img src={image} alt={titulo} />
        <div>{titulo}</div>
        <div className="btn-group" role="group" aria-label="Basic outlined example">
          <button type="button" className="btn btn-outline-primary">X</button>
          <button type="button" className="btn btn-outline-primary">X</button>
          <button type="button" className="btn btn-outline-primary">X</button>
          <button type="button" className="btn btn-outline-primary">X</button>
        </div>
      </div>
    </Col>
  );
};

export default PropertiesCard;
