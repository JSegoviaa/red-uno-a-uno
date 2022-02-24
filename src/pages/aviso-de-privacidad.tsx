import { useRouter } from "next/router";
import { Container } from "react-bootstrap";
import SEO from "components/seo/SEO";

const NoP = () => {
  const router = useRouter();

  return (
    <>
      <SEO titulo="Aviso de privacidad" url={router.asPath} />
      <Container>
        <h1 className="text-center">Aviso de privacidad</h1>
      </Container>
    </>
  );
};

export default NoP;
