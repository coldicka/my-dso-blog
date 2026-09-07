import { useEffect, useState } from 'react';
import Link from '@docusaurus/Link';
import styles from './header.module.scss';

interface NavLinkProps {
  to: string;
  label: string;
  onItemClick: () => void;
}

function NavLink({ to, label, onItemClick }: NavLinkProps) {
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>) => {
    // If it is an internal anchor link (starts with #)
    if (to.startsWith('#')) {
      e.preventDefault(); // Prevents the browser from jumping around
      
      const targetId = to.replace('#', '');
      const element = document.getElementById(targetId);
      
      if (element) {
        element.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        });
      }
    }
    
    onItemClick();
  };

  return (
    <Link to={to} onClick={handleScroll}>
      {label}
    </Link>
  );
}

export default function Header() {
  const [hidden, setHidden] = useState(false);
  const [lastScroll, setLastScroll] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);

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
  };

  const navItems = [
    { to: '#about', label: 'About me' },
    { to: '#skills', label: 'My skills' },
    { to: '#projects', label: 'My projects' },
    { to: '#contact', label: 'Contact' },
  ];

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
          </nav>

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
