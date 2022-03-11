import { useEffect, useState } from "react";
import {
  Referencia,
  ReferenciaNumero,
  ReferenciasUsuarioResp,
} from "interfaces/ReferenciasInterface";
import { production } from "credentials/credentials";

export const useReferenciasUsuario = (
  uid: string | null | undefined,
  desde: number
) => {
  const [referencias, setReferencias] = useState<Referencia[]>([]);
  const [cargando, setCargando] = useState(true);
  const [total, setTotal] = useState(0);

  const obtenerReferencias = async () => {
    const res = await fetch(`${production}/referencias/${uid}?desde=${desde}`);
    const data: ReferenciasUsuarioResp = await res.json();

    setReferencias(data.referencias);
    setTotal(data.total);
    setCargando(false);
  };

  useEffect(() => {
    obtenerReferencias();
  }, [desde]);

  return { referencias, cargando, total, setReferencias };
};

export const useReferenciaNumero = (numero: string) => {
  const [referencia, setReferencia] = useState<Referencia>({
    importe: 0,
    _id: "",
    createdAt: "",
    estado: false,
    paquete: { _id: "", nombre: "" },
    precio: 0,
    referencia: "",
    totalUsuarios: 0,
    updatedAt: "",
    usuario: {
      _id: "",
      apellido: "",
      correo: "",
      img: "",
      nombre: "",
      role: "",
      telefonoOficina: "",
      telefonoPersonal: "",
    },
    comprobante: "",
  });
  const [cargando, setCargando] = useState(true);

  const obtenerReferenciaPorNumero = async () => {
    const res = await fetch(
      `${production}/referencias/ref/numero?numero=${numero}`
    );
    const data: ReferenciaNumero = await res.json();

    setReferencia(data.referencia);
    setCargando(false);
  };

  useEffect(() => {
    obtenerReferenciaPorNumero();
  }, [numero]);

  return { referencia, cargando, setReferencia };
};

export const useReferencias = (desde: number) => {
  const [referencias, setReferencias] = useState<Referencia[]>([]);
  const [cargando, setCargando] = useState(true);
  const [total, setTotal] = useState(0);

  const obtenerReferencias = async () => {
    const res = await fetch(`${production}/referencias?desde=${desde}`);
    const data: ReferenciasUsuarioResp = await res.json();

    setReferencias(data.referencias);
    setTotal(data.total);
    setCargando(false);
  };

  useEffect(() => {
    obtenerReferencias();
  }, [desde]);

  return { referencias, cargando, total, setReferencias };
};
