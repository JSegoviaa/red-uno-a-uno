import { useContext } from "react";
import {
  Accordion,
  AccordionContext,
  Card,
  useAccordionButton,
} from "react-bootstrap";
import { formatPrice } from "../../../helpers/formatPrice";
import { useInmuebles } from "../../../hooks/useInmuebles";
import Loading from "../../ui/loading/Loading";
import styles from "./ListaProp.module.css";

function ContextAwareToggle({ children, eventKey, callback }: any) {
  const { activeEventKey } = useContext(AccordionContext);

  const decoratedOnClick = useAccordionButton(
    eventKey,
    () => callback && callback(eventKey)
  );

  const isCurrentEventKey = activeEventKey === eventKey;

  return (
    <button
      type="button"
      className={styles.btnList}
      onClick={decoratedOnClick}
      style={{ backgroundColor: isCurrentEventKey ? "#c5c5c5" : "#f7f7f7" }}
    >
      {children}
    </button>
  );
}

const ListaProp = () => {
  const { inmuebles, cargando } = useInmuebles();

  return (
    <div className={styles.containerList}>
      <Accordion defaultActiveKey="0">
        <Card className={styles.lista}>
          <Card.Header className={styles.cardheader}>
            <ContextAwareToggle eventKey="1">Vista de lista</ContextAwareToggle>
          </Card.Header>

          {inmuebles?.length === 0 ? null : (
            <Accordion.Collapse eventKey="1">
              <Card.Body className={styles.bodyList}>
                <div className="row">
                  {cargando ? (
                    <Loading />
                  ) : (
                    <>
                      {inmuebles?.map((inmueble) => (
                        <div key={inmueble._id} className="col-sm-6 col-md-12 col-lg-12">
                          <div className={`${styles.cardPropBody} card mb-3 pointer`}>
                            <div className="row">
                              <div className="col-sm-12 col-md-4 col-lg-4 col-xl-4 col-12 p-0">
                                <div className={styles.imgcontainer}>
                                  <img
                                    className={styles.cardImg}
                                    src={
                                      inmueble.imgs.length > 0
                                        ? inmueble.imgs[0]
                                        : ""
                                    }
                                    alt={inmueble.titulo}
                                  />
                                </div>
                              </div>
                              <div className="col-sm-12 col-md-8 col-lg-8 col-xl-8 col-12">
                                <div className={styles.cardContenido}>
                                  <div className={styles.cardTitle}>
                                    {inmueble.titulo}
                                  </div>
                                  <div className={styles.topIcons}>
                                    <button type="button" className={`${styles.iconShare} btn me-1`}/>
                                    <button type="button" className={`${styles.iconFav} btn me-0`}/>
                                  </div>
                                  <div className={styles.cardPrecio}>
                                    {formatPrice(inmueble.precio)}
                                  </div>
                                  <div className={styles.cardDescription}>
                                    {inmueble.descripcion
                                      ? inmueble.descripcion
                                      : "Sin descripción"}
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </>
                  )}
                </div>
              </Card.Body>
            </Accordion.Collapse>
          )}
        </Card>
      </Accordion>
    </div>
  );
};

export default ListaProp;
