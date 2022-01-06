import { useRouter } from "next/router";
import ListaPropiedades from "../../components/paginas/propiedades/ListaPropiedades/ListaPropiedades";
import SEO from "../../components/seo/SEO";
import Titulo from "../../components/ui/titulo/Titulo";

const Index = () => {
  const { asPath } = useRouter();

  return (
    <>
      <SEO titulo="Propiedades" url={asPath} />
      <Titulo titulo="Resultados de busqueda"/>
      <br />
      <ListaPropiedades/>
    </>
  );
};

export default Index;
