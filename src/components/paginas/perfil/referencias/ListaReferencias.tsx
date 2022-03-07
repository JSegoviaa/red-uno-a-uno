import { useContext } from "react";
import { Container } from "react-bootstrap";
import { AuthContext } from "context/auth/AuthContext";
import { useReferenciasUsuario } from "hooks/useReferencias";
import Loading from "components/ui/loading/Loading";
import { horaMes } from "helpers/horaMes";
import { formatPrice } from "helpers/formatPrice";
import styles from "./Referencias.module.css";

const ListaReferencias = () => {
  const { auth } = useContext(AuthContext);
  const { cargando, referencias } = useReferenciasUsuario(auth.uid);

  return (
    <Container>
      <br />
      {cargando ? (
        <Loading />
      ) : (
        <div className="row">
          {referencias?.length === 0 ? (
            <div className={`${styles.titulo} text-center`}>
              Aún no has añadido ningún paquete
            </div>
          ) : (
            <div className="col-12">
              <div className="table-responsive-xxl">
                <table className={`${styles.customTable} table`}>
                  <tbody>
                    <th className="">Referencia o concepto de pago</th>
                    <th className="">Fecha y hora</th>
                    <th className="">Paquete</th>
                    <th className="">PPU</th>
                    <th className="text-center">Usuarios</th>
                    <th className="">Importe</th>

                    {referencias?.map((referencia) => (
                      <tr key={referencia._id} className={`${styles.thover} `}>
                        <td className={`${styles.content}`}>
                          {referencia.referencia}
                        </td>
                        <td className={`${styles.content}`}>
                          {/* {horaMes(referencia.fechaPago)} */} Fecha
                        </td>
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
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}
          {/* {total > 15 ? (
    <div className="d-flex justify-content-center">
      <Pagination>
        <Pagination.Prev onClick={handlePrevPage} />
        <Pagination.Next onClick={handleNextPage} />
      </Pagination>
    </div>
  ) : null} */}
        </div>
      )}
    </Container>
  );
};

export default ListaReferencias;
