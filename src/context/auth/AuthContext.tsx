import { useRouter } from "next/router";
import { createContext, FC, useCallback, useState } from "react";
import { toast } from "react-toastify";
import {
  actualizarPerfilFetch,
  fetchConToken,
  fetchSinToken,
} from "../../helpers/fetch";
import { Auth, Resp } from "../../interfaces/AuthInterface";
import { RespActualizar } from "../../interfaces/UserInterface";

interface ContextProps {
  auth: Auth;
  login: (correo: string, password: string) => Promise<Resp>;
  logOut: () => void;
  register: (
    nombre: string,
    apellido: string,
    correo: string,
    password: string,
    role: string
  ) => Promise<Resp>;
  signInWithGoogle: () => void;
  signInWithFacebook: () => void;
  verificaToken: () => void;
  actualizarPerfil: (data: any) => Promise<RespActualizar>;
}

export const AuthContext = createContext({} as ContextProps);

const initialState: Auth = {
  uid: null,
  checking: true,
  logged: false,
  nombre: undefined,
  apellido: undefined,
  correo: undefined,
  telefonoOficina: undefined,
  telefonoPersonal: undefined,
  direccionFisica: undefined,
  facebookpage: undefined,
  instagram: undefined,
  nombreInmobiliaria: undefined,
  twitter: undefined,
  youtube: undefined,
  perfilEmpresarial: undefined,
  linkedin: undefined,
};

export const AuthProvider: FC = ({ children }) => {
  const [auth, setAuth] = useState(initialState);
  const router = useRouter();

  const login = async (correo: string, password: string) => {
    const resp = await fetchSinToken(
      "auth/login",
      { correo, password },
      "POST"
    );
    if (resp.token) {
      localStorage.setItem("token", resp.token);
      const { usuario } = resp;
      setAuth({
        uid: usuario.uid,
        checking: false,
        logged: true,
        nombre: usuario.nombre,
        apellido: usuario.apellido,
        correo: usuario.correo,
        direccionFisica: usuario.direccionFisica,
        facebookpage: usuario.facebookpage,
        instagram: usuario.instagram,
        nombreInmobiliaria: usuario.nombreInmobiliaria,
        telefonoOficina: usuario.telefonoOficina,
        telefonoPersonal: usuario.telefonoPersonal,
        twitter: usuario.twitter,
        youtube: usuario.youtube,
        perfilEmpresarial: usuario.perfilEmpresarial,
        linkedin: usuario.linkedin,
      });
    }
    return resp;
  };

  const register = async (
    nombre: string,
    apellido: string,
    correo: string,
    password: string,
    role: string
  ) => {
    const resp = await fetchSinToken(
      "usuarios",
      { nombre, apellido, correo, password, role },
      "POST"
    );
    if (resp.token) {
      localStorage.setItem("token", resp.token);
      const { usuario } = resp;
      setAuth({
        uid: usuario.uid,
        checking: false,
        logged: true,
        nombre: usuario.nombre,
        apellido: usuario.apellido,
        correo: usuario.correo,
        direccionFisica: usuario.direccionFisica,
        facebookpage: usuario.facebookpage,
        instagram: usuario.instagram,
        nombreInmobiliaria: usuario.nombreInmobiliaria,
        telefonoOficina: usuario.telefonoOficina,
        telefonoPersonal: usuario.telefonoPersonal,
        twitter: usuario.twitter,
        youtube: usuario.youtube,
        perfilEmpresarial: usuario.perfilEmpresarial,
        linkedin: auth.linkedin,
      });
    }

    return resp;
  };

  const verificaToken = useCallback(async () => {
    const token = localStorage.getItem("token");

    if (!token) {
      setAuth({
        uid: null,
        checking: true,
        logged: false,
        nombre: undefined,
        apellido: undefined,
        correo: undefined,
        telefonoOficina: undefined,
        telefonoPersonal: undefined,
        direccionFisica: undefined,
        facebookpage: undefined,
        instagram: undefined,
        nombreInmobiliaria: undefined,
        twitter: undefined,
        youtube: undefined,
        perfilEmpresarial: undefined,
        linkedin: undefined,
      });

      return false;
    }

    const resp = await fetchConToken("auth/renovarToken");

    if (resp.ok) {
      localStorage.setItem("token", resp.token);
      const { usuario } = resp;
      setAuth({
        uid: usuario.uid,
        checking: false,
        logged: true,
        nombre: usuario.nombre,
        apellido: usuario.apellido,
        correo: usuario.correo,
        direccionFisica: usuario.direccionFisica,
        facebookpage: usuario.facebookpage,
        instagram: usuario.instagram,
        nombreInmobiliaria: usuario.nombreInmobiliaria,
        telefonoOficina: usuario.telefonoOficina,
        telefonoPersonal: usuario.telefonoPersonal,
        twitter: usuario.twitter,
        youtube: usuario.youtube,
        perfilEmpresarial: usuario.perfilEmpresarial,
        linkedin: usuario.linkedin,
      });
      return true;
    } else {
      setAuth({
        uid: null,
        checking: false,
        logged: false,
        nombre: undefined,
        apellido: undefined,
        correo: undefined,
        telefonoOficina: undefined,
        telefonoPersonal: undefined,
        direccionFisica: undefined,
        facebookpage: undefined,
        instagram: undefined,
        nombreInmobiliaria: undefined,
        twitter: undefined,
        youtube: undefined,
        perfilEmpresarial: undefined,
        linkedin: undefined,
      });

      return false;
    }
  }, []);

  const logOut = async () => {
    localStorage.removeItem("token");
    setAuth({
      uid: null,
      checking: false,
      logged: false,
      nombre: undefined,
      apellido: undefined,
      correo: undefined,
      telefonoOficina: undefined,
      telefonoPersonal: undefined,
      direccionFisica: undefined,
      facebookpage: undefined,
      instagram: undefined,
      nombreInmobiliaria: undefined,
      twitter: undefined,
      youtube: undefined,
      perfilEmpresarial: undefined,
      linkedin: undefined,
    });
  };

  const actualizarPerfil = async (formulario: any) => {
    const resp = await actualizarPerfilFetch(
      "usuarios/" + auth.uid,
      formulario
    );
    const { usuario } = resp;

    if (resp.ok) {
      setAuth({
        uid: usuario.uid,
        checking: false,
        logged: true,
        nombre: usuario.nombre,
        apellido: usuario.apellido,
        correo: usuario.correo,
        direccionFisica: usuario.direccionFisica,
        facebookpage: usuario.facebookpage,
        instagram: usuario.instagram,
        nombreInmobiliaria: usuario.nombreInmobiliaria,
        telefonoOficina: usuario.telefonoOficina,
        telefonoPersonal: usuario.telefonoPersonal,
        twitter: usuario.twitter,
        youtube: usuario.youtube,
        perfilEmpresarial: usuario.perfilEmpresarial,
        linkedin: usuario.linkedin,
      });

      toast.success(resp.msg);
      router.push("/perfil");
    }

    if (!resp.ok) {
      toast.error(resp.msg);
    }

    return resp;
  };

  const signInWithGoogle = async () => {
    console.log("Iniciando sesión con google");
  };

  const signInWithFacebook = async () => {
    console.log("Iniciando sesión con facebook");
  };

  return (
    <AuthContext.Provider
      value={{
        auth,
        login,
        logOut,
        register,
        signInWithGoogle,
        signInWithFacebook,
        verificaToken,
        actualizarPerfil,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
