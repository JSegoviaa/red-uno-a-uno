import { AprobadoRechazado, SolicitudResp } from "interfaces/SolicitudInteface";
import { CrearChat } from "../context/chat/ChatContext";
import { ActualizarInmueble } from "../context/inmuebles/InmuebleContext";
import { development, production } from "../credentials/credentials";
import { RegisterData, Resp, SubirFoto } from "../interfaces/AuthInterface";
import { CrearChatResponse, MensajesResp } from "../interfaces/ChatInterface";
import {
  Contact,
  ContactResp,
  NuevoPedido,
  NuevoPedidoAdmin,
} from "../interfaces/ContactInterface";
import {
  BorrarInmuebleResp,
  CrearInmuebleResp,
} from "../interfaces/CrearInmuebleInterface";
import { FavData, FavResp } from "../interfaces/Favoritos";
import { HistData, HistorialResp } from "../interfaces/Historial";
import {
  InmueblesResponse,
  SubirImagenesInmueble,
} from "../interfaces/InmueblesInterface";
import {
  CrearUsuarioResp,
  UsuariosPagado,
} from "../interfaces/MisUsuariosInterface";
import { Pedido, PedidoIndividualResp } from "../interfaces/PedidosInterface";
import { ActualizarUsuario, RespActualizar } from "../interfaces/UserInterface";
import {
  NuevaReferencia,
  ReferenciaNumero,
} from "../interfaces/ReferenciasInterface";

const baseURL = production;
const devURL = development;

export const fetchSinToken = async (
  endpoint: string,
  data: RegisterData,
  method = "GET"
): Promise<Resp> => {
  const url = `${baseURL}/${endpoint}`;

  if (method === "GET") {
    const resp = await fetch(url);
    return await resp.json();
  } else {
    const resp = await fetch(url, {
      method,
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(data),
    });

    return await resp.json();
  }
};

export const googleLogin = async (
  endpoint: string,
  body: any
): Promise<Resp> => {
  const url = `${baseURL}/${endpoint}`;

  const res = await fetch(url, {
    method: "POST",
    headers: { "Content-type": "application/json" },
    body: JSON.stringify(body),
  });

  const data = await res.json();

  return data;
};

export const crearUsuarioFetch = async (
  endpoint: string,
  data: RegisterData
): Promise<Resp> => {
  const url = `${baseURL}/${endpoint}`;

  const resp = await fetch(url, {
    method: "POST",
    headers: { "Content-type": "application/json" },
    body: JSON.stringify(data),
  });
  return await resp.json();
};

export const fetchConToken = async (
  endpoint: string,
  data?: RegisterData,
  method = "GET"
) => {
  const url = `${baseURL}/${endpoint}`;
  const token = localStorage.getItem("token") || "";

  if (method === "GET") {
    const resp = await fetch(url, {
      headers: { "x-token": token },
    });
    return await resp.json();
  } else {
    const resp = await fetch(url, {
      method,
      headers: { "Content-type": "application/json", "x-token": token },
      body: JSON.stringify(data),
    });

    return await resp.json();
  }
};

export const fetchContactForm = async (
  endpoint: string,
  data: Contact
): Promise<ContactResp> => {
  const url = `${baseURL}/${endpoint}`;

  const resp = await fetch(url, {
    method: "POST",
    headers: { "Content-type": "application/json" },
    body: JSON.stringify(data),
  });

  return await resp.json();
};
export const fetchSolicitud = async (
  endpoint: string,
  data: any
): Promise<ContactResp> => {
  const url = `${baseURL}/${endpoint}`;
  const token = localStorage.getItem("token") || "";

  const resp = await fetch(url, {
    method: "POST",
    headers: { "Content-type": "application/json", "x-token": token },
    body: JSON.stringify(data),
  });

  return await resp.json();
};

export const fetchEnviarSolicitud = async (
  endpoint: string,
  data: any
): Promise<SolicitudResp> => {
  const url = `${baseURL}/${endpoint}`;
  const token = localStorage.getItem("token") || "";

  const resp = await fetch(url, {
    method: "POST",
    headers: { "Content-type": "application/json", "x-token": token },
    body: JSON.stringify(data),
  });

  return await resp.json();
};

