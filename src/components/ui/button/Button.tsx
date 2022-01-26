import { FormEvent } from "react";
import styles from "./Button.module.css";

type Btn = "Primary" | "Secondary" | "Green" | "Add" | "Disabled";

interface Props {
  titulo: string;
  onClick?: any;
  btn?: Btn;
}

const Button = ({ titulo, onClick, btn = "Primary" }: Props) => {
  return (
    <>
      {btn === "Primary" ? (
        <button className={`${styles.primary} pointer`} onClick={onClick}>
          {titulo}
        </button>
      ) : null}
      {btn === "Secondary" ? (
        <div className={`${styles.secondary} pointer`} onClick={onClick}>
          {titulo}
        </div>
      ) : null}
      {btn === "Green" ? (
        <button className={`${styles.Green} pointer`} onClick={onClick}>
          <i className="bi bi-plus-lg"></i> {titulo}
        </button>
      ) : null}
      {btn === "Add" ? (
        <button className={`${styles.add} pointer`} onClick={onClick}>
          {titulo}
        </button>
      ) : null}
      {btn === "Disabled" ? (
        <button disabled className={styles.disabled}>
          {titulo}
        </button>
      ) : null}
    </>
  );
};
export default Button;
