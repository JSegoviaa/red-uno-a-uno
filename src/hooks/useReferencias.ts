import { useEffect, useState } from "react";
import {
  Referencia,
  ReferenciaNumero,
  ReferenciasUsuarioResp,
} from "interfaces/ReferenciasInterface";
import { development, production } from "credentials/credentials";

export const useReferenciasUsuario = (uid: string | null | undefined) => {
  const [referencias, setReferencias] = useState<Referencia[]>([]);
  const [cargando, setCargando] = useState(true);

  const obtenerReferencias = async () => {
    const res = await fetch(`${production}/referencias/${uid}`);
    const data: ReferenciasUsuarioResp = await res.json();

    setReferencias(data.referencias);
    setCargando(false);
  };

  useEffect(() => {
    obtenerReferencias();
  }, []);

  return { referencias, cargando };
};

export const useReferenciaNumero = (numero: string) => {
  const [referencia, setReferencia] = useState<Referencia>();
  const [cargando, setCargando] = useState(true);

  const obtenerReferenciaPorNumero = async () => {
    const res = await fetch(
      `${production}/referencias/ref/numero?numero=${numero}`
    );
    const data: ReferenciaNumero = await res.json();

    console.log(data);
    setReferencia(data.referencia);
    setCargando(false);
  };

  useEffect(() => {
    obtenerReferenciaPorNumero();
  }, [numero]);

  return { referencia, cargando };
};
