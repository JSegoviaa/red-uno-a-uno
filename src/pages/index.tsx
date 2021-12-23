import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import { useContext, useEffect } from 'react';
import Info from '../components/paginas/inicio/Info';
import SEO from '../components/seo/SEO';
import { AuthContext } from '../context/auth/AuthContext';

const Home: NextPage = () => {
  const { asPath } = useRouter();

  const { auth, verificaToken } = useContext(AuthContext);

  useEffect(() => {
    verificaToken();
  }, [verificaToken]);

  if (auth.checking) {
    return <h1>Hola</h1>;
  }

  return (
    <>
      <SEO titulo="Inicio" url={asPath} />
      <Info />
    </>
  );
};

export default Home;
