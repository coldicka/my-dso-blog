import React from 'react';
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
            <Translate id="hero.greeting">Hello, I am</Translate>
          </p>
          <h1 className={styles.name}>Collins Dicka</h1>
          <p className={styles.title}>
            <Translate id="hero.title">Frontend Developer | DevSecOps Foundations</Translate>
          </p>

          <div className={styles.photoContainer}>
            <div className={styles.careerSlogan}>
              <span><Translate id="hero.careerSlogan.experience">Bringing experience.</Translate></span>
              <span><Translate id="hero.careerSlogan.learning">Learning something new.</Translate></span>
              <a href="#contact" className={styles.availabilityCta}>
                <strong><Translate id="hero.availability">Open to new opportunities</Translate></strong>
                <small><Translate id="hero.careerSlogan.together">Creating solutions together.</Translate> <b aria-hidden="true">↗</b></small>
              </a>
              <img
              src={resolvedCdnImage}
              alt="Collins Dicka"
              className={styles.photo}
              loading="eager"
            />
          </div>
          </div>

          <div className={styles.bioWrapper}>
            <p className={styles.bio}>
              <Translate id="hero.bio.slogan">Frontend experience. A broader perspective on delivery and security.</Translate>
            </p>
           <p className={styles.bio}>
              <Translate id="hero.bio.p1">For almost ten years, I have built, maintained, and improved production web applications as a frontend developer.</Translate>
            </p>
            <p className={styles.bio}>
              <Translate id="hero.bio.p2">My completed DevSecOps training adds hands-on project experience with Linux, Docker, GitHub Actions, and IT security.</Translate>
            </p>
            <p className={styles.bio}>
              <Translate id="hero.bio.p3">I want to bring this combination to a team and continue growing in automation and secure software delivery.</Translate>
            </p>
          </div>

          <div className={styles.ctaWrapper}>
            <Button text={translate({ id: 'hero.cta.projects', message: 'Explore my projects' })} style="btnPrimary" href="#projects" />
            <Button 
            text={translate({ id: 'hero.cta.contact', message: 'Contact me' })}
            style="btnSecondary"
            href="#contact" />
          </div>

        </div>
      </div>
    </section>
  );
}
