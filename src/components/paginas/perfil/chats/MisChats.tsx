import { useContext } from "react";
import { Offcanvas } from "react-bootstrap";
import { ChatContext } from "../../../../context/chat/ChatContext";
import styles from "./MisChats.module.css";

const chats = [
  {
    id: 1,
    img: "/images/avatares/4.svg",
    nombre: "James Franco",
    mensaje: "No sé quien es James Franco",
  },
  {
    id: 2,
    img: "/images/avatares/2.svg",
    nombre: "Bruce Wayne",
    mensaje: "Soy Batman",
  },
  {
    id: 3,
    img: "/images/avatares/3.svg",
    nombre: "Scarlett Johanson",
    mensaje: "Estoy muy guapa ¿verdad?",
  },
  {
    id: 4,
    img: "/images/avatares/1.svg",
    nombre: "Leo Messi",
    mensaje: "Cristiano Ronaldo no sabe jugar",
  },
  {
    id: 5,
    img: "/images/avatares/6.svg",
    nombre: "Peter Parker",
    mensaje: "Se me acabó la telaraña",
  },
  {
    id: 6,
    img: "/images/avatares/1.svg",
    nombre: "Pedro Picapiedra",
    mensaje: "Pablo, te invito a comer",
  },
  {
    id: 7,
    img: "/images/avatares/5.svg",
    nombre: "James Hatfield",
    mensaje: "Megadeth es mejor que nosotros",
  },
  {
    id: 8,
    img: "/images/avatares/3.svg",
    nombre: "AMLO",
    mensaje: "Fuerza moral",
  },
  {
    id: 9,
    img: "/images/avatares/5.svg",
    nombre: "Don Ramón",
    mensaje: "No he pagado la renta",
  },
  {
    id: 10,
    img: "/images/avatares/2.svg",
    nombre: "Naruto",
    mensaje: "Soy un ninja",
  },
  {
    id: 11,
    img: "/images/avatares/6.svg",
    nombre: "Gokú",
    mensaje: "Me convertí en super sayayin de nuevo",
  },
  {
    id: 12,
    img: "/images/avatares/6.svg",
    nombre: "Barack Obama",
    mensaje: "Soy el mejor presi",
  },
];

interface Props {
  showCanvas: boolean;
  handleCloseCanvas: any;
}

const MisChats = ({ showCanvas, handleCloseCanvas }: Props) => {
  const { setAbrirChat, setMinimizarChat } = useContext(ChatContext);

  const openChat = () => {
    handleCloseCanvas();
    setAbrirChat(true);
    setMinimizarChat(true);
  };

  return (
    <Offcanvas show={showCanvas} onHide={handleCloseCanvas} placement="end">
      <Offcanvas.Header closeButton className={styles.OFhead}>
        <Offcanvas.Title>Mis chats</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body className={styles.OFbody}>
        {chats.map((chat) => (
          <div
            onClick={openChat}
            key={chat.id}
            className={`${styles.ChatHover} pointer mb-2`}
          >
            <div className={styles.michat}>
              <div className="row">
                <div className="col-2 text-center">
                  <div className={styles.backImg}>
                    <img
                      src={chat.img}
                      alt={chat.nombre}
                      style={{ borderRadius: "50%" }}
                    />
                  </div>
                </div>
                <div className="col-10">
                  <div className={styles.nombre}>{chat.nombre}</div>
                  <div className={styles.mensaje}>{chat.mensaje}</div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Offcanvas.Body>
    </Offcanvas>
  );
};

export default MisChats;
