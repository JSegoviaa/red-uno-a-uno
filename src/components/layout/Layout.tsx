import React, { FC } from 'react';
import Footer from '../ui/footer/Footer';
import Header from '../ui/header/Header';

const Layout: FC = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
