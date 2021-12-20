import Link from "next/link";
import { useRouter } from "next/router";
import Perfil from "../../components/paginas/perfil/perfil/Perfil";
import SEO from "../../components/seo/SEO";

const Index = () => {
  const { asPath } = useRouter();

  return (
    <>
      <SEO titulo="Mi perfil" url={asPath} />
      <Perfil />
    </>
  );
};

export default Index;
