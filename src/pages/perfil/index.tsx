import { useRouter } from "next/router";
import Perfil from "../../components/paginas/perfil/perfil/Perfil";
import SEO from "../../components/seo/SEO";
import { PrivateRoute } from "../../hooks/usePrivateRoute";

const Index = () => {
  const { asPath } = useRouter();

  return (
    <>
      <SEO titulo="Mi perfil" url={asPath} />
      <Perfil />
    </>
  );
};

<<<<<<< HEAD
export default Index;
=======
export default PrivateRoute(Index);
>>>>>>> 0f2eb67b4acc7a543c19a02552237f21db5f2472
