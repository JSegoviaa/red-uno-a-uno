import { useRouter } from 'next/router';
import { useContext } from 'react';
import { AuthContext } from '../context/auth/AuthContext';

export const usePrivateRoute = () => {
  const RutaPrivada = () => {
    const { auth } = useContext(AuthContext);
    const router = useRouter();

    if (auth.logged) {
      router.replace('/');
    }
  };
};
