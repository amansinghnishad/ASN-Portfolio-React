import { useEffect, useMemo, useState } from "react";

const STORAGE_KEY = "portfolio-theme";

const resolvePreferredTheme = () => {
  if (typeof window === "undefined") {
    return "light";
  }

  try {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (stored === "light" || stored === "dark") {
      return stored;
    }
  } catch (error) {
    /* localStorage unavailable, fall back to media query */
  }

  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  return prefersDark ? "dark" : "light";
};

const ThemeToggle = () => {
  const [theme, setTheme] = useState(resolvePreferredTheme);
  const isDark = theme === "dark";

  useEffect(() => {
    if (typeof document === "undefined") {
      return;
    }

    const root = document.documentElement;
    root.setAttribute("data-theme", theme);
    try {
      window.localStorage.setItem(STORAGE_KEY, theme);
    } catch (error) {
      /* ignore write failures */
    }
  }, [theme]);

  useEffect(() => {
    if (typeof window === "undefined") {
      return undefined;
    }

    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    try {
      const stored = window.localStorage.getItem(STORAGE_KEY);
      if (stored === "light" || stored === "dark") {
        return undefined;
      }
    } catch (error) {
      /* ignore read failures */
    }

    const handleChange = (event) => {
      setTheme(event.matches ? "dark" : "light");
    };

    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  const label = useMemo(
    () => (isDark ? "Switch to light mode" : "Switch to dark mode"),
    [isDark]
  );

  const toggleTheme = () => {
    setTheme((current) => (current === "dark" ? "light" : "dark"));
  };

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className="theme-toggle inline-flex items-center gap-2 px-3 py-1 text-xs font-semibold uppercase tracking-[0.3em]"
      aria-pressed={isDark}
      aria-label={label}
      title={label}
    >
      <span className="text-[0.7rem]">{isDark ? "Dark" : "Light"}</span>
      <span
        aria-hidden="true"
        className="relative inline-flex h-5 w-9 items-center rounded-full border border-borderSubtle bg-surfaceStrong px-[2px] transition-colors duration-300"
      >
        <span
          className={`h-3.5 w-3.5 rounded-full bg-accent transition-transform duration-300 ${
            isDark ? "translate-x-3.5" : "translate-x-0"
          }`}
        />
      </span>
    </button>
  );
};

export default ThemeToggle;
