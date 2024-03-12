import { createContext, useContext } from "react";
import { DefaultTheme } from "styled-components";

import { theme } from "../design-system/theme";

export interface ThemeContextType {
  theme: DefaultTheme;
}

const ThemeContext = createContext<ThemeContextType>({
  theme,
});

export function useTheme() {
  return useContext(ThemeContext);
}
