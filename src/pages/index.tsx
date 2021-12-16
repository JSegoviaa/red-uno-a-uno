import type { NextPage } from "next";
import { useRouter } from "next/router";
import SEO from "../components/seo/SEO";

const Home: NextPage = () => {
  const { asPath } = useRouter();

  return (
    <>
      <SEO titulo="Inicio" url={asPath} />
      <div>Página de inicio</div>
    </>
  );
};

export default Home;
