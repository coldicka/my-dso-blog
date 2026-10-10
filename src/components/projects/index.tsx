import { useState } from 'react';
import Translate, { translate } from '@docusaurus/Translate';
import { ProjectCard } from './ProjectCard';
import styles from './projects.module.scss';

import { Project, getTags } from './projectTypes';

const projects: Project[] = [
{title: "Baby Tools World",
docPath: "docs/baby-tools-shop",
githubLink: "https://github.com/coldicka/baby-tools-world",
image: "/img/projects/baby-tools.png",
tags: getTags(["python", "django"]),
context: translate({ id: "projects.focus.baby.context", message: "Existing application \u00b7 Training project" }),
task: translate({ id: "projects.focus.baby.task", message: "Extend an existing Django shop with product tags." }),
contribution: translate({ id: "projects.focus.baby.contribution", message: "I added the tag model, admin management, linked tags and a filtered product view, and adjusted the review form." }),
result: translate({ id: "projects.focus.baby.result", message: "Tag management and product assignment are connected to the shop interface." })},
{title: "Conduit Deployment",
docPath: "docs/conduit-deployment",
githubLink: "https://github.com/coldicka/Conduit-Container",
image: "/img/projects/conduit-deployment.png",
tags: getTags(["githubActions", "docker", "linux"]),
context: translate({ id: "projects.focus.deployment.context", message: "Existing application \u00b7 Training project" }),
task: translate({ id: "projects.focus.deployment.task", message: "Automate deployment of an existing Angular/Django application." }),
contribution: translate({ id: "projects.focus.deployment.contribution", message: "I implemented image builds, publishing to GHCR and deployment via SSH using GitHub Actions." }),
result: translate({ id: "projects.focus.deployment.result", message: "The workflow connects the build process to updating the containers on the server." })},
{title: "Truck Signs API",
docPath: "docs/truck-signs-api",
githubLink: "https://github.com/coldicka/truck-signs-api/tree/feature/truckSignsApi",
image: "/img/projects/truck-signs.png",
tags: getTags(["python", "django", "docker"]),
context: translate({ id: "projects.focus.truck.context", message: "Existing application \u00b7 Training project" }),
task: translate({ id: "projects.focus.truck.task", message: "Investigate and repair a faulty container setup for an existing API." }),
contribution: translate({ id: "projects.focus.truck.contribution", message: "I corrected the Dockerfile, Compose configuration and entrypoint, including database migrations and superuser creation." }),
result: translate({ id: "projects.focus.truck.result", message: "The revised startup sequence waits for PostgreSQL, applies migrations and starts Gunicorn." })},
{title: "CD Portfolio",
docPath: "docs/portfolio",
githubLink: "https://github.com/coldicka/my-dso-blog",
image: "/img/cdn.jpg",
tags: getTags(["react", "typescript", "githubActions"]),
context: translate({ id: "projects.focus.portfolio.context", message: "Personal project \u00b7 Based on Docusaurus" }),
task: translate({ id: "projects.focus.portfolio.task", message: "Present my experience and projects in an accessible, bilingual website." }),
contribution: translate({ id: "projects.focus.portfolio.contribution", message: "I develop React components, responsive SCSS layouts and German/English content, with a GitHub Pages deployment workflow." }),
result: translate({ id: "projects.focus.portfolio.result", message: "A bilingual portfolio connects my professional background with documented project work." })},
{title: "Conduit Container",
docPath: "docs/conduit-container",
githubLink: "https://github.com/coldicka/Conduit-Container",
image: "/img/projects/conduit-container.png",
tags: getTags(["docker", "django", "angular", "nginx"]),
context: translate({ id: "projects.focus.container.context", message: "Existing application \u00b7 Training project" }),
task: translate({ id: "projects.focus.container.task", message: "Connect the existing frontend, backend and database in containers." }),
contribution: translate({ id: "projects.focus.container.contribution", message: "I added Dockerfiles, an Nginx API proxy and PostgreSQL integration, then configured Compose, networks and volumes." }),
result: translate({ id: "projects.focus.container.result", message: "The three services are described in one setup with a database healthcheck and persistent storage." })},
{title: "Minecraft Server",
docPath: "docs/minecraft-server",
githubLink: "https://github.com/coldicka/minecraft-server",
image: "/img/projects/minecraft.png",
tags: getTags(["docker", "shell"]),
context: translate({ id: "projects.focus.minecraft.context", message: "Container setup \u00b7 Training project" }),
task: translate({ id: "projects.focus.minecraft.task", message: "Configure a Minecraft server with persistent world data." }),
contribution: translate({ id: "projects.focus.minecraft.contribution", message: "I configured Docker and Compose and wrote a startup script for server settings and Java memory parameters." }),
result: translate({ id: "projects.focus.minecraft.result", message: "Server settings are configurable through environment variables; the world is mounted in its own volume." })},
{title: "WordPress",
docPath: "docs/wordpress",
githubLink: "https://github.com/coldicka/wordpress/tree/feature/setup_wordpress",
image: "/img/projects/wordpress.png",
tags: getTags(["docker"]),
context: translate({ id: "projects.focus.wordpress.context", message: "Software setup \u00b7 Training project" }),
task: translate({ id: "projects.focus.wordpress.task", message: "Configure WordPress with a database and persistent storage." }),
contribution: translate({ id: "projects.focus.wordpress.contribution", message: "I assembled a Compose setup for WordPress, MySQL and phpMyAdmin with networks, volumes and file-based secrets." }),
result: translate({ id: "projects.focus.wordpress.result", message: "The service configuration is consolidated; database and WordPress content use separate volumes." })},
{title: "OWASP Juice Shop",
docPath: "docs/juice-shop-master",
githubLink: "",
image: "/img/projects/juice-shop.png",
tags: getTags(["security"]),
context: translate({ id: "projects.focus.security.context", message: "Intentionally vulnerable application \u00b7 Training exercises" }),
task: translate({ id: "projects.focus.security.task", message: "Understand common web application vulnerabilities in a practice environment." }),
contribution: translate({ id: "projects.focus.security.contribution", message: "I documented selected Juice Shop challenges, including authentication issues and XSS." }),
result: translate({ id: "projects.focus.security.result", message: "The writeups record the approach and observations for each exercise." })}
];

const MOBILE_VISIBLE_COUNT = 4;

export default function Projects() {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [showAll, setShowAll] = useState(false);

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
                {projects.map((project, index) => (
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

            </div>

            {activeProject && (
              <ProjectCard {...activeProject} variant="desktop" />
            )}
          </div>

          {/* ---------- MOBILE LAYOUT ---------- */}
          <div className={styles.mobileProjects}>
            {projects.slice(0, showAll ? projects.length : MOBILE_VISIBLE_COUNT).map((project, index) => (
              <ProjectCard 
                key={project.title} 
                {...project} 
                variant="mobile" 
                indexNumber={index + 1} 
              />
            ))}

            <button type="button" className={styles.mobileSeeMore} aria-expanded={showAll} onClick={() => setShowAll(!showAll)}>
              {showAll ? <Translate id="projects.showLess">Show fewer projects</Translate> : <Translate id="projects.seeMore">Show all projects</Translate>}
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}
