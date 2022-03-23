import { useContext, useEffect, useState } from "react";
import { AuthContext } from "context/auth/AuthContext";
import { useSolicitudes } from "hooks/useSolicitudes";
import styles from "./ResposiveStyles.module.css";
import { useWindowWide } from "hooks/useWindowWide";
import { useRouter } from "next/router";

const NotificacionResp = () => {
  const { auth } = useContext(AuthContext);
  const { push } = useRouter();
  const [width, setWidth] = useState(0);
  const wide = useWindowWide(991);
  const { solicitudes, setSolicitudes, cargando } = useSolicitudes(auth.uid);

  if (wide) push("/");

  return (
    <div className={`${styles.notifi}`}>
      <div className={`${styles.notifiContainer}`}>
        <div className="row g-0">
          <div className="col-12">
            <div className={styles.notifiContent}>
              <table>
                <tr>
                  <td valign="top">
                    <div className={styles.imgContainer}>
                      <img
                        src=""
                        alt=""
                        style={{
                          borderRadius: "50%",
                          width: "100%",
                        }}
                      />
                    </div>
                  </td>
                  <td>
                    <div className={styles.notifiText}>
                      <b>Don Macario</b> quiere que le compartas{" "}
                      <b>Casa en venta en CDMX Polanco 271</b>
                    </div>
                    <div className="btns mt-3">
                      <span className={`${styles.aceptar} pointer`}>
                        Aceptar
                      </span>{" "}
                      <span className={`${styles.rechazar} pointer`}>
                        Rechazar
                      </span>
                    </div>
                    <div className={styles.hra}>12:35pm</div>
                  </td>
                </tr>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotificacionResp;
