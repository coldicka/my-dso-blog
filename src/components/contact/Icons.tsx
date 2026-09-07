import React from 'react';

interface IconProps {
  className?: string;
}

export function MailIcon({ className }: IconProps) {
  return (
    <svg 
      className={className} 
      width="32" 
      height="32" 
      viewBox="0 0 32 32" 
      fill="none" 
      xmlns="http://w3.org"
    >
      {/* 1. Ein sauberer, blauer Hintergrundkreis mit weißer Kontur */}
      <circle cx="16" cy="16" r="15.5" fill="#266AD9" stroke="white" />
      
      {/* 2. Das Brief-Symbol, flächig weiß ausgefüllt (OHNE störende Kontur) */}
      <path 
        d="M23.5 12.5L16 17.5L8.5 12.5V21.5H23.5V12.5ZM8.5 10.5H23.5V11.5L16 16.5L8.5 11.5V10.5Z" 
        fill="white" 
      />
    </svg>
  );
}

export function LinkedInIcon({ className }: IconProps) {
  return (
    <svg 
      className={className} 
      width="32" 
      height="32" 
      viewBox="0 0 32 32" 
      fill="none" 
      xmlns="http://w3.org"
    >
      {/* 1. Ein sauberer, blauer Hintergrundkreis mit weißer Kontur */}
      <circle cx="16" cy="16" r="15.5" fill="#266AD9" stroke="white" />
      
      {/* 2. Das LinkedIn "in"-Logo, flächig weiß ausgefüllt */}
      <path 
        d="M9 23.54H12V13.27H9V23.54ZM10.5 11.83c.96 0 1.5-.66 1.5-1.47 0-.83-.54-1.48-1.5-1.48s-1.5.65-1.5 1.48c0 .81.54 1.47 1.5 1.47zM21.5 23.54v-5.5c0-.29-.02-.59-.11-.8-.24-.6-.78-1.22-1.69-1.22-1.2 0-1.7.92-1.7 1.83v5.69h-3V13.27h3v1.37h.04c.42-.79 1.43-1.62 2.95-1.62 3.15 0 3.74 2.07 3.74 4.77v7.12h-3.23z" 
        fill="white" 
      />
    </svg>
  );
}
