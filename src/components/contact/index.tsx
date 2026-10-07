import React from 'react';
import Translate, { translate } from '@docusaurus/Translate';
import styles from './contact.module.scss';
import ContactLink, { ContactLinkProps } from './ContactLink';

export default function Contact() {
  const contactLinks: ContactLinkProps[] = [
    {
      href: 'mailto:collins.dicka@gmail.com',
      label: 'collins.dicka@gmail.com',
      iconName: 'mail',
    },
    {
      href: 'https://linkedin.com/in/collins-dicka-ned/',
      label: translate({ id: 'contact.links.linkedin', message: 'LinkedIn profile' }),
      isExternal: true,
      iconName: 'linkedin',
    },
  ];

  return (
    <section className={[styles.contact, 'section-padding'].join(' ')} id="contact">
      <div className="container">
        <div className={styles.inner}>
          
          <div className={styles.left}>
            <h2 className="section-heading">
              <Translate id="contact.heading">Contact me</Translate>
            </h2>
            <p className={styles.introText}>
              <strong>
                <Translate id="contact.intro">
                  Looking for support for your IT team?
                </Translate>
              </strong>
            </p>
            <ul className={styles.list}>
              <li>
                <Translate id="contact.list.item1">
                  I bring around nine years of web development experience, complemented by practical training in Linux, Docker, automation, and IT security. I am looking for a role in application development, automation, or IT operations.
                </Translate>
              </li>
              <li>
                <Translate id="contact.list.item2">
                  Based in Meldorf · Open to on-site, hybrid, and remote roles with a manageable commute · Available for occasional client visits by arrangement.
                </Translate>
              </li>
            </ul>
            <p>
              <Translate id="contact.connect">
                I welcome the opportunity to discuss how I could contribute to your team.
              </Translate>
            </p>
          </div>

          <div className={styles.right}>
            <p className={styles.tagline}>
              <Translate id="contact.tagline">
                Let’s talk about your team’s needs.
              </Translate>
            </p>
            <div className={styles.links}>
              {contactLinks.map((link) => (
                <ContactLink key={link.href} {...link} />
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
