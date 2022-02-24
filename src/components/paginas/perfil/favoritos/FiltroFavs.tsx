import { InmuebleContext } from "context/inmuebles/InmuebleContext";
import { useContext } from "react";
import { Form } from "react-bootstrap";
import { AuthContext } from "../../../../context/auth/AuthContext";
// import { InmuebleContext } from "../../../../context/inmuebles/InmuebleContext";
import { useFavoritos } from "../../../../hooks/useFavoritos";
import Loading from "../../../ui/loading/Loading";
import styles from "./FiltrosFavs.module.css";

const FiltroFavs = () => {
  const { auth } = useContext(AuthContext);
  const { setDueño, dueño } = useContext(InmuebleContext);
  // const { solicitud, setSolicitud } = useContext(InmuebleContext);
  const { favoritos, cargando } = useFavoritos(auth.uid);
  const uniqueValues = new Set();

  return (
    <>
      {favoritos.length > 0 ? (
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
                      value={dueño}
                      onChange={(e) => setDueño(e.target.value)}
                    >
                      <option value="">Agentes:</option>

                      {favoritos
                        .filter((nombre) => {
                          const isPresent = uniqueValues.has(
                            nombre.inmueble.usuario.nombre +
                              nombre.inmueble.usuario.apellido
                          );
                          uniqueValues.add(
                            nombre.inmueble.usuario.nombre +
                              nombre.inmueble.usuario.apellido
                          );
                          return !isPresent;
                        })
                        .map((favorito, i) => (
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
              {/* <div className="col-sm-6 col-md-6 col-lg-4 col-xl-4">
              <Form.Select
                aria-label="Default select example"
                className={`${styles.customSelect} mb-4`}
                value={solicitud}
                onChange={(e) => {
                  setSolicitud(e.target.value);
                }}
              >
                <option value="Pendiente">En Solicitud</option>
                <option value="Aprobado">Aprobados</option>
                <option value="Rechazado">Rechazados</option>
              </Form.Select>
            </div> */}
            </div>
          </div>
        </section>
      ) : null}
    </>
  );
};

export default FiltroFavs;
