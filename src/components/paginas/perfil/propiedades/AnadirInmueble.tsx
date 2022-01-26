import { useContext, useState } from "react";
import { useRouter } from "next/router";
import Titulo from "../../../ui/titulo/Titulo";
import AnadirImagenes from "./AnadirImagenes";
import Formulario from "./Formulario";
import styles from "./FormDesign.module.css";
import FormStepOne from "./FormStepOne";
import { Form } from "react-bootstrap";
import { useForm } from "../../../../hooks/useForm";
import { MapContext } from "../../../../context/map/MapContext";

const AnadirInmueble = () => {
  const router = useRouter();
  const { ubicacion, direccion } = useContext(MapContext);
  const [steps, setSteps] = useState(1);
  const [tipoPropiedad, setTipoPropiedad] = useState(
    "61e99edd0d3bd9163e4a4b3a"
  );
  const [categoria, setCategoria] = useState("61e99f0e0d3bd9163e4a4b42");
  const { formulario, handleChange } = useForm({
    titulo: "",
    precio: 0,
    comisiones: 0,
  });
  const { titulo, precio, comisiones } = formulario;

  const handleNextStep = () => {
    setSteps(steps + 1);
    router.push("/perfil/agregar-inmueble");
  };
  const handlePrevStep = () => {
    setSteps(steps - 1);
    router.push("/perfil/agregar-inmueble");
  };

  return (
    <section>
      <div className="container">
        <Titulo titulo="Agrega un inmueble" />
        <br />
        <div className="row d-flex justify-content-center">
          <div className="col-sm-12 col-md-12 col-lg-8">
            <div className="col-12 my-4">
              <div
                className={
                  steps === 1
                    ? styles.stepLineActive1
                    : steps === 2
                    ? styles.stepLineActive2
                    : steps === 3
                    ? styles.stepLineActive3
                    : ""
                }
              />
              <div className={styles.stepLineInactive} />
              <div className="row d-flex justify-content-between text-center">
                <div className="col-4">
                  <span className={styles.step1}>1</span>
                </div>
                <div className="col-4">
                  <span
                    className={
                      steps === 2
                        ? styles.step1
                        : steps === 3
                        ? styles.step1
                        : styles.step2
                    }
                  >
                    2
                  </span>
                </div>
                <div className="col-4">
                  <span className={steps === 3 ? styles.step1 : styles.step3}>
                    3
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="col-sm-12 col-md-12 col-lg-8">
            <Form>
              {steps === 1 ? (
                <FormStepOne
                  handleNextStep={handleNextStep}
                  handleChange={handleChange}
                  titulo={titulo}
                  tipoPropiedad={tipoPropiedad}
                  setTipoPropiedad={setTipoPropiedad}
                  precio={precio}
                  comisiones={comisiones}
                  categoria={categoria}
                  setCategoria={setCategoria}
                />
              ) : null}

              {steps === 2 ? (
                <Formulario
                  handlePrevStep={handlePrevStep}
                  handleNextStep={handleNextStep}
                />
              ) : null}
            </Form>
          </div>
          <div className="col-sm-12 col-md-12 col-lg-8">
            {steps === 3 ? <AnadirImagenes /> : null}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AnadirInmueble;
