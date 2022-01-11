import { Col, Container, Row } from "react-bootstrap";
import styles from "./Nosotros.module.css";

const Info = () => {
  return (
    <>
      <section className={styles.section}>
        <Container>
          <div className="row d-flex justify-content-center">
            <div className="col-sm-12 col-md-12 col-lg-10">
              <Row>
                <Col md={6}>
                  <div className="d-flex justify-content-center">
                    <img
                      src="/images/content/nosotros-1.png"
                      style={{ width: "100%" }}
                    />
                  </div>
                </Col>
                <Col md={6} className="my-5">
                  <div className={`${styles.title} mb-5`}>
                    Acerca de nosotros
                  </div>
                  <div className={styles.content}>
                    <p>
                      Red 1 a 1 nace para dar solución a las necesidades del
                      mercado inmobiliario. Creamos una plataforma en donde
                      asesores y clientes podrán agregar, buscar y compartir
                      propiedades.
                    </p>

                    <p>
                      En Red 1 a 1 nos enfocamos en la solución a las
                      necesidades del mercado actual, la fórmula es simple.
                      Creamos un entorno en el cual los asesores e inmobiliarias
                      puedan llegar a un mutuo acuerdo de intercambio de
                      propiedades y clientes para que todos ganen.
                    </p>
                  </div>
                </Col>
              </Row>
            </div>
          </div>
        </Container>
      </section>

      <section className={styles.section2}>
        <Container>
          <div className="row d-flex justify-content-center">
            <div className="col-sm-12 col-md-12 col-lg-10 text-center">
              <div className={`${styles.title} mb-4`}>
                ¿Por qué compartir mis propiedades?
              </div>
              <div className={styles.content}>
                El mercado actual de clientes demanda más cartera de
                propiedades, la mayoría de las veces con necesidades
                específicas. Al compartir tu propiedad formas parte del sistema
                ganar-ganar, vendes tu propiedad más rápido o tienes una cartera
                más grande de propiedades que puedes ofrecer y que satisfacen
                los requerimientos de los clientes.
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
};

export default Info;
