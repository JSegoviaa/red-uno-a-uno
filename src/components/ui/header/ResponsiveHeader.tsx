import { useContext, useState } from "react";
import Link from "next/link";
import styles from "./Header.module.css";
import { AuthContext } from "context/auth/AuthContext";
import LoginModal from "../authmodal/LoginModal";

const ResponsiveHeader = () => {
  const { auth, abrirLogin, abrirRegistro } = useContext(AuthContext);
  const [mostrar, setMostrar] = useState(true);

  const cerrarMenu = () => setMostrar(true);

  const openLogin = () => {
    cerrarMenu();
    abrirLogin();
  };

  const openRegister = () => {
    cerrarMenu();
    abrirRegistro();
  };

  return (
    <div>
      <div>
        <i
          onClick={() => setMostrar(!mostrar)}
          className={`${styles.listIcon}  ${
            mostrar ? "bi bi-list" : "bi bi-x-lg"
          }`}
        />
      </div>
      <div
        className={`container my-2 d-flex ${
          mostrar ? "justify-content-center" : "justify-content-end"
        }`}
      >
        <Link href="/">
          <img
            src="/images/logos/red1-color.png"
            alt="Red 1 a 1"
            className="pointer"
            onClick={cerrarMenu}
          />
        </Link>
      </div>

      <div className={`${mostrar ? styles.resHeader : styles.resHeaderAtive}`}>
        {!auth.logged ? (
          <div>
            <br />
            <br />
            <div className={styles.headerLinkItem} onClick={openRegister}>
              Regístrate
            </div>
            <div className={styles.headerLinkItem} onClick={openLogin}>
              Inicia sesión
            </div>
          </div>
        ) : (
          <div>
            <br />
            <br />
            <div onClick={cerrarMenu}>
              <Link href="/perfil/mis-propiedades">
                <span className={styles.headerLinkItem}>Mis propiedades</span>
              </Link>
            </div>
            <div onClick={cerrarMenu}>
              <Link href="/perfil/mis-favoritos">
                <span className={styles.headerLinkItem}>Mis favoritos</span>
              </Link>
            </div>
            <div onClick={cerrarMenu}>
              <Link href="/perfil">
                <span className={styles.headerLinkItem}>Mi cuenta</span>
              </Link>
            </div>
            <div onClick={cerrarMenu}>
              <Link href="/perfil/propiedades-compartidas">
                <span className={styles.headerLinkItem}>
                  Propiedades compartidas
                </span>
              </Link>
            </div>
            <div onClick={cerrarMenu}>
              <Link href="/perfil/historial-de-inmueble">
                <span className={styles.headerLinkItem}>
                  Historial de inmueble
                </span>
              </Link>
            </div>
          </div>
        )}
      </div>
      <LoginModal />
    </div>
  );
};

export default ResponsiveHeader;
