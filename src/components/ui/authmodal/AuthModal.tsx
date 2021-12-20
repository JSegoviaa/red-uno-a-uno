import { Modal } from "react-bootstrap";
import styles from "./AuthModal.module.css";

interface Props {
  show: boolean;
  handleClose: () => void;
}

const AuthModal = ({ show, handleClose }: Props) => {
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Modal heading</Modal.Title>
      </Modal.Header>
      <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
      <Modal.Footer>
        <div onClick={handleClose}>Cerrar</div>
      </Modal.Footer>
    </Modal>
  );
};

export default AuthModal;
