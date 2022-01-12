import { GetStaticProps } from "next";
import { useRouter } from "next/router";
import ListaPropiedades from "../../components/paginas/propiedades/ListaPropiedades/ListaPropiedades";
import SEO from "../../components/seo/SEO";
import Titulo from "../../components/ui/titulo/Titulo";
import { production } from "../../credentials/credentials";
import { Inmueble } from "../../interfaces/InmueblesInterface";

interface Resp {
  data: {
    ok: boolean;
    total: number;
    inmuebles: Inmueble[];
  };
}

export const getStaticProps: GetStaticProps = async () => {
  const resp = await fetch(`${production}/inmuebles/`);
  const data = await resp.json();

  return { props: { data }, revalidate: 15 };
};

const Index = ({ data }: Resp) => {
  const { asPath } = useRouter();

  return (
    <>
      <SEO titulo="Propiedades" url={asPath} />
      <Titulo titulo="Resultados de busqueda" />
      <br />
      <ListaPropiedades data={data} />
    </>
  );
};

export default Index;
