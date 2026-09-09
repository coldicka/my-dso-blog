import React, { ReactNode } from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Head from '@docusaurus/Head';

import Header from '../components/header';
import Footer from '../components/footer';
import styles from './legal-notice.module.scss';

export default function LegalNotice(): ReactNode {
  const { siteConfig } = useDocusaurusContext();

  return (
    <Layout 
      title={`Legal Notice | ${siteConfig.title}`} 
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
        <div className={styles.content}>
          <h1>Legal Notice</h1>

          <h2>Information according to § 5 DDG</h2>
          <p style={{ lineHeight: '1.6' }}>
            <strong>Collins Dicka</strong><br />
            Ernst-Günter-Albers-Str. 6<br />
            25704 Meldorf<br />
            Germany
          </p>

          <h3>Contact</h3>
          <p style={{ lineHeight: '1.6' }}>
            <strong>Email:</strong> collins.dicka@gmail.com
          </p>
          <p>
            You can also contact me via my LinkedIn profile:<br />
            <a href="https://linkedin.com/in/collins-dicka-ned-b05a71405/" target="_blank" rel="noopener noreferrer">
              Profile Page
            </a>
          </p>

          <hr />

          <h2>Responsible for content</h2>
          <p>Responsible for the content of this website pursuant to § 18 Abs. 2 MStV:</p>
          <p style={{ lineHeight: '1.6' }}>
            <strong>Collins Dicka</strong><br />
            Ernst-Günter-Albers-Str. 6<br />
            25704 Meldorf<br />
            Germany
          </p>

          <hr />

          <h2>Liability for content</h2>
          <p>
            As a service provider, I am responsible for my own content on this website in accordance with general laws. 
            However, I am not obliged to monitor transmitted or stored third-party information or to investigate 
            circumstances indicating illegal activity.
          </p>
          <p>
            Obligations to remove or block the use of information under generally applicable laws remain unaffected.
          </p>

          <h2>Liability for links</h2>
          <p>
            This website may contain links to external third-party websites. I have no influence over the content 
            of these external websites and therefore cannot assume any liability for such third-party content.
          </p>
          <p>
            The respective provider or operator of the linked pages is always responsible for their content. 
            The linked pages were checked for possible legal violations at the time the link was created. No unlawful 
            content was apparent at that time.
          </p>
          <p>
            Permanent monitoring of the content of linked pages is not reasonable without specific evidence of a 
            legal violation. If I become aware of any legal violations, I will remove the relevant links promptly.
          </p>

          <h2>Copyright</h2>
          <p>
            The content and works created by the website operator on this website are subject to German copyright law. 
            Reproduction, editing, distribution or any kind of exploitation outside the limits of copyright law 
            requires the prior written consent of the respective author or creator.
          </p>
          <p>
            Downloads and copies of this website are permitted for private, non-commercial use only, unless otherwise stated.
          </p>
          <p>
            Where the content on this website was not created by the operator, the copyrights of third parties are respected. 
            In particular, third-party content is identified as such where applicable.
          </p>
          <p>
            If you nevertheless become aware of a copyright infringement, please notify me accordingly. Upon becoming 
            aware of legal violations, I will remove such content promptly.
          </p>

          <h2>Privacy</h2>
          <p>
            Information about the processing of personal data can be found in the separate Privacy Policy of this website.
          </p>

          <h2>EU Online Dispute Resolution</h2>
          <p>
            The European Commission provides a platform for online dispute resolution (ODR). However, I am neither 
            obliged nor willing to participate in dispute resolution proceedings before a consumer arbitration board.
          </p>
        </div>
      </main>

      <Footer />
    </Layout>
  );
}
