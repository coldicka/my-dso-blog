import React from 'react';
import { translate } from '@docusaurus/Translate';
import useBaseUrl from '@docusaurus/useBaseUrl';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext'; 
import { Button } from '../button';
import styles from './projects.module.scss';

interface Tag {
  label: string;
  icon: string;
}

interface ProjectCardProps {
  title: string;
  context: string;
  task: string;
  contribution: string;
  result: string;
  tags: Tag[];
  docPath: string;
  githubLink?: string; // Juice Shop does not have a GitHub repository
  image: string;
  variant: 'desktop' | 'mobile';
  indexNumber?: number;
}

export function ProjectCard({
  title,
  context,
  task,
  contribution,
  result,
  tags,
  docPath,
  githubLink,
  image,
  variant,
  indexNumber,
}: ProjectCardProps) {
  const { siteConfig } = useDocusaurusContext();
  const baseUrl = siteConfig.baseUrl || '/';

  const resolvedImageUrl = useBaseUrl(image);
  const resolvedDocUrl = useBaseUrl(docPath);

  const getIconUrl = (iconPath: string) => {
    if (iconPath.startsWith('http')) {
      return iconPath;
    }
    const cleanBase = baseUrl.endsWith('/') ? baseUrl : `${baseUrl}/`;
    const cleanPath = iconPath.startsWith('/') ? iconPath.substring(1) : iconPath;
    return `${cleanBase}${cleanPath}`;
  };

  const summary = <><p className={styles.projectContext}>{context}</p><dl className={styles.projectSummary}>
    <div><dt>{translate({ id: 'projects.focus.task', message: 'Task' })}</dt><dd>{task}</dd></div>
    <div><dt>{translate({ id: 'projects.focus.contribution', message: 'My contribution' })}</dt><dd>{contribution}</dd></div>
    <div><dt>{translate({ id: 'projects.focus.result', message: 'Result' })}</dt><dd>{result}</dd></div>
  </dl></>;

  // ==========================================================================
  // --- DESKTOP VERSION (Grid Layout) ---
  // ==========================================================================
  if (variant === 'desktop') {
    return (
      <article className={`${styles.card} ${!image ? styles.cardWithoutImage : ''}`}>
        <h3 className={styles.cardTitle}>{title}</h3>

        <div className={styles.tags}>
          {tags.map((tag) => (
            <span key={tag.label} className={styles.tag}>
              <img src={getIconUrl(tag.icon)} alt="" aria-hidden="true" className={styles.tagIcon} />
              {tag.label}
            </span>
          ))}
        </div>

        {image && <div className={styles.cardImageWrapper}>
          <img src={resolvedImageUrl} alt={title} className={styles.cardImage} />
        </div>}

        <div className={styles.cardBody}>
          {summary}
          <div className={styles.buttons}>
            <Button text={translate({ id: 'projects.card.documentation', message: 'Documentation' })} style="btnPrimary" href={resolvedDocUrl} />
            {githubLink && (
              <Button text="GitHub" style="btnSecondary" href={githubLink} />
            )}
          </div>
        </div>
      </article>
    );
  }

  // ==========================================================================
  // --- MOBILE VERSION (stacked arrangement) ---
  // ==========================================================================
  return (
    <article className={styles.mobileCard}>
      <h3 className={styles.mobileCardTitle}>
        {indexNumber ? `${indexNumber}. ` : ''}{title}
      </h3>

      <div className={styles.mobileTags}>
        {tags.map((tag) => (
          <span key={tag.label} className={styles.mobileTag}>
            <img src={getIconUrl(tag.icon)} alt="" aria-hidden="true" className={styles.mobileTagIcon} />
            {tag.label}
          </span>
        ))}
      </div>

      {image && <img src={resolvedImageUrl} alt={title} className={styles.mobileImage} loading="lazy" />}
      {summary}

      <div className={styles.mobileButtons}>
        <Button text={translate({ id: 'projects.card.documentation', message: 'Documentation' })} style="btnPrimary" href={resolvedDocUrl} />

        {githubLink && (
          <Button text="GitHub" style="btnSecondary" href={githubLink} />
        )}
      </div>
    </article>
  );
}
