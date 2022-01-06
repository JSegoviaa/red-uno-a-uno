import type { NextPage } from "next";
import { useRouter } from "next/router";
import Info from "../components/paginas/inicio/Info";
import MapaBuscador from "../components/paginas/inicio/MapaBuscador";
import SEO from "../components/seo/SEO";

const Home: NextPage = () => {
  const { asPath } = useRouter();
  return (
    <>
      <SEO titulo="Inicio" url={asPath} />
      <MapaBuscador />
      <Info />
    </>
  );
};

export default Home;
