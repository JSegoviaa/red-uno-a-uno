import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../context/auth/AuthContext';
import { Usuario } from '../interfaces/UserInterface';

export const useUserInfo = () => {
  const { auth } = useContext(AuthContext);
  const [user, setUser] = useState<Usuario>();
  const [loading, setLoading] = useState(true);

  const getUserInfo = async () => {
    setLoading(true);

    const data = await fetch('http://localhost:8080/api/usuarios/' + auth.uid);
    const resp = await data.json();

    setLoading(false);
    setUser(resp);
  };

  useEffect(() => {
    getUserInfo();
  }, []);

  return { user, loading };
};
