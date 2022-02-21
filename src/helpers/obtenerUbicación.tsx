interface UbicacionUsuario {
  lng: number;
  lat: number;
}

export const obtenerUbicacionUsuario = async (): Promise<UbicacionUsuario> => {
  return new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(
      ({ coords }) => {
        resolve({ lng: coords.longitude, lat: coords.latitude });
      },
      (err) => {
        alert("No se pudo obtener la geolocalización");
        console.log(err);
        reject();
      }
    );
  });
};
