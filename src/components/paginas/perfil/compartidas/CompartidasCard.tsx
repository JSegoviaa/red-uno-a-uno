import { useContext, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useRouter } from "next/router";
import { AuthContext } from "context/auth/AuthContext";
import { useCompartidas } from "hooks/useCompartidas";
import styles from "./Compartidas.module.css";
import { InmuebleContext } from "context/inmuebles/InmuebleContext";
import Loading from "components/ui/loading/Loading";

const CompartidasCard = () => {
  const { auth } = useContext(AuthContext);
  const { estado } = useContext(InmuebleContext);
  const [totall, setTotall] = useState(20);
  const router = useRouter();
  const { total, cargando, compartidas } = useCompartidas(
    auth.uid,
    estado,
    totall
  );

  const goToProperty = (slug: string) => router.push(`/propiedades/${slug}`);

  return (
    <Container>
      {compartidas?.length === 0 ? (
        <div className={`${styles.titulo} text-center`}>
          No tienes propiedades compartidas
        </div>
      ) : (
        <Row>
          {cargando ? (
            <Loading />
          ) : (
            <>
              {compartidas?.map((compartida) => (
                <Col
                  key={compartida._id}
                  xs={6}
                  md={4}
                  lg={4}
                  xl={3}
                  className="py-3 text-center"
                >
                  <div
                    onClick={() => goToProperty(compartida.inmueble.slug)}
                    className={`${styles.customCard} card pointer`}
                  >
                    {compartida.estado === "Aprobado" ? (
                      <img
                        className={styles.iconoF}
                        src="/images/icons/properties-icons/aprobado.png"
                        alt=""
                      />
                    ) : null}

                    {compartida.estado === "Pendiente" ? (
                      <img
                        className={styles.iconoF}
                        src="/images/icons/properties-icons/pendiente.png"
                        alt=""
                      />
                    ) : null}

                    <div>
                      <div className={styles.imgContainer}>
                        <div
                          className={styles.cardImg}
                          style={{
                            backgroundImage: `url('${compartida.inmueble.imgs[0]}')`,
                          }}
                        />
                      </div>
                      <div className={styles.tituloContainer}>
                        <div className={`${styles.proContent} my-2`}>
                          {compartida.inmueble.titulo}
                        </div>
                      </div>
                    </div>
                  </div>
                </Col>
              ))}
            </>
          )}
        </Row>
      )}
    </Container>
  );
};

export default CompartidasCard;
