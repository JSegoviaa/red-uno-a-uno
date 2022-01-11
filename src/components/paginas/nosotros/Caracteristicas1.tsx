import { Container, Row } from "react-bootstrap";
import styles from "./Nosotros.module.css";

const cards = [
  {
    id: 1,
    title: "Amplia tu cartera",
    content:
      "Puedes vender propiedades de otros asesores y compartir comisión.",
    image: "/images/icons/cartera.png",
  },
  {
    id: 2,
    title: "Agrega tus propiedades",
    content: " Agrega en Red 1 a 1 todas tus propiedades, no hay límites.",
    image: "/images/icons/app.png",
  },
  {
    id: 3,
    title: "Comunidad",
    content: "Red 1 a 1 es la red más grande de asesores en México.",
    image: "/images/icons/comunidad.png",
  },
  {
    id: 4,
    title: "Inmobiliarias",
    content: "Inmobiliarias pueden crear y gestionar asesores",
    image: "/images/icons/inmobiliarias.png",
  },
  {
    id: 5,
    title: "App",
    content: "Lleva todas tus propiedades en tu celular con Red 1 a 1.",
    image: "/images/icons/app.png",
  },
  {
    id: 6,
    title: "Interacción en tiempo real",
    content: "Chatea con otros asesores / inmobiliarias en tiempo real.",
    image: "/images/icons/tiempo.png",
  },
];

const Caracteristicas1 = () => {
  return (
    <section className={styles.section}>
      <Container>
        <Row>
          {cards.map((card) => (
            <div
              key={card.id}
              className="col-sm-12 col-md-6 col-lg-4 text-center mb-4 "
            >
              <div className={styles.nosotrosCard}>
                <div className="d-flex justify-content-center">
                  <img src={card.image} alt={card.title} />
                </div>
                <div className={`${styles.nosotrosCardTitle} my-4`}>
                  {card.title}
                </div>
                <div className={styles.nosotrosCardContent}>{card.content}</div>
              </div>
            </div>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Caracteristicas1;
