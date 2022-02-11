import { useRouter } from "next/router";
import { Col, Container, Row } from "react-bootstrap";
import SEO from "components/seo/SEO";
import { PrivateRoute } from "../../hooks/usePrivateRoute";

const EditarInmueble = () => {
  const router = useRouter();
  return (
    <>
      <SEO titulo="Editar inmueble" url={router.asPath} />
      <Container className="text-center">
        <Row>
          <Col sm={6}>Editar información del inmueble</Col>
          <Col sm={6}>Editar imágenes</Col>
        </Row>
      </Container>
    </>
  );
};

export default PrivateRoute(EditarInmueble);
