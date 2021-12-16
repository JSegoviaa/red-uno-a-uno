import styles from "./Titulo.module.css";

interface Props {
  titulo: string;
}

const Titulo = ({ titulo }: Props) => {
  return <div>{titulo}</div>;
};

export default Titulo;
