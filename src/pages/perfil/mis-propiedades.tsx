import { useRouter } from "next/router";
import FiltroPropiedades from "../../components/paginas/perfil/propiedades/FiltroPropiedades";
import MiListaPropiedades from "../../components/paginas/perfil/propiedades/MisPropiedades";
import SEO from "../../components/seo/SEO";
import Titulo from "../../components/ui/titulo/Titulo";
import { PrivateRoute } from "../../hooks/usePrivateRoute";

const MisPropiedades = () => {
  const { asPath } = useRouter();

  return (
    <>
      <SEO titulo="Mis Propiedades" url={asPath} />
      <Titulo titulo="Mis propiedades" />
      <FiltroPropiedades />
      <MiListaPropiedades />
    </>
  );
};

<<<<<<< HEAD
export default MisPropiedades;
=======
export default PrivateRoute(MisPropiedades);
>>>>>>> 0f2eb67b4acc7a543c19a02552237f21db5f2472
