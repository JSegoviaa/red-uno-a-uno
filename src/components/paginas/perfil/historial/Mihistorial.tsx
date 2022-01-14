import { useContext } from "react";
import { useRouter } from "next/router";
import { AuthContext } from "../../../../context/auth/AuthContext";
import { useHistorial } from "../../../../hooks/useUserInfo";
import Loading from "../../../ui/loading/Loading";
import styles from "./Mihistorial.module.css";
import { publicadoHace } from "../../../../helpers/horaMes";
import { eliminarHist } from "../../../../helpers/fetch";
import { toast } from "react-toastify";

const Mihistorial = () => {
  const { auth } = useContext(AuthContext);
  const router = useRouter();
  const { historial, isLoading } = useHistorial(auth.uid);

  const goToProperty = (slug: string) => router.push("/propiedades/" + slug);
  const handleDelete = async (id: string) => {
    const resp = await eliminarHist(`historial/${id}`);
    if (resp.ok) toast.success(resp.msg);
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <br />
          <table className={`${styles.customTable}`}>
            {isLoading ? (
              <Loading />
            ) : (
              <tbody>
                {historial
                  .map((hist, i) => (
                    <tr key={hist._id} className={`${styles.thover}`}>
                      <td className={styles.tNumber}>{i + 1} </td>
                      <td
                        onClick={() => goToProperty(hist.inmueble.slug)}
                        className={`${styles.content} pointer`}
                      >
                        {hist.inmueble.titulo}
                      </td>
                      <td align="center">
                        Visto {publicadoHace(hist.createdAt)}
                      </td>

                      <td align="center">
                        <i
                          onClick={() => handleDelete(hist._id)}
                          className={`${styles.deleteI} bi bi-x-circle-fill pointer`}
                        />
                      </td>
                    </tr>
                  ))
                  .reverse()}
              </tbody>
            )}
          </table>
        </div>
      </div>
    </div>
  );
};

export default Mihistorial;
