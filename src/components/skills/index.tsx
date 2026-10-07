import { useState } from 'react';
import { translate } from '@docusaurus/Translate';
import Translate from '@docusaurus/Translate';
import { SkillCard } from './SkillCard';
import styles from './skills.module.scss';

const SKILLS_PER_PAGE = 3;

const activeSkills = [
  {
    id: 'itSecurity',
    icon: '/img/skills/icon_itSecurtiy.svg',
    label: translate({ id: "skills.itSecurity.name", message: "IT Security" }),
    usage: [
      translate({ id: "skills.itSecurity.desc1", message: "simulate attacks and identify vulnerabilities" }),
      translate({ id: "skills.itSecurity.desc2", message: "Setting up multi-factor authentication" }),
      translate({ id: "skills.itSecurity.desc3", message: "login security" }),
    ],
  },
  {
    id: 'container',
    icon: '/img/skills/icon_docker.svg',
    label: translate({ id: "skills.container.name", message: "Container (Docker)" }),
    usage: [
      translate({ id: "skills.docker.desc1", message: "CI/CD pipelines" }),
      translate({ id: "skills.docker.desc2", message: "automate building, testing, deploying applications." }),
      translate({ id: "skills.docker.desc3", message: "build microservices-based applications" }),
    ],
  },
  {
    id: 'githubActions',
    icon: '/img/skills/icon_cd_ci.svg',
    label: translate({ id: "skills.githubActions.name", message: "CI/CD With GitHub Actions" }),
    usage: [
      translate({ id: "skills.githubActions.desc1", message: "Automated builds and tests" }),
      translate({ id: "skills.githubActions.desc2", message: "pre-built actions for common tasks" }),
      translate({ id: "skills.githubActions.desc3", message: "push, pull request, or schedule" }),
      translate({ id: "skills.githubActions.desc4", message: "Automated deployments" }),
    ],
  },
  {
    id: 'shellScripting',
    icon: '/img/skills/icon_shellscripting.svg',
    label: translate({ id: "skills.shellScripting.name", message: "Shell scripting" }),
    usage: [
      translate({ id: "skills.shellScripting.desc1", message: "Adding new users and setting their permissions." }),
      translate({ id: "skills.shellScripting.desc2", message: "Performing calculations or running statistical analysis on data." }),
      translate({ id: "skills.shellScripting.desc3", message: "Conditional statements, loops, functions" }),
    ],
  },
  {
    id: 'yaml',
    icon: '/img/skills/icon_yaml.svg',
    label: translate({ id: "skills.yaml.name", message: "Yaml" }),
    usage: [
      translate({ id: "skills.yaml.desc1", message: "A Kubernetes deployment" }),
      translate({ id: "skills.yaml.desc2", message: "store settings like database connections" }),
      translate({ id: "skills.yaml.desc3", message: "environment-specific variables" }),
    ],
  },
  {
    id: 'javascript',
    icon: '/img/skills/icon_js.svg',
    label: translate({ id: "skills.javascript.name", message: "JavaScript" }),
    usage: [
      translate({ id: "skills.javascript.desc1", message: "ES6+ Core Features & Async Programming" }),
      translate({ id: "skills.javascript.desc2", message: "DOM Manipulation and Event Handling" }),
      translate({ id: "skills.javascript.desc3", message: "Object-Oriented & Functional Concepts" }),
    ],
  },
  {
    id: 'typescript',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg',
    label: translate({ id: "skills.typescript.name", message: "TypeScript" }),
    usage: [
      translate({ id: "skills.typescript.desc1", message: "Strongly Typed JavaScript Development" }),
      translate({ id: "skills.typescript.desc2", message: "Interfaces, Types, and Generic Code" }),
      translate({ id: "skills.typescript.desc3", message: "Catching Errors during Development Time" }),
    ],
  },
  {
    id: 'python',
    icon: '/img/skills/icon_python.svg',
    label: translate({ id: "skills.python.name", message: "Python" }),
    usage: [
      translate({ id: "skills.python.desc1", message: "Build APIs" }),
      translate({ id: "skills.python.desc2", message: "spam filtering, recommendation systems" }),
      translate({ id: "skills.python.desc3", message: "automate software testing" }),
      translate({ id: "skills.python.desc4", message: "using libraries like Tkinter, PyQt, or Kivy" }),
    ],
  },
  {
    id: 'react',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
    label: translate({ id: "skills.react.name", message: "React" }),
    usage: [
      translate({ id: "skills.react.desc1", message: "Component-Based Architecture" }),
      translate({ id: "skills.react.desc2", message: "One-Way Data Binding" }),
    ],
  },
  {
    id: 'oxid',
    icon: '/img/skills/icon_oxid.png',
    label: translate({ id: "skills.oxid.name", message: "OXID" }),
    usage: [
      translate({ id: "skills.oxid.desc1", message: "Building Custom Themes and Front Ends" }),
    ],
  },
  {
    id: 'shopware',
    icon: '/img/skills/icon_shopware.svg',
    label: translate({ id: "skills.shopware.name", message: "Shopware" }),
    usage: [
      translate({ id: "skills.shopware.desc1", message: "Building Custom Themes and Front Ends" }),
    ],
  },
  {
    id: 'git',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg',
    label: translate({ id: "skills.git.name", message: "Git" }),
    usage: [
      translate({ id: "skills.git.desc1", message: "Branching & merging" }),
      translate({ id: "skills.git.desc2", message: "Version control" }),
      translate({ id: "skills.git.desc3", message: "CI/CD integration" }),
    ],
  },
  {
    id: 'tia_portal',
    icon: '/img/skills/icon_tia_portal_hmi_logo.svg',
    label: translate({ id: "skills.tia_portal.name", message: "TIA Portal (SPS)" }),
    usage: [
      translate({ id: "skills.tia_portal.desc1", message: "PLC Programming" }),
      translate({ id: "skills.tia_portal.desc2", message: "Visualization and Operation" }),
    ],
  },
  {
    id: 'angular',
    icon: '/img/skills/icon_angular.png',
    label: translate({ id: "skills.angular.name", message: "Angular" }),
    usage: [
      translate({ id: "skills.angular.desc1", message: "Component-Based Architecture" }),
      translate({ id: "skills.angular.desc2", message: "Two-Way Data Binding & Services" }),
      translate({ id: "skills.angular.desc3", message: "Basic understanding of framework concepts" }),
    ],
  },
  {
    id: 'html',
    icon: '/img/skills/icon_html.svg',
    label: translate({ id: "skills.html.name", message: "HTML" }),
    usage: [
      translate({ id: "skills.html.desc1", message: "User-friendly navigation menus" }),
      translate({ id: "skills.html.desc2", message: "Responsive web design" }),
      translate({ id: "skills.html.desc3", message: "Contact forms and login pages" }),
    ],
  },
  {
    id: 'css',
    icon: '/img/skills/icon_css.svg',
    label: translate({ id: "skills.css.name", message: "CSS" }),
    usage: [
      translate({ id: "skills.css.desc1", message: "User-friendly navigation menus" }),
      translate({ id: "skills.css.desc2", message: "Responsive web design " }),
      translate({ id: "skills.css.desc3", message: "Contact forms and login pages" }),
    ],
  },
  {
    id: 'scss',
    icon: '/img/skills/icon_sass.svg',
    label: translate({ id: "skills.scss.name", message: "SCSS/SASS" }),
    usage: [
      translate({ id: "skills.scss.desc1", message: "Building Layouts and Structures" }),
      translate({ id: "skills.scss.desc2", message: "Optimizing Websites for Smartphones (Responsive Design)" }),
      translate({ id: "skills.scss.desc3", message: "Modular CSS Architecture" }),
    ],
  },
  {
    id: 'less',
    icon: '/img/skills/icon_lessjs.svg',
    label: translate({ id: "skills.less.name", message: "LESS" }),
    usage: [
      translate({ id: "skills.less.desc1", message: "Building Layouts and Structures" }),
      translate({ id: "skills.less.desc2", message: "Optimizing Websites for Smartphones (Responsive Design)" }),
      translate({ id: "skills.less.desc3", message: "Styling Interactive States" }),
    ],
  },
];
export default function Skills() {
  const [activePage, setActivePage] = useState(0);

  const skillPages = Array.from(
    { length: Math.ceil(activeSkills.length / SKILLS_PER_PAGE) },
    (_, index) => activeSkills.slice(index * SKILLS_PER_PAGE, index * SKILLS_PER_PAGE + SKILLS_PER_PAGE)
  );

  const currentMobileSkills = skillPages[activePage] || [];

  const showPreviousPage = () => {
    setActivePage((curr) => (curr === 0 ? skillPages.length - 1 : curr - 1));
  };

  const showNextPage = () => {
    setActivePage((curr) => (curr === skillPages.length - 1 ? 0 : curr + 1));
  };

  return (
    <section className={[styles.skillsSection, 'section-padding'].join(' ')} id="skills">
      <div className="container">
        <div className={styles.inner}>
          <h2 className="section-heading">
            <Translate id="skills.heading">My skills</Translate>
          </h2>

          <div className={styles.grid}>
            {activeSkills.map((skill, index) => (
              <SkillCard 
                key={`desktop-${skill.id}-${index}`} 
                name={skill.label}
                icon={skill.icon}
                description={skill.usage}
                variant="desktop" 
              />
            ))}
          </div>

          <div className={styles.mobileSlider}>
            <div className={styles.mobileCard}>
              {currentMobileSkills.map((skill, index) => (
                <SkillCard 
                  key={`mobile-${skill.id}-${index}`} 
                  name={skill.label}
                  icon={skill.icon}
                  description={skill.usage}
                  variant="mobile" 
                />
              ))}
            </div>

            <div className={styles.sliderControls}>
              <button type="button" className={styles.sliderArrow} onClick={showPreviousPage} aria-label={translate({ id: "skills.pagination.previous", message: "Previous skills page" })}>‹</button>
              <div className={styles.dots}>
                {skillPages.map((_, index) => (
                  <button
                    key={index}
                    type="button"
                    className={`${styles.dot} ${index === activePage ? styles.activeDot : ''}`}
                    onClick={() => setActivePage(index)}
                    aria-label={translate({ id: "skills.pagination.page", message: "Go to page {page}" }, { page: index + 1 })}
                  />
                ))}
              </div>
              <button type="button" className={styles.sliderArrow} onClick={showNextPage} aria-label={translate({ id: "skills.pagination.next", message: "Next skills page" })}>›</button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
