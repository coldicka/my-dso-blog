import useBaseUrl from '@docusaurus/useBaseUrl';
import Link from '@docusaurus/Link';
import Translate from '@docusaurus/Translate';
import styles from './skills.module.scss';
interface SkillCardProps { name: string; icon: string; description: string; technologies: string; href: string; }
export function SkillCard({ name, icon, description, technologies, href }: SkillCardProps) {
  const resolvedIconUrl = useBaseUrl(icon);
  const resolvedHref = useBaseUrl(href.startsWith('#') ? '/' : href);
  return <article className={styles.skillCard}>
    <div className={styles.skillSummary}><img src={resolvedIconUrl} alt="" className={styles.icon} loading="lazy" /><h4 className={styles.label}>{name}</h4></div>
    <p className={styles.skillBody}>{description}</p>
    <ul className={styles.technologies}>
      {technologies.split('·').map(technology => technology.trim()).filter(Boolean).map(technology => (
        <li key={technology} className={styles.technology}>{technology}</li>
      ))}
    </ul>
    {href.startsWith('#') ? <a className={styles.evidence} href={href}><Translate id="skills.focus.background">View background</Translate> <span aria-hidden="true">↗</span></a> :
      <Link className={styles.evidence} to={resolvedHref}><Translate id="skills.focus.example">View project</Translate> <span aria-hidden="true">↗</span></Link>}
  </article>;
}
