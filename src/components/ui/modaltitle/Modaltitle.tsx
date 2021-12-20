import styles from "./ModalTitle.module.css";

interface Props {
  titulo: string;
}

const Modaltitle = ({ titulo }: Props) => {
  return (
    <div className="text-center">
      <h3 className={styles.loginTitle}>{titulo}</h3>
      <div className={styles.line} />
    </div>
  );
};

export default Modaltitle;
