import { useRouter } from "next/router";
import ActualizarPerfilForm from "../../components/paginas/perfil/perfil/ActualizarPerfil";
import SEO from "../../components/seo/SEO";
import { PrivateRoute } from "../../hooks/usePrivateRoute";

const ActualizarPerfil = () => {
  const { asPath } = useRouter();

  return (
    <>
      <SEO titulo="Actualiza tu perfil" url={asPath} />
      <ActualizarPerfilForm />
    </>
  );
};

export default PrivateRoute(ActualizarPerfil);
