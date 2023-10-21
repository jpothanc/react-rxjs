import { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContextProvider";

const useContextTheme = () => {
  return useContext(ThemeContext);
};

export default useContextTheme;