export const fetchAceptarRechazarSolicitud = async (
  endpoint: string,
  data: any
): Promise<AprobadoRechazado> => {
  const url = `${baseURL}/${endpoint}`;
  const token = localStorage.getItem("token") || "";

  const res = await fetch(url, {
    method: "PUT",
    headers: { "Content-type": "application/json", "x-token": token },
    body: JSON.stringify(data),
  });

  return await res.json();
};

export const nuevoPedido = async (
  endpoint: string,
  data: NuevoPedido
): Promise<ContactResp> => {
  const url = `${baseURL}/${endpoint}`;

  const res = await fetch(url, {
    method: "POST",
    headers: { "Content-type": "application/json" },
    body: JSON.stringify(data),
  });

  return await res.json();
};

export const nuevoPedidoAdmin = async (
  endpoint: string,
  data: NuevoPedidoAdmin
): Promise<ContactResp> => {
  const url = `${baseURL}/${endpoint}`;

  const res = await fetch(url, {
    method: "POST",
    headers: { "Content-type": "application/json" },
    body: JSON.stringify(data),
  });

  return await res.json();
};

export const fetchInmueble = async (
  endpoint: string,
  data?: any
): Promise<CrearInmuebleResp> => {
  const url = `${baseURL}/${endpoint}`;
  const token = localStorage.getItem("token") || "";

  const resp = await fetch(url, {
    method: "POST",
    headers: { "Content-type": "application/json", "x-token": token },
    body: JSON.stringify(data),
  });

  return await resp.json();
};

export const fetchActualizarInmueble = async (
  endpoint: string,
  data: ActualizarInmueble
): Promise<InmueblesResponse> => {
  const url = `${baseURL}/${endpoint}`;
  const token = localStorage.getItem("token") || "";

  const resp = await fetch(url, {
    method: "PUT",
    headers: { "Content-type": "application/json", "x-token": token },
    body: JSON.stringify(data),
  });

  return await resp.json();
};

export const fetchBorrarInmueble = async (
  endpoint: string,
  method = "DELETE"
): Promise<BorrarInmuebleResp> => {
  const url = `${baseURL}/${endpoint}`;
  const token = localStorage.getItem("token") || "";

  const resp = await fetch(url, {
    method,
    headers: { "Content-type": "application/json", "x-token": token },
  });

  return await resp.json();
};

export const actualizarPerfilFetch = async (
  endpoint: string,
  data: ActualizarUsuario
): Promise<RespActualizar> => {
  const url = `${production}/${endpoint}`;
  const token = localStorage.getItem("token") || "";

  const resp = await fetch(url, {
    method: "PUT",
    headers: { "Content-type": "application/json", "x-token": token },
    body: JSON.stringify(data),
  });

  return await resp.json();
};

export const actualizarRolUsuario = async (
  endpoint: string,
  data: any
): Promise<RespActualizar> => {
  const url = `${baseURL}/${endpoint}`;
  const token = localStorage.getItem("token") || "";

  const resp = await fetch(url, {
    method: "PUT",
    headers: { "Content-type": "application/json", "x-token": token },
    body: JSON.stringify(data),
  });

  return await resp.json();
};

export const agregarFav = async (
  endpoint: string,
  data: FavData
): Promise<FavResp> => {
  const url = `${baseURL}/${endpoint}`;
  const token = localStorage.getItem("token") || "";

  const res = await fetch(url, {
    method: "POST",
    headers: { "Content-type": "application/json", "x-token": token },
    body: JSON.stringify(data),
  });

  return await res.json();
};

export const eliminarFavorito = async (endpoint: string): Promise<FavResp> => {
  const url = `${baseURL}/${endpoint}`;
  const token = localStorage.getItem("token") || "";

  const res = await fetch(url, {
    method: "DELETE",
    headers: { "Content-type": "application/json", "x-token": token },
  });

  return await res.json();
};

export const agregarHist = async (
  endpoint: string,
  data: HistData
): Promise<HistorialResp> => {
  const url = `${baseURL}/${endpoint}`;
  const token = localStorage.getItem("token") || "";

  const res = await fetch(url, {
    method: "POST",
    headers: { "Content-type": "application/json", "x-token": token },
    body: JSON.stringify(data),
  });

  return await res.json();
};

export const eliminarHist = async (
  endpoint: string
): Promise<HistorialResp> => {
  const url = `${baseURL}/${endpoint}`;
  const token = localStorage.getItem("token") || "";

  const res = await fetch(url, {
    method: "DELETE",
    headers: { "Content-type": "application/json", "x-token": token },
  });

  return await res.json();
};

