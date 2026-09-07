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
              <strong>Let’s bridge the gap between Code, Security, and Infrastructure!</strong>
            </p>
            <ul className={styles.list}>
              <li>
                With <strong>several years of professional frontend development experience</strong>, I understand web applications inside out. 
                I am now channeling this engineering background into cloud security and automation.
              </li>
              <li>
                I am ready to bring my engineering mindset into production environments as a dedicated
                <strong> DevSecOps, Cloud Engineering, or Systems Engineering</strong>.
              </li>
              <li>
                <strong>My unique advantage:</strong> Because I come from a development background, I can collaborate seamlessly with your dev teams to secure pipelines, fix vulnerabilities directly in the code, and build highly stable infrastructure with a developer-first mindset.
              </li>
              <li>
                🌍 Open to <strong>fully remote roles</strong>, hybrid environments, or relocation.
              </li>
            </ul>
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
