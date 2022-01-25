import { useContext } from "react";
import { useRouter } from "next/router";
import {
  Accordion,
  AccordionContext,
  Card,
  useAccordionButton,
} from "react-bootstrap";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { toast } from "react-toastify";
import { AuthContext } from "../../../context/auth/AuthContext";
import { agregarFav, agregarHist } from "../../../helpers/fetch";
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
  const { auth } = useContext(AuthContext);
  const router = useRouter();
  const { inmuebles, cargando } = useInmuebles();

  const compartir = () => toast.success(`Se ha copiado al portapapeles`);

  const agregarFavorito = async (inmuebleId: string, propietario: any) => {
    const favorito = {
      usuario: auth.uid,
      inmueble: inmuebleId,
      propietario,
    };
    const resp = await agregarFav("favoritos", favorito);

    if (resp.ok) {
      toast.success(resp.msg);
    }

    if (!resp.ok) {
      if (resp.errors) {
        resp.errors.map((error) => {
          toast.error(error.msg);
        });
      }

      if (!resp.ok) {
        toast.error(resp.msg);
      }
    }
  };

  const handleProperty = async (id: string, slug: string) => {
    const data = { usuario: auth.uid, inmueble: id };

    router.push(`/propiedades/${slug}`);

    await agregarHist("historial", data);
  };

  return (
    <div className={styles.containerList}>
      <Accordion defaultActiveKey="0">
        <Card className={styles.lista}>
          <Card.Header className={styles.cardheader}>
            {inmuebles?.length === 0 ? null : (
              <ContextAwareToggle eventKey="1">
                Vista de lista
              </ContextAwareToggle>
            )}
          </Card.Header>

          {inmuebles?.length === 0 ? null : (
            <Accordion.Collapse eventKey="1">
              <Card.Body className={styles.bodyList}>
                <div className="row">
                  {cargando ? (
                    <Loading />
                  ) : (
                    <>
                      {inmuebles
                        ?.filter((inmueble) => {
                          return inmueble.publicado === true;
                        })
                        .map((inmueble) => (
                          <div
                            key={inmueble._id}
                            className="col-sm-6 col-md-12 col-lg-12"
                          >
                            <div
                              className={`${styles.cardPropBody} card mb-3 pointer`}
                            >
                              <div className={styles.topIcons}>
                                <CopyToClipboard
                                  onCopy={compartir}
                                  text={`red1a1.com/app/propiedades/${inmueble.slug}`}
                                >
                                  <button
                                    type="button"
                                    className={`${styles.iconShare} btn me-1`}
                                  />
                                </CopyToClipboard>
                                <button
                                  onClick={() =>
                                    agregarFavorito(
                                      inmueble._id,
                                      inmueble.usuario
                                    )
                                  }
                                  type="button"
                                  className={`${styles.iconFav} btn me-0`}
                                />
                              </div>

                              <div
                                className="row"
                                onClick={() =>
                                  handleProperty(inmueble._id, inmueble.slug)
                                }
                              >
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
