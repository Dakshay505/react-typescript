
import React , {createContext} from "react";
import { theme } from "./Theme";

// define the type of children 
type ThemeContextProviderType ={
    children:React.ReactNode
}

export const ThemeContext = createContext(theme);

const ThemeContextProvider = ({children}:ThemeContextProviderType) => {
  return (
    <ThemeContext.Provider value={theme}>
    {children}
    </ThemeContext.Provider>
  )
}

export default ThemeContextProvider