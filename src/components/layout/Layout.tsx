import { FC, useContext, useEffect } from "react";
import { useRouter } from "next/router";
import { AuthContext } from "../../context/auth/AuthContext";
import VentanaChat from "../paginas/perfil/chats/VentanaChat";
import Footer from "../ui/footer/Footer";
import Header from "../ui/header/Header";
import PurpleHeader from "../ui/purpleheader/PurpleHeader";
import BuscadorRes from "components/ui/buscador/BuscadorRes";
import ResponsiveHeader from "components/ui/header/ResponsiveHeader";
import styles from "../../styles/Responsive.module.css";
import BottomNavBar from "components/ui/responsive/BottomNavBar";
import { MapContext } from "context/map/MapContext";

const Layout: FC = ({ children }) => {
  const { verificaToken, auth } = useContext(AuthContext);
  const router = useRouter();
  const { ocultarBottomNav } = useContext(MapContext);
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
          <div className={styles.ocultarHeaderResponsive}>
            <Header />
            <PurpleHeader />
          </div>

          <div className={styles.mostrarHeaderResponsive}>
            <ResponsiveHeader />
            <BuscadorRes />
            {auth.logged && ocultarBottomNav ? <BottomNavBar /> : null}
          </div>

          {children}
          <VentanaChat />
          <Footer />
        </>
      )}
    </>
  );
};

export default Layout;
