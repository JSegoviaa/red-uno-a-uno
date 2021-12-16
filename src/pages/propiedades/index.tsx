import { useRouter } from "next/router";
import SEO from "../../components/seo/SEO";

const Index = () => {
  const { asPath } = useRouter();

  return (
    <>
      <SEO titulo="Propiedades" url={asPath} />
      <div>Todas las propiedades</div>
    </>
  );
};

export default Index;
