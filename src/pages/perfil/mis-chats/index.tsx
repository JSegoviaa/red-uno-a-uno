import { PrivateRoute } from "../../../hooks/usePrivateRoute";

const Index = () => {
  return <div>Aquí van mis chats</div>;
};

export default PrivateRoute(Index);
