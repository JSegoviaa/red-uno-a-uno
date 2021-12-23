export interface Auth {
  uid: string | null;
  checking: boolean;
  logged: boolean;
  nombre: string | null;
  apellido: string | null;
  correo: string | null;
}

export interface Resp {
  token: string;
  ok: boolean;
  msg: 'string';
  usuario: Auth;
  errors: Errors[];
}

interface Errors {
  msg: string;
  param: string;
  location: string;
}
