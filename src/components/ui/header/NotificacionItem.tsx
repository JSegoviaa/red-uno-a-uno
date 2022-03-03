import { FC, MutableRefObject } from "react";
import { Overlay } from "react-bootstrap";
import { Solicitud } from "interfaces/SolicitudInteface";
import Loading from "../loading/Loading";
import styles from "./Header.module.css";

interface Props {
  target: MutableRefObject<null>;
  cargando: boolean;
  solicitudes: Solicitud[];
  notificaciones: boolean;
  goToProperty: (slug: string) => Promise<boolean>;
  aprobarSolicitud: (
    id: string,
    titulo: string,
    img: string,
    correo: string
  ) => Promise<void>;
  rechazarSolicitud: (
    id: string,
    titulo: string,
    img: string,
    correo: string
  ) => Promise<void>;
  goToSolicitudes: () => void;
}

const NotificacionItem: FC<Props> = (props) => {
  const {
    target,
    cargando,
    solicitudes,
    notificaciones,
    goToProperty,
    aprobarSolicitud,
    rechazarSolicitud,
    goToSolicitudes,
  } = props;

  return (
    <Overlay target={target.current} show={notificaciones} placement="right">
      {({ placement, arrowProps, show: _show, popper, ...props }) => (
        <div
          className={styles.notificaciones}
          {...props}
          style={{
            ...props.style,
          }}
        >
          {cargando ? (
            <Loading />
          ) : (
            <>
              {solicitudes?.map((solicitud) => (
                <div
                  key={solicitud._id}
                  style={{
                    backgroundColor:
                      solicitud.estado === "Pendiente" ? "#EDF3F9" : "#FFF",
                  }}
                >
                  <div>
                    {solicitud.estado === "Pendiente" ? (
                      <>
                        <b>
                          {solicitud.nombre
                            ? solicitud.nombre
                            : solicitud.usuario.nombre}{" "}
                          {solicitud.apellido
                            ? solicitud.apellido
                            : solicitud.usuario.apellido}{" "}
                        </b>
                        quiere que le compartas este inmueble: <br />
                      </>
                    ) : solicitud.estado === "Aprobado" ? (
                      <span>
                        Haz aceptado la solicitud de{" "}
                        <b>
                          {solicitud.nombre
                            ? solicitud.nombre
                            : solicitud.usuario.nombre}{" "}
                          {solicitud.apellido
                            ? solicitud.apellido
                            : solicitud.usuario.apellido}
                          {". "}
                        </b>
                        Ahora pueda compartir{" "}
                      </span>
                    ) : solicitud.estado === "Rechazado" ? (
                      <span>
                        Haz rechazado la solicitud de{" "}
                        <b>
                          {solicitud.nombre
                            ? solicitud.nombre
                            : solicitud.usuario.nombre}{" "}
                          {solicitud.apellido
                            ? solicitud.apellido
                            : solicitud.usuario.apellido}
                          {". "}
                        </b>
                        Inmueble rechazado:{" "}
                      </span>
                    ) : (
                      "Error. Jamás debe de llegar a esta punto"
                    )}

                    <b
                      className="pointer"
                      onClick={() =>
                        goToProperty(
                          solicitud.slug
                            ? solicitud.slug
                            : solicitud.inmueble.slug
                        )
                      }
                    >
                      {solicitud.titulo
                        ? solicitud.titulo
                        : solicitud.inmueble.titulo}
                    </b>
                    <br />
                    {solicitud.estado === "Pendiente" ? (
                      <div className="d-flex justify-content-center">
                        <button
                          onClick={() =>
                            aprobarSolicitud(
                              solicitud._id,
                              solicitud.inmueble.titulo,
                              solicitud.inmueble.imgs[0]
                                ? solicitud.inmueble.imgs[0]
                                : "",
                              solicitud.usuario.correo
                            )
                          }
                          className="btn btn-primary mx-2"
                        >
                          Aprobar
                        </button>
                        <button
                          onClick={() =>
                            rechazarSolicitud(
                              solicitud._id,
                              solicitud.inmueble.titulo,
                              solicitud.inmueble.imgs[0],
                              solicitud.usuario.correo
                            )
                          }
                          className="btn btn-danger mx-2"
                        >
                          Rechazar
                        </button>
                      </div>
                    ) : null}
                    <hr />
                  </div>
                </div>
              ))}

              {solicitudes.length === 0 ? null : (
                <span className="pointer" onClick={goToSolicitudes}>
                  Ver todas las solicitudes
                </span>
              )}
            </>
          )}
        </div>
      )}
    </Overlay>
  );
};

export default NotificacionItem;
