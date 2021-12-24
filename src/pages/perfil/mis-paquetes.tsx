import { useRouter } from 'next/router';
import SEO from '../../components/seo/SEO';
import { usePrivateRoute } from '../../hooks/usePrivateRoute';

const MisPaquetes = () => {
  const { asPath } = useRouter();

  return (
    <>
      <SEO titulo="Mis paquetes" url={asPath} />
      Mis Paquetes
    </>
  );
};

export default usePrivateRoute(MisPaquetes);
