import { ReactText, useContext, useState } from "react";
import { useRouter } from "next/router";
import { AuthContext } from "context/auth/AuthContext";
import { MapContext } from "context/map/MapContext";
import { InmueblesUsuario } from "interfaces/CrearInmuebleInterface";
import { formatPrice } from "helpers";
import CopyToClipboard from "react-copy-to-clipboard";
import styles from "./ResposiveStyles.module.css";
import { useListaInmuebleCoords } from "hooks/useInmuebles";
import Loading from "../loading/Loading";

interface Props {
  inmueble: InmueblesUsuario;
  compartir: () => ReactText;
  agregarFavorito: (inmuebleId: string, propietario: any) => Promise<void>;
  handleProperty: (id: string, slug: string) => Promise<void>;
}


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
          <div onClick={mostrarListaF} className={`${styles.SlideLine} pointer`}></div>
          <div className="row g-0">
            <div className="col-12">
              {!mostrarLista ? (
                <div className={`${styles.LRtitle1} mb-3`}>
                  Lista de Inmuebles
                </div>
              ) : (
                <div className={`${styles.LRtitle2}`}>
                  {listaInmuebles?.inmuebles.length === 1
                    ? `Se encontró ${listaInmuebles.total} resultado`
                    : `Se encontraron ${listaInmuebles?.total} resultados`}
                </div>
              )}
            </div>
          </div>
          {/* empieza lista */}
          <div className={styles.bodyList}>
            <div className="row">
              {cargando ? (
                <Loading />
              ) : (
                <>
                  {listaInmuebles?.inmuebles.map((inmueble) => (
                    <div className="col-sm-12 col-md-12 col-lg-12 px-4 py-2">
                      <div className={`${styles.cardPropBody} card mb-3 pointer`}>
                        <div className={styles.topIcons1}>
                          <CopyToClipboard
                            // onCopy={compartir}
                            text={`red1a1.com/app/propiedades/${inmueble.slug}`}
                          >
                            <button type="button" className={`${styles.iconShare} btn me-1`} />
                          </CopyToClipboard>
                        </div>
                        <div className={styles.topIcons2}>
                          {auth.uid ? (
                            <button
                              // onClick={() => agregarFavorito(inmueble._id, inmueble.usuario)}
                              type="button"
                              className={`${styles.iconFav} btn me-0`}
                            />
                          ) : null}
                        </div>

                        <div className="row" /* onClick={() => handleProperty(inmueble._id, inmueble.slug)}*/ >
                          <div className="col-sm-12 col-md-4 col-lg-4 col-xl-4 col-12 p-0">
                            <div className={styles.imgcontainer}>
                              {inmueble.imgs.length > 0 ? (
                                <img
                                  className={styles.cardImg}
                                  src={inmueble.imgs.length > 0 ? inmueble.imgs[0] : ""}
                                  alt={inmueble.titulo}
                                />
                              ) : (
                                <div className={styles.noImage}>
                                  <div className={styles.textNoImage}>
                                    Aún no hay <br /> imagenes <br /> para mostrar {":("}
                                  </div>
                                </div>
                              )}
                            </div>
                          </div>
                          <div className="col-sm-12 col-md-8 col-lg-8 col-xl-8 col-12">
                            <div className={styles.cardContenido}>
                              <div className={styles.cardTitle}>{inmueble.titulo}</div>
                              <div className={styles.cardDescription}>
                                {inmueble.descripcion
                                  ? inmueble.descripcion
                                  : "Sin descripción"}
                              </div>
                              <div className="row">
                                <div className="col-sm-4 col-md-5 col-4 text-center p-0">
                                  <span className={styles.tagTipoProp}>
                                    {inmueble.tipoPropiedad.nombre}
                                  </span>
                                </div>
                                <div className="col-sm-3 col-md-2 col-lg-2 col-3 text-center p-0">
                                  <span className={styles.tagTipo}>
                                    {inmueble.categoria.nombre}
                                  </span>
                                </div>
                                <div className="col-sm-5 col-md-5 col-5 text-end ps-0">
                                  <div className={styles.cardPrecio}>
                                    {formatPrice(inmueble.precio)}
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
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
