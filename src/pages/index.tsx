import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import Info from '../components/paginas/inicio/Info';
import SEO from '../components/seo/SEO';
import Loading from '../components/ui/loading/Loading';

const Home: NextPage = () => {
  const { asPath } = useRouter();

  return (
    <>
      <SEO titulo="Inicio" url={asPath} />
      <Info />
    </>
  );
};

export default Home;
