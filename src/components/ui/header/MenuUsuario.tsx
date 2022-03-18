import { Dispatch, MutableRefObject, SetStateAction, useContext } from "react";
import Link from "next/link";
import { Overlay } from "react-bootstrap";
import { AuthContext } from "context/auth/AuthContext";
import styles from "./Header.module.css";
import { ChatContext } from "context/chat/ChatContext";

interface Props {
  setMostrarMenu: Dispatch<SetStateAction<boolean>>;
  target: MutableRefObject<null>;
  setNotificaciones: Dispatch<SetStateAction<boolean>>;
  mostrarMenu: boolean;
}

const MenuUsuario = (props: Props) => {
  const { setMostrarMenu, target, setNotificaciones, mostrarMenu } = props;
  const { auth, logOut } = useContext(AuthContext);
  const { chatState } = useContext(ChatContext);

  const cerrarSesion = () => {
    logOut();
    setMostrarMenu(false);
    setNotificaciones(false);
    chatState.chatActivo = null;
  };

  return (
    <>
      <div
        className={`${styles.navPerfil} pointer ms-3`}
        ref={target}
        onClick={() => setMostrarMenu(!mostrarMenu)}
      >
        <img
          src={auth.img}
          alt="Mi perfil"
          style={{
            width: 50,
            height: 50,
            borderRadius: "50%",
          }}
        />
      </div>
      <Overlay target={target.current} show={mostrarMenu} placement="right">
        {({ placement, arrowProps, show: _show, popper, ...props }) => (
          <div
            className={styles.menu}
            {...props}
            style={{
              ...props.style,
            }}
          >
            <Link href="/perfil">
              <div
                className={`${styles.menuItem} pointer mx-3 my-2`}
                onClick={() => {
                  setMostrarMenu(false);
                }}
              >
                Mi Perfil
              </div>
            </Link>

            {auth.role === "Individual" ||
              auth.role === "Usuario" ||
              auth.role === "UsuarioPagado" ? null : (
              <Link href="/perfil/mis-usuarios">
                <div
                  className={`${styles.menuItem} pointer mx-3 my-2`}
                  onClick={() => {
                    setMostrarMenu(false);
                  }}
                >
                  Mis Usuarios
                </div>
              </Link>
            )}

            <Link href="/perfil/mis-paquetes">
              <div
                className={`${styles.menuItem} pointer mx-3 my-2`}
                onClick={() => {
                  setMostrarMenu(false);
                }}
              >
                Mis Paquetes
              </div>
            </Link>
            <Link href="/perfil/historial-de-pagos">
              <div
                className={`${styles.menuItem} pointer mx-3 my-2`}
                onClick={() => {
                  setMostrarMenu(false);
                }}
              >
                Mis Pagos
              </div>
            </Link>
            <Link href="/perfil/referencias-de-pago">
              <div
                className={`${styles.menuItem} pointer mx-3 my-2`}
                onClick={() => {
                  setMostrarMenu(false);
                }}
              >
                Referencias
              </div>
            </Link>
            {auth.role === "Administrador" ? (
              <Link href="/dashboard/pagos/referencias">
                <div
                  className={`${styles.menuItem} pointer mx-3 my-2`}
                  onClick={() => {
                    setMostrarMenu(false);
                  }}
                >
                  Dashboard
                </div>
              </Link>
            ) : null}

            <hr />
            <div
              className={`${styles.menuCerrar} pointer mx-3 my-2`}
              onClick={cerrarSesion}
            >
              <i className="bi bi-box-arrow-right"></i> Cerrar sesión
            </div>
          </div>
        )}
      </Overlay>
    </>
  );
};

export default MenuUsuario;
