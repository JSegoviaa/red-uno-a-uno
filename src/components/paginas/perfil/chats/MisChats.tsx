import styles from './MisChats.module.css'
import { Offcanvas } from 'react-bootstrap'
interface Props { showCanvas: boolean, handleCloseCanvas: any }

const MisChats = ({ showCanvas, handleCloseCanvas }: Props) => {

    return (
        <Offcanvas show={showCanvas} onHide={handleCloseCanvas} placement="end" >
            <Offcanvas.Header closeButton className={styles.OFhead}>
                <Offcanvas.Title>Mis chats</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body className={styles.OFbody}>
                <div className={`${styles.ChatHover} pointer mb-2`}>
                    <div className={styles.michat}>
                        <div className="row">
                            <div className="col-2 text-center">
                                <div className={styles.backImg}>
                                    <img src="/images/avatares/2.svg" alt="..." style={{borderRadius:'50%'}}/>
                                </div>
                            </div>
                            <div className="col-10">
                                <div className={styles.nombre}>
                                    James Franco
                                </div>
                                <div className={styles.mensaje}>
                                    Ya me llego de la kuuuuusshhhh, quieres?
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={`${styles.ChatHover} pointer mb-2`}>
                    <div className={styles.michat}>
                        <div className="row">
                            <div className="col-2 text-center">
                                <div className={styles.backImg}>
                                    <img src="/images/avatares/4.svg" alt="..." style={{borderRadius:'50%'}}/>
                                </div>
                            </div>
                            <div className="col-10">
                                <div className={styles.nombre}>
                                    Seth Rogen
                                </div>
                                <div className={styles.mensaje}>
                                    Ya viste lo que bajó Franco?!?!?!?!
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={`${styles.ChatHover} pointer mb-2`}>
                    <div className={styles.michat}>
                        <div className="row">
                            <div className="col-2 text-center">
                                <div className={styles.backImg}>
                                    <img src="/images/avatares/6.svg" alt="..." style={{borderRadius:'50%'}}/>
                                </div>
                            </div>
                            <div className="col-10">
                                <div className={styles.nombre}>
                                    Jonah Hill
                                </div>
                                <div className={styles.mensaje}>
                                    Mañana fiesta en mi casa, ya le dije a franco y a seth
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={`${styles.ChatHover} pointer mb-2`}>
                    <div className={styles.michat}>
                        <div className="row">
                            <div className="col-2 text-center">
                                <div className={styles.backImg}>
                                    <img src="/images/avatares/2.svg" alt="..." style={{borderRadius:'50%'}}/>
                                </div>
                            </div>
                            <div className="col-10">
                                <div className={styles.nombre}>
                                    Michael Cera
                                </div>
                                <div className={styles.mensaje}>
                                    Vasir o no vasir?
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={`${styles.ChatHover} pointer mb-2`}>
                    <div className={styles.michat}>
                        <div className="row">
                            <div className="col-2 text-center">
                                <div className={styles.backImg}>
                                    <img src="/images/avatares/1.svg" alt="..." style={{borderRadius:'50%'}}/>
                                </div>
                            </div>
                            <div className="col-10">
                                <div className={styles.nombre}>
                                    Zendaya Maree
                                </div>
                                <div className={styles.mensaje}>
                                    Por que me odias? :(
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={`${styles.ChatHover} pointer mb-2`}>
                    <div className={styles.michat}>
                        <div className="row">
                            <div className="col-2 text-center">
                                <div className={styles.backImg}>
                                    <img src="/images/avatares/4.svg" alt="..." style={{borderRadius:'50%'}}/>
                                </div>
                            </div>
                            <div className="col-10">
                                <div className={styles.nombre}>
                                    Keanu Reeves
                                </div>
                                <div className={styles.mensaje}>
                                    A poco si actuo igual en todas las peliculas? :/
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={`${styles.ChatHover} pointer mb-2`}>
                    <div className={styles.michat}>
                        <div className="row">
                            <div className="col-2 text-center">
                                <div className={styles.backImg}>
                                    <img src="/images/avatares/5.svg" alt="..." style={{borderRadius:'50%'}}/>
                                </div>
                            </div>
                            <div className="col-10">
                                <div className={styles.nombre}>
                                    Scarlet Johanson
                                </div>
                                <div className={styles.mensaje}>
                                    Que pasaaa? te veo en la fiesta de Jonah o te da miedo?
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={`${styles.ChatHover} pointer mb-2`}>
                    <div className={styles.michat}>
                        <div className="row">
                            <div className="col-2 text-center">
                                <div className={styles.backImg}>
                                    <img src="/images/avatares/3.svg" alt="..." style={{borderRadius:'50%'}}/>
                                </div>
                            </div>
                            <div className="col-10">
                                <div className={styles.nombre}>
                                    Kat Dennings
                                </div>
                                <div className={styles.mensaje}>
                                    Te veo hoy?
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Offcanvas.Body>
        </Offcanvas>
    )
}

export default MisChats
