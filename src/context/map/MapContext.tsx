import {
  createContext,
  Dispatch,
  FC,
  SetStateAction,
  useEffect,
  useState,
} from "react";
import { obtenerUbicacionUsuario } from "helpers/obtenerUbicación";
import { Location } from "../../interfaces/MapInterfaces";
import { casasC, rentas } from "credentials";

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
  setZoom: Dispatch<SetStateAction<number>>;
  southEast: Bounds;
  setSouthEast: Dispatch<SetStateAction<Bounds>>;
  northWest: Bounds;
  setNorthWest: Dispatch<SetStateAction<Bounds>>;
  southWest: google.maps.LatLngLiteral | undefined;
  setSouthWest: Dispatch<SetStateAction<google.maps.LatLngLiteral | undefined>>;
  northEast: google.maps.LatLngLiteral | undefined;
  setNorthEast: Dispatch<SetStateAction<google.maps.LatLngLiteral | undefined>>;
  ubicacionUsuario: Location;
  setUbicacionUsuario: Dispatch<SetStateAction<Location>>;
  categoria: string;
  tipoPropiedad: string;
  setCategoria: Dispatch<SetStateAction<string>>;
  setTipoPropiedad: Dispatch<SetStateAction<string>>;
  filtros: boolean;
  setFiltros: Dispatch<SetStateAction<boolean>>;
  ocultarBottomNav: boolean;
  setOcultarBottomNav: Dispatch<SetStateAction<boolean>>;
}

export interface Bounds {
  lng: number | undefined;
  lat: number | undefined;
}

export const MapContext = createContext({} as ContextProps);

export const MapProvider: FC = ({ children }) => {
  const [coordenadas, setCoordenadas] = useState<Location>({
    lat: 19.4326078,
    lng: -99.133207,
  });

  const [ubicacion, setUbicacion] = useState<Location>({
    lat: 19.4326077,
    lng: -99.133208,
  });

  const [ubicacionUsuario, setUbicacionUsuario] = useState<Location>({
    lat: 0,
    lng: 0,
  });
  const [southEast, setSouthEast] = useState<Bounds>({ lat: 0, lng: 0 });
  const [northWest, setNorthWest] = useState<Bounds>({ lat: 0, lng: 0 });
  const [southWest, setSouthWest] = useState<
    google.maps.LatLngLiteral | undefined
  >({ lat: 0, lng: 0 });
  const [northEast, setNorthEast] = useState<
    google.maps.LatLngLiteral | undefined
  >({ lat: 0, lng: 0 });

  const [direccion, setDireccion] = useState();

  const [dirMapa, setDirMapa] = useState("Ciudad de México, CDMX, México");

  const [zoom, setZoom] = useState(5);

  const [categoria, setCategoria] = useState(rentas);
  const [tipoPropiedad, setTipoPropiedad] = useState(casasC);

  const [filtros, setFiltros] = useState(false);
  const [ocultarBottomNav, setOcultarBottomNav] = useState(true);

  useEffect(() => {
    obtenerUbicacionUsuario().then((lngLat) => {
      setUbicacionUsuario({ lat: lngLat.lat, lng: lngLat.lng });
      setCoordenadas({ lat: lngLat.lat, lng: lngLat.lng });
    });
  }, []);

  useEffect(() => {
    coordenadas.lat !== 19.4326078 && coordenadas.lng !== -99.133207
      ? setZoom(12)
      : setZoom(5);
  }, [coordenadas]);

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
        southEast,
        setSouthEast,
        northWest,
        setNorthWest,
        southWest,
        setSouthWest,
        northEast,
        setNorthEast,
        ubicacionUsuario,
        setUbicacionUsuario,
        categoria,
        setCategoria,
        tipoPropiedad,
        setTipoPropiedad,
        filtros,
        setFiltros,
        ocultarBottomNav,
        setOcultarBottomNav,
      }}
    >
      {children}
    </MapContext.Provider>
  );
};
