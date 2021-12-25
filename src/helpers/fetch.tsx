import { RegisterData, Resp } from '../interfaces/AuthInterface';
import { Contact, ContactResp } from '../interfaces/ContactInterface';

const baseURL = 'http://localhost:8080/api';

export const fetchSinToken = async (
  endpoint: string,
  data: RegisterData,
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
  data?: RegisterData,
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

export const fetchContactForm = async (
  endpoint: string,
  data: Contact
): Promise<ContactResp> => {
  const url = `${baseURL}/${endpoint}`;

  const resp = await fetch(url, {
    method: 'POST',
    headers: { 'Content-type': 'application/json' },
    body: JSON.stringify(data),
  });

  return await resp.json();
};
