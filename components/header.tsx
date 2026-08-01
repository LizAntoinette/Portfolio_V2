import { useEffect, useState } from "react";

type Theme = "light" | "dark";

const THEME_STORAGE_KEY = "portfolio-theme";

const navItems = [
  { id: "home", label: "Home" },
  { id: "experience", label: "Experience" },
  { id: "masters", label: "MSCS" },
  { id: "project", label: "Projects" },
  { id: "contact", label: "Contact" },
] as const;

function ThemeIcon({ theme }: { theme: Theme }) {
  return theme === "dark" ? (
    <svg aria-hidden="true" viewBox="0 0 24 24">
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2M12 20v2M4.93 4.93l1.42 1.42M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.42-1.42M17.66 6.34l1.41-1.41" />
    </svg>
  ) : (
    <svg aria-hidden="true" viewBox="0 0 24 24">
      <path d="M20.4 14.8A8.5 8.5 0 0 1 9.2 3.6 8.5 8.5 0 1 0 20.4 14.8Z" />
    </svg>
  );
}

export default function Header() {
  const [activeSection, setActiveSection] = useState<string>("home");
  const [theme, setTheme] = useState<Theme>("dark");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll<HTMLElement>("section");
      const navHeight = document.getElementById("header")?.offsetHeight || 0;

      sections.forEach((section) => {
        const top = section.offsetTop - navHeight;
        const bottom = top + section.offsetHeight;

        if (window.scrollY >= top && window.scrollY < bottom) {
          setActiveSection(section.id);
        }
      });
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsMenuOpen(false);
    };
    const desktopQuery = window.matchMedia("(min-width: 769px)");
    const handleDesktopChange = (event: MediaQueryListEvent) => {
      if (event.matches) setIsMenuOpen(false);
    };

    document.addEventListener("keydown", handleEscape);
    desktopQuery.addEventListener("change", handleDesktopChange);

    return () => {
      document.removeEventListener("keydown", handleEscape);
      desktopQuery.removeEventListener("change", handleDesktopChange);
    };
  }, []);

  useEffect(() => {
    const root = document.documentElement;
    const mediaQuery = window.matchMedia("(prefers-color-scheme: light)");
    const currentTheme: Theme = root.dataset.theme === "light" ? "light" : "dark";

    setTheme(currentTheme);

    const handleSystemThemeChange = (event: MediaQueryListEvent) => {
      if (localStorage.getItem(THEME_STORAGE_KEY)) return;

      const nextTheme: Theme = event.matches ? "light" : "dark";
      root.dataset.theme = nextTheme;
      root.style.colorScheme = nextTheme;
      setTheme(nextTheme);
    };

    mediaQuery.addEventListener("change", handleSystemThemeChange);
    return () => mediaQuery.removeEventListener("change", handleSystemThemeChange);
  }, []);

  const toggleTheme = () => {
    const root = document.documentElement;
    const currentTheme: Theme = root.dataset.theme === "light" ? "light" : "dark";
    const nextTheme: Theme = currentTheme === "dark" ? "light" : "dark";

    root.classList.add("theme-transition");
    root.dataset.theme = nextTheme;
    root.style.colorScheme = nextTheme;
    localStorage.setItem(THEME_STORAGE_KEY, nextTheme);
    setTheme(nextTheme);

    window.setTimeout(() => root.classList.remove("theme-transition"), 300);
  };

  const nextTheme = theme === "dark" ? "light" : "dark";

  return (
    <header id="header" className="fixed top-0 left-0 w-full z-50 header-glass">
      <div className="mobile-header-actions">
        <button
          type="button"
          className="theme-toggle mobile-theme-toggle"
          onClick={toggleTheme}
          aria-label={`Switch to ${nextTheme} mode`}
          title={`Switch to ${nextTheme} mode`}
        >
          <ThemeIcon theme={theme} />
          <span className="sr-only">Switch to {nextTheme} mode</span>
        </button>
        <button
          type="button"
          className="mobile-menu-toggle"
          onClick={() => setIsMenuOpen((isOpen) => !isOpen)}
          aria-expanded={isMenuOpen}
          aria-controls="primary-navigation"
          aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
        >
          {isMenuOpen ? (
            <svg aria-hidden="true" viewBox="0 0 24 24">
              <path d="M6 6l12 12M18 6 6 18" />
            </svg>
          ) : (
            <svg aria-hidden="true" viewBox="0 0 24 24">
              <path d="M4 7h16M4 12h16M4 17h16" />
            </svg>
          )}
        </button>
      </div>

      <nav
        id="primary-navigation"
        className={`site-nav ${isMenuOpen ? "is-open" : ""}`}
        aria-label="Primary navigation"
      >
        <ul className="nav-list">
          {navItems.map(({ id, label }) => (
            <li key={id} className={`nav-item ${id === "contact" ? "nav-contact" : ""}`}>
              <a
                href={`#${id}`}
                onClick={() => {
                  setActiveSection(id);
                  setIsMenuOpen(false);
                }}
                className={`nav-link ${activeSection === id ? "is-active" : ""}`}
                aria-current={activeSection === id ? "location" : undefined}
              >
                {label}
              </a>
            </li>
          ))}
          <li className="desktop-theme-item flex items-center">
            <button
              type="button"
              className="theme-toggle"
              onClick={toggleTheme}
              aria-label={`Switch to ${nextTheme} mode`}
              title={`Switch to ${nextTheme} mode`}
            >
              <ThemeIcon theme={theme} />
              <span className="sr-only">Switch to {nextTheme} mode</span>
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
}
