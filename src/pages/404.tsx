import { useRouter } from "next/router";
import SEO from "../components/seo/SEO";

const NotFound = () => {
  const { asPath } = useRouter();
  return (
    <>
      <SEO titulo="Página no encontrada" url={asPath} />
      <div className="container">
        <div className="row d-flex justify-content-center">
          <div className="col-12 text-center">
            <img
              className="img-center"
              src="/images/content/404.png"
              alt="mantenimiento"
            />
          </div>
          <div className="col-12 titulo my-2">¡Oops! Error 404</div>
          <div className="col-12 subtitulo">
            Al parecer el lugar al que quieres acceder <br /> no existe <br /> :
            {"("}
            <br />
            <br />
          </div>
        </div>
      </div>
    </>
  );
};

export default NotFound;
