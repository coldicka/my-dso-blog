import { useState } from 'react';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import { ProjectCard } from './ProjectCard';
import styles from './projects.module.scss';

import { Project, getTags } from './projectTypes';

const projects: Project[] = [
  {
    title: 'Baby Tools Shop',
    description:
      'A simple, full-stack, Dockerized shop application built with Python and Django 6. It uses SQLite as the database and runs behind a custom Docker setup, with volume mapping configured for persistent data storage.',
    tags: getTags(['python', 'docker', 'django']),
    docPath: 'docs/baby-tools-shop',
    githubLink: 'https://github.com/coldicka/baby-tools-world',
    image: '/img/projects/baby-tools.png',
  },
  {
    title: 'Conduit Container',
    description:
      'An automated CI/CD workflow powered by GitHub Actions and the GitHub Container Registry. The pipeline is divided into three sequential stages: building the application, preparing the configuration, and deploying the project remotely through SSH.',
    tags: getTags(['docker', 'django', 'angular', 'nginx']),
    docPath: 'docs/conduit-container',
    githubLink: 'https://github.com/coldicka/Conduit-Containerm',
    image: '/img/projects/conduit-container.png',
  },
  {
    title: 'Conduit Deployment',
    description:
      'A fully Dockerized and automated CI/CD workflow powered by GitHub Actions and the GitHub Container Registry. The pipeline consists of three sequential stages responsible for building the application, preparing the required configuration, and deploying it remotely via SSH.',
    tags: getTags(['githubActions', 'docker', 'linux']),
    docPath: 'docs/conduit-deployment',
    githubLink: 'https://github.com/coldicka/Conduit-Container',
    image: '/img/projects/conduit-deployment.png',
  },
  {
    title: 'Juice Shop Master',
    description:
      'OWASP Juice Shop vulnerability writeups covering SQL injection, exposed password hashes, authentication flaws, and other common web security issues. The project demonstrates real-world vulnerabilities and provides practical insights into identifying and preventing them.',
    tags: getTags(['security', 'python', 'linux']),
    docPath: 'docs/juice-shop-master',
    githubLink: '',
    image: '/img/projects/juice-shop.png',
  },
  {
    title: 'Minecraft Server',
    description:
      'A containerized, Java-based Minecraft server deployment built from a custom Dockerfile using an OpenJDK base image. An entrypoint script automates runtime initialization, server provisioning, configuration, and startup.',
    tags: getTags(['docker', 'java', 'shell']),
    docPath: 'docs/minecraft-gaming-server',
    githubLink: 'https://github.com/coldicka/minecraft-server',
    image: '/img/projects/minecraft.png',
  },
  {
    title: 'Truck Signs API',
    description:
      'A Dockerized Django REST API for managing truck sign products, categories and orders with PostgreSQL, Gunicorn and Nginx — deployed without Docker Compose.',
    tags: getTags(['python', 'django', 'docker', 'nginx']),
    docPath: 'docs/truck-signs-api',
    githubLink: 'https://github.com/coldicka/truck-signs-api',
    image: '/img/projects/truck-signs.png',
  },
];

const VISIBLE_COUNT = 5;
const MOBILE_VISIBLE_COUNT = 3;

export default function Projects() {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const { siteConfig } = useDocusaurusContext();
  const baseUrl = siteConfig.baseUrl;

  const activeProject = projects[activeIndex];

  return (
    <section className={[styles.projects, 'section-padding'].join(' ')} id="projects">
      <div className="container">
        <div className={styles.inner}>
          
          <h2 className={`section-heading ${styles.projectHeadline}`}>My project highlightss</h2>

          {/* ---------- DESKTOP LAYOUT ---------- */}
          <div className={styles.desktopLayout}>
            <div className={styles.projectListWrapper}>
              <ol className={styles.projectList}>
                {projects.slice(0, VISIBLE_COUNT).map((project, index) => (
                  <li
                    key={project.title}
                    className={index === activeIndex ? styles.activeItem : styles.listItem}
                  >
                    <button
                      type="button"
                      className={styles.projectButton}
                      onClick={() => setActiveIndex(index)}
                    >
                      {project.title}
                    </button>
                  </li>
                ))}
              </ol>

              <Link to={`${baseUrl}docs/truck-signs-api/`} className={styles.seeMore}>
                ↳ see more projects
              </Link>
            </div>

            {activeProject && (
              <ProjectCard {...activeProject} variant="desktop" />
            )}
          </div>

          {/* ---------- MOBILE LAYOUT ---------- */}
          <div className={styles.mobileProjects}>
            {projects.slice(0, MOBILE_VISIBLE_COUNT).map((project, index) => (
              <ProjectCard 
                key={project.title} 
                {...project} 
                variant="mobile" 
                indexNumber={index + 1} 
              />
            ))}

            <Link to={`${baseUrl}docs/minecraft-gaming-server`} className={styles.mobileSeeMore}>
              ↳ see more projects
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
}
