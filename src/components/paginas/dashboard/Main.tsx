import { FC, useContext } from "react";
import Link from "next/link";
import styles from "./Dashboard.module.css";
import { AuthContext } from "context/auth/AuthContext";

interface Props {
  handleCollapsedChange: (checked: boolean) => void;
  handleToggleSidebar: (value: boolean) => void;
  titulo: string;
}

const Main: FC<Props> = ({ children, handleToggleSidebar, titulo }) => {
  const { auth } = useContext(AuthContext);

  return (
    <div style={{ width: "100%", overflowX: "hidden", background: "#F4F3FF" }}>
      <div className="row ">
        <div className="col text-end">
          <div className={styles.navbarCustom}>
            <span className={`${styles.hoja}`}>{titulo}</span>
            <Link href="/">
              <span className={`${styles.navLinks} mx-3 pointer`}>Inicio</span>
            </Link>
            <Link href="/perfil">
              <img
                className={`pointer ${styles.profileImg}`}
                src={auth.img}
                alt={auth.img}
              />
            </Link>
          </div>
        </div>
      </div>

      <i
        onClick={() => handleToggleSidebar(true)}
        className={`bi bi-list ${styles.burger}`}
        style={{ fontSize: 30, color: "black" }}
      />
      {children}
    </div>
  );
};

export default Main;
