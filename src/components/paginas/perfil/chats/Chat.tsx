import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../../context/auth/AuthContext';
import { production } from '../../../../credentials/credentials';
import { Conversacion } from '../../../../interfaces/ChatInterface';
import { Usuario } from '../../../../interfaces/UserInterface';
import styles from './MisChats.module.css';

interface Props {
  openChat: () => void;
  conversacion: Conversacion;
}

const Chat = ({ openChat, conversacion }: Props) => {
  const { auth } = useContext(AuthContext);
  const [contacto, setContacto] = useState<Usuario>();

  useEffect(() => {
    const contacto = conversacion.miembros.find(
      (miembro) => miembro !== auth.uid
    );

    const traerContacto = async () => {
      const resp = await fetch(`${production}/usuarios/${contacto}`);
      const data = await resp.json();

      setContacto(data);
    };

    traerContacto();
  }, [conversacion, auth]);

  return (
    <div onClick={openChat} className={`${styles.ChatHover} pointer mb-2`}>
      <div className={styles.michat}>
        <div className="row">
          <div className="col-2 text-center">
            <div className={styles.backImg}>
              {contacto ? (
                <img
                  src={contacto.img}
                  alt={contacto.nombre}
                  style={{ borderRadius: '50%', width: 55 }}
                />
              ) : null}
            </div>
          </div>
          <div className="col-10">
            <div className={styles.nombre}>
              {contacto ? (
                <>
                  {contacto.nombre} {contacto.apellido}
                </>
              ) : null}
            </div>
            <div className={styles.mensaje}>Mensaje estático</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chat;
