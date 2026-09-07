import Link from '@docusaurus/Link';
import styles from "./button.module.scss";

interface ButtonProps {
  text: string;
  // Auf dein Design abgestimmte Namen
  style: "btnPrimary" | "btnSecondary" | "btnTertiary"; 
  href?: string;
  onClick?: () => void;
}

export function Button({ text, style, href, onClick }: ButtonProps) {
  const className = `${styles.btn} ${styles[style]}`;

  if (href) {
    return (
      <Link to={href} className={className}>
        {text}
      </Link>
    );
  }

  return (
    <button className={className} onClick={onClick}>
      {text}
    </button>
  );
}
