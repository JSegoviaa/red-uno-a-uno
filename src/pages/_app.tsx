import "../styles/globals.css";
import type { AppProps } from "next/app";
import NextNProgress from "nextjs-progressbar";
import "bootstrap/dist/css/bootstrap.min.css";
import { AuthProvider } from "../context/auth/AuthContext";
import Layout from "../components/layout/Layout";
import { InmuebleProvider } from "../context/inmuebles/InmuebleContext";
import { MapProvider } from "../context/map/MapContext";
import moment from "moment";
import "moment/locale/es";
moment.locale("es");

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AuthProvider>
      <NextNProgress
        height={6}
        color="#7149BC"
        options={{ showSpinner: false }}
      />
      <MapProvider>
        <Layout>
          <InmuebleProvider>
            <Component {...pageProps} />
          </InmuebleProvider>
        </Layout>
      </MapProvider>
    </AuthProvider>
  );
}

export default MyApp;
