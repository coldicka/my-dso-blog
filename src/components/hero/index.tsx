import React from 'react'
import useBaseUrl from '@docusaurus/useBaseUrl';
import { Button } from '../button';
import styles from './hero.module.scss';
import Translate, { translate } from '@docusaurus/Translate';

export default function Hero() {
  const resolvedCdnImage = useBaseUrl('/img/cdn.jpg');

  return (
    <section className={styles.hero} id="about">
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
            <img
              src={resolvedCdnImage}
              alt="testa"
              className={styles.photo}
              loading="lazy"
            />
          </div>

          <div className={styles.bioWrapper}>
            <p className={styles.bio}>
              <Translate id="hero.bio.slogan">From Code to Cloud. From Development to Security.</Translate>
            </p>
           <p className={styles.bio}>
              <Translate id="hero.bio.p1">With several years of professional experience in frontend development, I have built and maintained production web applications and gained a strong understanding of software engineering from the ground up.</Translate>
            </p>
            <p className={styles.bio}>
              <Translate id="hero.bio.p2">Today, I combine that development background with my DevSecOps expertise — focusing on cybersecurity, secure CI/CD pipelines, containerization, infrastructure, and automation.</Translate>
            </p>
            <p className={styles.bio}>
              <Translate id="hero.bio.p3">My goal is to bridge the gap between development and operations while bringing a security-first mindset to modern software environments.</Translate>
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
