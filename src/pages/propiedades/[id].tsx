import { useContext } from "react";
import { GetStaticPaths, GetStaticProps } from "next";
import dynamic from "next/dynamic";
import Detalles from "../../components/paginas/propiedades/detalles/Detalles";
import Slider from "../../components/paginas/propiedades/detalles/Slider";
import Contact from "../../components/paginas/propiedades/detalles/Contact";
import SEO from "../../components/seo/SEO";
import { AuthContext } from "../../context/auth/AuthContext";
import { production } from "../../credentials/credentials";
import { InmueblesUsuario } from "../../interfaces/CrearInmuebleInterface";
import NotFound from "../404";


export const getStaticPaths: GetStaticPaths = async () => {
  const resp = await fetch(`${production}/inmuebles/`);
  const data = await resp.json();

  const paths = data.inmuebles.map((path: InmueblesUsuario) => {
    return { params: { id: path.slug.toString() } };
  });

  return { paths, fallback: "blocking" };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const id = context.params!.id;
  const resp = await fetch(`${production}/inmuebles/url/${id}`);
  const data = await resp.json();

  return { props: { inmuebles: data }, revalidate: 15, notFound: !data };
};

interface Props {
  inmuebles: {
    inmueble: InmueblesUsuario;
    ok: boolean;
  };
}

const Ubicacion: any = dynamic(
  () => import("../../components/paginas/propiedades/detalles/Ubicación"),
  { ssr: false }
);

const Propiedad = ({ inmuebles }: Props) => {
  const { auth } = useContext(AuthContext);

  if (!inmuebles.inmueble.publicado) {
    return <NotFound />;
  }

  return (
    <>
      <SEO
        titulo={inmuebles.inmueble.titulo}
        url={`/${inmuebles.inmueble.slug}`}
        descripcion={inmuebles.inmueble.descripcion}
        img={inmuebles.inmueble.imgs[0] ? inmuebles.inmueble.imgs[0] : ""}
      />
      <Slider inmuebles={inmuebles} />
      <Detalles inmuebles={inmuebles} />
      <Ubicacion inmuebles={inmuebles} />
      {auth.uid ? <Contact inmuebles={inmuebles} /> : null}
    </>
  );
};

export default Propiedad;
