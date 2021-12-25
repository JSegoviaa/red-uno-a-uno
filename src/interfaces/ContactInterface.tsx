export interface Contact {
  nombre: string;
  apellido: string;
  correo: string;
  telefono: string;
  mensaje: string;
}

export interface ContactResp {
  ok: boolean;
  msg: string;
  errors: Errors[];
}

interface Errors {
  msg: string;
  param: string;
  location: string;
}
