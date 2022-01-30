import moment from 'moment';

export const publicadoHace = (fecha: number | string) => {
  const hoyMes = moment(fecha);

  return hoyMes.fromNow();
};

export const horaMes = (fecha: number | string) => {
  const hoyMes = moment(fecha);

  return hoyMes.format('HH:mm a');
};
