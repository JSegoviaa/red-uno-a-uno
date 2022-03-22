import { ReactText, useContext } from "react";
import { formatPrice } from "helpers";
import { InmueblesUsuario } from "interfaces/CrearInmuebleInterface";
import CopyToClipboard from "react-copy-to-clipboard";
import styles from "./Listaprop.module.css";
import { AuthContext } from "context/auth/AuthContext";

interface Props {
  inmueble: InmueblesUsuario;
  compartir: () => ReactText;
  agregarFavorito: (inmuebleId: string, propietario: any) => Promise<void>;
  handleProperty: (id: string, slug: string) => Promise<void>;
}

const ListaPropCard = (props: Props) => {
  const { inmueble, compartir, agregarFavorito, handleProperty } = props;
  const { auth } = useContext(AuthContext);

  return (
    <div className="col-sm-6 col-md-12 col-lg-12">
      <div className={`${styles.cardPropBody} card mb-3 pointer`}>
        <div className={styles.topIcons1}>
          <CopyToClipboard
            onCopy={compartir}
            text={`red1a1.com/app/propiedades/${inmueble.slug}`}
          >
            <button type="button" className={`${styles.iconShare} btn me-1`} />
          </CopyToClipboard>
        </div>
        <div className={styles.topIcons2}>
          {auth.uid ? (
            <button
              onClick={() => agregarFavorito(inmueble._id, inmueble.usuario)}
              type="button"
              className={`${styles.iconFav} btn me-0`}
            />
          ) : null}
        </div>

        <div
          className="row"
          onClick={() => handleProperty(inmueble._id, inmueble.slug)}
        >
          <div className="col-sm-12 col-md-4 col-lg-4 col-xl-4 col-12 p-0">
            <div className={styles.imgcontainer}>
              {inmueble.imgs.length > 0 ? (
                <img
                  className={styles.cardImg}
                  src={inmueble.imgs.length > 0 ? inmueble.imgs[0] : ""}
                  alt={inmueble.titulo}
                />
              ) : (
                <div className={styles.noImage}>
                  <div className={styles.textNoImage}>
                    Aún no hay <br /> imagenes <br /> para mostrar {":("}
                  </div>
                </div>
              )}
            </div>
          </div>
          <div className="col-sm-12 col-md-8 col-lg-8 col-xl-8 col-12">
            <div className={styles.cardContenido}>
              <div className={styles.cardTitle}>{inmueble.titulo}</div>
              <div className={styles.cardDescription}>
                {inmueble.descripcion
                  ? inmueble.descripcion
                  : "Sin descripción"}
              </div>
              <div className="row">
                <div className="col-4 text-center p-0">
                  <span className={styles.tagTipoProp}>
                    {inmueble.tipoPropiedad.nombre}
                  </span>
                </div>
                <div className="col-2 text-center p-0">
                  <span className={styles.tagTipo}>
                    {inmueble.categoria.nombre}
                  </span>
                </div>
                <div className="col-6 text-end">
                  <div className={styles.cardPrecio}>
                    {formatPrice(inmueble.precio)}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListaPropCard;
