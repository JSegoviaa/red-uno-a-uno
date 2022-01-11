import { useRouter } from 'next/router';
import Mihistorial from '../../components/paginas/perfil/historial/Mihistorial';
import SEO from '../../components/seo/SEO';
import Titulo from '../../components/ui/titulo/Titulo';
import { usePrivateRoute } from '../../hooks/usePrivateRoute';

const HistorialInmueble = () => {
  const { asPath } = useRouter();

  return (
    <>
      <SEO titulo="Historial de inmuebles" url={asPath} />
      <Titulo titulo='Historial de inmuebles'/>
      <Mihistorial/>

    </>
  );
};

export default HistorialInmueble;
