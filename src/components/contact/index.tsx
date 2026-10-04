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
      href: 'https://linkedin.com/in/collins-dicka-ned-b05a71405/',
      label: translate({ id: 'contact.links.linkedin', message: 'Profile Page' }),
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
                  Let's build secure systems together.
                </Translate>
              </strong>
            </p>
            <ul className={styles.list}>
              <li>
                <Translate id="contact.list.item1">
                  I combine my software development background with DevSecOps, cybersecurity, automation, and infrastructure to build secure and reliable software environments.
                </Translate>
              </li>
              <li>
                <Translate id="contact.list.item2">
                  Open to remote · hybrid · relocation
                </Translate>
              </li>
            </ul>
            <p>
              <Translate id="contact.connect">
                Let's connect →
              </Translate>
            </p>
          </div>

          <div className={styles.right}>
            <p className={styles.tagline}>
              <Translate id="contact.tagline">
                Looking forward to hearing from you!
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
