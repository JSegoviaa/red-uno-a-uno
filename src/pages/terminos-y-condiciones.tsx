import { useRouter } from "next/router";
import { Container } from "react-bootstrap";
import SEO from "components/seo/SEO";

const ToS = () => {
  const router = useRouter();

  return (
    <>
      <SEO titulo="Términos y condiciones" url={router.asPath} />
      <Container>
        <h1 className="text-center">Términos y condiciones</h1>
      </Container>
    </>
  );
};

export default ToS;
