import styles from "./Button.module.css";

type Btn = "Primary" | "Secondary" | "Green" | "Add";

interface Props {
  titulo: string;
  onClick?: () => void;
  btn?: Btn;
}

const Button = ({ titulo, onClick, btn = "Primary" }: Props) => {
  return (
    <>
      {btn === "Primary" ? (
        <div className={`${styles.primary} pointer`} onClick={onClick}>
          {titulo}
        </div>
      ) : null}
      {btn === "Secondary" ? (
        <div className={`${styles.secondary} pointer`} onClick={onClick}>
          {titulo}
        </div>
      ) : null}
      {btn === "Green" ? (
        <div className={`${styles.Green} pointer`} onClick={onClick}>
          {titulo}
        </div>
      ) : null}
      {btn === "Add" ? (
        <div className={`${styles.add} pointer`} onClick={onClick}>
          {titulo}
        </div>
      ) : null}
    </>
  );
};
export default Button;
