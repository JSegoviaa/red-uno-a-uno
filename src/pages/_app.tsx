import '../styles/globals.css';
import type { AppProps } from 'next/app';
import NextNProgress from 'nextjs-progressbar';
import moment from 'moment';
import 'moment/locale/es';
import 'bootstrap/dist/css/bootstrap.min.css';
import { AuthProvider } from '../context/auth/AuthContext';
import Layout from '../components/layout/Layout';
import { InmuebleProvider } from '../context/inmuebles/InmuebleContext';
import { MapProvider } from '../context/map/MapContext';
import { ChatProvider } from '../context/chat/ChatContext';
import { SocketProvider } from '../context/socket/SocketContext';
moment.locale('es');

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AuthProvider>
      <ChatProvider>
        <SocketProvider>
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
        </SocketProvider>
      </ChatProvider>
    </AuthProvider>
  );
}

export default MyApp;
