import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../context/auth/AuthContext';
import { Usuario } from '../interfaces/UserInterface';

export const useUserInfo = () => {
  const { auth } = useContext(AuthContext);
  const [user, setUser] = useState<Usuario>();
  const [loading, setLoading] = useState(true);

  const getUserInfo = async () => {
    setLoading(true);

    const data = await fetch('https://prueba-red1a1.herokuapp.com/api/usuarios/' + auth.uid);
    const resp = await data.json();

    setLoading(false);
    setUser(resp);
  };

  useEffect(() => {
    getUserInfo();
  }, []);

  return { user, loading };
};
