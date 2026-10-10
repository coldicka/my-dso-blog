import useBaseUrl from '@docusaurus/useBaseUrl';
import Translate from '@docusaurus/Translate';
import styles from './skills.module.scss';
interface SkillCardProps { name: string; icon: string; description: string[]; }
export function SkillCard({ name, icon, description }: SkillCardProps) {
  const resolvedIconUrl = useBaseUrl(icon);
  return <details className={styles.skillCard}>
    <summary className={styles.skillSummary}><img src={resolvedIconUrl} alt="" className={styles.icon} loading="lazy" /><span className={styles.label}>{name}</span><span className={styles.expand} aria-hidden="true">+</span></summary>
    <div className={styles.skillBody}><p className={styles.usageTitle}><Translate id="skills.card.hoverTitle">How I used this skill</Translate></p><ul>{description.map(item => <li key={item}>{item}</li>)}</ul></div>
  </details>;
}
