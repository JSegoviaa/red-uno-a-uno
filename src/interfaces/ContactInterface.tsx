export interface Contact {
  nombre: string;
  apellido: string;
  correo: string;
  telefono: string;
  mensaje: string;
}

export interface NuevoPedido {
  nombre: string | number | string[] | undefined;
  apellido: string | number | string[] | undefined;
  correo: string | number | string[] | undefined;
  nombrePaquete: string | undefined;
  precio: number | undefined;
  importe: number | undefined;
  idCompra: string | undefined;
}

export interface NuevoPedidoAdmin {
  nombre: string | number | string[] | undefined;
  apellido: string | number | string[] | undefined;
  nombrePaquete: string | undefined;
  precio: number | undefined;
  importe: number | undefined;
  idCompra: string | undefined;
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
