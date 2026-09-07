import { useState } from 'react';
import { SkillCard } from './SkillCard';
import styles from './skills.module.scss';

interface Skill {
  name: string;
  icon: string;
  description: string[];
}

// All Skills
const skills: Skill[] = [
   {
    name: 'HTML',
    icon: '/img/projects/icon_html.svg',
    description: ['User-friendly navigation menus', 'Responsive web design', 'Contact forms and login pages', 'Transitions, animations and hover effect' ],
  },
  {
    name: 'CSS',
    icon: '/img/projects/icon_css.svg',
    description: ['User-friendly navigation menus', 'Responsive web design ', 'Contact forms and login pages', 'Transitions, animations and hover effect' ],
  },
  {
    name: 'CI/CD With GitHub Actions',
    icon: '/img/projects/icon_cd_ci.svg',
    description: ['Automated builds and tests', 'pre-built actions for common tasks', 'push, pull request, or schedule', 'Automated deployments' ],
  },
  {
    name: 'Yaml',
    icon: '/img/projects/icon_yaml.svg',
    description: ['A Kubernetes deployment', 'store settings like database connections', 'environment-specific variables', 'complex data structures represent lists and maps' ],
  },
  {
    name: 'Shell scripting',
    icon: '/img/projects/icon_shellscripting.svg',
    description: [
      'Adding new users and setting their permissions.',
      'Performing calculations or running statistical analysis on data.',
      'Conditional statements, loops, functions',
    ],
  },
  {
    name: 'IT Security',
    icon: '/img/projects/icon_itSecurtiy.svg',
    description: [
      'simulate attacks and identify vulnerabilities',
      'Setting up multi-factor authentication',
      'login security',
      'Implement authentication and authorization mechanisms',
    ],
  },
  {
    name: 'Container',
    icon: '/img/projects/icon_docker.svg',
    description: [
      'CI/CD pipelines',
      'automate building, testing, deploying applications.',
      'build microservices-based applications',
    ],
  },
  {
    name: 'Static site generator',
    icon: '/img/projects/icon_staticsiteGenerator.svg',
    description: [
      'search functionality',
      'static website and customization',
      'tags, categories, and RSS feeds',
      'translation',
    ],
  },
  {
    name: 'Python',
    icon: '/img/projects/icon_python.svg',
    description: [
      'Build APIs',
      'spam filtering, recommendation systems',
      'automate software testing',
      'using libraries like Tkinter, PyQt, or Kivy',
    ],
  },
];

const SKILLS_PER_PAGE = 3;

// Einteilen der Skills in Seiten für den Mobile-Slider (bei 6 Skills = genau 2 Seiten)
const skillPages: Skill[][] = Array.from(
  { length: Math.ceil(skills.length / SKILLS_PER_PAGE) },
  (_, index) => skills.slice(index * SKILLS_PER_PAGE, index * SKILLS_PER_PAGE + SKILLS_PER_PAGE)
);

export default function Skills() {
  const [activePage, setActivePage] = useState(0);

  // Sicherheitsnetz für den ersten Render-Vorgang
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
          <h2 className="section-heading">My skills</h2>

          {/*Desktop*/}
          <div className={styles.grid}>
            {skills.map((skill, index) => (
              <SkillCard 
                key={`desktop-${skill.name}-${index}`} 
                name={skill.name}
                icon={skill.icon}
                description={skill.description}
                variant="desktop" 
              />
            ))}
          </div>

          {/* ---------- Mobile Slider Ansicht (Flache Listen-Karten) ---------- */}
          <div className={styles.mobileSlider}>
            <div className={styles.mobileCard}>
              {currentMobileSkills.map((skill, index) => (
                <SkillCard 
                  key={`mobile-${skill.name}-${index}`} 
                  name={skill.name}
                  icon={skill.icon}
                  description={skill.description}
                  variant="mobile" 
                />
              ))}
            </div>

            {/* Slider-Steuerung mit Punkten */}
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
