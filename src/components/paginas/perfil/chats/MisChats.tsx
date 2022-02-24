import { ChatContext } from "context/chat/ChatContext";
import { Fragment, useContext } from "react";
import { Offcanvas } from "react-bootstrap";
import Loading from "../../../ui/loading/Loading";
import Chat from "./Chat";
import styles from "./MisChats.module.css";

interface Props {
  showCanvas: boolean;
  handleCloseCanvas: any;
}

const MisChats = ({ showCanvas, handleCloseCanvas }: Props) => {
  const { cargando, conversaciones } = useContext(ChatContext);

  return (
    <Offcanvas show={showCanvas} onHide={handleCloseCanvas} placement="end">
      <Offcanvas.Header closeButton className={styles.OFhead}>
        <Offcanvas.Title>Mis chats</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body className={styles.OFbody}>
        {conversaciones.map((conversacion, i) => (
          <Fragment key={i}>
            {cargando ? (
              <Loading />
            ) : (
              <Chat
                conversacion={conversacion}
                handleCloseCanvas={handleCloseCanvas}
              />
            )}
          </Fragment>
        ))}
      </Offcanvas.Body>
    </Offcanvas>
  );
};

export default MisChats;
