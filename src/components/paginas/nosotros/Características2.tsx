import { Container, Row } from "react-bootstrap";
import styles from "./Nosotros.module.css";

const cards = [
  {
    id: 1,
    title: "Agregar Propiedades a la plataforma",
    image: "/images/icons/agrega.png",
  },
  {
    id: 2,
    title: "Buscador de propiedades",
    image: "/images/icons/buscador.png",
  },
  {
    id: 3,
    title: "Compartir y solicitar propiedades a otros asesores / inmobiliarias",
    image: "/images/icons/compartir.png",
  },
  {
    id: 4,
    title: "Servicio de chat con otros asesores / inmobiliarias en tiempo real",
    image: "/images/icons/chat.png",
  },
  {
    id: 5,
    title: "Comparte propiedades que se ajusten a las necesidades del cliente",
    image: "/images/icons/comparte.png",
  },
  {
    id: 6,
    title: "Notificación de nuevas propiedades",
    image: "/images/icons/notificacion.png",
  },
];

const Características2 = () => {
  return (
    <section className={styles.section}>
      <Container>
        <div className="row d-flex justify-content-center">
          <div className="col-sm-12 col-md-12 col-lg-10 text-center">
            <div className={`${styles.title} mb-5`}>
              Características de la Plataforma RED 1 A 1
            </div>
          </div>
        </div>

        <Row>
          {cards.map((card) => (
            <div
              key={card.id}
              className="col-sm-12 col-md-6 col-lg-4 text-center mb-1"
            >
              <div className={styles.nosotrosCard2}>
                <div>
                  <img src={card.image} alt={card.title} />
                </div>
                <div className={`${styles.nosotrosCardTitle2} my-4`}>
                  {card.title}
                </div>
              </div>
            </div>
          ))}
        </Row>
      </Container>
      <div className="py-5" />
    </section>
  );
};

export default Características2;
