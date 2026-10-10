import { useState } from 'react';
import Translate, { translate } from '@docusaurus/Translate';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import { ProjectCard } from './ProjectCard';
import styles from './projects.module.scss';

import { Project, getTags } from './projectTypes';

const projects: Project[] = [
  {
    title: translate({ id: 'projects.portfolio.title', message: 'My Portfolio' }),
    description: translate({
      id: 'projects.portfolio.description',
      message: 'I develop my bilingual portfolio with Docusaurus, React and TypeScript. Custom components and responsive SCSS layouts showcase my projects. GitHub Actions builds and publishes the website to GitHub Pages after a push to main.',
    }),
    tags: getTags(['react', 'typescript', 'githubActions']),
    docPath: 'docs/portfolio',
    githubLink: 'https://github.com/coldicka/my-dso-blog',
    image: '/img/cdn.jpg',
  },
  {
    title: 'Baby Tools Shop',
    description: translate({
      id: 'projects.baby-tools-shop.description',
      message: 'A simple, full-stack, Dockerized shop application built with Python and Django 6. It uses SQLite as the database and runs behind a custom Docker setup, with volume mapping configured for persistent data storage.',
    }),
    tags: getTags(['python', 'docker', 'django']),
    docPath: 'docs/baby-tools-shop',
    githubLink: 'https://github.com/coldicka/baby-tools-world',
    image: '/img/projects/baby-tools.png',
  },
  {
    title: 'Conduit Container',
    description: translate({
      id: 'projects.conduit-container.description',
      message: 'I adapted an existing Angular/Django application for containerized operation. My contribution includes Dockerfiles, an Nginx reverse proxy, PostgreSQL integration, and Docker Compose configuration with persistent storage and a database healthcheck.',
    }),
    tags: getTags(['docker', 'django', 'angular', 'nginx']),
    docPath: 'docs/conduit-container',
    githubLink: 'https://github.com/coldicka/Conduit-Container',
    image: '/img/projects/conduit-container.png',
  },
  {
    title: 'Conduit Deployment',
    description: translate({
      id: 'projects.conduit-deployment.description',
      message: 'I implemented an automated deployment workflow using GitHub Actions. It builds the frontend and backend images, publishes them to the GitHub Container Registry, and updates the application on a Linux server via SSH. Configuration is supplied through GitHub Secrets.',
    }),
    tags: getTags(['githubActions', 'docker', 'linux']),
    docPath: 'docs/conduit-deployment',
    githubLink: 'https://github.com/coldicka/Conduit-Container',
    image: '/img/projects/conduit-deployment.png',
  },
  {
    title: 'Juice Shop Master',
    description: translate({
      id: 'projects.juice-shop-master.description',
      message: 'OWASP Juice Shop vulnerability writeups covering SQL injection, exposed password hashes, authentication flaws, and other common web security issues. The project demonstrates real-world vulnerabilities and provides practical insights into identifying and preventing them.',
    }),
    tags: getTags(['security', 'python', 'linux']),
    docPath: 'docs/juice-shop-master',
    githubLink: '',
    image: '/img/projects/juice-shop.png',
  },
  {
    title: 'Minecraft Server',
    description: translate({
      id: 'projects.minecraft-server.description',
      message: 'A containerized, Java-based Minecraft server deployment built from a custom Dockerfile using an OpenJDK base image. An entrypoint script automates runtime initialization, server provisioning, configuration, and startup.',
    }),
    tags: getTags(['docker', 'java', 'shell']),
    docPath: 'docs/minecraft-server',
    githubLink: 'https://github.com/coldicka/minecraft-server',
    image: '/img/projects/minecraft.png',
  },
  {
    title: 'Truck Signs API',
    description: translate({
      id: 'projects.truck-signs-api.description',
      message: 'A Dockerized Django REST API for managing truck sign products, categories and orders with PostgreSQL, Gunicorn and Nginx — deployed without Docker Compose.',
    }),
    tags: getTags(['python', 'django', 'docker', 'nginx']),
    docPath: 'docs/truck-signs-api',
    githubLink: 'https://github.com/coldicka/truck-signs-api',
    image: '/img/projects/truck-signs.png',
  },
];

const VISIBLE_COUNT = 6;
const MOBILE_VISIBLE_COUNT = 4;

export default function Projects() {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const { siteConfig } = useDocusaurusContext();
  const baseUrl = siteConfig.baseUrl;

  const activeProject = projects[activeIndex];

  return (
    <section className={[styles.projects, 'section-padding'].join(' ')} id="projects">
      <div className="container">
        <div className={styles.inner}>
          
          <h2 className={`section-heading ${styles.projectHeadline}`}>
            <Translate id="projects.heading">My project highlights</Translate>
          </h2>

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
                      aria-pressed={index === activeIndex}
                      onClick={() => setActiveIndex(index)}
                    >
                      {project.title}
                    </button>
                  </li>
                ))}
              </ol>

              <Link to={`${baseUrl}docs/truck-signs-api/`} className={styles.seeMore}>
                <Translate id="projects.seeMore">↳ see more projects</Translate>
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

            <Link to={`${baseUrl}docs/truck-signs-api/`} className={styles.mobileSeeMore}>
              <Translate id="projects.seeMore">↳ see more projects</Translate>
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
}
