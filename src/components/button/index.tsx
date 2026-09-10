import Link from '@docusaurus/Link';
import styles from "./button.module.scss";

interface ButtonProps {
  text: string;
  style: "btnPrimary" | "btnSecondary" | "btnTertiary"; 
  href?: string;
  onClick?: () => void;
}

/**
 * A flexible Button component that automatically switches between a Docusaurus Link 
 * and a standard HTML button based on the presence of a URL (`href`).
 *
 * @param props - The properties for the button.
 * @param props.text - The text label displayed inside the button.
 * @param props.style - The visual style variant of the button.
 * @param props.href - The destination URL (renders as a Link if provided).
 * @param props.onClick - click event handler.
 */
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
