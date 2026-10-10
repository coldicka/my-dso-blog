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
            <Translate id="hero.title">Software Developer | Web Development & Automation</Translate>
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
              <Translate id="hero.bio.slogan">Experience in frontend and application support · Further training in DevSecOps and PLC programming</Translate>
            </p>
           <p className={styles.bio}>
              <Translate id="hero.bio.p1">For almost ten years, I have developed, maintained and improved web applications — from responsive interfaces to established e-commerce platforms.</Translate>
            </p>
            <p className={styles.bio}>
              <Translate id="hero.bio.p2">My DevSecOps and PLC training broadens this experience. In practical projects, I extend applications, configure containers and automate deployment workflows.</Translate>
            </p>
            <p className={styles.bio}>
              <Translate id="hero.bio.p3">I want to contribute this experience to software development, application support and automation — and grow into development-related operations tasks.</Translate>
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
