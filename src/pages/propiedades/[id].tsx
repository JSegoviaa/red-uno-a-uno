import { useContext } from "react";
import { GetStaticPaths, GetStaticProps } from "next";
import { useRouter } from "next/router";
import Detalles from "../../components/paginas/propiedades/detalles/Detalles";
import Slider from "../../components/paginas/propiedades/detalles/Slider";
import Ubicacion from "../../components/paginas/propiedades/detalles/Ubicación";
import Contact from "../../components/paginas/propiedades/detalles/Contact";
import SEO from "../../components/seo/SEO";
import { AuthContext } from "../../context/auth/AuthContext";
import { production } from "../../credentials/credentials";
import { InmueblesUsuario } from "../../interfaces/CrearInmuebleInterface";

export const getStaticPaths: GetStaticPaths = async () => {
  const resp = await fetch(`${production}/inmuebles/`);
  const data = await resp.json();

  const paths = data.inmuebles.map((path: InmueblesUsuario) => {
    return { params: { id: path._id.toString() } };
  });

  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const id = context.params!.id;
  const resp = await fetch(`${production}/inmuebles/${id}`);
  const data = await resp.json();

  return { props: { inmuebles: data } };
};

interface Props {
  inmuebles: {
    inmueble: InmueblesUsuario;
    ok: boolean;
  };
}

const Propiedad = ({ inmuebles }: Props) => {
  console.log(inmuebles.inmueble);
  const { asPath } = useRouter();
  const { auth } = useContext(AuthContext);
  return (
    <>
      <SEO titulo={inmuebles.inmueble.titulo} url={asPath} />
      <Slider inmuebles={inmuebles} />
      <Detalles inmuebles={inmuebles} />
      <Ubicacion inmuebles={inmuebles} />
      {auth.uid ? <Contact inmuebles={inmuebles} /> : null}
    </>
  );
};

export default Propiedad;
