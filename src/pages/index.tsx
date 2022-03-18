import type { NextPage } from "next";
import { useRouter } from "next/router";
import MediaQuery from "react-responsive";
import dynamic from "next/dynamic";
import Info from "../components/paginas/inicio/Info";
import ListaProp from "../components/paginas/inicio/ListaProp";
import SEO from "../components/seo/SEO";
import Loading from "../components/ui/loading/Loading";

const MapaBuscador: any = dynamic(
  () => import("../components/paginas/inicio/MapaBuscador"),
  { loading: () => <Loading />, ssr: false }
);

const Home: NextPage = () => {
  const { asPath } = useRouter();
  return (
    <>
      <SEO titulo="Inicio" url={asPath} />
      <MediaQuery minWidth={992}>
        <ListaProp />
      </MediaQuery>
      <MapaBuscador />
      <Info />
    </>
  );
};

export default Home;
