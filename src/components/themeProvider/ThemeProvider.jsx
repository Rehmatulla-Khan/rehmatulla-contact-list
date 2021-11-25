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
  const [darkMode, setDarkMode] = useState(false);

  const toggleMode = () => {
    setDarkMode((preMode) => !preMode);
  };

  return (
    <ThemeContext.Provider value={darkMode}>
      <ThemeUpdate.Provider value={toggleMode}>{children}</ThemeUpdate.Provider>
    </ThemeContext.Provider>
  );
};
