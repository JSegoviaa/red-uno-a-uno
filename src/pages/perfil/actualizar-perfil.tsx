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

<<<<<<< HEAD
export default ActualizarPerfil;
=======
export default PrivateRoute(ActualizarPerfil);
>>>>>>> 0f2eb67b4acc7a543c19a02552237f21db5f2472
