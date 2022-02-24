import { useContext } from "react";
import { useRouter } from "next/router";
import { Form } from "react-bootstrap";
import { InmuebleContext } from "../../../../context/inmuebles/InmuebleContext";
import Button from "../../../ui/button/Button";
import styles from "./filtros.module.css";

const FiltroPropiedades = () => {
  const { orden, setOrden } = useContext(InmuebleContext);
  const router = useRouter();

  const agregarPropiedad = () => router.push("/perfil/agregar-inmueble");

  return (
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
              value={orden}
              onChange={(e) => {
                setOrden(e.target.value);
              }}
            >
              <option value="createdAt">Recientes</option>
              <option value="titulo">A-Z</option>
              <option value="direccion">Ubicación (Zonas)</option>
            </Form.Select>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FiltroPropiedades;
