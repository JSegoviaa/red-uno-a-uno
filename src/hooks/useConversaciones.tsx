import { useEffect, useState } from "react";
import { production } from "../credentials/credentials";
import { Conversacion } from "../interfaces/ChatInterface";

export const useConversaciones = (uid: string | undefined | null) => {
  const [conversaciones, setConversaciones] = useState<Conversacion[]>([]);
  const [cargando, setCargando] = useState(false);

  const obtenerConversaciones = async () => {
    setCargando(true);
    const resp = await fetch(`${production}/chats/${uid}`);
    const data = await resp.json();

    setConversaciones(data);
    setCargando(false);
  };

  useEffect(() => {
    obtenerConversaciones();
  }, [uid]);

  return { conversaciones, cargando };
};
