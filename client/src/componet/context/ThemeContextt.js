import React, { useState, createContext, useContext } from "react";

const ThemContext = createContext();

const ThemProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");
  return (
    <ThemContext.Provider value={[theme, setTheme]}>
      {children}
    </ThemContext.Provider>
  );
};

//custom Hook
const useTheme = () => useContext(ThemContext);
export { useTheme, ThemProvider };
