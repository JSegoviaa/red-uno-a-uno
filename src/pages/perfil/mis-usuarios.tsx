import { useRouter } from "next/router";
import React from "react";
import MisUsuarios from "../../components/paginas/perfil/usuarios/MisUsuarios";
import SEO from "../../components/seo/SEO";
import Titulo from "../../components/ui/titulo/Titulo";
import { PrivateRoute } from "../../hooks/usePrivateRoute";

const MisUsuariosPage = () => {
  const router = useRouter();
  return (
    <div>
      <SEO titulo="Administrar usuarios" url={router.asPath} />
      <Titulo titulo="Mis usuarios" />
      <br />
      <MisUsuarios />
    </div>
  );
};

export default PrivateRoute(MisUsuariosPage);
