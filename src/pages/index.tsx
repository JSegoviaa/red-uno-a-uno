import type { NextPage } from "next";
import { useRouter } from "next/router";
import dynamic from "next/dynamic";
import useInView from "react-cool-inview";
import Info from "../components/paginas/inicio/Info";
// import ListaProp from "../components/paginas/inicio/ListaProp";
import SEO from "../components/seo/SEO";
import Loading from "../components/ui/loading/Loading";
import styles from "../styles/Responsive.module.css";
// import ListaPropResp from "../components/ui/responsive/ListaPropResp";

const MapaBuscador = dynamic(
  () => import("../components/paginas/inicio/MapaBuscador"),
  { loading: () => <Loading />, ssr: false }
);

const ListaProp = dynamic(
  () => import("../components/paginas/inicio/ListaProp")
);

const ListaPropResp = dynamic(
  () => import("../components/ui/responsive/ListaPropResp")
);

const Home: NextPage = () => {
  const { asPath } = useRouter();
  const { observe, inView } = useInView({
    onEnter: ({ unobserve }) => unobserve(),
  });

  return (
    <>
      <SEO titulo="Inicio" url={asPath} />

      <div ref={observe} className={styles.ocultarHeaderResponsive}>
        {inView ? <ListaProp /> : null}
      </div>
      <MapaBuscador />
      <Info />
      <ListaPropResp />
    </>
  );
};

export default Home;
