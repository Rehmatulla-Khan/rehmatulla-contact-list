import React, { useContext, useState } from "react";

const ThemeContext = React.createContext();
const ThemeUpdate = React.createContext();

export const useTheme = () => {
  return useContext(ThemeContext);
};

export const useThemeUpdate = () => {
  return useContext(ThemeUpdate);
};

export const ThemeProvider = ({ children }) => {
  const userMode = localStorage.getItem("user-choosen-mode")
    ? JSON.parse(localStorage.getItem("user-choosen-mode"))
    : false;

  const [darkMode, setDarkMode] = useState(userMode);

  const toggleMode = () => {
    setDarkMode((preMode) => !preMode);
  };
  localStorage.setItem("user-choosen-mode", JSON.stringify(darkMode));

  return (
    <ThemeContext.Provider value={darkMode}>
      <ThemeUpdate.Provider value={toggleMode}>{children}</ThemeUpdate.Provider>
    </ThemeContext.Provider>
  );
};
