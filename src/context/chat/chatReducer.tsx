import { initialState } from "./ChatContext";

export type ActionType =
  | { type: "ActivarChat"; payload: any }
  | { type: "DesactivarChat"; payload: any }
  | { type: "NuevoMensaje"; payload: any }
  | { type: "CargarMensajes"; payload: any };

export const chatReducer = (state: typeof initialState, action: ActionType) => {
  switch (action.type) {
    case "ActivarChat":
      if (state.chatActivo === action.payload) return state;

      return {
        ...state,
        chatActivo: action.payload,
        mensajes: [],
      };

    case "DesactivarChat":
      return { ...state, chatActivo: null, mensajes: [] };

    case "NuevoMensaje":
      if (
        state.chatActivo === action.payload.remitente ||
        state.chatActivo === action.payload.para
      ) {
        return { ...state, mensajes: [...state.mensajes, action.payload] };
      } else {
        return state;
      }

    case "CargarMensajes":
      return { ...state, mensajes: [...action.payload] };
    default:
      return state;
  }
};
