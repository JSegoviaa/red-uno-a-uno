import { FC, useContext, useEffect } from "react";
import { useRouter } from "next/router";
import MediaQuery from "react-responsive";
import { AuthContext } from "../../context/auth/AuthContext";
import VentanaChat from "../paginas/perfil/chats/VentanaChat";
import Footer from "../ui/footer/Footer";
import Header from "../ui/header/Header";
import PurpleHeader from "../ui/purpleheader/PurpleHeader";
import BuscadorRes from "components/ui/buscador/BuscadorRes";

const Layout: FC = ({ children }) => {
  const { verificaToken } = useContext(AuthContext);
  const router = useRouter();

  const admin = router.pathname.includes("dashboard");

  useEffect(() => {
    verificaToken();
  }, [verificaToken]);

  return (
    <>
      {admin ? (
        <>{children}</>
      ) : (
        <>
          <MediaQuery minWidth={992}>
            <Header />
            <PurpleHeader />
          </MediaQuery>
          <MediaQuery maxWidth={991}>
            <BuscadorRes />
          </MediaQuery>
          {children}
          <VentanaChat />
          <Footer />
        </>
      )}
    </>
  );
};

export default Layout;
