import { Resp } from '../interfaces/AuthInterface';

interface Data {
  nombre?: string;
  apellido?: string;
  role?: string;
  correo: string;
  password: string;
}

const baseURL = 'http://localhost:8080/api';

export const fetchSinToken = async (
  endpoint: string,
  data: Data,
  method = 'GET'
): Promise<Resp> => {
  const url = `${baseURL}/${endpoint}`;

  if (method === 'GET') {
    const resp = await fetch(url);
    return await resp.json();
  } else {
    const resp = await fetch(url, {
      method,
      headers: { 'Content-type': 'application/json' },
      body: JSON.stringify(data),
    });

    return await resp.json();
  }
};

export const fetchConToken = async (
  endpoint: string,
  data?: Data,
  method = 'GET'
) => {
  const url = `${baseURL}/${endpoint}`;
  const token = localStorage.getItem('token') || '';

  if (method === 'GET') {
    const resp = await fetch(url, {
      headers: { 'x-token': token },
    });
    return await resp.json();
  } else {
    const resp = await fetch(url, {
      method,
      headers: { 'Content-type': 'application/json', 'x-token': token },
      body: JSON.stringify(data),
    });

    return await resp.json();
  }
};
