import { useContext } from "react";
import { AuthContext } from "../../../../context/auth/AuthContext";
import { formatPrice } from "../../../../helpers/formatPrice";
import { horaMes } from "../../../../helpers/horaMes";
import { useHistorialPagos } from "../../../../hooks/useUserInfo";
import Loading from "../../../ui/loading/Loading";
import styles from "./HistorialPagos.module.css";

const HistorialPagos = () => {
  const { auth } = useContext(AuthContext);
  const { cargando, historialPago } = useHistorialPagos(auth.uid);

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
                      <tr className={`${styles.thover} `}>
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
                        <td className={`${styles.content} text-center`}>8</td>
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
        </div>
      )}
    </div>
  );
};

export default HistorialPagos;
