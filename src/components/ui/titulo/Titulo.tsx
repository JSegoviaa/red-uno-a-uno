import { Container } from "react-bootstrap";
import styles from "./Titulo.module.css";

interface Props {
  titulo: string;
}

const Titulo = ({ titulo }: Props) => {
  return (
    <section className={styles.section}>
      <Container>
        <div className="row d-flex justify-content-center">
          <div className="col-12">
            <div className={styles.title}>{titulo}</div>
            <div className={styles.line} />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Titulo;
