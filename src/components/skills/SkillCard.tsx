import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './skills.module.scss';

interface SkillCardProps {
  name: string;
  icon: string;
  description: string[];
  variant: 'desktop' | 'mobile';
}

/**
 * SkillCard-Komponente zur Anzeige von Fähigkeiten.
 *
 * @param props - The props for the skill component.
 * @param props.name - The skill name.
 * @param props.icon - Icon.
 * @param props.description - An array of strings describing the usage.
 * @param props.variant - The display option (e.g., ‘desktop’).
 * @returns The rendered JSX element of the SkillCard.
 */
export function SkillCard({ name, icon, description, variant }: SkillCardProps) {
  const resolvedIconUrl = useBaseUrl(icon);

  if (variant === 'desktop') {
    return (
      <div className={styles.flipCard}>
        <div className={styles.flipCardInner}>
          <div className={styles.flipCardFront}>
            <img src={resolvedIconUrl} alt={name} className={styles.icon} />
            <span className={styles.label}>{name}</span>
          </div>
          <div className={styles.flipCardBack}>
            <p className={styles.hoverTitle}>How I used this skill</p>
            <ul className={styles.hoverList}>
              {description.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    );
  }

  // MOBILE
  return (
    <article className={styles.mobileSkill}>
      <div className={styles.mobileSkillHeader}>
        <img src={resolvedIconUrl} alt={name} className={styles.mobileIcon} />
        <span className={styles.mobileLabel}>{name}</span>
      </div>
      <ul className={styles.mobileDescription}>
        {description.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </article>
  );
}
