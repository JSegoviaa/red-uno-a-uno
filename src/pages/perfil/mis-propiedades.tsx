import { useRouter } from "next/router";
import MiListaPropiedades from "../../components/paginas/perfil/propiedades/MisPropiedades";
import SEO from "../../components/seo/SEO";
import Titulo from "../../components/ui/titulo/Titulo";

const MisPropiedades = () => {
  const { asPath } = useRouter();

  return (
    <>
      <SEO titulo="Mis Propiedades" url={asPath} />
      <Titulo titulo="Mis propiedades" />
      <MiListaPropiedades />
    </>
  );
};

export default MisPropiedades;
