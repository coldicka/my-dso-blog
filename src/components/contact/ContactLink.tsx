import React from 'react';
import styles from './contact.module.scss';
import { LinkedInIcon, MailIcon } from './Icons';

export interface ContactLinkProps {
  href: string;
  label: string;
  isExternal?: boolean;
  iconName: 'mail' | 'linkedin';
}

/**
 * A link component specifically for contact details.
 * It renders an anchor tag with an optional icon (LinkedIn or Mail) and automatically 
 * handles safe external link behaviors.
 *
 * @param props - The properties for the contact link.
 * @param props.href - The destination URL or mailto link.
 * @param props.label - The visible text for the link.
 * @param props.isExternal - Whether the link should open in a new tab.
 * @param props.iconName - Specifies the icon to render ('linkedin' or 'mail').
 */
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
