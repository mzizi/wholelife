import { FC, useContext, useEffect, useState } from "react";
import { FiMoon, FiSun } from "react-icons/fi";

import { ThemeContext, ThemeType } from "../context";

export const ThemeToggler: FC = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  return (
    <button
      className="px-4 py-2 btn btn-ghost no-underline rounded-md"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
    >
      <div className="flex items-center gap-4 font-semibold">
        {theme === "light" ? (
          <FiSun fontSize="1.5rem" />
        ) : (
          <FiMoon fontSize="1.5rem" />
        )}
        <span className="flex-1 font-semibold px-2">
          {theme === "light" ? "Light" : "Dark"}
        </span>
      </div>
    </button>
  );
};
