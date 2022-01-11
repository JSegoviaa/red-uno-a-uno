import { Container, Row } from "react-bootstrap";
import styles from "./Inicio.module.css";

const Info = () => {
  return (
    <Container>
      <section className={styles.section1}>
        <Row>
          <div className="col-sm-12 col-md-6 col-lg-6 col-xl-6">
            <div className="d-flex justify-content-center">
              <img src="/images/content/que-es.png" style={{ width: "100%" }} />
            </div>
          </div>
          <div className="col-sm-12 col-md-6 col-lg-6 col-xl-6">
            <div className={`${styles.title} my-5`}>¿Qué es Red 1 a 1?</div>
            <div className={`${styles.content} mb-4`}>
              Una App que facilita la compra, venta y renta de propiedades en
              cualquier lugar, Red 1 a 1 nace para dar solución a las
              necesidades del mercado actual, la fórmula es simple. Crear un
              entorno en el cual, asesores e inmobiliarias puedan llegar a un
              mutuo acuerdo de intercambio de propiedades y clientes para que
              todos ganen.
            </div>
          </div>
        </Row>
      </section>

      <section className={styles.section1}>
        <Row>
          <div className="col-sm-12 col-md-6 col-lg-6 col-xl-6">
            <div className={`${styles.title} my-5`}>¿Cómo funciona?</div>
            <div className={`${styles.content} mb-4`}>
              Red 1 a 1 permite la comunicación y el intercambio de carteras de
              clientes y propiedades. A través de esta herramienta versátil
              podrás agregar, buscar y compartir propiedades, también podrás
              comunicarte a través de un sistema de chat con otros asesores e
              inmobiliarias de la comunidad a nivel nacional. Encuentra la
              propiedad que tu cliente necesita, comparte tus inmuebles con
              nuestra comunidad de asesores y obtén más resultados en ventas con
              la mejor estrategia para los asesores inmobiliarios.
            </div>
            <div className={styles.subtitle}>
              Forma parte de la comunidad inmobiliaria más grande de México.
            </div>
          </div>
          <div className="col-sm-12 col-md-6 col-lg-6 col-xl-6">
            <div className="d-flex justify-content-center">
              <img
                src="/images/content/como-funciona.png"
                style={{ width: "100%" }}
              />
            </div>
          </div>
        </Row>
      </section>
      <div className="py-5" />
    </Container>
  );
};

export default Info;
