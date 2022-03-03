import Head from "next/head";

interface Props {
  titulo: string;
  url: string;
  descripcion?: string;
  img?: string;
}

const desc =
  "Red 1a1 Nace para dar solución a las necesidades del mercado inmobiliario. Asesores y clientes podrán agregar, buscar y compartir propiedades. Red 1a1 Nace para dar solución a las necesidades del mercado actual, la fórmula es simple. Crear un entorno, en el cual, asesores e inmobiliarias puedan llegar a un mutuo acuerdo de intercambio de propiedades y clientes para que todos ganen. Red 1a1 es la solución para asesores independientes e inmobiliarias que permite la comunicación y el intercambio de carteras de clientes / propiedades. A través de esta herramienta versátil podrás agregar, buscar y compartir propiedades, también podrás comunicarte a través de un sistema de chat con otros asesores e inmobiliarias de la comunidad a nivel nacional.";
const logo =
  "https://res.cloudinary.com/du6f7alxg/image/upload/v1646325450/red1a1/red_amrywg.png";

const SEO = ({ titulo, descripcion = desc, url, img }: Props) => {
  return (
    <Head>
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>{titulo ? `Red 1 a 1 | ${titulo}` : "Red 1 a 1"}</title>
      <meta name="description" content={descripcion} />
      <meta name="keywords" content="Red uno a uno, Red 1 a 1" />
      <link
        rel="canonical"
        href={url ? `https://red1a1.com/app${url}` : "https://red1a1.com/app"}
      />
      <link rel="shortcut icon" href="/red.png" type="image/x-icon" />

      {/* <!-- Open Graph / Facebook --> */}
      <meta
        property="og:title"
        content={titulo ? `Red 1 a 1 | ${titulo}` : "Red 1 a 1"}
      />
      <meta property="og:description" content={descripcion} />
      <meta property="og:image" content={img ? img : logo} />
      <meta property="og:url" content={`https://red1a1.com${url}`} />
      <meta property="og:site_name" content={`Red 1 a 1 | ${titulo}`} />

      {/* <!-- Twitter --> */}
      <meta property="twitter:card" content={img ? img : logo} />
      <meta property="twitter:url" content={`https://red1a1.com${url}`} />
      <meta
        property="twitter:title"
        content={titulo ? `Red 1 a 1 | ${titulo}` : "Red 1 a 1"}
      />
      <meta property="twitter:description" content={descripcion} />
      <meta property="twitter:image" content={img ? img : logo} />

      <script
        type="text/javascript"
        async
        defer
        src="https://maps.googleapis.com/maps/api/js?key=AIzaSyAd22YBCutdzEZePBY2wbS2OawTZ1_H7-s&libraries=places&language=es"
      ></script>
    </Head>
  );
};

export default SEO;
