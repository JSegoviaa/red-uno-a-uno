import { useContext } from "react";
import { GetStaticPaths, GetStaticProps } from "next";
import { useRouter } from "next/router";
import Detalles from "../../components/paginas/propiedades/detalles/Detalles";
import Slider from "../../components/paginas/propiedades/detalles/Slider";
import Ubicacion from "../../components/paginas/propiedades/detalles/Ubicación";
import Contact from "../../components/paginas/propiedades/detalles/Contact";
import SEO from "../../components/seo/SEO";
import { AuthContext } from "../../context/auth/AuthContext";

export const getStaticProps: GetStaticProps = async () => {
  return { props: {} };
};

export const getStaticPaths = async () => {
  const paths: string[] = [];
  return { paths };
};

const Propiedad = () => {
  const { asPath } = useRouter();
  const { auth } = useContext(AuthContext);
  return (
    <>
      <SEO titulo="Hola" url={asPath} />
      <Slider />
      <Detalles />
      <Ubicacion />
      {auth.uid ? <Contact /> : null}
    </>
  );
};

export default Propiedad;
