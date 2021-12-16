import Link from "next/link";
import { useRouter } from "next/router";
import SEO from "../../components/seo/SEO";

const Index = () => {
  const { asPath } = useRouter();

  return (
    <>
      <SEO titulo="Mi perfil" url={asPath} />
      <h1>Mi perfil</h1>
      <br />
      <br />
      <Link href="/perfil/actualizar-perfil" scroll>
        Actualizar mi perfil
      </Link>
      <br />
      <br />
      <Link href="/perfil/agregar-inmueble" scroll>
        Añadir Inmueble
      </Link>
      <br />
      <br />
      <Link href="/perfil/historial-de-inmueble" scroll>
        Historial de inmueble
      </Link>
      <br />
      <br />
      <Link href="/perfil/mis-favoritos" scroll>
        Mis favoritos
      </Link>
      <br />
      <br />
      <Link href="/perfil/mis-paquetes" scroll>
        Mis paquetes
      </Link>
      <br />
      <br />
      <Link href="/perfil/mis-propiedades" scroll>
        Mis propiedades
      </Link>
    </>
  );
};

export default Index;
