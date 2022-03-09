import { FC } from "react";
import styles from "./Dashboard.module.css";

interface Props {
  handleCollapsedChange: (checked: boolean) => void;
  handleToggleSidebar: (value: boolean) => void;
}

const Main: FC<Props> = ({ children, handleToggleSidebar }) => {
  return (
    <div style={{ width: "100%", overflowX: "hidden", background: "#F4F3FF"}}>
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
