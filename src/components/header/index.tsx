import React, { useState, useEffect } from 'react';
import { useLocation } from '@docusaurus/router';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './header.module.scss';

interface NavLinkProps {
  to: string;
  label: string;
  onItemClick: () => void;
}

function NavLink({ to, label, onItemClick }: NavLinkProps) {
  const location = useLocation();
  const { i18n: { currentLocale }, siteConfig: { baseUrl } } = useDocusaurusContext();

  const isGerman = currentLocale === 'de';

  // 1. Bereinige die Pfade für einen sicheren Vergleich (z.B. "my-dso-blog")
  const clean = (p: string) => p.replace(/^\/|\/\$/g, '');
  
  const currentPath = clean(location.pathname);
  const basePath = clean(baseUrl);
  const baseGermanPath = clean(`${baseUrl}de`);

  // Ermittle, ob wir uns auf der Startseite befinden
  const isAtHome = 
    currentPath === basePath || 
    currentPath === baseGermanPath || 
    currentPath === '';

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>) => {
    onItemClick();

    // Nur auf der echten Startseite nutzen wir das JavaScript-Smooth-Scrolling
    if (to.startsWith('#') && isAtHome) {
      e.preventDefault();
      const targetId = to.replace('#', '');
      const element = document.getElementById(targetId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        window.history.pushState(null, '', to);
      }
    }
  };

  let targetPath = '';
  if (to.startsWith('#')) {
    if (isAtHome) {
      // Auf der Landingpage scrollen wir direkt über den Hash
      targetPath = to;
    } else {
      // 2. WENN WIR AUF EINER UNTERSEITE SIND:
      // Wir holen uns die Basis des Projekts (immer "/my-dso-blog/")
      const projectBase = baseUrl.includes('/de/') 
        ? baseUrl.replace('de/', '') 
        : baseUrl;

      // Wir säubern doppelte Slashes im Pfad
      const cleanBase = projectBase.replace(/\/{2,}/g, '/');

      // Wir bauen den Pfad absolut starr auf, ohne Docusaurus die Chance für Doppler zu geben
      targetPath = isGerman ? `${cleanBase}de/${to}` : `${cleanBase}${to}`;
      targetPath = targetPath.replace(/\/{2,}/g, '/');
    }
  } else {
    targetPath = to.startsWith('/') ? to : `/${to}`;
  }

  return (
    <a href={targetPath} onClick={handleScroll}>
      {label}
    </a>
  );
}

export default function Header() {
  const [hidden, setHidden] = useState(false);
  const [lastScroll, setLastScroll] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  
  const { i18n: { currentLocale }, siteConfig: { baseUrl } } = useDocusaurusContext();
  const isGerman = currentLocale === 'de';

  useEffect(() => {
    const handleScroll = () => {
      const current = window.scrollY;
      setHidden(current > lastScroll && current > 100);
      setLastScroll(current);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScroll]);

  const closeMenu = () => {
    setMenuOpen(false);
    setDropdownOpen(false);
  };

  const navItems = isGerman ? [
    { to: '#about', label: 'Über mich' },
    { to: '#skills', label: 'Fähigkeiten' },
    { to: '#projects', label: 'Projekte' },
    { to: '#contact', label: 'Kontakt' },
  ] : [
    { to: '#about', label: 'About me' },
    { to: '#skills', label: 'My skills' },
    { to: '#projects', label: 'My projects' },
    { to: '#contact', label: 'Contact' },
  ];

    const navigateToLanguage = (e: React.MouseEvent<HTMLAnchorElement>, targetLocale: 'en' | 'de') => {
    e.preventDefault();
    closeMenu();

    const url = new URL(window.location.href);
    
    // If “/de/” is included, we'll remove it
    const projectBase = baseUrl.includes('/de/') 
      ? baseUrl.replace('de/', '') 
      : baseUrl;

    const cleanBase = projectBase.replace(/\/{2,}/g, '/');

    if (targetLocale === 'de') {
      // Force the path /my-dso-blog/de/
      url.pathname = `${cleanBase}de/`.replace(/\/{2,}/g, '/');
    } else {
      // Force the path /my-dso-blog/
      url.pathname = cleanBase;
    }

    window.location.href = url.toString();
  };

  const renderDropdownMenu = () => (
    <>
      <button 
        type="button" 
        className={styles.dropdownButton}
        onClick={() => setDropdownOpen(!dropdownOpen)}
      >
        {isGerman ? '🌐 DE' : '🌐 EN'} <span className={styles.arrow}>▼</span>
      </button>
      
      {dropdownOpen && (
        <ul className={styles.dropdownMenu}>
          <li>
            <a 
              href="#"
              onClick={(e) => navigateToLanguage(e, 'en')}
              className={styles.dropdownLink}
            >
              English
            </a>
          </li>
          <li>
            <a 
              href="#"
              onClick={(e) => navigateToLanguage(e, 'de')}
              className={styles.dropdownLink}
            >
              Deutsch
            </a>
          </li>
        </ul>
      )}
    </>
  );

  return (
    <header className={`${styles.header} ${hidden ? styles.hidden : ''}`}>
      <div className="container">
        <div className={styles.inner}>
          
          <nav className={`${styles.nav} ${menuOpen ? styles.navOpen : ''}`}>
            {navItems.map((item) => (
              <NavLink 
                key={item.to} 
                to={item.to} 
                label={item.label} 
                onItemClick={closeMenu} 
              />
            ))}
            
            <div className={`${styles.langDropdownWrapper} ${styles.mobileLang}`}>
              {renderDropdownMenu()}
            </div>
          </nav>

          <div className={`${styles.langDropdownWrapper} ${styles.desktopLang}`}>
            {renderDropdownMenu()}
          </div>

          <button
            type="button"
            className={`${styles.menuButton} ${menuOpen ? styles.menuButtonOpen : ''}`}
            onClick={() => setMenuOpen((open) => !open)}
            aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={menuOpen}
          >
            <span />
            <span />
            <span />
          </button>

        </div>
      </div>
    </header>
  );
}
