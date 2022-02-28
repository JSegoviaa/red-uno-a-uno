import { Col, Container, Row } from "react-bootstrap";
import styles from "./Compartidas.module.css";

const compartidas = [
  {
    id: 1,
    titulo: "Compartida 1",
    img: "https://res.cloudinary.com/du6f7alxg/image/upload/v1645204979/red1a1/usuarios/61fc60ddc38cff1af6becb4d/inmuebles/620d45f2645c19820f0615f4/fkpucih2fyzorhfpajql.jpg",
    estado: "compartidas",
  },
  {
    id: 2,
    titulo: "Compartida 2",
    img: "https://res.cloudinary.com/du6f7alxg/image/upload/v1645204979/red1a1/usuarios/61fc60ddc38cff1af6becb4d/inmuebles/620d45f2645c19820f0615f4/fkpucih2fyzorhfpajql.jpg",
    estado: "compartidas",
  },
  {
    id: 3,
    titulo: "Compartí 1",
    img: "https://res.cloudinary.com/du6f7alxg/image/upload/v1645204979/red1a1/usuarios/61fc60ddc38cff1af6becb4d/inmuebles/620d45f2645c19820f0615f4/fkpucih2fyzorhfpajql.jpg",
    estado: "mis-compartidas",
  },
  {
    id: 4,
    titulo: "Compartí 2",
    img: "https://res.cloudinary.com/du6f7alxg/image/upload/v1645204979/red1a1/usuarios/61fc60ddc38cff1af6becb4d/inmuebles/620d45f2645c19820f0615f4/fkpucih2fyzorhfpajql.jpg",
    estado: "mis-compartidas",
  },
  {
    id: 5,
    titulo: "Compartí 3",
    img: "https://res.cloudinary.com/du6f7alxg/image/upload/v1645204979/red1a1/usuarios/61fc60ddc38cff1af6becb4d/inmuebles/620d45f2645c19820f0615f4/fkpucih2fyzorhfpajql.jpg",
    estado: "mis-compartidas",
  },
  {
    id: 6,
    titulo: "Compartida 3",
    img: "https://res.cloudinary.com/du6f7alxg/image/upload/v1645204979/red1a1/usuarios/61fc60ddc38cff1af6becb4d/inmuebles/620d45f2645c19820f0615f4/fkpucih2fyzorhfpajql.jpg",
    estado: "compartidas",
  },
  {
    id: 7,
    titulo: "Compartida 4",
    img: "https://res.cloudinary.com/du6f7alxg/image/upload/v1645204979/red1a1/usuarios/61fc60ddc38cff1af6becb4d/inmuebles/620d45f2645c19820f0615f4/fkpucih2fyzorhfpajql.jpg",
    estado: "compartidas",
  },
];

const CompartidasCard = () => {
  return (
    <Container>
      {compartidas.length === 0 ? (
        <div className={`${styles.titulo} text-center`}>
          No tienes propiedades compartidas
        </div>
      ) : (
        <Row>
          {compartidas.map((compartida) => (
            <Col
              key={compartida.id}
              xs={6}
              md={4}
              lg={4}
              xl={3}
              className="py-3 text-center"
            >
              <div className={`${styles.customCard} card pointer`}>
                <div>
                  <div className={styles.imgContainer}>
                    <div
                      className={styles.cardImg}
                      style={{
                        backgroundImage: `url('${compartida.img}')`,
                      }}
                    />
                  </div>
                  <div className={styles.tituloContainer}>
                    <div className={`${styles.proContent} my-2`}>
                      {compartida.titulo}
                    </div>
                  </div>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      )}
    </Container>
  );
};

export default CompartidasCard;
