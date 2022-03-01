import { Dispatch, MutableRefObject, SetStateAction, useState } from "react";
import { useRouter } from "next/router";
import { Overlay } from "react-bootstrap";
import Loading from "../loading/Loading";
import styles from "./Header.module.css";
import { Solicitud } from "interfaces/SolicitudInteface";

interface Props {
  notificaciones: boolean;
  setNotificaciones: Dispatch<SetStateAction<boolean>>;
  target: MutableRefObject<null>;
  cargando: boolean;
  solicitudes: Solicitud[];
}

const Notificaciones = (props: Props) => {
  const { notificaciones, setNotificaciones, target, cargando, solicitudes } =
    props;
  const [aprobadoColor, setAprobadoColor] = useState(false);
  const router = useRouter();
  const mostrarNotificaciones = () => setNotificaciones(!notificaciones);
  const goToProperty = (slug: string) => router.push(`propiedades/${slug}`);

  const goToSolicitudes = () => {
    router.push("/perfil/solicitudes");
    setNotificaciones(false);
  };

  const aprobarSolicitud = () => {
    setAprobadoColor(true);
  };

  return (
    <>
      <div style={{ position: "relative" }}>
        <i
          onClick={mostrarNotificaciones}
          style={{ fontSize: 30, color: "#7149BC", marginTop: 5 }}
          className="bi bi-bell pointer px-2"
        />
        {solicitudes.length > 0 ? (
          <span
            style={{ position: "absolute", top: 10, right: -2 }}
            className="translate-middle p-2 bg-danger border border-light rounded-circle"
          />
        ) : null}
      </div>
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
                      backgroundColor: aprobadoColor ? "#fff" : "#EDF3F9",
                    }}
                  >
                    <div>
                      <b>
                        {solicitud.usuario.nombre} {solicitud.usuario.apellido}{" "}
                      </b>
                      quiere que le compartas este inmueble: <br />
                      <b
                        className="pointer"
                        onClick={() => goToProperty(solicitud.inmueble.slug)}
                      >
                        {solicitud.inmueble.titulo}
                      </b>
                      <br />
                      {!aprobadoColor ? (
                        <div className="d-flex justify-content-center">
                          <button
                            onClick={aprobarSolicitud}
                            className="btn btn-primary mx-2"
                          >
                            Aprobar
                          </button>
                          <button
                            onClick={aprobarSolicitud}
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
                <span className="pointer" onClick={goToSolicitudes}>
                  Ver todas las solicitudes
                </span>
              </>
            )}
          </div>
        )}
      </Overlay>
    </>
  );
};

export default Notificaciones;
