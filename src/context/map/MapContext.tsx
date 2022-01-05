import { createContext, Dispatch, FC, SetStateAction, useState } from "react";
import { Location } from "../../interfaces/MapInterfaces";

interface ContextProps {
  coordenadas: Location;
  setCoordenadas: Dispatch<SetStateAction<Location>>;
}

export const MapContext = createContext({} as ContextProps);

export const MapProvider: FC = ({ children }) => {
  const [coordenadas, setCoordenadas] = useState<Location>({
    lat: 19.4326077,
    lng: -99.133208,
  });

  return (
    <MapContext.Provider value={{ coordenadas, setCoordenadas }}>
      {children}
    </MapContext.Provider>
  );
};
