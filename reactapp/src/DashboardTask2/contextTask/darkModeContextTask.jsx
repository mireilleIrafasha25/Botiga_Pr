import React, { createContext, useState, useContext, useEffect } from "react";

const DarkModeContextTask = createContext();

export const DarkModeProviderTask = ({ children }) => {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "default");

  useEffect(() => {
    localStorage.setItem("theme", theme);
    document.body.className = theme;
  }, [theme]);

  const toggleTheme = (selectedTheme) => {
    setTheme(selectedTheme);
  };

  return (
    <DarkModeContextTask.Provider value={{ theme, toggleTheme }}>
      {children}
    </DarkModeContextTask.Provider>
  );
};

export function useDarkModeTask() {
    return useContext(DarkModeContextTask);
  }
