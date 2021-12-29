import { useRouter } from 'next/router';
import Detalles from '../../components/paginas/propiedades/detalles/Detalles';
import Slider from '../../components/paginas/propiedades/detalles/Slider';
import Ubicacion from '../../components/paginas/propiedades/detalles/Ubicación';
import Contact from '../../components/paginas/propiedades/detalles/Contact';
import SEO from '../../components/seo/SEO';

const Propiedad = () => {
  const { asPath } = useRouter();
  return (
    <>
      <SEO titulo="Hola" url={asPath} />
      <Slider />
      <Detalles />
      <Ubicacion />
      <Contact />
    </>
  );
};

export default Propiedad;
