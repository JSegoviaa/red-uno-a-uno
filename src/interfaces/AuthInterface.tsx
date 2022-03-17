export interface Auth {
  uid: string | undefined | null;
  checking: boolean;
  logged: boolean;
  nombre: string | number | string[] | undefined;
  apellido: string | number | string[] | undefined;
  correo: string | number | string[] | undefined;
  telefonoOficina: string | number | string[] | undefined;
  telefonoPersonal: string | number | string[] | undefined;
  nombreInmobiliaria: string | number | string[] | undefined;
  direccionFisica: string | undefined;
  facebookpage: string | number | string[] | undefined;
  instagram: string | number | string[] | undefined;
  twitter: string | number | string[] | undefined;
  youtube: string | number | string[] | undefined;
  perfilEmpresarial: string | number | string[] | undefined;
  linkedin: string | number | string[] | undefined;
  img: string | undefined;
  logo: string | undefined;
  role: string | undefined;
  paqueteAdquirido: string | undefined;
  usuarios: number | undefined;
  propietario: string | undefined;
  google: true | undefined;
  recibirCorreo: boolean;
}

export interface Resp {
  token: string;
  ok: boolean;
  msg: string;
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
  propietario?: string | undefined | null;
}

export interface SubirFoto {
  ok: boolean;
  msg: string;
  usuario: Auth;
}
