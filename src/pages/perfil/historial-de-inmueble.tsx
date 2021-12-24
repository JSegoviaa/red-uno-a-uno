import { useRouter } from 'next/router';
import SEO from '../../components/seo/SEO';
import { usePrivateRoute } from '../../hooks/usePrivateRoute';

const HistorialInmueble = () => {
  const { asPath } = useRouter();

  return (
    <>
      <SEO titulo="Historial de inmuebles" url={asPath} />
      <div>Historial de inmuebles</div>
    </>
  );
};

export default usePrivateRoute(HistorialInmueble);
