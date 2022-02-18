import {
  createContext,
  Dispatch,
  FC,
  SetStateAction,
  useCallback,
  useState,
} from "react";
import { useRouter } from "next/router";
import { toast } from "react-toastify";
import {
  actualizarPerfilFetch,
  actualizarRolUsuario,
  crearUsuarioFetch,
  fetchConToken,
  fetchSinToken,
  googleLogin,
  subirFotoPerfil,
} from "../../helpers/fetch";
import { Auth, Resp, SubirFoto } from "../../interfaces/AuthInterface";
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
  crearUsuario: (
    nombre: string,
    apellido: string,
    correo: string,
    password: string,
    role: string,
    propietario: string | undefined | null
  ) => Promise<Resp>;
  signInWithGoogle: (response: any) => void /* response:GoogleLoginResponse */;
  signInWithFacebook: () => void;
  verificaToken: () => void;
  actualizarPerfil: (data: any) => Promise<RespActualizar>;
  fotoPerfil: (data: any) => Promise<SubirFoto>;
  mostrarLogin: boolean;
  mostrarRegistro: boolean;
  setMostrarLogin: Dispatch<SetStateAction<boolean>>;
  setMostrarRegistro: Dispatch<SetStateAction<boolean>>;
  abrirLogin: () => void;
  cerrarLogin: () => void;
  abrirRegistro: () => void;
  cerrarRegistro: () => void;
  actualizarRol: (data: any) => Promise<RespActualizar>;
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
  img: undefined,
  logo: undefined,
  role: undefined,
  paqueteAdquirido: undefined,
  usuarios: undefined,
  propietario: undefined,
  google: undefined,
};

export const AuthProvider: FC = ({ children }) => {
  const [auth, setAuth] = useState(initialState);
  const router = useRouter();
  const [mostrarLogin, setMostrarLogin] = useState(false);
  const [mostrarRegistro, setMostrarRegistro] = useState(false);
  const abrirLogin = () => setMostrarLogin(true);
  const cerrarLogin = () => setMostrarLogin(false);
  const abrirRegistro = () => setMostrarRegistro(true);
  const cerrarRegistro = () => setMostrarRegistro(false);

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
        img: usuario.img,
        logo: usuario.logo,
        role: usuario.role,
        paqueteAdquirido: usuario.paqueteAdquirido,
        usuarios: usuario.usuarios,
        propietario: usuario.propietario,
        google: undefined,
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
        img: usuario.img,
        logo: usuario.logo,
        role: usuario.role,
        paqueteAdquirido: usuario.paqueteAdquirido,
        usuarios: usuario.usuarios,
        propietario: usuario.propietario,
        google: undefined,
      });
    }

    return resp;
  };

  const crearUsuario = async (
    nombre: string,
    apellido: string,
    correo: string,
    password: string,
    role: string,
    propietario: string | undefined | null
  ): Promise<Resp> => {
    const resp = await crearUsuarioFetch("usuarios/propietario", {
      nombre,
      apellido,
      correo,
      password,
      role,
      propietario,
    });
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
        img: usuario.img,
        logo: usuario.logo,
        role: usuario.role,
        paqueteAdquirido: usuario.paqueteAdquirido,
        usuarios: usuario.usuarios,
        propietario: usuario.propietario,
        google: undefined,
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
        img: undefined,
        logo: undefined,
        role: undefined,
        paqueteAdquirido: undefined,
        usuarios: undefined,
        propietario: undefined,
        google: undefined,
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
        img: usuario.img,
        logo: usuario.logo,
        role: usuario.role,
        paqueteAdquirido: usuario.paqueteAdquirido,
        usuarios: usuario.usuarios,
        propietario: usuario.propietario,
        google: true,
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
        img: undefined,
        logo: undefined,
        role: undefined,
        paqueteAdquirido: undefined,
        usuarios: undefined,
        propietario: undefined,
        google: undefined,
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
      img: undefined,
      logo: undefined,
      role: undefined,
      paqueteAdquirido: undefined,
      usuarios: undefined,
      propietario: undefined,
      google: undefined,
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
        img: usuario.img,
        logo: usuario.logo,
        role: usuario.role,
        paqueteAdquirido: usuario.paqueteAdquirido,
        usuarios: usuario.usuarios,
        propietario: usuario.propietario,
        google: undefined,
      });

      toast.success(resp.msg);
      router.push("/perfil");
    }

    if (!resp.ok) {
      resp.errors.map((error) => {
        toast.error(error.msg);
      });
    }

    return resp;
  };

  const actualizarRol = async (data: any) => {
    const resp = await actualizarRolUsuario(`usuarios/rol/${auth.uid}`, data);
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
        img: usuario.img,
        logo: usuario.logo,
        role: usuario.role,
        paqueteAdquirido: usuario.paqueteAdquirido,
        usuarios: usuario.usuarios,
        propietario: usuario.propietario,
        google: undefined,
      });
    }

    return resp;
  };

  const fotoPerfil = async (formData: any) => {
    const resp = await subirFotoPerfil(
      `subidas/usuarios/${auth.uid}`,
      formData
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
        img: usuario.img,
        logo: usuario.logo,
        role: usuario.role,
        paqueteAdquirido: usuario.paqueteAdquirido,
        usuarios: usuario.usuarios,
        propietario: usuario.propietario,
        google: undefined,
      });

      toast.success(resp.msg);
    }

    return resp;
  };

  const signInWithGoogle = async (response: any) => {
    /* response:GoogleLoginResponse */
    const id_token = response.getAuthResponse().id_token;
    const body = { id_token };

    const res = await googleLogin("auth/google", body);

    if (res.ok) {
      localStorage.setItem("token", res.token);
      const { usuario } = res;
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
        img: usuario.img,
        logo: usuario.logo,
        role: usuario.role,
        paqueteAdquirido: usuario.paqueteAdquirido,
        usuarios: usuario.usuarios,
        propietario: usuario.propietario,
        google: true,
      });
    }
    setMostrarLogin(false);
    setMostrarRegistro(false);
    return res;
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
        fotoPerfil,
        mostrarLogin,
        mostrarRegistro,
        setMostrarLogin,
        setMostrarRegistro,
        abrirLogin,
        cerrarLogin,
        abrirRegistro,
        cerrarRegistro,
        actualizarRol,
        crearUsuario,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
