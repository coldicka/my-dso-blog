import React, { useEffect, useRef, useState } from 'react';
import useBaseUrl from '@docusaurus/useBaseUrl';
import { Button } from '../button';
import styles from './hero.module.scss';
import Translate, { translate } from '@docusaurus/Translate';

export default function Hero() {
  const heroRef = useRef<HTMLElement>(null);
  const [heroVisible, setHeroVisible] = useState(false);

  useEffect(() => {
    const hero = heroRef.current;
    if (!hero) return;
    if (typeof IntersectionObserver === 'undefined') {
      setHeroVisible(true);
      return;
    }
    const observer = new IntersectionObserver(([entry]) => {
      setHeroVisible(entry.isIntersecting);
    }, { threshold: 0 });
    observer.observe(hero);
    return () => observer.disconnect();
  }, []);

  const resolvedCdnImage = useBaseUrl('/img/cdn.jpg');

  return (
    <section ref={heroRef} className={styles.hero} id="about">
      <div className="container">
        <div className={styles.heroGrid}>
  
          <p className={styles.greeting}>
            <Translate id="hero.greeting">Hey there 👋 I am</Translate>
          </p>
          <h1 className={styles.name}>Collins Dicka</h1>
          <p className={styles.title}>
            <Translate id="hero.title">DevSecOps Engineer</Translate>
          </p>

          <div className={styles.photoContainer}>
            <div className={`${styles.careerSlogan} ${heroVisible ? styles.sloganActive : ''}`}>
              <span>Bringing experience.</span>
              <span>Learning something new.</span>
              <span>Creating solutions together.</span>
              <img
              src={resolvedCdnImage}
              alt="Collins Dicka"
              className={styles.photo}
              loading="lazy"
            />
          </div>
          </div>

          <div className={styles.bioWrapper}>
            <p className={styles.bio}>
              <Translate id="hero.bio.slogan">From Code to Cloud. From Development to Security.</Translate>
            </p>
           <p className={styles.bio}>
              <Translate id="hero.bio.p1">With around nine years of professional experience in frontend development, I have built, maintained, and improved production web applications.</Translate>
            </p>
            <p className={styles.bio}>
              <Translate id="hero.bio.p2">Having completed a DevSecOps training program, I have expanded my development background with practical skills in Linux, Docker, GitHub Actions, and IT security. Through hands-on projects, I have containerized applications, automated deployments, and investigated security vulnerabilities in a test environment.</Translate>
            </p>
            <p className={styles.bio}>
              <Translate id="hero.bio.p3">I am now looking to contribute my development experience and these new skills to a team, while continuing to grow in software delivery and secure operations.</Translate>
            </p>
          </div>

          <div className={styles.ctaWrapper}>
            <Button 
            text={translate({ id: 'hero.cta.contact', message: 'Contact me' })}
            style="btnTertiary"
            href="#contact" />
          </div>

        </div>
      </div>
    </section>
  );
}
