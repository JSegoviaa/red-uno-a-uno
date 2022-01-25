export interface HistorialResp {
  ok: boolean;
  msg: string;
  total: number;
  historialUsuario: HistorialUsuario[];
}

export interface HistorialUsuario {
  _id: string;
  usuario: string;
  inmueble: Inmueble;
  createdAt: string;
  updatedAt: string;
}

export interface Inmueble {
  _id: string;
  titulo: string;
  slug: string;
}

export interface HistData {
  usuario: string | null | undefined;
  inmueble: string;
}
