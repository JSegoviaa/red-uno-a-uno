// Generated by https://quicktype.io

export interface CrearInmuebleResp {
  ok: boolean;
  msg: string;
  inmueble: Inmueble;
  errors: Errors[];
}

interface Errors {
  msg: string;
  param: string;
  location: string;
}

export interface Inmueble {
  _id: string | null;
}

// Generated by https://quicktype.io

export interface BorrarInmuebleResp {
  ok: boolean;
  msg: string;
  inmuebleBorrado: InmuebleBorrado;
}

export interface InmuebleBorrado {
  _id: string;
  titulo: string;
  precio: number;
  publicado: boolean;
  usuario: string;
  categoria: string;
}

// Generated by https://quicktype.io

export interface InmuebleUsuario {
  ok: boolean;
  inmueblesUsuario: InmueblesUsuario[];
}

export interface InmueblesUsuario {
  _id: string;
  titulo: string;
  slug: string;
  descripcion: string;
  precio: number;
  direccion: string | undefined;
  publicado: boolean;
  usuario: Usuario;
  categoria: string;
  AA: boolean;
  agua: boolean;
  amueblado: boolean;
  antiguedad: string;
  baños: number;
  camas: boolean;
  closet: boolean;
  cocina: boolean;
  comedor: boolean;
  comisiones: number;
  discapacitados: boolean;
  escuelas: boolean;
  estufa: boolean;
  gas: boolean;
  habitaciones: number;
  horno: boolean;
  internet: boolean;
  lavadora: boolean;
  luz: boolean;
  m2Construidos: number;
  m2Terreno: number;
  mantenimiento: boolean;
  medioBaños: number;
  microondas: boolean;
  minihorno: boolean;
  otros: string;
  parking: number;
  piscinas: boolean;
  pisos: number;
  propertyType: string;
  refrigerador: boolean;
  sala: boolean;
  secadora: boolean;
  seguridadPrivada: boolean;
  lat: number;
  lng: number;
}

interface Usuario {
  _id: string;
  nombre: string;
  apellido: string;
  correo: string;
}
