import styles from './footer.module.scss';
import Link from '@docusaurus/Link';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer className={styles.portfolioFooter}>
      <div className="container">
        <div className={styles.inner}>
          
          <button type="button" className={styles.scrollBtn} onClick={scrollToTop} aria-label="Scroll to top">
            <svg className={styles.arrow} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 90" fill="none">
              <rect className={styles.arrowRect} width="39" height="89" x=".5" y=".5" rx="19.5"/>
                <path className={styles.arrowPath} d="M20 70V23 M14 29l6-6 6 6" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>

          {/* Copyright & Rechtliches */}
          <div className={styles.bottom}>
            <p className={styles.copy}>
              © Collins Dicka {new Date().getFullYear()}
            </p>

            <Link
              to="/legal-notice"
              className={styles.legal}
            >
              Legal notice
            </Link>
          </div>

        </div>
      </div>
    </footer>
  );
}
