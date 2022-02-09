import React from "react";
import MisUsuarios from "../../components/paginas/perfil/usuarios/MisUsuarios";
import Titulo from "../../components/ui/titulo/Titulo";
import { PrivateRoute } from "../../hooks/usePrivateRoute";

const MisUsuariosPage = () => {
  return (
    <div>
      <Titulo titulo="Mis usuarios" />
      <br />
      <MisUsuarios />
    </div>
  );
};

export default PrivateRoute(MisUsuariosPage);
