import "../styles/globals.css";
import type { AppProps } from "next/app";
import "bootstrap/dist/css/bootstrap.min.css";
import { AuthProvider } from "../context/auth/AuthContext";
import Layout from "../components/layout/Layout";
import { InmuebleProvider } from "../context/inmuebles/InmuebleContext";
import { MapProvider } from "../context/map/MapContext";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AuthProvider>
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
