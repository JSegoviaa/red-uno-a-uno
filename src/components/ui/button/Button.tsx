type Btn = "Primary" | "Secondary" | "Green" | "Add";

interface Props {
  titulo: string;
  onClick?: () => void;
  btn: Btn;
}

const Button = ({ titulo, onClick, btn = "Primary" }: Props) => {
  return (
    <>
      {btn === "Primary" ? <div>BTN primario {titulo} </div> : null}
      {btn === "Secondary" ? <div>BTN secundario {titulo} </div> : null}
      {btn === "Green" ? <div>BTN verde {titulo} </div> : null}
      {btn === "Add" ? <div>Agregar {titulo} </div> : null}
    </>
  );
};
export default Button;
