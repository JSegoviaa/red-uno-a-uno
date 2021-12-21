export interface Auth {
  uid: string | null;
  checking: boolean;
  logged: boolean;
  nombre: string | null;
  apellido: string | null;
  correo: string | null;
}

export interface Resp {
  ok: boolean;
  msg: "string";
  usuario: Auth;
}
