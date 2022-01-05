import Head from "next/head";

interface Props {
  titulo: string;
  descripcion?: string;
  url: string;
  img?: string;
}

const desc = "Descripción";
const logo =
  "https://firebasestorage.googleapis.com/v0/b/witideal-b1f99.appspot.com/o/assets%2Fthumb%40logo.png?alt=media&token=a099ac10-a2b7-49ce-869d-cffaeeb9b1aa";

const SEO = ({ titulo, descripcion = desc, url, img = logo }: Props) => {
  return (
    <Head>
      <title>{titulo ? `Red 1 a 1 | ${titulo}` : "Red 1 a 1"}</title>
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="description" content={descripcion} />
      <meta name="keywords" content="Red uno a uno, Red 1 a 1" />
      <link
        rel="canonical"
        href={url ? `https://red1a1.com${url}` : "https://red1a1.com"}
      />
      <meta
        property="og:title"
        content={titulo ? `Red 1 a 1 | ${titulo}` : "Red 1 a 1"}
      />
      <meta property="og:description" content={descripcion} />
      <meta property="og:image" content={img} />
      <meta property="og:url" content={`https://red1a1.com${url}`} />
      <meta property="og:site_name" content={`Red 1 a 1 | ${titulo}`} />
      <link rel="shortcut icon" href="/red.png" type="image/x-icon" />
      <script
        type="text/javascript"
        async
        src="https://maps.googleapis.com/maps/api/js?key=AIzaSyAd22YBCutdzEZePBY2wbS2OawTZ1_H7-s&libraries=places&language=es"
      ></script>
    </Head>
  );
};

export default SEO;
