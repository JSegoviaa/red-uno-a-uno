import { Fragment, useContext, useState } from "react";
import { useRouter } from "next/router";
import {
  Accordion,
  AccordionContext,
  Card,
  useAccordionButton,
} from "react-bootstrap";
import { toast } from "react-toastify";
import { AuthContext } from "../../../context/auth/AuthContext";
import { agregarFav, agregarHist } from "../../../helpers/fetch";
import { useListaInmuebleCoords } from "../../../hooks/useInmuebles";
import Loading from "../../ui/loading/Loading";
import styles from "./ListaProp.module.css";
import { MapContext } from "context/map/MapContext";
import ListaPropCard from "components/ui/listaprop/ListaPropCard";

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
      style={{
        backgroundColor: isCurrentEventKey ? "white" : "white",
        boxShadow: isCurrentEventKey
          ? "none"
          : "0px 0px 14px 7px rgba(0, 0, 0, 0.16)",
        float: isCurrentEventKey ? "right" : "left",
      }}
    >
      {children}
    </button>
  );
}

const ListaProp = () => {
  const { auth } = useContext(AuthContext);
  const {
    coordenadas,
    southEast,
    northWest,
    southWest,
    northEast,
    categoria,
    tipoPropiedad,
  } = useContext(MapContext);
  const router = useRouter();
  const [verLista, setVerLista] = useState(false);
  const [limite, setLimite] = useState(10);
  const { listaInmuebles, cargando } = useListaInmuebleCoords(
    limite,
    southEast,
    northWest,
    southWest,
    northEast,
    coordenadas,
    categoria,
    tipoPropiedad
  );

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

  const cargarMas = () => {
    if (limite < listaInmuebles!.total) {
      setLimite(limite + 10);
    }
  };

  const handleVerLista = () => setVerLista(!verLista);

  return (
    <div className={styles.containerList}>
      <Accordion defaultActiveKey="0">
        <Card className={styles.lista}>
          <Card.Header className={styles.cardheader}>
            {listaInmuebles?.inmuebles?.length === 0 ? null : (
              <ContextAwareToggle eventKey="1">
                <div onClick={handleVerLista}>
                  {verLista ? "< Ocultar lista" : "Vista de lista"}
                </div>
              </ContextAwareToggle>
            )}
          </Card.Header>

          {listaInmuebles?.inmuebles?.length === 0 ? null : (
            <Accordion.Collapse eventKey="1">
              <Card.Body className={styles.bodyList}>
                <div className="row">
                  {cargando ? (
                    <Loading />
                  ) : (
                    <>
                      {listaInmuebles?.inmuebles
                        ?.filter((inmueble) => {
                          return inmueble.publicado === true;
                        })
                        .map((inmueble) => (
                          <Fragment key={inmueble._id}>
                            <ListaPropCard
                              inmueble={inmueble}
                              compartir={compartir}
                              agregarFavorito={agregarFavorito}
                              handleProperty={handleProperty}
                            />
                          </Fragment>
                        ))}
                      {limite > listaInmuebles!.total ? null : (
                        <>
                          {cargando ? (
                            <Loading />
                          ) : (
                            <div
                              className="text-center pointer"
                              onClick={cargarMas}
                            >
                              Cargar más
                            </div>
                          )}
                        </>
                      )}
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
