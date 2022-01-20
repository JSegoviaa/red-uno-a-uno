import { development, production } from "../credentials/credentials";
import { RegisterData, Resp, SubirFoto } from "../interfaces/AuthInterface";
import { Contact, ContactResp } from "../interfaces/ContactInterface";
import {
  BorrarInmuebleResp,
  CrearInmuebleResp,
} from "../interfaces/CrearInmuebleInterface";
import { FavData, FavResp } from "../interfaces/Favoritos";
import { HistData, HistorialResp } from "../interfaces/Historial";
import { SubirImagenesInmueble } from "../interfaces/InmueblesInterface";
import { ActualizarUsuario, RespActualizar } from "../interfaces/UserInterface";

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

export const fetchInmueble = async (
  endpoint: string,
  data?: any,
  method = "GET"
): Promise<CrearInmuebleResp> => {
  const url = `${baseURL}/${endpoint}`;
  const token = localStorage.getItem("token") || "";

  const resp = await fetch(url, {
    method,
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
