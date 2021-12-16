import { useRouter } from "next/router";
import SEO from "../components/seo/SEO";

const Paquetes = () => {
  const { asPath } = useRouter();

  return (
    <>
      <SEO titulo="Añade un paquete" url={asPath} />
      <div>Paquetes</div>
    </>
  );
};

export default Paquetes;
