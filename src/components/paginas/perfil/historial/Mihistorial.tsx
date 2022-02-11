import { useContext, useState } from "react";
import { useRouter } from "next/router";
import { toast } from "react-toastify";
import { Pagination } from "react-bootstrap";
import { AuthContext } from "../../../../context/auth/AuthContext";
import { useHistorial } from "../../../../hooks/useUserInfo";
import Loading from "../../../ui/loading/Loading";
import styles from "./Mihistorial.module.css";
import { publicadoHace } from "../../../../helpers/horaMes";
import { eliminarHist } from "../../../../helpers/fetch";

const Mihistorial = () => {
  const { auth } = useContext(AuthContext);
  const router = useRouter();
  const [desde, setDesde] = useState(0);
  const { historial, isLoading, setHistorial, total } = useHistorial(
    auth.uid,
    desde
  );

  const goToProperty = async (slug: string) => {
    if (slug !== "") {
      router.push("/propiedades/" + slug);
    }
  };

  const handleDelete = async (id: string) => {
    const resp = await eliminarHist(`historial/${id}`);

    const nuevoHistorial = historial?.filter(
      (historial) => historial._id !== id
    );

    setHistorial(nuevoHistorial);
    if (resp.ok) toast.success(resp.msg);
  };

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
    <section className={styles.section}>
      <div className="container">
        <div className="row">
          <div className="col">
            <br />
            {isLoading ? (
              <Loading />
            ) : (
              <>
                {historial?.length === 0 ? (
                  <div className={`${styles.titulo} text-center`}>
                    No tienes búsquedas recientes
                  </div>
                ) : (
                  <table className={`${styles.customTable}`}>
                    <tbody>
                      {historial?.map((hist, i) => (
                        <tr key={hist._id} className={`${styles.thover}`}>
                          <td className={styles.tNumber}>{i + 1} </td>
                          <td
                            onClick={() =>
                              goToProperty(
                                hist.inmueble ? hist.inmueble.slug : ""
                              )
                            }
                            className={`${styles.content} pointer`}
                          >
                            {hist.inmueble
                              ? hist.inmueble.titulo
                              : "Este inmueble ha sido dado de baja por el promotor"}
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
                      ))}
                    </tbody>
                  </table>
                )}
              </>
            )}
            {historial && total > 15 ? (
              <div className="d-flex justify-content-center">
                <Pagination>
                  <Pagination.Prev onClick={handlePrevPage} />
                  <Pagination.Next onClick={handleNextPage} />
                </Pagination>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mihistorial;
