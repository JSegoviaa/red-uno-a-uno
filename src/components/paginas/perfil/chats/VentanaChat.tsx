import { FormEvent, useContext } from "react";
import { Form } from "react-bootstrap";
import { AuthContext } from "../../../../context/auth/AuthContext";
import { ChatContext } from "../../../../context/chat/ChatContext";
import { SocketContext } from "../../../../context/socket/SocketContext";
import { useForm } from "../../../../hooks/useForm";
import { useUserInfo } from "../../../../hooks/useUserInfo";
import styles from "./Contenido.module.css";
import Mensaje from "./Mensaje";

const VentanaChat = () => {
  const { auth } = useContext(AuthContext);
  const { socket } = useContext(SocketContext);
  const {
    setMinimizarChat,
    minimizarChat,
    conversacionActual,
    chatState,
    dispatch,
    mensajePara,
  } = useContext(ChatContext);
  // const mensajeRef = useRef<null | HTMLDivElement>(null);
  const { user } = useUserInfo(chatState.chatActivo || mensajePara);

  const { formulario, handleChange, setFormulario } = useForm({ mensaje: "" });
  const { mensaje } = formulario;

  const ocultarVentana = () => {
    dispatch({ type: "DesactivarChat", payload: null });
  };

  const minimizarVentana = () => setMinimizarChat(!minimizarChat);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (mensaje.length === 0) return;

    const nuevoMensaje = {
      remitente: auth.uid,
      mensaje,
      para: chatState.chatActivo,
      conversacion: conversacionActual?._id,
    };
    socket?.emit("mensaje-personal", nuevoMensaje);

    setFormulario({ mensaje: "" });
  };

  return (
    <section>
      {chatState.chatActivo ? (
        <div className={styles.VentanaChat}>
          <div className="row">
            <div className="col-12">
              <div className={styles.header}>
                <div className="row">
                  <div className="col-2 text-end">
                    <img
                      className={styles.perfilImg}
                      src={user?.img}
                      alt={user?.nombre}
                    />
                  </div>
                  <div className="col-7">
                    <div className={`${styles.nombre}`}>
                      {user?.nombre} {user?.apellido}
                    </div>
                    <div className={styles.conexion}>
                      {user?.online ? "En línea" : "Desconectado"}
                    </div>
                  </div>
                  <div className="col-3 text-end p-0">
                    <i
                      onClick={minimizarVentana}
                      className={`${styles.dashIcon} ${
                        minimizarChat ? "bi bi-dash-lg" : "bi bi-app"
                      }  me-2 pointer`}
                    />
                    <button
                      onClick={ocultarVentana}
                      type="button"
                      className="btn-close btn-close-white mt-3 me-3"
                      aria-label="Close"
                    />
                  </div>
                </div>
              </div>
            </div>
            {minimizarChat ? (
              <>
                <div className="col-12">
                  <div className={styles.chatBox}>
                    <div className="row d-flex justify-content-center">
                      <>
                        {chatState.mensajes.map((mensaje: any) => (
                          <div key={mensaje._id}>
                            <Mensaje
                              mensaje={mensaje}
                              propio={mensaje.remitente === auth.uid}
                            />
                          </div>
                        ))}
                      </>
                    </div>
                  </div>
                </div>

                <div className="col-12">
                  <div className={styles.sendMensajeFooter}>
                    <div className="row d-flex justify-content-center">
                      <div className="col-12">
                        <Form onSubmit={handleSubmit}>
                          <div className="input-group">
                            <input
                              type="text"
                              className={`${styles.messageBox} form-control`}
                              placeholder="Mensaje..."
                              value={mensaje}
                              onChange={handleChange}
                              name="mensaje"
                            />
                            <span
                              className={`${styles.btnEnviar} input-group-text`}
                              id="basic-addon2"
                            >
                              <button className={styles.iconSend}>
                                <i className="bi bi-send text-white"></i>
                              </button>
                            </span>
                          </div>
                        </Form>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            ) : null}
          </div>
        </div>
      ) : null}
    </section>
  );
};

export default VentanaChat;
