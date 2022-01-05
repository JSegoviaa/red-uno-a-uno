import Link from "next/link";
import { useContext } from "react";
import { AuthContext } from "../../../context/auth/AuthContext";
import styles from "./PurpleHeader.module.css";

const PurpleHeader = () => {
  const { auth } = useContext(AuthContext);
  return (
    <div className={styles.purpleNav2}>
      <ul className="nav d-flex justify-content-center">
        {auth.uid ? (
          <>
            <li className="nav-item mt-2">
              <Link href="/perfil/mis-propiedades">
                <div className={`${styles.purpleLinks} mx-3 pointer`}>
                  Mis Propiedades
                </div>
              </Link>
            </li>
            <li className="nav-item mt-2">
              <Link href="/perfil/mis-favoritos">
                <div className={`${styles.purpleLinks} mx-3 pointer`}>
                  Mis Favoritos
                </div>
              </Link>
            </li>
            <li className="nav-item mt-2">
              <Link href="/perfil">
                <div className={`${styles.purpleLinks} mx-3 pointer`}>
                  Mi Cuenta
                </div>
              </Link>
            </li>
            <li className="nav-item mt-2">
              <Link href="/perfil/historial-de-inmueble">
                <div className={`${styles.purpleLinks} mx-3 pointer`}>
                  Historial de Inmuebles
                </div>
              </Link>
            </li>
          </>
        ) : null}
        <li className="nav-item">
          <input
            type="text"
            className={styles.searchInput}
            placeholder="Busca aquí..."
          />
          <button className={styles.searchBtn}>
            <i className="bi bi-search" />
          </button>
        </li>
        {auth.uid ? (
          <li className="nav-item">
            <img
              className={`${styles.notificacion} mx-3 pointer`}
              src="/images/icons/Notificaciones.png"
              alt="..."
            />
          </li>
        ) : null}
      </ul>
    </div>
  );
};

export default PurpleHeader;
