import React, { createContext, useState } from "react";

export const ThemeContext = createContext<Theme>({
  mode: "light",
  toggleMode: () => {},
});

type Theme = {
  mode: "light" | "dark";
  toggleMode: () => void;
};

type Props = {
  children: React.ReactNode;
};

const ThemeContextProvider = ({ children }: Props) => {
  const [mode, setMode] = useState<Theme["mode"]>("dark");

  const toggleMode = () => {
    setMode((mode) => (mode === "light" ? "dark" : "light"));
  };

  const value = { mode, toggleMode };

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
};

export default ThemeContextProvider;
