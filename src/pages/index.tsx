import type { NextPage } from "next";
import { useRouter } from "next/router";
import dynamic from "next/dynamic";
import Info from "../components/paginas/inicio/Info";
import ListaProp from "../components/paginas/inicio/ListaProp";
import BottomNavBar from "../components/ui/responsive/BottomNavBar";
import SEO from "../components/seo/SEO";
import Loading from "../components/ui/loading/Loading";
import styles from "../styles/Responsive.module.css";
import ListaPropResp from "../components/ui/responsive/ListaPropResp";

const MapaBuscador = dynamic(
  () => import("../components/paginas/inicio/MapaBuscador"),
  { loading: () => <Loading />, ssr: false }
);

const Home: NextPage = () => {
  const { asPath } = useRouter();
  return (
    <>
      <SEO titulo="Inicio" url={asPath} />

      <div className={styles.ocultarHeaderResponsive}>
        <ListaProp />
      </div>
      <MapaBuscador />
      <Info />
    
      <ListaPropResp/>

    </>
  );
};

export default Home;
