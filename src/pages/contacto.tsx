import { useRouter } from "next/router";
import ContactForm from "../components/paginas/contacto/ContactForm";
import SEO from "../components/seo/SEO";
import Titulo from "../components/ui/titulo/Titulo";

const Contacto = () => {
  const { asPath } = useRouter();

  return (
    <>
      <SEO titulo="Contáctanos" url={asPath} />
      <Titulo titulo="Contacto" />
      <ContactForm />
    </>
  );
};

export default Contacto;
