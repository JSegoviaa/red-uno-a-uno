import { useContext } from "react";
import { useRouter } from "next/router";
import MisUsuarios from "../../components/paginas/perfil/usuarios/MisUsuarios";
import SEO from "../../components/seo/SEO";
import Titulo from "../../components/ui/titulo/Titulo";
import { AuthContext } from "../../context/auth/AuthContext";
import { PrivateRoute } from "../../hooks/usePrivateRoute";
import NotFound from "../404";

const MisUsuariosPage = () => {
  const router = useRouter();
  const { auth } = useContext(AuthContext);

  if (auth.role === "Individual") {
    return <NotFound />;
  }

  return (
    <>
      <SEO titulo="Administrar usuarios" url={router.asPath} />
      <Titulo titulo="Mis usuarios" />
      <MisUsuarios />
    </>
  );
};

export default PrivateRoute(MisUsuariosPage);
