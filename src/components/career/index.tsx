import React from 'react';
import { translate } from '@docusaurus/Translate';
import styles from './career.module.scss';

interface CareerEntry {
  id: string;
  period: string;
  title: string;
  organisation: string;
  description: string;
}

function Timeline({ entries }: { entries: CareerEntry[] }) {
  return (
    <ol className={styles.timeline}>
      {entries.map((entry) => (
        <li key={entry.id} className={styles.entry}>
          <p className={styles.period}>{entry.period}</p>
          <h4 className={styles.role}>{entry.title}</h4>
          <p className={styles.organisation}>{entry.organisation}</p>
          <p className={styles.description}>{entry.description}</p>
        </li>
      ))}
    </ol>
  );
}

export default function Career() {
  const experience: CareerEntry[] = [
    {
      id: "proclane",
      period: "09/2021 \u2013 02/2025",
      title: translate({ id: "career.proclane.title", message: "Frontend Developer" }),
      organisation: translate({ id: "career.proclane.organisation", message: "426-Deutschland (formerly Proclane GmbH)" }),
      description: translate({ id: "career.proclane.description", message: "Technical frontend responsibility for production OXID e-commerce platforms, performance optimisation and Git-based version control in a Scrum team." })
    },
    {
      id: "digitalmasters",
      period: "05/2018 \u2013 08/2021",
      title: translate({ id: "career.digitalmasters.title", message: "Frontend Developer" }),
      organisation: translate({ id: "career.digitalmasters.organisation", message: "Digital-Masters GmbH" }),
      description: translate({ id: "career.digitalmasters.description", message: "Development and technical maintenance of Shopware 5 and 6 online shops, with a focus on platform stability and delivery in Scrum sprints." })
    },
    {
      id: "netshops",
      period: "06/2017 \u2013 11/2017",
      title: translate({ id: "career.netshops.title", message: "Junior Frontend Developer" }),
      organisation: translate({ id: "career.netshops.organisation", message: "Netshops Commerce GmbH" }),
      description: translate({ id: "career.netshops.description", message: "Development and optimisation of responsive web interfaces in an agency environment." })
    },
    {
      id: "wiethe",
      period: "02/2015 \u2013 05/2017",
      title: translate({ id: "career.wiethe.title", message: "Web Developer · Frontend" }),
      organisation: translate({ id: "career.wiethe.organisation", message: "Wiethe Digital GmbH & Co. KG" }),
      description: translate({ id: "career.wiethe.description", message: "Bug fixing and further development of an in-house content management system." })
    }
  ];
  const education: CareerEntry[] = [
    {
      id: "devsecops",
      period: "04/2026 \u2013 09/2026",
      title: translate({ id: "career.devsecops.title", message: "DevSecOps training" }),
      organisation: translate({ id: "career.devsecops.organisation", message: "Developer Akademie" }),
      description: translate({ id: "career.devsecops.description", message: "Successfully completed. Practical projects with Linux, Docker, GitHub Actions and web application security." })
    },
    {
      id: "plc",
      period: "12/2025 \u2013 02/2026",
      title: translate({ id: "career.plc.title", message: "PLC Specialist (IHK)" }),
      organisation: translate({ id: "career.plc.organisation", message: "Gottfried Institut UG" }),
      description: translate({ id: "career.plc.description", message: "Automation fundamentals, SCL programming, HMI interfaces and Siemens TIA Portal." })
    },
    {
      id: "gfn",
      period: "11/2017 \u2013 05/2018",
      title: translate({ id: "career.gfn.title", message: "Web Interface Design & Web Development" }),
      organisation: translate({ id: "career.gfn.organisation", message: "GFN AG" }),
      description: translate({ id: "career.gfn.description", message: "Further training in web interface design, JavaScript, PHP and MySQL." })
    },
    {
      id: "degree",
      period: "09/2010 \u2013 07/2014",
      title: translate({ id: "career.degree.title", message: "Management and Technology (B.Sc.)" }),
      organisation: translate({ id: "career.degree.organisation", message: "Fachhochschule Westküste" }),
      description: translate({ id: "career.degree.description", message: "Degree combining business and technical subjects." })
    }
  ];
  const cvSubject = translate({ id: "career.cv.subject", message: "CV request — Collins Dicka" });

  return (
    <section id="career" className={`${styles.career} section-padding`} aria-labelledby="career-heading">
      <div className="container">
        <p className={styles.eyebrow}>{translate({ id: "career.eyebrow", message: "EXPERIENCE & DEVELOPMENT" })}</p>
        <h2 id="career-heading" className="section-heading">{translate({ id: "career.heading", message: "Professional background" })}</h2>
        <p className={styles.intro}>{translate({ id: "career.intro", message: "Selected roles, further training and education — from frontend development to broader skills in automation and security." })}</p>

        <div className={styles.columns}>
          <div>
            <h3 className={styles.columnHeading}>{translate({ id: "career.experience", message: "Professional experience" })}</h3>
            <Timeline entries={experience} />
          </div>
          <div>
            <h3 className={styles.columnHeading}>{translate({ id: "career.learning", message: "Training & education" })}</h3>
            <Timeline entries={education} />
          </div>
        </div>

        <div className={styles.cvRequest}>
          <div>
            <h3 className={styles.cvHeading}>{translate({ id: "career.cv.heading", message: "Want to know more?" })}</h3>
            <p>{translate({ id: "career.cv.note", message: "I would be happy to send you my full CV on request." })}</p>
          </div>
          <a className={styles.cvLink} href={`mailto:collins.dicka@gmail.com?subject=${encodeURIComponent(cvSubject)}`}>
            {translate({ id: "career.cv.cta", message: "Request my CV" })} <span aria-hidden="true">↗</span>
          </a>
        </div>
      </div>
    </section>
  );
}
