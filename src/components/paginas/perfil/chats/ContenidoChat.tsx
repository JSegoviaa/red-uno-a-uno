import React from 'react'
import styles from './Contenido.module.css'

const ContenidoChat = () => {
    return (
        <section>
            <div className="container my-5">
                <div className="row">
                    <div className="col-12">
                        <div className={styles.header}>
                            <div className="row">
                                <div className="col-sm-2 col-md-2 col-lg-1 col-xl-1 col-xxl-1 col-2 text-end">
                                    <img className={styles.perfilImg} src="/images/avatares/2.svg" alt="..." />
                                </div>
                                <div className="col-sm-10 col-md-10 col-lg-11 col-xl-11 col-xxl-11 col-10">
                                    <div className={`${styles.nombre}`}>
                                        James Franco
                                    </div>
                                    <div className={styles.conexion}>
                                        En Linea
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-12">
                        <div className={styles.chatBox}>
                            <div className="row d-flex justify-content-center">
                                <div className="col-sm-11 col-xl-10 mb-2">
                                    <div className={styles.mensaje1}>
                                        Que onda!
                                    </div>
                                </div>
                                <div className="col-sm-11 col-xl-10 mb-2">
                                    <div className={styles.mensaje1}>
                                        Adivina que xd
                                    </div>
                                </div>
                                <div className="col-sm-11 col-xl-10 mb-2">
                                    <div className={styles.mensaje1}>
                                        Voy a vender la casa de isla, pero no se que precio ponerle, puedes pasarme tu contacto del valuador? para empezar con los tramites, ya sabes tambien te va a tocar tu comision si la vendes
                                    </div>
                                </div>
                                <div className="col-sm-11 col-xl-10 mb-2">
                                    <div className={styles.mensaje1}>
                                        Si quieres venir a verla, avisame
                                    </div>
                                </div>
                                <div className="col-sm-11 col-xl-10 mb-2">
                                    <div className={styles.mensaje2}>
                                        Hola!
                                    </div>
                                </div>
                                <div className="col-sm-11 col-xl-10 mb-2">
                                    <div className={styles.mensaje2}>
                                        O sea que ya se acabron las fiestas alocadas en la terraza? :(
                                    </div>
                                </div>
                                <div className="col-sm-11 col-xl-10 mb-2">
                                    <div className={styles.mensaje1}>
                                        Pues cuando compre la nueva la vamos a inaugurar, tu tranqui, ya les avise a los demas
                                    </div>
                                </div>
                                <div className="col-sm-11 col-xl-10 mb-2">
                                    <div className={styles.mensaje2}>
                                        Vale pues, deja le aviso al valuador para ir juntos a revisar la casa
                                    </div>
                                </div>
                                <div className="col-sm-11 col-xl-10 mb-2">
                                    <div className={styles.mensaje2}>
                                        De todos modos te mando su num para que le marques
                                    </div>
                                </div>
                                <div className="col-sm-11 col-xl-10 mb-2">
                                    <div className={styles.mensaje2}>
                                        555 12487
                                    </div>
                                </div>
                                <div className="col-sm-11 col-xl-10 mb-2">
                                    <div className={styles.mensaje1}>
                                        Va, gracias!
                                    </div>
                                </div>
                                <div className="col-sm-11 col-xl-10 mb-2">
                                    <div className={styles.mensaje1}>
                                        Te debo una coca jajaja
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-12">
                        <div className={styles.sendMensajeFooter}>
                            <div className="row d-flex justify-content-center">
                                <div className="col-10">
                                    <div className="input-group">
                                        <input type="text" className="form-control" placeholder="Mensaje..." aria-label="Recipient's username" aria-describedby="basic-addon2" />
                                        <span className="input-group-text" id="basic-addon2">
                                            <button className={styles.btnEnviar}>enviar</button>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ContenidoChat
