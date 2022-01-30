import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../../context/auth/AuthContext';
import { ChatContext } from '../../../../context/chat/ChatContext';
import { production } from '../../../../credentials/credentials';
import { Conversacion } from '../../../../interfaces/ChatInterface';
import styles from './Contenido.module.css';
import Mensaje from './Mensaje';

const VentanaChat = () => {
  const { auth } = useContext(AuthContext);
  const {
    setMinimizarChat,
    minimizarChat,
    conversacionActual,
    setConversacionActual,
  } = useContext(ChatContext);
  const [mensajes, setMensajes] = useState<Conversacion>();

  useEffect(() => {
    const obtenerMensajes = async () => {
      const resp = await fetch(
        `${production}/mensajes/${conversacionActual?._id}`
      );
      const data = await resp.json();
      setMensajes(data);
    };

    obtenerMensajes();
  }, [conversacionActual]);

  const ocultarVentana = () => setConversacionActual(null);

  const minimizarVentana = () => setMinimizarChat(!minimizarChat);
  return (
    <section>
      {conversacionActual ? (
        <div className={styles.VentanaChat}>
          <div className="row">
            <div className="col-12">
              <div className={styles.header}>
                <div className="row">
                  <div className="col-2 text-end">
                    <img
                      className={styles.perfilImg}
                      src="/images/avatares/2.svg"
                      alt="..."
                    />
                  </div>
                  <div className="col-7">
                    <div className={`${styles.nombre}`}>James Franco</div>
                    <div className={styles.conexion}>En Linea</div>
                  </div>
                  <div className="col-3 text-end p-0">
                    <i
                      onClick={minimizarVentana}
                      className={`${styles.dashIcon} ${
                        minimizarChat ? 'bi bi-dash-lg' : 'bi bi-app'
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
                        {mensajes?.mensajes.map((mensaje) => (
                          <Mensaje
                            key={mensaje._id}
                            mensaje={mensaje}
                            propio={mensaje.remitente === auth.uid}
                          />
                        ))}
                      </>
                    </div>
                  </div>
                </div>

                <div className="col-12">
                  <div className={styles.sendMensajeFooter}>
                    <div className="row d-flex justify-content-center">
                      <div className="col-12">
                        <div className="input-group">
                          <input
                            type="text"
                            className={`${styles.messageBox} form-control`}
                            placeholder="Mensaje..."
                            aria-label="Recipient's username"
                            aria-describedby="basic-addon2"
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
