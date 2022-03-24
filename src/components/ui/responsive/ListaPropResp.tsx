import { useContext, useState } from "react";
import { useRouter } from "next/router";
import { AuthContext } from "context/auth/AuthContext";
import { MapContext } from "context/map/MapContext";
import styles from "./ResposiveStyles.module.css";
import { useListaInmuebleCoords } from "hooks/useInmuebles";
import Loading from "../loading/Loading";

const ListaPropResp = () => {
  const { auth } = useContext(AuthContext);
  const {
    coordenadas,
    southEast,
    northWest,
    southWest,
    northEast,
    categoria,
    tipoPropiedad,
  } = useContext(MapContext);
  const [mostrarLista, setMostrarLista] = useState(false);
  const router = useRouter();
  const [limite, setLimite] = useState(10);
  const { listaInmuebles, cargando } = useListaInmuebleCoords(
    limite,
    southEast,
    northWest,
    southWest,
    northEast,
    coordenadas,
    categoria,
    tipoPropiedad
  );

  const mostrarListaF = () => setMostrarLista(!mostrarLista);

  const cargarMas = () => {
    if (limite < listaInmuebles!.total) {
      setLimite(limite + 10);
    }
  };

  return (
    <>
      {listaInmuebles?.inmuebles.length === 0 ? null : (
        <div
          className={`
      ${mostrarLista ? styles.listaRespActive : styles.listaRespInactive}
      ${auth.logged ? styles.heightLogin : styles.heightLogOut}
      `}
        >
          <div
            onClick={mostrarListaF}
            className={`${styles.SlideLine} pointer`}
          ></div>
          <div className="row g-0">
            <div className="col-12">
              {!mostrarLista ? (
                <div className={`${styles.LRtitle1} mb-3`}>
                  Lista de Inmuebles
                </div>
              ) : (
                <div className={`${styles.LRtitle2}`}>
                  {listaInmuebles?.inmuebles.length === 1
                    ? `Se encontró ${listaInmuebles.inmuebles.length} resultado`
                    : `Se encontraron {listaInmuebles?.inmuebles.length} resultados`}
                </div>
              )}
            </div>
          </div>
          {/* empieza lista */}
          <div className={styles.ListContainer}>
            <div className="row">
              {cargando ? (
                <Loading />
              ) : (
                <>
                  {listaInmuebles?.inmuebles.map((inmueble) => (
                    <div key={inmueble._id} className="col-12 mb-3">
                      <div className={`${styles.cardLista} p-4`}>
                        <br />
                        <br />
                        <br />
                        <br />
                        asdasdads
                        <br />
                        <br />
                        <br />
                        <br />
                      </div>
                    </div>
                  ))}
                  {limite > listaInmuebles!.total ? null : (
                    <>
                      {cargando ? (
                        <Loading />
                      ) : (
                        <div
                          className="text-center pointer"
                          onClick={cargarMas}
                        >
                          Cargar más
                        </div>
                      )}
                    </>
                  )}
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ListaPropResp;
