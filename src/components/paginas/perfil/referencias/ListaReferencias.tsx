import { useContext, useRef, useState } from "react";
import { Container, Pagination } from "react-bootstrap";
import { AuthContext } from "context/auth/AuthContext";
import { useReferenciasUsuario } from "hooks/useReferencias";
import Loading from "components/ui/loading/Loading";
import { formatPrice } from "helpers/formatPrice";
import styles from "./Referencias.module.css";
import { subirComprobanteFetch } from "../../../../helpers/fetch";
import { toast } from "react-toastify";

const ListaReferencias = () => {
  const { auth } = useContext(AuthContext);
  const refAdjuntar = useRef<HTMLInputElement>(null);
  const [desde, setDesde] = useState(0);
  const [subiendo, setSubiendo] = useState(false);
  const [comprobante, setcomprobante] = useState("");
  const [seleccionado, setSeleccionado] = useState("");
  const { cargando, referencias, total, setReferencias } =
    useReferenciasUsuario(auth.uid, desde);

  const handlePrevPage = () => {
    if (desde === 0) {
      return;
    } else {
      setDesde(desde - 15);
    }
  };

  const handleNextPage = () => {
    if (desde < total - 15) {
      setDesde(desde + 15);
    } else {
      return;
    }
  };

  const handleAdjuntar = (id: string) => {
    refAdjuntar.current?.click();
    setSeleccionado(id);
  };

  const subirComprobante = async (uid: string, rid: string) => {
    setSubiendo(true);

    const formData = new FormData();
    formData.append("comprobante", comprobante);

    const res = await subirComprobanteFetch(
      `subidas/comprobante/${uid}/${rid}`,
      formData
    );

    if (res.ok) {
      toast.success(res.msg);
      const refAprobada = referencias?.map((ref) => {
        if (ref._id === rid) {
          return { ...ref, comprobante: res.referencia.comprobante };
        }

        return ref;
      });
      setReferencias(refAprobada);
    }

    setSubiendo(false);
  };

  return (
    <Container>
      <br />
      {cargando ? (
        <Loading />
      ) : (
        <div className="row">
          {referencias?.length === 0 ? (
            <div className={`${styles.titulo} text-center`}>
              Aún no has creado ninguna referencia
            </div>
          ) : (
            <div className="col-12">
              <div className="table-responsive-xxl">
                <table className={`${styles.customTable} table`}>
                  <tbody>
                    <th className="">Referencia o concepto de pago</th>
                    <th className="">CLABE</th>
                    <th className="">Beneficiario</th>
                    <th className="">Paquete</th>
                    <th className="">PPU</th>
                    <th className="text-center">Usuarios</th>
                    <th className="">Total a depositar</th>
                    <th className="">Comprobante</th>
                    <th className="">Estado</th>

                    {referencias?.map((referencia) => (
                      <tr key={referencia._id} className={`${styles.thover} `}>
                        <td className={`${styles.content}`}>
                          {referencia.referencia}
                        </td>

                        <td className={`${styles.content}`}>
                          123456 456789 456123
                        </td>
                        <td className={`${styles.content}`}>Red 1a1</td>
                        <td className={`${styles.content}`}>
                          {referencia.paquete.nombre}
                        </td>
                        <td className={`${styles.content}`}>
                          {formatPrice(referencia.precio)}
                        </td>
                        <td className={`${styles.content} text-center`}>
                          {referencia.totalUsuarios <= 1
                            ? "N/A"
                            : referencia.totalUsuarios}
                        </td>
                        <td className={`${styles.content}`}>
                          {formatPrice(referencia.importe)}
                        </td>
                        <td className={`${styles.content}`}>
                          {referencia.comprobante ? (
                            <div className="d-flex justify-content-center">
                              <a
                                target="_blank"
                                rel="noopener noreferrer"
                                href={referencia.comprobante}
                              >
                                <i className="bi bi-image-fill px-2" />
                              </a>
                              {referencia.estado ? null : (
                                <i
                                  onClick={() => handleAdjuntar(referencia._id)}
                                  className="bi bi-cloud-plus-fill pointer px-2"
                                  style={{
                                    fontSize: 22,
                                    color: "#7149bc",
                                  }}
                                />
                              )}
                            </div>
                          ) : (
                            <>
                              {seleccionado === referencia._id &&
                              comprobante !== "" ? (
                                <button
                                  onClick={() =>
                                    subirComprobante(
                                      referencia.usuario._id,
                                      referencia._id
                                    )
                                  }
                                >
                                  Subir
                                </button>
                              ) : (
                                <>
                                  {referencia.estado ? (
                                    ""
                                  ) : (
                                    <div className="d-flex justify-content-center">
                                      <i
                                        onClick={() =>
                                          handleAdjuntar(referencia._id)
                                        }
                                        className="bi bi-cloud-plus-fill pointer"
                                        style={{
                                          fontSize: 22,
                                          color: "#7149bc",
                                        }}
                                      />
                                    </div>
                                  )}
                                </>
                              )}

                              <input
                                style={{ display: "none" }}
                                ref={refAdjuntar}
                                type="file"
                                accept="image/*"
                                onChange={(e: any) =>
                                  setcomprobante(e.target.files[0])
                                }
                              />
                            </>
                          )}
                        </td>
                        <td className={`${styles.content}`}>
                          {referencia.estado ? "Aprobado" : "Pendiente"}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>

                {subiendo ? (
                  <div className="d-flex justify-content-center">
                    <Loading />
                  </div>
                ) : null}
              </div>
            </div>
          )}
          {total > 15 ? (
            <div className="d-flex justify-content-center">
              <Pagination>
                <Pagination.Prev onClick={handlePrevPage} />
                <Pagination.Next onClick={handleNextPage} />
              </Pagination>
            </div>
          ) : null}
        </div>
      )}
    </Container>
  );
};

export default ListaReferencias;
