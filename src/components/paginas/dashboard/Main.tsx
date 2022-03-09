import { FC } from "react";
import Link from "next/link";
import styles from "./Dashboard.module.css";

interface Props {
  handleCollapsedChange: (checked: boolean) => void;
  handleToggleSidebar: (value: boolean) => void;
  titulo: string;
}

const Main: FC<Props> = ({ children, handleToggleSidebar, titulo }) => {
  return (
    <div style={{ width: "100%", overflowX: "hidden", background: "#F4F3FF" }}>
      <div className="row ">
        <div className="col text-end">
          <div className={styles.navbarCustom}>
            <span className={`${styles.hoja}`}>{titulo}</span>
            <Link href={"/"}>
              <span className={`${styles.navLinks} mx-3 pointer`}>Inicio</span>
            </Link>
            <Link href={"/"}>
              <span className={`${styles.profileImg} mx-3 pointer`}>x</span>
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
