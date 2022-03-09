import moment from "moment";

export const publicadoHace = (fecha: number | string) => {
  const hoyMes = moment(fecha);

  return hoyMes.fromNow();
};

export const horaMes = (fecha: number | string | undefined) => {
  const hoyMes = moment(fecha);

  return hoyMes.format("HH:mm a - D/MM/YY");
};

export const hora = (fecha: number | string) => {
  const hoyMes = moment(fecha);
  return hoyMes.format("HH:mm a");
};
