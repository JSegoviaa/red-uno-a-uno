import { useContext } from "react";
import { AuthContext } from "../../../../context/auth/AuthContext";
import { ChatContext, CrearChat } from "../../../../context/chat/ChatContext";
import { InmueblesUsuario } from "../../../../interfaces/CrearInmuebleInterface";
import Button from "../../../ui/button/Button";
import styles from "./Inmueble.module.css";

interface Props {
  inmuebles: {
    inmueble: InmueblesUsuario;
    ok: boolean;
  };
}

const Contact = ({ inmuebles }: Props) => {
  const { auth } = useContext(AuthContext);
  const { iniciarChat } = useContext(ChatContext);

  const data: CrearChat = {
    miembros: [auth.uid, inmuebles.inmueble.usuario._id],
    remitente: auth.uid,
    para: inmuebles.inmueble.usuario._id,
  };

  return (
    <section>
      <div className="row w-100 gx-0">
        <div className="col-sm-12 col-md-12 col-lg-5">
          <div className={styles.contenidoContactoDerecha}>
            <div className={styles.miniTutuloC}>Datos del contacto</div>
            <div className={`${styles.nombreC} mb-2`}>
              <img
                className="me-2"
                src="/images/icons/deatails-icons/propietario.png"
                alt=""
              />
              {inmuebles.inmueble.usuario.nombre}{" "}
              {inmuebles.inmueble.usuario.apellido} {/*Ajustar esta mierda*/}
            </div>
            <div className={styles.telefonoC}>
              <img
                className="me-2"
                src="/images/icons/deatails-icons/telefono.png"
                alt=""
              />
              {inmuebles.inmueble.usuario.telefonoPersonal
                ? inmuebles.inmueble.usuario.telefonoPersonal
                : inmuebles.inmueble.usuario.telefonoOficina
                ? inmuebles.inmueble.usuario.telefonoOficina
                : "Número oculto"}
            </div>
          </div>
        </div>
        <div className="col-sm-12 col-md-12 col-lg-7">
          <div className={styles.contenidoContactoIzquierda}>
            <div className={`${styles.LeftTitulo} text-center mb-4`}>
              Inicia una conversación con el asesor <br /> de este inmueble
            </div>
            <div className="text-center">
              <Button titulo="iniciar Chat" onClick={() => iniciarChat(data)} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
