import ContenidoChat from "../../../components/paginas/perfil/chats/ContenidoChat";
import { PrivateRoute } from "../../../hooks/usePrivateRoute";

const Chat = () => {
  return <>
    <ContenidoChat/>
  </>;
};

export default PrivateRoute(Chat);
