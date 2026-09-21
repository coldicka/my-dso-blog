import React from 'react';
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
      label: 'Profile Page',
      isExternal: true,
      iconName: 'linkedin',
    },
  ];

  return (
    <section className={[styles.contact, 'section-padding'].join(' ')} id="contact">
      <div className="container">
        <div className={styles.inner}>
          
          <div className={styles.left}>
            <h2 className="section-heading">Contact me</h2>
            <p className={styles.introText}>
              <strong>Let's build secure systems together.</strong>
            </p>
            <ul className={styles.list}>
              <li>
                I combine my software development background with DevSecOps, cybersecurity, automation, and infrastructure to build secure and reliable software environments.
              </li>
              <li>
               Open to remote · hybrid · relocation
              </li>
            </ul>
            <p>Let's connect →</p>
          </div>

          <div className={styles.right}>
            <p className={styles.tagline}>Looking forward to hearing from you!</p>
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
