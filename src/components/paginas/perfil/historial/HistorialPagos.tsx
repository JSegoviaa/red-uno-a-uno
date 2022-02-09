import { useContext, useState } from "react";
import { Pagination } from "react-bootstrap";
import { AuthContext } from "../../../../context/auth/AuthContext";
import { formatPrice } from "../../../../helpers/formatPrice";
import { horaMes } from "../../../../helpers/horaMes";
import { useHistorialPagos } from "../../../../hooks/useUserInfo";
import Loading from "../../../ui/loading/Loading";
import styles from "./HistorialPagos.module.css";

const HistorialPagos = () => {
  const { auth } = useContext(AuthContext);
  const [desde, setDesde] = useState(0);
  const { cargando, historialPago, total } = useHistorialPagos(auth.uid, desde);

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

  return (
    <div className="container">
      <br />
      {cargando ? (
        <Loading />
      ) : (
        <div className="row">
          {historialPago.length === 0 ? (
            <div className={`${styles.titulo} text-center`}>
              Aún no has añadido ningún paquete
            </div>
          ) : (
            <div className="col-12">
              <div className="table-responsive-xxl">
                <table className={`${styles.customTable} table`}>
                  <tbody>
                    <th className="">ID de pago</th>
                    <th className="">Fecha y hora</th>
                    <th className="">Paquete</th>
                    <th className="">PPU</th>
                    <th className="text-center">Usuarios</th>
                    <th className="">Importe</th>

                    {historialPago.map((pago) => (
                      <tr key={pago._id} className={`${styles.thover} `}>
                        <td className={`${styles.content}`}>{pago._id}</td>
                        <td className={`${styles.content}`}>
                          {horaMes(pago.fechaPago)}
                        </td>
                        <td className={`${styles.content}`}>
                          {pago.paquete.nombre}
                        </td>
                        <td className={`${styles.content}`}>
                          {formatPrice(pago.precio)}
                        </td>
                        <td className={`${styles.content} text-center`}>
                          {pago.totalUsuarios <= 1 ? "N/A" : pago.totalUsuarios}
                        </td>
                        <td className={`${styles.content}`}>
                          {formatPrice(pago.importe)}
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
    </div>
  );
};

export default HistorialPagos;
