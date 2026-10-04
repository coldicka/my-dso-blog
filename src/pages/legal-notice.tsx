import React, { ReactNode } from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Head from '@docusaurus/Head';
import Translate from '@docusaurus/Translate';

import Header from '../components/header';
import Footer from '../components/footer';
import styles from './legal-notice.module.scss';

export default function LegalNotice(): ReactNode {
  const { siteConfig } = useDocusaurusContext();

  return (
    <Layout 
      title={`Legal Notice`} 
      description="Legal Notice and Imprint"
      noFooter
    >
      <Head>
        <style>{`
          .navbar { display: none !important; }
        `}</style>
      </Head>

      <Header />

      <main className="container margin-vert--xl">
        <div className={styles.legalNoticePage}>
          <h1 className={styles.headingPage}>
            <Translate 
              id="legal.title"
              description="The main title of the legal notice (imprint) page"
              >
              Legal Notice
            </Translate>
          </h1>

          <h2>
            <Translate 
              id="legal.section1.title"
              description="Heading for the primary legal identification section according to German law"
            >
              Information according to § 5 DDG
            </Translate>
          </h2>

          <p style={{ lineHeight: '1.6' }}>
            <strong>Collins Dicka</strong><br />
            Ernst-Günter-Albers-Str. 6<br />
            25704 Meldorf<br />
            Germany
          </p>

          <h3>
            <Translate
              id="legal.contact.title"
              description="Subheading for the contact possibilities section"
            >
              Contact
            </Translate>
          </h3>

          <p style={{ lineHeight: '1.6' }}>
            <strong>
              <Translate
                id="legal.contact.email"
                description="Label for the email address field"
              >
                Email:
              </Translate>
            </strong> collins.dicka@gmail.com
          </p>

          <p>
            <Translate
              id="legal.contact.linkedin"
              description="Introductory sentence for the direct LinkedIn contact option"
            >
              You can also contact me via my LinkedIn profile:
            </Translate>
            <br />
            <a href="https://linkedin.com/in/collins-dicka-ned-b05a71405/" target="_blank" rel="noopener noreferrer">
              <Translate
                id="legal.contact.profilePage"
                description="Anchor text pointing to the external LinkedIn profile"
              >
                Profile Page
              </Translate>
            </a>
          </p>

          <hr />

          <h2>
            <Translate
              id="legal.responsible.title"
              description="Heading for the section defining content responsibility under German broadcasting treaties"
            >
              Responsible for content
            </Translate>
          </h2>
          <p>
            <Translate
              id="legal.responsible.description"
              description="Statutory legal baseline sentence referring to MStV content responsibility"
            >
              Responsible for the content of this website pursuant to § 18 Abs. 2 MStV:
            </Translate>
          </p>
          <p style={{ lineHeight: '1.6' }}>
            <strong>Collins Dicka</strong><br />
            Ernst-Günter-Albers-Str. 6<br />
            25704 Meldorf<br />
            Germany
          </p>

          <hr />

          <h2>
            <Translate
              id="legal.liability.title"
              description="Heading for the disclaimer regarding platform content liability"
            >
              Liability for content
            </Translate>
          </h2>
          <p>
            <Translate
              id="legal.liability.description1"
              description="First paragraph about the service provider's legal duty to monitor third-party information"
            >
              As a service provider, I am responsible for my own content on this website in accordance with general laws. 
              However, I am not obliged to monitor transmitted or stored third-party information or to investigate 
              circumstances indicating illegal activity.
            </Translate>
          </p>
          <p>
            <Translate
              id="legal.liability.description2"
              description="Second short clause regarding statutory obligations to block or remove information"
            >
              Obligations to remove or block the use of information under generally applicable laws remain unaffected.
            </Translate>
          </p>

          <h2>
            <Translate
              id="legal.liability.links.title"
              description="Heading for the section disclaiming liability for external outgoing hyperlinks"
            >
              Liability for links
            </Translate>
          </h2>
          <p>
            <Translate
              id="legal.liability.links.description1"
              description="First disclaimer clause concerning third-party website links and content influence"
            >
              This website may contain links to external third-party websites. I have no influence over the content 
              of these external websites and therefore cannot assume any liability for such third-party content.
            </Translate>
          </p>
          <p>
            <Translate
              id="legal.liability.links.description2"
              description="Second clause defining operator responsibility and notice validation timelines"
            >
              The respective provider or operator of the linked pages is always responsible for their content. 
              The linked pages were checked for possible legal violations at the time the link was created. No unlawful 
              content was apparent at that time.
            </Translate>
          </p>
          <p>
            <Translate
              id="legal.liability.links.description3"
              description="Third paragraph explaining standard reaction guidelines upon notice of legal violations"
            >
              Permanent monitoring of the content of linked pages is not reasonable without specific evidence of a 
              legal violation. If I become aware of any legal violations, I will remove the relevant links promptly.
            </Translate>
          </p>

          <h2>
            <Translate
              id="legal.copyright.title"
              description="Heading for the copyright disclaimer statement"
            >
              Copyright
            </Translate>
          </h2>
          <p>
            <Translate
              id="legal.copyright.description1"
              description="First copyright paragraph identifying German law and exploitation limits without consent"
            >
              The content and works created by the website operator on this website are subject to German copyright law. 
              Reproduction, editing, distribution or any kind of exploitation outside the limits of copyright law
              requires the prior written consent of the respective author or creator.
            </Translate>
          </p>
          <p>
            <Translate
              id="legal.copyright.description2"
              description="Second paragraph allowing only private, non-commercial page copying"
            >
              Downloads and copies of this website are permitted for private, non-commercial use only, unless otherwise stated.
            </Translate>
          </p>
          <p>
            <Translate
              id="legal.copyright.description3"
              description="Third paragraph respecting intellectual properties of non-operator assets"
            >
              Where the content on this website was not created by the operator, the copyrights of third parties are respected. 
              In particular, third-party content is identified as such where applicable.
            </Translate>
          </p>
          <p>
            <Translate
              id="legal.copyright.description4"
              description="Fourth paragraph requesting active user reporting in case of copyright infringements"
            >
              If you nevertheless become aware of a copyright infringement, please notify me accordingly. Upon becoming 
              aware of legal violations, I will remove such content promptly.
            </Translate>
          </p>

          <h2>
            <Translate
              id="legal.odr.title"
              description="Heading for the EU Online Dispute Resolution platform compliance section"
            >
              EU Online Dispute Resolution
            </Translate>
          </h2>
          <p>
            <Translate
              id="legal.odr.description"
              description="Paragraph explaining the non-willingness to enter into consumer arbitration proceedings"
            >
              The European Commission provides a platform for online dispute resolution (ODR). However, I am neither 
              obliged nor willing to participate in dispute resolution proceedings before a consumer arbitration board.
            </Translate>
          </p>
        </div>
      </main>

      <Footer />
    </Layout>
  );
}
