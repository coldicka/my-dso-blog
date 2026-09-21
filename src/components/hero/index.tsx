import React from 'react'
import useBaseUrl from '@docusaurus/useBaseUrl';
import { Button } from '../button';
import styles from './hero.module.scss';

export default function Hero() {
  const resolvedCdnImage = useBaseUrl('/img/cdn.jpg');

  return (
    <section className={styles.hero} id="about">
      <div className="container">
        <div className={styles.heroGrid}>
          
          <p className={styles.greeting}>Hey there 👋 I am</p>
          <h1 className={styles.name}>Collins Dicka</h1>
          <p className={styles.title}>DevSecOps Engineer</p>

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
              From Code to Cloud. From Development to Security.
            </p>
            <p className={styles.bio}>
              With several years of professional experience in frontend development, I have built and maintained production web applications and gained a strong understanding of software engineering from the ground up.
            </p>
            <p className={styles.bio}>
              Today, I combine that development background with my DevSecOps expertise — focusing on cybersecurity, secure CI/CD pipelines, containerization, infrastructure, and automation.
            </p>
            <p className={styles.bio}>
              My goal is to bridge the gap between development and operations while bringing a security-first mindset to modern software environments.
            </p>
          </div>

          <div className={styles.ctaWrapper}>
            <Button text="Contact me" style="btnTertiary" href="#contact" />
          </div>

        </div>
      </div>
    </section>
  );
}
