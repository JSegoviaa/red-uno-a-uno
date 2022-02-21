import { obtenerUbicacionUsuario } from "helpers/obtenerUbicación";
import {
  createContext,
  Dispatch,
  FC,
  SetStateAction,
  useEffect,
  useState,
} from "react";
import { Location } from "../../interfaces/MapInterfaces";

interface ContextProps {
  coordenadas: Location;
  setCoordenadas: Dispatch<SetStateAction<Location>>;
  ubicacion: Location;
  setUbicacion: Dispatch<SetStateAction<Location>>;
  direccion: string | undefined;
  setDireccion: any;
  dirMapa: string | undefined;
  setDirMapa: any;
  zoom: number;
  setZoom: any;
  ubicacionUsuario: Location;
}

export const MapContext = createContext({} as ContextProps);

export const MapProvider: FC = ({ children }) => {
  const [coordenadas, setCoordenadas] = useState<Location>({
    lat: 19.4326077,
    lng: -99.133208,
  });

  const [ubicacion, setUbicacion] = useState<Location>({
    lat: 19.4326077,
    lng: -99.133208,
  });

  const [ubicacionUsuario, setUbicacionUsuario] = useState<Location>({
    lat: 0,
    lng: 0,
  });

  const [direccion, setDireccion] = useState();

  const [dirMapa, setDirMapa] = useState("Ciudad de México, CDMX, México");

  const [zoom, setZoom] = useState(5);

  useEffect(() => {
    obtenerUbicacionUsuario().then((lngLat) =>
      setUbicacionUsuario({ lat: lngLat.lat, lng: lngLat.lng })
    );
  }, []);

  return (
    <MapContext.Provider
      value={{
        coordenadas,
        setCoordenadas,
        ubicacion,
        setUbicacion,
        direccion,
        setDireccion,
        dirMapa,
        setDirMapa,
        zoom,
        setZoom,
        ubicacionUsuario,
      }}
    >
      {children}
    </MapContext.Provider>
  );
};
