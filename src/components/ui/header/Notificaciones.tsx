import {
  Dispatch,
  MutableRefObject,
  RefObject,
  SetStateAction,
  useContext,
  useEffect,
} from "react";
import { useRouter } from "next/router";
import { toast } from "react-toastify";
import { Solicitud } from "interfaces/SolicitudInteface";
import { fetchAceptarRechazarSolicitud } from "helpers/fetch";
import { AuthContext } from "context/auth/AuthContext";
import NotificacionItem from "./NotificacionItem";
import { InmuebleContext } from "context/inmuebles/InmuebleContext";
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
  setSolicitudes: Dispatch<SetStateAction<Solicitud[]>>;
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
    setSolicitudes,
  } = props;
  const { auth } = useContext(AuthContext);
  const router = useRouter();
  const goToProperty = (slug: string) => router.push(`propiedades/${slug}`);

  const mostrarNotificaciones = () => {
    setNotificaciones(!notificaciones);
  };

  const goToSolicitudes = () => {
    router.push("/perfil/propiedades-compartidas");
    setNotificaciones(false);
  };

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
      setContador((prev) => prev - 1);
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
      setContador((prev) => prev - 1);
      setSolicitudes(solicitudRechazada);

      toast.success(res.msg);
    }
  };

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
      <NotificacionItem
        target={target}
        cargando={cargando}
        solicitudes={solicitudes}
        notificaciones={notificaciones}
        goToProperty={goToProperty}
        aprobarSolicitud={aprobarSolicitud}
        rechazarSolicitud={rechazarSolicitud}
        goToSolicitudes={goToSolicitudes}
      />
    </>
  );
};

export default Notificaciones;
