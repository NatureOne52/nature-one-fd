"use client";

import * as React from "react";
import { useTheme } from "next-themes";

const ToggleTheme = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);
  const [checked, setChecked] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  React.useEffect(() => {
    if (mounted) setChecked(theme === "dark");
  }, [theme, mounted]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(e.target.checked);
    setTheme(e.target.checked ? "dark" : "light");
  };

  // Evita renderizar el input hasta que esté montado
  return (
    <label
      htmlFor="themeToggle"
      className="themeToggle st-sunMoonThemeToggleBtn flex items-center justify-center w-8 h-8"
      aria-label="Cambiar tema"
    >
      {mounted && (
        <input
          type="checkbox"
          id="themeToggle"
          className="themeToggleInput"
          checked={checked}
          onChange={handleChange}
          aria-checked={checked}
        />
      )}
      <svg
        width="18"
        height="18"
        viewBox="0 0 20 20"
        fill="currentColor"
        stroke="none"
      >
        <mask id="moon-mask">
          <rect x="0" y="0" width="20" height="20" fill="white"></rect>
          <circle cx="11" cy="3" r="8" fill="black"></circle>
        </mask>
        <circle
          className="sunMoon"
          cx="10"
          cy="10"
          r="8"
          mask="url(#moon-mask)"
        ></circle>
        <g>
          <circle className="sunRay sunRay1" cx="18" cy="10" r="1.5"></circle>
          <circle className="sunRay sunRay2" cx="14" cy="16.928" r="1.5"></circle>
          <circle className="sunRay sunRay3" cx="6" cy="16.928" r="1.5"></circle>
          <circle className="sunRay sunRay4" cx="2" cy="10" r="1.5"></circle>
          <circle className="sunRay sunRay5" cx="6" cy="3.1718" r="1.5"></circle>
          <circle className="sunRay sunRay6" cx="14" cy="3.1718" r="1.5"></circle>
        </g>
      </svg>
    </label>
  );
};

export default ToggleTheme;