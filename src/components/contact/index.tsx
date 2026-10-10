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
    {
      href: 'https://www.xing.com/profile/HenriCollins_DickaNed',
      label: translate({ id: 'contact.links.xing', message: 'XING profile' }),
      isExternal: true,
      iconName: 'xing',
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
                <Translate id="contact.intro">Which challenges could I help your team solve?</Translate>
              </strong>
            </p>
            <ul className={styles.list}>
              <li>
                <Translate id="contact.list.item1">I welcome conversations about software and web development, application support, and roles involving automation, CI/CD or deployment.</Translate>
              </li>
              <li>
                <Translate id="contact.list.item2">Based in Meldorf. I am open to remote and hybrid teams, as well as on-site roles within a manageable commute.</Translate>
              </li>
            </ul>
            <p>
              <Translate id="contact.connect">Send me a brief description of the role or your project. I would be happy to discuss where my experience fits and where I can develop further.</Translate>
            </p>
          </div>

          <div className={styles.right}>
            <p className={styles.tagline}>
              <Translate id="contact.tagline">A role, a project or an initial conversation?</Translate>
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
