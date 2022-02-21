import { useContext, useEffect, useState } from "react";
import { DirectionsRenderer, GoogleMap, Marker } from "@react-google-maps/api";
import { Container, Row } from "react-bootstrap";
import { AuthContext } from "../../../../context/auth/AuthContext";
import { InmueblesUsuario } from "../../../../interfaces/CrearInmuebleInterface";
import Button from "../../../ui/button/Button";
import styles from "./Inmueble.module.css";
import { agregarFav } from "../../../../helpers/fetch";
import { toast } from "react-toastify";
import { MapContext } from "context/map/MapContext";

interface Props {
  inmuebles: {
    inmueble: InmueblesUsuario;
    ok: boolean;
  };
}

const containerStyle = {
  width: "100%",
  height: "400px",
};

const Ubicacion = ({ inmuebles }: Props) => {
  const { auth } = useContext(AuthContext);
  const { ubicacionUsuario } = useContext(MapContext);
  const [comoLLegar, setComoLLegar] = useState(false);
  const [direcciones, setDirecciones] = useState<any>();

  const agregarFavorito = async (inmuebleId: string) => {
    const favorito = {
      usuario: auth.uid,
      inmueble: inmuebleId,
      propietario: inmuebles.inmueble.usuario._id,
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

  const comoLlegar = () => setComoLLegar(!comoLLegar);

  const destination = {
    lat: inmuebles.inmueble.lat,
    lng: inmuebles.inmueble.lng,
  };

  const origin = { lat: ubicacionUsuario.lat, lng: ubicacionUsuario.lng };

  useEffect(() => {
    const directionsService = new google.maps.DirectionsService();
    directionsService.route(
      {
        origin: new google.maps.LatLng(origin.lat, origin.lng),
        destination: new google.maps.LatLng(destination.lat, destination.lng),
        travelMode: google.maps.TravelMode.DRIVING,
      },
      (result, status) => {
        if (status === google.maps.DirectionsStatus.OK) {
          setDirecciones(result);
        } else {
          console.error(`error fetching directions ${result}`);
        }
      }
    );
  }, [direcciones]);

  return (
    <section className="mt-5">
      <Container>
        <Row>
          <div className="col-sm-12 col-md-12 col-lg-6 col-xl-6">
            <GoogleMap
              mapContainerStyle={containerStyle}
              center={{
                lat: inmuebles.inmueble.lat,
                lng: inmuebles.inmueble.lng,
              }}
              zoom={comoLLegar ? 10 : 16}
            >
              <Marker
                position={{
                  lat: inmuebles.inmueble.lat,
                  lng: inmuebles.inmueble.lng,
                }}
                icon={{ url: "/images/icons/marcador.svg" }}
              />

              {comoLLegar ? (
                <Marker
                  position={{
                    lat: ubicacionUsuario.lat,
                    lng: ubicacionUsuario.lng,
                  }}
                  icon={{ url: "/images/icons/marcador.svg" }}
                />
              ) : null}
              {comoLLegar ? (
                <DirectionsRenderer directions={direcciones} />
              ) : null}
            </GoogleMap>

            <h3 className="text-center py-3">
              {ubicacionUsuario.lat === 0 ||
              ubicacionUsuario.lat === 0 ? null : (
                <Button
                  titulo={!comoLLegar ? "Mostrar ruta" : "Ocultar ruta"}
                  onClick={comoLlegar}
                />
              )}
            </h3>
          </div>
          <div className="col-sm-12 col-md-12 col-lg-6 col-xl-6">
            <div className={`${styles.inmuebleTitleUbicacion} mb-4`}>
              {inmuebles.inmueble.titulo}
            </div>
            <div className="mb-4">
              <div className="row">
                <div className="col-12 mb-4">
                  <span className={`${styles.inmuebleTipo2} me-4`}>
                    <img
                      src="/images/icons/deatails-icons/ubicacion.png"
                      alt="..."
                      width={25}
                    />
                    {inmuebles.inmueble.direccion}
                  </span>
                </div>
              </div>
            </div>
            <div className={styles.inmuebleContent}>
              {inmuebles.inmueble.descripcion
                ? inmuebles.inmueble.descripcion
                : "Aún no hay descripción para este inmueble"}
            </div>
          </div>
          <div className="col-12 text-center my-5">
            {auth.uid ? (
              <Button
                titulo="Añadir a favoritos"
                onClick={() => agregarFavorito(inmuebles.inmueble._id)}
              />
            ) : null}
          </div>
        </Row>
      </Container>
    </section>
  );
};

export default Ubicacion;
