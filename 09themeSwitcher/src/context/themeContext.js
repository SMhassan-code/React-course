import { createContext, useContext } from "react";

export const themeContext = createContext({
    theme: "light",
    lightTheme: () => {},
    darkTheme: () => {}
})

export const ThemeProvider = themeContext.Provider

export default function usetheme() {
    return useContext(themeContext)
}