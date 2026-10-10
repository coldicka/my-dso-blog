import React from 'react';
import styles from './contact.module.scss';
import { LinkedInIcon, MailIcon, XingIcon } from './Icons';

export interface ContactLinkProps {
  href: string;
  label: string;
  isExternal?: boolean;
  iconName: 'mail' | 'linkedin' | 'xing';
}

/**
 * A link component specifically for contact details.
 * It renders an anchor tag with an optional icon (LinkedIn, XING or Mail) and automatically 
 * handles safe external link behaviors.
 *
 * @param props - The properties for the contact link.
 * @param props.href - The destination URL or mailto link.
 * @param props.label - The visible text for the link.
 * @param props.isExternal - Whether the link should open in a new tab.
 * @param props.iconName - Specifies the icon to render ('linkedin', 'xing' or 'mail').
 */
export default function ContactLink({ href, label, isExternal, iconName }: ContactLinkProps) {
  return (
    <a 
      href={href} 
      className={styles.link} 
      target={isExternal ? '_blank' : undefined}
      rel={isExternal ? 'noreferrer' : undefined}
    >
      <span className={styles.linkIcon} aria-hidden="true">
        {iconName === 'linkedin' && <LinkedInIcon />}
        {iconName === 'mail' && <MailIcon />}
        {iconName === 'xing' && <XingIcon />}
      </span>
      {label}
    </a>
  );
}