export const subirFotoPerfil = async (
  endpoint: string,
  data: any
): Promise<SubirFoto> => {
  const url = `${baseURL}/${endpoint}`;
  const token = localStorage.getItem("token") || "";

  const resp = await fetch(url, {
    method: "POST",
    headers: { "x-token": token },
    body: data,
  });

  return await resp.json();
};

export const subirComprobanteFetch = async (
  endpoint: string,
  data: any
): Promise<ReferenciaNumero> => {
  const url = `${baseURL}/${endpoint}`;
  const token = localStorage.getItem("token") || "";

  const resp = await fetch(url, {
    method: "POST",
    headers: { "x-token": token },
    body: data,
  });

  return await resp.json();
};

export const subirFotosInmueble = async (
  endpoint: string,
  data: any
): Promise<SubirImagenesInmueble> => {
  const url = `${baseURL}/${endpoint}`;
  const token = localStorage.getItem("token") || "";

  const resp = await fetch(url, {
    method: "POST",
    headers: { "x-token": token },
    body: data,
  });

  return await resp.json();
};

export const enviarNuevoMensaje = async (
  endpoint: string,
  data: any
): Promise<MensajesResp> => {
  const url = `${baseURL}/${endpoint}`;
  const token = localStorage.getItem("token") || "";

  const resp = await fetch(url, {
    method: "POST",
    headers: { "Content-type": "application/json", "x-token": token },
    body: JSON.stringify(data),
  });

  return await resp.json();
};

export const obtenerMensajes = async (endpoint: string): Promise<any> => {
  const url = `${baseURL}/${endpoint}`;
  const token = localStorage.getItem("token") || "";

  const resp = await fetch(url, {
    headers: { "x-token": token },
  });

  return await resp.json();
};

export const crearChat = async (
  endpoint: string,
  data: CrearChat
): Promise<CrearChatResponse> => {
  const url = `${baseURL}/${endpoint}`;
  const token = localStorage.getItem("token") || "";

  const resp = await fetch(url, {
    method: "POST",
    headers: { "Content-type": "application/json", "x-token": token },
    body: JSON.stringify(data),
  });

  return await resp.json();
};

export const anadirPaqueteInv = async (
  endpoint: string,
  data: Pedido
): Promise<PedidoIndividualResp> => {
  const url = `${baseURL}/${endpoint}`;
  const token = localStorage.getItem("token") || "";

  const resp = await fetch(url, {
    method: "POST",
    headers: { "Content-type": "application/json", "x-token": token },
    body: JSON.stringify(data),
  });

  return await resp.json();
};

export const agregarUsuario = async (
  endpoint: string,
  data: UsuariosPagado
): Promise<CrearUsuarioResp> => {
  const url = `${baseURL}/${endpoint}`;
  const token = localStorage.getItem("token") || "";

  const resp = await fetch(url, {
    method: "POST",
    headers: { "Content-type": "application/json", "x-token": token },
    body: JSON.stringify(data),
  });

  return await resp.json();
};

export const generarRefInd = async (
  endpoint: string,
  data: any
): Promise<NuevaReferencia> => {
  const url = `${baseURL}/${endpoint}`;
  const token = localStorage.getItem("token") || "";

  const res = await fetch(url, {
    method: "POST",
    headers: { "Content-type": "application/json", "x-token": token },
    body: JSON.stringify(data),
  });

  return await res.json();
};

export const generarRefMul = async (
  endpoint: string,
  data: any
): Promise<NuevaReferencia> => {
  const url = `${baseURL}/${endpoint}`;
  const token = localStorage.getItem("token") || "";

  const res = await fetch(url, {
    method: "POST",
    headers: { "Content-type": "application/json", "x-token": token },
    body: JSON.stringify(data),
  });

  return await res.json();
};

export const aprobarRef = async (
  endpoint: string
): Promise<ReferenciaNumero> => {
  const url = `${baseURL}/${endpoint}`;
  const token = localStorage.getItem("token") || "";

  const res = await fetch(url, {
    method: "PUT",
    headers: { "Content-type": "application/json", "x-token": token },
    body: JSON.stringify({ estado: true }),
  });

  return await res.json();
};
