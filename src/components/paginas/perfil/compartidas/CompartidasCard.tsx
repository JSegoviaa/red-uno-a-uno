import { useContext, useState } from "react";
import { useRouter } from "next/router";
import { Col, Container, Row } from "react-bootstrap";
import { toast } from "react-toastify";
import { AuthContext } from "context/auth/AuthContext";
import { useCompartidas } from "hooks/useCompartidas";
import styles from "./Compartidas.module.css";
import { InmuebleContext } from "context/inmuebles/InmuebleContext";
import Loading from "components/ui/loading/Loading";
import { fetchAceptarRechazarSolicitud } from "helpers/fetch";

const CompartidasCard = () => {
  const { auth } = useContext(AuthContext);
  const { estado, misCompUser } = useContext(InmuebleContext);
  const [totall, setTotall] = useState(20);
  const router = useRouter();
  const { total, cargando, compartidas, setCompartidas } = useCompartidas(
    misCompUser,
    estado,
    totall
  );
  const goToProperty = (slug: string) => router.push(`/propiedades/${slug}`);

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
      // await fetch(`${production}/correos/solicitud-aprobada`, {
      //   method: "POST",
      //   headers: {
      //     "Content-type": "application/json",
      //   },
      //   body: JSON.stringify(body),
      // });
      const solicitudAprobada: any = compartidas?.map((solicitud) => {
        if (solicitud._id === id) {
          return { ...solicitud, estado: "Aprobado" };
        }
        return solicitud;
      });
      setCompartidas(solicitudAprobada);
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
      // await fetch(`${production}/correos/solicitud-rechazada`, {
      //   method: "POST",
      //   headers: {
      //     "Content-type": "application/json",
      //   },
      //   body: JSON.stringify(body),
      // });

      const solicitudRechazada: any = compartidas?.map((solicitud) => {
        if (solicitud._id === id) {
          return { ...solicitud, estado: "Rechazado" };
        }
        return solicitud;
      });
      setCompartidas(solicitudRechazada);
      toast.success(res.msg);
    }
  };

  return (
    <Container>
      {compartidas?.length === 0 ? (
        <div className={`${styles.titulo} text-center`}>
          No tienes propiedades compartidas
        </div>
      ) : (
        <Row>
          {cargando ? (
            <Loading />
          ) : (
            <>
              {compartidas?.map((compartida) => (
                <Col
                  key={compartida._id}
                  xs={6}
                  md={4}
                  lg={4}
                  xl={3}
                  className="py-3 text-center"
                >
                  <div className={`${styles.customCard} card`}>
                    {compartida.estado === "Aprobado" ? (
                      <img
                        className={styles.iconoF}
                        src="/images/icons/properties-icons/aprobado.png"
                        alt=""
                      />
                    ) : null}

                    {compartida.estado === "Pendiente" ? (
                      <img
                        className={styles.iconoF}
                        src="/images/icons/properties-icons/pendiente.png"
                        alt=""
                      />
                    ) : null}
                    {compartida.estado === "Rechazado" ? (
                      <img
                        className={styles.iconoF}
                        src="/images/icons/properties-icons/rechazado.png"
                        alt=""
                      />
                    ) : null}

                    <div>
                      <div
                        onClick={() => goToProperty(compartida.inmueble.slug)}
                        className={`${styles.imgContainer} pointer`}
                      >
                        <div
                          className={styles.cardImg}
                          style={{
                            backgroundImage: `url('${compartida.inmueble.imgs[0]}')`,
                          }}
                        />
                      </div>
                      <div className={styles.tituloContainer}>
                        <div className={`${styles.proContent} my-2`}>
                          {compartida.inmueble.titulo}
                        </div>
                      </div>
                      <div>
                        {auth.uid === compartida.propietario._id ? (
                          <>
                            {compartida.estado === "Aprobado" ? (
                              <span>
                                Has compartido este inmueble con{" "}
                                {compartida.usuario.nombre}{" "}
                                {compartida.usuario.apellido}
                              </span>
                            ) : compartida.estado === "Rechazado" ? (
                              <span>
                                Has rechazado la solicitud de{" "}
                                {compartida.usuario.nombre}{" "}
                                {compartida.usuario.apellido}
                              </span>
                            ) : compartida.estado === "Pendiente" ? (
                              <>
                                <span>
                                  {compartida.usuario.nombre}{" "}
                                  {compartida.usuario.apellido} quiere que le
                                  compartas el inmueble :{" "}
                                  {compartida.inmueble.titulo}
                                </span>
                                <div className="d-flex justify-content-center">
                                  <button
                                    onClick={() =>
                                      aprobarSolicitud(
                                        compartida._id,
                                        compartida.inmueble.titulo,
                                        compartida.inmueble.imgs[0]
                                          ? compartida.inmueble.imgs[0]
                                          : "",
                                        compartida.usuario.correo
                                      )
                                    }
                                    className="btn btn-primary mx-2"
                                  >
                                    Aprobar
                                  </button>
                                  <button
                                    onClick={() =>
                                      rechazarSolicitud(
                                        compartida._id,
                                        compartida.inmueble.titulo,
                                        compartida.inmueble.imgs[0],
                                        compartida.usuario.correo
                                      )
                                    }
                                    className="btn btn-danger mx-2"
                                  >
                                    Rechazar
                                  </button>
                                </div>
                              </>
                            ) : (
                              "Error. Nunca debe de llegar aquí"
                            )}
                          </>
                        ) : (
                          <span>
                            {compartida.estado === "Aprobado" ? (
                              <>
                                {compartida.propietario.nombre}{" "}
                                {compartida.propietario.apellido} ha compartido
                                esta propiedad contigo.{" "}
                              </>
                            ) : compartida.estado === "Rechazado" ? (
                              <>
                                {compartida.propietario.nombre}{" "}
                                {compartida.propietario.apellido} ha rechazado
                                tu solicitud.{" "}
                              </>
                            ) : compartida.estado === "Pendiente" ? (
                              <>
                                {compartida.propietario.nombre}{" "}
                                {compartida.propietario.apellido} tiene
                                pendiente tu solicitud{" "}
                              </>
                            ) : (
                              "Error. Nunca debe llegar aquí"
                            )}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                </Col>
              ))}
            </>
          )}
        </Row>
      )}
    </Container>
  );
};

export default CompartidasCard;
