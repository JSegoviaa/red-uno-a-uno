import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/auth/AuthContext";
import { Usuario } from "../interfaces/UserInterface";

const devURL = "http://localhost:8080/api";
const baseURL = "https://prueba-red1a1.herokuapp.com/api";

export const useUserInfo = () => {
  const { auth } = useContext(AuthContext);
  const [user, setUser] = useState<Usuario>();
  const [loading, setLoading] = useState(true);

  const getUserInfo = async () => {
    setLoading(true);

    const data = await fetch(baseURL + "/usuarios/" + auth.uid);
    const resp = await data.json();

    setLoading(false);
    setUser(resp);
  };

  useEffect(() => {
    getUserInfo();
  }, []);

  return { user, loading };
};
