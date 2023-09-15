import { createContext, useContext } from "react";
import { AppContextType } from "../@types/AppContextType";

export const AppContext = createContext({} as AppContextType)

export function useContextApp() {
  return useContext(AppContext)
}