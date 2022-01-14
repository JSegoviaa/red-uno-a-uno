import { useContext } from "react";
import { useRouter } from "next/router";
import { AuthContext } from "../../../../context/auth/AuthContext";
import { useHistorial } from "../../../../hooks/useUserInfo";
import Loading from "../../../ui/loading/Loading";
import styles from "./Mihistorial.module.css";

const Mihistorial = () => {
  const { auth } = useContext(AuthContext);
  const router = useRouter();
  const { historial, isLoading } = useHistorial(auth.uid);

  const goToProperty = (slug: string) => router.push("/propiedades/" + slug);

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
                {historial.map((hist, i) => (
                  <tr key={hist._id} className={`${styles.thover} pointer`}>
                    <td className={styles.tNumber}>{i + 1} </td>
                    <td
                      onClick={() => goToProperty(hist.inmueble.slug)}
                      className={styles.content}
                    >
                      {hist.inmueble.titulo}
                    </td>
                  </tr>
                ))}
              </tbody>
            )}
          </table>
        </div>
      </div>
    </div>
  );
};

export default Mihistorial;
