import { Modal } from "react-bootstrap";
import styles from "./AuthModal.module.css";

type Autenticacion = "Registro" | "Login";

interface Props {
  show: boolean;
  handleClose: () => void;
  type: Autenticacion;
}

const AuthModal = ({ show, handleClose, type }: Props) => {
  return (
    <>
      {type === "Registro" ? (
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Registrarse</Modal.Title>
          </Modal.Header>
          <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
          <Modal.Footer>
            <div onClick={handleClose}>Cerrar</div>
          </Modal.Footer>
        </Modal>
      ) : null}

      {type === "Login" ? (
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Iniciar sesión</Modal.Title>
          </Modal.Header>
          <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
          <Modal.Footer>
            <div onClick={handleClose}>Cerrar</div>
          </Modal.Footer>
        </Modal>
      ) : null}
    </>
  );
};

export default AuthModal;
