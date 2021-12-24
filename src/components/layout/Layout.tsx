import React, { FC, useContext, useEffect } from 'react';
import { AuthContext } from '../../context/auth/AuthContext';
import Footer from '../ui/footer/Footer';
import Header from '../ui/header/Header';

const Layout: FC = ({ children }) => {
  const { verificaToken } = useContext(AuthContext);

  useEffect(() => {
    verificaToken();
  }, [verificaToken]);

  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
