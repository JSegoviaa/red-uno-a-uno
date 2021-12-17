type Btn = "Primary" | "Secondary" | "Green" | "Add";

interface Props {
  titulo: string;
  onClick?: () => void;
  btn?: Btn;
}

const Button = ({ titulo, onClick, btn = "Primary" }: Props) => {
  return (
    <>
      {btn === "Primary" ? <div onClick={onClick}>{titulo} </div> : null}
      {btn === "Secondary" ? <div onClick={onClick}> {titulo} </div> : null}
      {btn === "Green" ? <div onClick={onClick}>{titulo} </div> : null}
      {btn === "Add" ? <div onClick={onClick}> {titulo} </div> : null}
    </>
  );
};
export default Button;
