export interface Contact {
  nombre: string;
  apellido: string;
  correo: string;
  telefono: string;
  mensaje: string;
}

export interface NuevoPedido {
  nombre: string;
  apellido: string;
  correo: string;
  nombrePaquete: string;
  precio: number;
  importe: number;
  idCompra: string;
}

export interface NuevoPedidoAdmin {
  nombre: string;
  apellido: string;
  nombrePaquete: string;
  precio: number;
  importe: number;
  idCompra: string;
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
