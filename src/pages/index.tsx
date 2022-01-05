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
      <MapaBuscador
        googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyAd22YBCutdzEZePBY2wbS2OawTZ1_H7-s"
        loadingElement={<div style={{ height: `100%` }} />}
        containerElement={<div style={{ height: `100vh` }} />}
        mapElement={<div style={{ height: `100%` }} />}
      />
      <Info />
    </>
  );
};

export default Home;
