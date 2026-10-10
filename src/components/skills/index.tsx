import Translate, { translate } from '@docusaurus/Translate';
import { SkillCard } from './SkillCard';
import styles from './skills.module.scss';

export default function Skills() {
  const groups = [
    {
      title: translate({ id: "skills.focus.professional.heading", message: "Professional experience" }),
      intro: translate({ id: "skills.focus.professional.intro", message: "Almost ten years working on web applications, online shops and their continued development." }),
      skills: [
        { 
          name: translate({ id: "skills.focus.web.name", message: "Web interfaces" }),
          description: translate({ id: "skills.focus.web.body", message: "Responsive interfaces and ongoing improvements to existing web applications." }),
          icon: "/img/skills/icon_js.svg",
          technologies: "JavaScript \u00b7 HTML \u00b7 CSS \u00b7 SCSS/Sass \u00b7 LESS", href: "#career" 
        },
        {
          name: translate({ id: "skills.focus.commerce.name", message: "E-commerce" }),
          description: translate({ id: "skills.focus.commerce.body", message: "Development and technical maintenance of Shopware and OXID shop frontends." }),
          icon: "/img/skills/icon_shopware.svg", technologies: "Shopware 5/6 \u00b7 OXID", href: "#career" 
        },
        { 
          name: translate({ id: "skills.focus.maintenance.name", message: "Application maintenance" }),
          description: translate({ id: "skills.focus.maintenance.body", message: "Bug fixing, performance improvements and Git-based collaboration in Scrum teams." }),
          icon: "/img/github.svg", technologies: translate({ id: "skills.focus.maintenance.tech", message: "Git \u00b7 Troubleshooting \u00b7 Scrum" }), href: "#career"
        }
      ] 
    },
    {
      title: translate({ id: "skills.focus.projects.heading", message: "Practical project experience" }),
      intro: translate({ id: "skills.focus.projects.intro", message: "Applied in my portfolio and DevSecOps training projects. Each example links to the work behind it." }),
      skills: [
        {
          name: translate({ id: "skills.focus.components.name", message: "Components & integration" }),
          description: translate({ id: "skills.focus.components.body", message: "React components and TypeScript in this portfolio; adapting API access in the existing Conduit Angular frontend." }),
          icon: "/img/skills/icon_js.svg", technologies: "React \u00b7 TypeScript \u00b7 Angular", href: "docs/portfolio" 
        },
        {
          name: translate({ id: "skills.focus.django.name", message: "Extending applications" }),
          description: translate({ id: "skills.focus.django.body", message: "Product tags, admin management and tag-based filtering in an existing Django shop." }),
          icon: "/img/skills/icon_python.svg", technologies: "Python \u00b7 Django", href: "docs/baby-tools-shop"
        },
        {
          name: translate({ id: "skills.focus.containers.name", message: "Container environments" }),
          description: translate({ id: "skills.focus.containers.body", message: "Dockerfiles, service networks, volumes and startup scripts for existing applications and databases." }),
          icon: "/img/skills/icon_docker.svg", technologies: "Docker \u00b7 Compose \u00b7 PostgreSQL \u00b7 Nginx", href: "docs/conduit-container"
        },
        {
          name: translate({ id: "skills.focus.delivery.name", message: "Build & deployment" }),
          description: translate({ id: "skills.focus.delivery.body", message: "Image builds, registry publishing and SSH deployment in Conduit; shell scripts for application startup." }),
          icon: "/img/skills/icon_yaml.svg", technologies: "GitHub Actions \u00b7 YAML \u00b7 Shell \u00b7 Linux", href: "docs/conduit-deployment"
        },
        {
          name: translate({ id: "skills.focus.security.name", message: "Web security exercises" }),
          description: translate({ id: "skills.focus.security.body", message: "Documented exercises using OWASP Juice Shop to understand vulnerabilities in an intentionally vulnerable application." }),
          icon: "/img/skills/icon_itSecurtiy.svg", technologies: "OWASP Juice Shop \u00b7 SQL Injection \u00b7 XSS", href: "docs/juice-shop-master"
        }
      ]
    },
    {
      title: translate({ id: "skills.focus.training.heading", message: "Automation training" }),
      intro: translate({ id: "skills.focus.training.intro", message: "PLC Specialist (IHK): a foundation for developing further towards technical automation and IT/OT-related tasks." }),
      skills: [
        {
          name: translate({ id: "skills.focus.plc.name", message: "PLC programming & HMI" }),
          description: translate({ id: "skills.focus.plc.body", message: "Training in automation fundamentals, SCL programming and HMI interfaces with Siemens TIA Portal." }),
          icon: "/img/skills/icon_tia_portal_hmi_logo.svg", technologies: "Siemens TIA Portal \u00b7 SCL \u00b7 HMI", href: "#career" 
        }
      ]
    }
  ];

  return (
  <section className={`${styles.skillsSection} section-padding`} id="skills">
    <div className="container">
      <h2 className="section-heading">
        <Translate id="skills.heading">My skills</Translate>
      </h2>
      
      {groups.map(group => <div className={styles.group} key={group.title}>
        <h3 className={styles.groupHeading}>
          {group.title}
        </h3>
        <p className={styles.groupIntro}>
          {group.intro}
        </p>
        <div className={styles.grid}>
          {group.skills.map(skill => <SkillCard key={skill.name} {...skill} />)}
        </div>
      </div>)}
    </div>
  </section>
  );
}
