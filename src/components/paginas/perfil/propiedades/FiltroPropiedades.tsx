import { useRouter } from "next/router";
import { Form } from "react-bootstrap";
import Button from "../../../ui/button/Button";
import styles from "./filtros.module.css";

const FiltroPropiedades = () => {
  const router = useRouter();

  const agregarPropiedad = () => router.push("/perfil/agregar-inmueble");

  return (
    <div>
      <section>
        <div className="container my-4">
          <div className="row d-flex justify-content-between">
            <div className="col-6">
              <Button
                titulo="Añadir propiedad"
                btn="Green"
                onClick={agregarPropiedad}
              />
            </div>
            <div className="col-6">
              <Form.Select
                aria-label="Default select example"
                className={styles.customSelect}
              >
                <option>Ordenar por:</option>
                <option value="1">Recientes</option>
                <option value="2">A-Z</option>
                <option value="3">Propietarios</option>
                <option value="4">Ubicación (Zonas)</option>
                <option value="5">Compartidos</option>
              </Form.Select>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FiltroPropiedades;
