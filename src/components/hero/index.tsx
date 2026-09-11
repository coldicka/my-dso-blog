import React from 'react'
import useBaseUrl from '@docusaurus/useBaseUrl';
import { Button } from '../button';
import styles from './hero.module.scss';

export default function Hero() {
  const resolvedCdnImage = useBaseUrl('/img/cdn.jpeg');

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
            />
          </div>

          <div className={styles.bioWrapper}>
            <p className={styles.bio}>
              With a solid background in professional frontend development, I have spent years building scalable, user-focused web applications.
            </p>
            <p className={styles.bio}>
              Today, I combine my software engineering foundations with a strong focus on cybersecurity and DevSecOps—including infrastructure security, 
              automation, and pipeline hardening. My development experience allows me to understand software from the ground up while applying a security-first mindset.
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
