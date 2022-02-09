interface Location {
  lng: number;
  lat: number;
}

interface Inmuebles {
  _id: string;
  titulo: string;
  precio: number;
  categoria: string;
}

export interface Usuario {
  nombre: string;
  apellido: string;
  correo: string;
  password: string;
  img: string;
  role: string;
  estado: boolean;
  online: boolean;
  google: boolean;
  perfilEmpresarial: string;
  telefonoOficina: string;
  telefonoPersonal: string;
  nombreInmobiliaria: string;
  direccionFisica: string;
  coordenadas: Location;
  facebookpage: string;
  instagram: string;
  twitter: string;
  youtube: string;
  linkedin: string;
  logo: string;
  inmuebles: Inmuebles[];
}

export interface ActualizarUsuario {
  nombre: string | number | string[] | undefined;
  apellido: string | number | string[] | undefined;
  perfilEmpresarial: string | number | string[] | undefined;
  telefonoOficina: string | number | string[] | undefined;
  telefonoPersonal: string | number | string[] | undefined;
  nombreInmobiliaria: string | number | string[] | undefined;
  direccionFisica: string | number | string[] | undefined;
  facebookpage: string | number | string[] | undefined;
  instagram: string | number | string[] | undefined;
  twitter: string | number | string[] | undefined;
  youtube: string | number | string[] | undefined;
  linkedin: string | number | string[] | undefined;
}

export interface RespActualizar {
  ok: boolean;
  usuario: Usuario;
  msg: string;
  errors: Errors[];
}

interface Errors {
  msg: string;
  param: string;
  location: string;
}

export interface Usuario {
  nombre: string;
  apellido: string;
  correo: string;
  role: string;
  estado: boolean;
  online: boolean;
  google: boolean;
  facebookpage: string;
  instagram: string;
  linkedin: string;
  nombreInmobiliaria: string;
  perfilEmpresarial: string;
  telefonoOficina: string;
  telefonoPersonal: string;
  twitter: string;
  youtube: string;
  uid: string;
  paqueteAdquirido: string;
  usuarios: number | undefined;
}
