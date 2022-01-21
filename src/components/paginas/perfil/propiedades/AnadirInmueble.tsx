import Titulo from "../../../ui/titulo/Titulo";
import AnadirImagenes from "./AnadirImagenes";
import Formulario from "./Formulario";

const AnadirInmueble = () => {
  return (
    <section>
      <div className="container">
        <Titulo titulo="Agrega un inmueble" />
        <br />
        <div className="row d-flex justify-content-center">
          <Formulario />
          <AnadirImagenes />
        </div>
      </div>
    </section>
  );
};

export default AnadirInmueble;
