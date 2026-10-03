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
    label: <Translate id="skills.itSecurity.name">IT Security</Translate>,
    usage: [
      <Translate id="skills.itSecurity.desc1">simulate attacks and identify vulnerabilities</Translate>,
      <Translate id="skills.itSecurity.desc2">Setting up multi-factor section-heading</Translate>,
      <Translate id="skills.itSecurity.desc3">login security</Translate>,
    ],
  },
  {
    id: 'container',
    icon: '/img/skills/icon_docker.svg',
    label: <Translate id="skills.container.name">Container (Docker)</Translate>,
    usage: [
      <Translate id="skills.docker.desc1">CI/CD pipelines</Translate>,
      <Translate id="skills.docker.desc2">automate building, testing, deploying applications.</Translate>,
      <Translate id="skills.docker.desc3">build microservices-based applications</Translate>,
    ],
  },
  {
    id: 'githubActions',
    icon: '/img/skills/icon_cd_ci.svg',
    label: <Translate id="skills.githubActions.name">CI/CD With GitHub Actions</Translate>,
    usage: [
      <Translate id="skills.githubActions.desc1">Automated builds and tests</Translate>,
      <Translate id="skills.githubActions.desc2">pre-built actions for common tasks</Translate>,
      <Translate id="skills.githubActions.desc3">push, pull request, or schedule</Translate>,
      <Translate id="skills.githubActions.desc4">Automated deployments</Translate>,
    ],
  },
  {
    id: 'shellScripting',
    icon: '/img/skills/icon_shellscripting.svg',
    label: <Translate id="skills.shellScripting.name">Shell scripting</Translate>,
    usage: [
      <Translate id="skills.shellScripting.desc1">Adding new users and setting their permissions.</Translate>,
      <Translate id="skills.shellScripting.desc2">Performing calculations or running statistical analysis on data.</Translate>,
      <Translate id="skills.shellScripting.desc3">Conditional statements, loops, functions</Translate>,
    ],
  },
  {
    id: 'yaml',
    icon: '/img/skills/icon_yaml.svg',
    label: <Translate id="skills.yaml.name">Yaml</Translate>,
    usage: [
      <Translate id="skills.yaml.desc1">A Kubernetes deployment</Translate>,
      <Translate id="skills.yaml.desc2">store settings like database connections</Translate>,
      <Translate id="skills.yaml.desc3">environment-specific variables</Translate>,
    ],
  },
  {
    id: 'javascript',
    icon: '/img/skills/icon_js.svg',
    label: <Translate id="skills.javascript.name">JavaScript</Translate>,
    usage: [
      <Translate id="skills.javascript.desc1">ES6+ Core Features & Async Programming</Translate>,
      <Translate id="skills.javascript.desc2">DOM Manipulation and Event Handling</Translate>,
      <Translate id="skills.javascript.desc3">Object-Oriented & Functional Concepts</Translate>,
    ],
  },
  {
    id: 'typescript',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg',
    label: <Translate id="skills.typescript.name">TypeScript</Translate>,
    usage: [
      <Translate id="skills.typescript.desc1">Strongly Typed JavaScript Development</Translate>,
      <Translate id="skills.typescript.desc2">Interfaces, Types, and Generic Code</Translate>,
      <Translate id="skills.typescript.desc3">Catching Errors during Development Time</Translate>,
    ],
  },
  {
    id: 'python',
    icon: '/img/skills/icon_python.svg',
    label: <Translate id="skills.python.name">Python</Translate>,
    usage: [
      <Translate id="skills.python.desc1">Build APIs</Translate>,
      <Translate id="skills.python.desc2">spam filtering, recommendation systems</Translate>,
      <Translate id="skills.python.desc3">automate software testing</Translate>,
      <Translate id="skills.python.desc4">using libraries like Tkinter, PyQt, or Kivy</Translate>,
    ],
  },
  {
    id: 'react',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
    label: <Translate id="skills.react.name">React</Translate>,
    usage: [
      <Translate id="skills.react.desc1">Component-Based Architecture</Translate>,
      <Translate id="skills.react.desc2">One-Way Data Binding</Translate>,
    ],
  },
  {
    id: 'oxid',
    icon: '/img/skills/icon_oxid.png',
    label: <Translate id="skills.oxid.name">OXID</Translate>,
    usage: [
      <Translate id="skills.oxid.desc1">Building Custom Themes and Front Ends</Translate>,
    ],
  },
  {
    id: 'shopware',
    icon: '/img/skills/icon_shopware.svg',
    label: <Translate id="skills.shopware.name">Shopware</Translate>,
    usage: [
      <Translate id="skills.shopware.desc1">Building Custom Themes and Front Ends</Translate>,
    ],
  },
  {
    id: 'git',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg',
    label: <Translate id="skills.git.name">Git</Translate>,
    usage: [
      <Translate id="skills.git.desc1">Branching & merging</Translate>,
      <Translate id="skills.git.desc2">Version control</Translate>,
      <Translate id="skills.git.desc3">CI/CD integration</Translate>,
    ],
  },
  {
    id: 'tia_portal',
    icon: '/img/skills/icon_tia_portal_hmi_logo.svg',
    label: <Translate id="skills.tia_portal.name">TIA Portal (SPS)</Translate>,
    usage: [
      <Translate id="skills.tia_portal.desc1">PLC Programming</Translate>,
      <Translate id="skills.tia_portal.desc2">Visualization and Operation</Translate>,
    ],
  },
  {
    id: 'angular',
    icon: '/img/skills/icon_angular.png',
    label: <Translate id="skills.angular.name">Angular</Translate>,
    usage: [
      <Translate id="skills.angular.desc1">Component-Based Architecture</Translate>,
      <Translate id="skills.angular.desc2">Two-Way Data Binding & Services</Translate>,
      <Translate id="skills.angular.desc3">Basic understanding of framework concepts</Translate>,
    ],
  },
  {
    id: 'html',
    icon: '/img/skills/icon_html.svg',
    label: <Translate id="skills.html.name">HTML</Translate>,
    usage: [
      <Translate id="skills.html.desc1">User-friendly navigation menus</Translate>,
      <Translate id="skills.html.desc2">Responsive web design</Translate>,
      <Translate id="skills.html.desc3">Contact forms and login pages</Translate>,
    ],
  },
  {
    id: 'css',
    icon: '/img/skills/icon_css.svg',
    label: <Translate id="skills.css.name">CSS</Translate>,
    usage: [
      <Translate id="skills.css.desc1">User-friendly navigation menus</Translate>,
      <Translate id="skills.css.desc2">Responsive web design </Translate>,
      <Translate id="skills.css.desc3">Contact forms and login pages</Translate>,
    ],
  },
  {
    id: 'scss',
    icon: '/img/skills/icon_sass.svg',
    label: <Translate id="skills.scss.name">SCSS/SASS</Translate>,
    usage: [
      <Translate id="skills.scss.desc1">Building Layouts and Structures</Translate>,
      <Translate id="skills.scss.desc2">Optimizing Websites for Smartphones (Responsive Design)</Translate>,
      <Translate id="skills.scss.desc3">Modular CSS Architecture</Translate>,
    ],
  },
  {
    id: 'less',
    icon: '/img/skills/icon_lessjs.svg',
    label: <Translate id="skills.less.name">LESS</Translate>,
    usage: [
      <Translate id="skills.less.desc1">Building Layouts and Structures</Translate>,
      <Translate id="skills.less.desc2">Optimizing Websites for Smartphones (Responsive Design)</Translate>,
      <Translate id="skills.less.desc3">Styling Interactive States</Translate>,
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
                name={skill.label as unknown as string}
                icon={skill.icon}
                description={skill.usage as unknown as string[]}
                variant="desktop" 
              />
            ))}
          </div>

          <div className={styles.mobileSlider}>
            <div className={styles.mobileCard}>
              {currentMobileSkills.map((skill, index) => (
                <SkillCard 
                  key={`mobile-${skill.id}-${index}`} 
                  name={skill.label as unknown as string}
                  icon={skill.icon}
                  description={skill.usage as unknown as string[]}
                  variant="mobile" 
                />
              ))}
            </div>

            <div className={styles.sliderControls}>
              <button type="button" className={styles.sliderArrow} onClick={showPreviousPage}>‹</button>
              <div className={styles.dots}>
                {skillPages.map((_, index) => (
                  <button
                    key={index}
                    type="button"
                    className={`${styles.dot} ${index === activePage ? styles.activeDot : ''}`}
                    onClick={() => setActivePage(index)}
                    aria-label={`Go to page ${index + 1}`}
                  />
                ))}
              </div>
              <button type="button" className={styles.sliderArrow} onClick={showNextPage}>›</button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
