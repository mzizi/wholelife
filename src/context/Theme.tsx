import {
  createContext,
  Dispatch,
  FC,
  ReactNode,
  SetStateAction,
  useEffect,
  useState,
} from "react";

export type ThemeType = "dark" | "light";

export interface ThemeProviderProps {
  initialTheme: ThemeType;
  children: ReactNode;
}

const getInitialTheme = (): ThemeType => {
  if (typeof window !== "undefined" && window.localStorage) {
    const storedPrefs = window.localStorage.getItem("color-theme");
    if (storedPrefs) {
      return storedPrefs as ThemeType;
    }

    const userMedia = window.matchMedia("(prefers-color-scheme: dark)");
    if (userMedia.matches) {
      return "dark";
    }
  }

  return "light";
};

export interface IThemeContext {
  theme: ThemeType;
  setTheme: Dispatch<SetStateAction<ThemeType>>;
}

export const ThemeContext = createContext<IThemeContext>({
  theme: "light",
  setTheme: () => {},
});

export const ThemeProvider: FC<ThemeProviderProps> = ({
  initialTheme = getInitialTheme(),
  children,
}) => {
  const [theme, setTheme] = useState<ThemeType>(initialTheme);
  const rawSetTheme = (rawTheme: ThemeType) => {
    const root = window.document.documentElement;
    const isDark = rawTheme === "dark";

    root.classList.remove(isDark ? "light" : "dark");
    root.classList.add(rawTheme);

    localStorage.setItem("color-theme", rawTheme);
  };

  if (initialTheme) {
    rawSetTheme(initialTheme);
  }

  useEffect(() => {
    rawSetTheme(theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
