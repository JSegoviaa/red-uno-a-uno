import { FC, MutableRefObject } from "react";
import { Overlay } from "react-bootstrap";
import { Solicitud } from "interfaces/SolicitudInteface";
import Loading from "../loading/Loading";
import styles from "./Header.module.css";
import Button from "../button/Button";

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
              <div className={styles.headerNotif}>
                Notificaciones
              </div>
              {solicitudes?.map((solicitud) => (
                <div
                  key={solicitud._id}
                  className={
                    solicitud.estado === "Pendiente"
                      ? styles.pendiente
                      : styles.noPendiente
                  }
                >
                  <div className={styles.notificacionContainer}>
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
                        quiere que le compartas este inmueble: {" "}
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

                    <span
                      className={`${styles.propH} pointer`}
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
                    </span>
                    {solicitud.estado === "Pendiente" ? (
                      <div className="d-flex justify-content-center mt-2">
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
                          className={`${styles.btnApprove} me-2`}
                        >
                          <i className={`${styles.iconNoti} bi bi-hand-thumbs-up`}></i>
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
                          className={`${styles.btnReject} me-2`}
                        >
                          <i className={`${styles.iconNoti} bi bi-hand-thumbs-down`}></i>
                        </button>
                      </div>
                    ) : null}
                  </div>
                </div>
              ))}

              {solicitudes.length === 0 ? null : (

                <div className="d-flex justify-content-center py-2">
                  <div
                    className={`${styles.footVer} pointer`}
                    onClick={goToSolicitudes}
                  >
                    Ver todas las solicitudes
                  </div>
                </div>
              )}
            </>
          )}
        </div>
      )}
    </Overlay>
  );
};

export default NotificacionItem;
