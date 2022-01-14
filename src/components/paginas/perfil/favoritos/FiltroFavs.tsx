import { useContext } from "react";
import { Form } from "react-bootstrap";
import { AuthContext } from "../../../../context/auth/AuthContext";
import { useFavoritos } from "../../../../hooks/useFavoritos";
import Loading from "../../../ui/loading/Loading";
import styles from "./FiltrosFavs.module.css";

const FiltroFavs = () => {
  const { auth } = useContext(AuthContext);
  const { favoritos, cargando } = useFavoritos(auth.uid);

  return (
    <div>
      <section>
        <div className="container mt-4">
          <div className="row d-flex justify-content-end">
            <div className="col-sm-6 col-md-6 col-lg-4 col-xl-4">
              {cargando ? (
                <Loading />
              ) : (
                <>
                  <Form.Select
                    aria-label="Default select example"
                    className={`${styles.customSelect} mb-4`}
                  >
                    <option>Agentes:</option>

                    {favoritos.map((favorito, i) => (
                      <option
                        key={
                          favorito.inmueble
                            ? favorito.inmueble.usuario._id + i
                            : i
                        }
                        value={
                          favorito.inmueble
                            ? favorito.inmueble.usuario._id
                            : undefined
                        }
                      >
                        {favorito.inmueble
                          ? favorito.inmueble.usuario.nombre
                          : null}{" "}
                        {favorito.inmueble
                          ? favorito.inmueble.usuario.apellido
                          : null}
                      </option>
                    ))}
                  </Form.Select>
                </>
              )}
            </div>
            <div className="col-sm-6 col-md-6 col-lg-4 col-xl-4">
              <Form.Select
                aria-label="Default select example"
                className={`${styles.customSelect} mb-4`}
              >
                <option>Solicitudes:</option>
                <option value="1">En Solicitud</option>
                <option value="2">Aprobados</option>
                <option value="3">Rechazados</option>
              </Form.Select>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FiltroFavs;
