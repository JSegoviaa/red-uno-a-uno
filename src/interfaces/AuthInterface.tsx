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

export interface RegisterData {
  nombre?: string;
  apellido?: string;
  role?: string;
  correo: string;
  password: string;
}
