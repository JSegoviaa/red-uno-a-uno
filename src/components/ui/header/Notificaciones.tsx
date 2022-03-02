import {
  Dispatch,
  MutableRefObject,
  RefObject,
  SetStateAction,
  useContext,
  useState,
} from "react";
import { useRouter } from "next/router";
import { Overlay } from "react-bootstrap";
import { toast } from "react-toastify";
import Loading from "../loading/Loading";
import styles from "./Header.module.css";
import { Solicitud } from "interfaces/SolicitudInteface";
import { fetchAceptarRechazarSolicitud } from "helpers/fetch";
import { AuthContext } from "context/auth/AuthContext";
import { production } from "credentials/credentials";

interface Props {
  notificaciones: boolean;
  setNotificaciones: Dispatch<SetStateAction<boolean>>;
  target: MutableRefObject<null>;
  cargando: boolean;
  solicitudes: Solicitud[];
  contador: number;
  setContador: Dispatch<SetStateAction<number>>;
  notificacionRef: RefObject<HTMLDivElement>;
}

const Notificaciones = (props: Props) => {
  const {
    notificaciones,
    setNotificaciones,
    target,
    cargando,
    solicitudes,
    contador,
    setContador,
    notificacionRef,
  } = props;
  const { auth } = useContext(AuthContext);
  const [aprobadoColor, setAprobadoColor] = useState(false);
  const router = useRouter();
  const goToProperty = (slug: string) => router.push(`propiedades/${slug}`);

  const mostrarNotificaciones = () => {
    setNotificaciones(!notificaciones);
    setContador(0);
  };

  const goToSolicitudes = () => {
    router.push("/perfil/solicitudes");
    setNotificaciones(false);
  };

  const aprobarSolicitud = async (
    id: string,
    titulo: string,
    img: string,
    correo: string
  ) => {
    setAprobadoColor(true);

    const aprobacion = {
      estado: "Aprobado",
    };

    const res = await fetchAceptarRechazarSolicitud(
      `solicitud/aceptar/${id}`,
      aprobacion
    );

    const body = {
      nombre: auth.nombre,
      apellido: auth.apellido,
      titulo,
      img,
      correo,
    };

    if (res.ok) {
      // await fetch(`${production}/correos/solicitud-aprobada`, {
      //   method: "POST",
      //   headers: {
      //     "Content-type": "application/json",
      //   },
      //   body: JSON.stringify(body),
      // });
      toast.success(res.msg);
    }
  };

  const rechazarSolicitud = async (
    id: string,
    titulo: string,
    img: string,
    correo: string
  ) => {
    setAprobadoColor(true);

    const rechazo = {
      estado: "Rechazado",
    };

    const body = {
      nombre: auth.nombre,
      apellido: auth.apellido,
      titulo,
      img,
      correo,
    };

    const res = await fetchAceptarRechazarSolicitud(
      `solicitud/rechazar/${id}`,
      rechazo
    );

    if (res.ok) {
      // await fetch(`${production}/correos/solicitud-rechazada`, {
      //   method: "POST",
      //   headers: {
      //     "Content-type": "application/json",
      //   },
      //   body: JSON.stringify(body),
      // });
      toast.success(res.msg);
    }
  };

  console.log(solicitudes);
  return (
    <>
      <div ref={notificacionRef} style={{ position: "relative" }}>
        <i
          onClick={mostrarNotificaciones}
          style={{ fontSize: 30, color: "#7149BC", marginTop: 5 }}
          className="bi bi-bell pointer px-2"
        />
        {contador > 0 ? (
          <span
            style={{
              position: "absolute",
              top: 10,
              right: -8,
              color: "#fff",
              fontSize: 8,
            }}
            className="px-2 py-1 translate-middle p-2 bg-danger border border-light rounded-circle"
          >
            {contador}
          </span>
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
                        {solicitud.nombre
                          ? solicitud.nombre
                          : solicitud.usuario.nombre}{" "}
                        {solicitud.apellido
                          ? solicitud.apellido
                          : solicitud.usuario.apellido}{" "}
                      </b>
                      quiere que le compartas este inmueble: <br />
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
                      {!aprobadoColor ? (
                        <div className="d-flex justify-content-center">
                          <button
                            onClick={() =>
                              aprobarSolicitud(
                                solicitud._id,
                                solicitud.inmueble.titulo,
                                solicitud.inmueble.imgs[0],
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

                {solicitudes.length === 0 ? (
                  "Sin solicitudes"
                ) : (
                  <span className="pointer" onClick={goToSolicitudes}>
                    Ver todas las solicitudes
                  </span>
                )}
              </>
            )}
          </div>
        )}
      </Overlay>
    </>
  );
};

export default Notificaciones;
