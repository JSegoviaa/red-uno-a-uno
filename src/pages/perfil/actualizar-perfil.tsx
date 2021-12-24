import { useRouter } from 'next/router';
import SEO from '../../components/seo/SEO';
import { usePrivateRoute } from '../../hooks/usePrivateRoute';

const ActualizarPerfil = () => {
  const { asPath } = useRouter();

  return (
    <>
      <SEO titulo="Actualiza tu perfil" url={asPath} />
      <div>Actualizar perfil</div>
    </>
  );
};

export default usePrivateRoute(ActualizarPerfil);
