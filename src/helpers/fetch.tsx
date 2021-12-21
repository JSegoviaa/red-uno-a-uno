interface Data {
  correo: string;
  password: string;
}

const baseURL = 'http://localhost:8080/api';

export const fetchSinToken = async (
  endpoint: string,
  data: Data,
  method = 'GET'
) => {
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
