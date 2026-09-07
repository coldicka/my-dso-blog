import React from 'react';
import styles from './contact.module.scss';
import { LinkedInIcon, MailIcon } from './Icons';

export interface ContactLinkProps {
  href: string;
  label: string;
  isExternal?: boolean;
  iconName: 'mail' | 'linkedin';
}

export default function ContactLink({ href, label, isExternal, iconName }: ContactLinkProps) {
  return (
    <a 
      href={href} 
      className={styles.link} 
      target={isExternal ? '_blank' : undefined}
      rel={isExternal ? 'noreferrer' : undefined}
    >
      <span className={styles.linkIcon}>
        {iconName === 'linkedin' && <LinkedInIcon />}
        {iconName === 'mail' && <MailIcon />}
      </span>
      {label}
    </a>
  );
}
