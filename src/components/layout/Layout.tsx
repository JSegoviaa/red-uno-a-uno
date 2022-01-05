import React, { FC, useContext, useEffect } from "react";
import { AuthContext } from "../../context/auth/AuthContext";
import Buscador from "../ui/buscador/Buscador";
import Footer from "../ui/footer/Footer";
import Header from "../ui/header/Header";
import PurpleHeader from "../ui/purpleheader/PurpleHeader";

const Layout: FC = ({ children }) => {
  const { verificaToken } = useContext(AuthContext);

  useEffect(() => {
    verificaToken();
  }, [verificaToken]);

  return (
    <>
      <Header />
      <PurpleHeader />
      <Buscador />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
