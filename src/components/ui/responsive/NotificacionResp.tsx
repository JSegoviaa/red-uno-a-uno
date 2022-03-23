import { useContext } from "react";
import { useRouter } from "next/router";
import { toast } from "react-toastify";
import { AuthContext } from "context/auth/AuthContext";
import { useSolicitudes } from "hooks/useSolicitudes";
import styles from "./ResposiveStyles.module.css";
import { useWindowWide } from "hooks/useWindowWide";
import { fetchAceptarRechazarSolicitud, hora } from "helpers";
import { production } from "credentials/credentials";
import { Solicitud } from "interfaces/SolicitudInteface";
import Loading from "../loading/Loading";

const NotificacionResp = () => {
  const { auth } = useContext(AuthContext);
  const { push } = useRouter();
  const wide = useWindowWide(991);
  const { solicitudes, setSolicitudes, cargando } = useSolicitudes(auth.uid);

  if (wide) push("/");

  const aprobarSolicitud = async (
    id: string,
    titulo: string,
    img: string,
    correo: string
  ) => {
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
      await fetch(`${production}/correos/solicitud-aprobada`, {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(body),
      });
      const solicitudAprobada: Solicitud[] = solicitudes?.map((solicitud) => {
        if (solicitud._id === id) {
          return { ...solicitud, estado: "Aprobado" };
        }
        return solicitud;
      });
      setSolicitudes(solicitudAprobada);
      //   setContador((prev) => prev - 1);
      toast.success(res.msg);
    }
  };

  const rechazarSolicitud = async (
    id: string,
    titulo: string,
    img: string,
    correo: string
  ) => {
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
      await fetch(`${production}/correos/solicitud-rechazada`, {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(body),
      });

      const solicitudRechazada: Solicitud[] = solicitudes?.map((solicitud) => {
        if (solicitud._id === id) {
          return { ...solicitud, estado: "Rechazado" };
        }
        return solicitud;
      });
      //   setContador((prev) => prev - 1);
      setSolicitudes(solicitudRechazada);

      toast.success(res.msg);
    }
  };

  return (
    <div className={`${styles.notifi}`}>
      <div className={`${styles.notifiContainer}`}>
        <div className="row g-0">
          {cargando ? (
            <Loading />
          ) : (
            <>
              {solicitudes.length === 0 ? (
                <div
                  className="text-center py-5"
                  style={{
                    color: "#7A7A7A",
                    fontWeight: "500",
                    fontSize: 30,
                  }}
                >
                  Aún no tiene notificaciones
                </div>
              ) : (
                <>
                  {solicitudes.map((solicitud) => (
                    <div key={solicitud._id} className="col-12">
                      <div className={styles.notifiContent}>
                        <table>
                          <tr>
                            {solicitud.estado === "Pendiente" ? (
                              <>
                                <td valign="top">
                                  <div className={styles.imgContainer}>
                                    <img
                                      src={solicitud.usuario.img}
                                      alt={solicitud.usuario.nombre}
                                      style={{
                                        borderRadius: "50%",
                                        width: "100%",
                                      }}
                                    />
                                  </div>
                                </td>
                                <td>
                                  <div className={styles.notifiText}>
                                    <b>
                                      {solicitud.usuario.nombre}{" "}
                                      {solicitud.usuario.apellido}
                                    </b>{" "}
                                    quiere que le compartas{" "}
                                    <b>
                                      {solicitud.titulo
                                        ? solicitud.titulo
                                        : solicitud.inmueble?.titulo}
                                    </b>
                                  </div>
                                  <div className="btns mt-3">
                                    <span
                                      onClick={() =>
                                        aprobarSolicitud(
                                          solicitud._id,
                                          solicitud.inmueble.titulo,
                                          solicitud.inmueble
                                            ? solicitud.inmueble.imgs[0]
                                            : "",
                                          solicitud.usuario.correo
                                        )
                                      }
                                      className={`${styles.aceptar} pointer`}
                                    >
                                      Aceptar
                                    </span>{" "}
                                    <span
                                      onClick={() =>
                                        rechazarSolicitud(
                                          solicitud._id,
                                          solicitud.inmueble.titulo,
                                          solicitud.inmueble
                                            ? solicitud.inmueble.imgs[0]
                                            : "",
                                          solicitud.usuario.correo
                                        )
                                      }
                                      className={`${styles.rechazar} pointer`}
                                    >
                                      Rechazar
                                    </span>
                                  </div>
                                  <div className={styles.hra}>
                                    {hora(solicitud.createdAt)}
                                  </div>
                                </td>
                              </>
                            ) : solicitud.estado === "Aprobado" ? (
                              <>
                                <td valign="top">
                                  <div className={styles.imgContainer}>
                                    <img
                                      src={solicitud.usuario.img}
                                      alt={solicitud.usuario.nombre}
                                      style={{
                                        borderRadius: "50%",
                                        width: "100%",
                                      }}
                                    />
                                  </div>
                                </td>
                                <td>
                                  <div className={styles.notifiTextAprobado}>
                                    {solicitud.usuario.nombre}{" "}
                                    {solicitud.usuario.apellido} quiere que le
                                    compartas{" "}
                                    {solicitud.titulo
                                      ? solicitud.titulo
                                      : solicitud.inmueble?.titulo}
                                  </div>
                                  <div className="btns mt-3">
                                    <span
                                      className={`${styles.aceptar} pointer`}
                                    >
                                      Aceptado
                                    </span>{" "}
                                  </div>
                                  <div className={styles.hra}>
                                    {hora(solicitud.createdAt)}
                                  </div>
                                </td>
                              </>
                            ) : solicitud.estado === "Rechazado" ? (
                              <>
                                <td valign="top">
                                  <div className={styles.imgContainer}>
                                    <img
                                      src={solicitud.usuario.img}
                                      alt={solicitud.usuario.nombre}
                                      style={{
                                        borderRadius: "50%",
                                        width: "100%",
                                      }}
                                    />
                                  </div>
                                </td>
                                <td>
                                  <div className={styles.notifiTextAprobado}>
                                    {solicitud.usuario.nombre}{" "}
                                    {solicitud.usuario.apellido} quiere que le
                                    compartas{" "}
                                    {solicitud.titulo
                                      ? solicitud.titulo
                                      : solicitud.inmueble?.titulo}
                                  </div>
                                  <div className="btns mt-3">
                                    <span
                                      className={`${styles.rechazar} pointer`}
                                    >
                                      Rechazado
                                    </span>{" "}
                                  </div>
                                  <div className={styles.hra}>
                                    {hora(solicitud.createdAt)}
                                  </div>
                                </td>
                              </>
                            ) : (
                              "Error. No debe llegar a esta parte"
                            )}
                          </tr>
                        </table>
                      </div>
                    </div>
                  ))}
                </>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default NotificacionResp;
