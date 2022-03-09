import { useContext, useState } from "react";
import { Container, Pagination } from "react-bootstrap";
import { AuthContext } from "context/auth/AuthContext";
import { useReferenciasUsuario } from "hooks/useReferencias";
import Loading from "components/ui/loading/Loading";
import { formatPrice } from "helpers/formatPrice";
import styles from "./Referencias.module.css";

const ListaReferencias = () => {
  const { auth } = useContext(AuthContext);
  const [desde, setDesde] = useState(0);
  const { cargando, referencias, total } = useReferenciasUsuario(
    auth.uid,
    desde
  );

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
  console.log(total);

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
                          {referencia.estado ? "Aprobado" : "Pendiente"}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
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
