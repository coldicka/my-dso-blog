import React, { ReactNode } from 'react';
import Layout from '@theme/Layout';
import Head from '@docusaurus/Head';
import Translate, { translate } from '@docusaurus/Translate';

import Header from '../components/header';
import Footer from '../components/footer';
import styles from './privacy-policy.module.scss';

export default function PrivacyPolicy(): ReactNode {
  return (
    <Layout
      title={translate({
        id: 'privacyPolicy.title',
        message: 'Privacy Policy',
      })}
      description={translate({
        id: 'privacyPolicy.meta.description',
        message: 'Information about personal data processed in connection with this portfolio.',
      })}
      noFooter
    >
      <Head>
        <style>{`.navbar { display: none !important; }`}</style>
      </Head>

      <Header />

      <main className="container margin-vert--lg">
        <div className={styles.privacyPolicyPage}>
          <h1 className={styles.headingPage}>
            <Translate id="privacyPolicy.title">
              Privacy Policy
            </Translate>
          </h1>

          <h2>
            <Translate id="privacyPolicy.overview.title">
              1. Overview
            </Translate>
          </h2>

          <p>
            <Translate id="privacyPolicy.overview.text">
              This website presents my professional experience and
              projects. It has no contact form and does not offer account
              registration. Personal data may be processed when the
              website is accessed, when external resources are loaded,
              and when you contact me by email.
            </Translate>
          </p>

          <h2>
            <Translate id="privacyPolicy.controller.title">
              2. Controller
            </Translate>
          </h2>

          <address className={styles.address}>
            <strong>Henri Collins Dicka Ned</strong>
            <br />
            Ernst-Günter-Albers-Str. 6
            <br />
            25704 Meldorf
            <br />
            <Translate id="legal.country">Germany</Translate>
            <br />
            <a href="mailto:collins.dicka@gmail.com">
              collins.dicka@gmail.com
            </a>
          </address>

          <h2>
            <Translate id="privacyPolicy.hosting.title">
              3. Hosting with GitHub Pages
            </Translate>
          </h2>

          <p>
            <Translate id="privacyPolicy.hosting.text">
              This website is hosted using GitHub Pages. GitHub processes
              technical request data to deliver the website and protect
              its services. According to GitHub, visitors' IP addresses
              are logged and stored for security purposes, regardless of
              whether they are signed in to GitHub. My legitimate
              interest in making this portfolio available securely is
              the basis for using this hosting service under Article
              6(1)(f) GDPR.
            </Translate>
          </p>

          <p>
            <Translate id="privacyPolicy.hosting.details">
              GitHub's privacy statement provides information about the
              responsible GitHub entities, recipients, retention criteria
              and international data transfers, including processing in
              the United States. I do not determine GitHub's retention
              periods for its security logs.
            </Translate>{' '}
            <a
              href="https://docs.github.com/en/site-policy/privacy-policies/github-general-privacy-statement"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Translate id="privacyPolicy.hosting.link">
                GitHub Privacy Statement
              </Translate>
            </a>
          </p>

          <h2>
            <Translate id="privacyPolicy.resources.title">
              4. Icons loaded through jsDelivr
            </Translate>
          </h2>

          <p>
            <Translate id="privacyPolicy.resources.text">
              Some technology icons are loaded from cdn.jsdelivr.net.
              When your browser requests these files, it establishes a
              connection to the content delivery network. This transmits
              your IP address and technical request information to the
              servers involved. The purpose is to display the icons used
              in the skills and project sections.
            </Translate>{' '}
            <a
              href="https://www.jsdelivr.com/terms/privacy-policy"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Translate id="privacyPolicy.resources.link">
                jsDelivr Privacy Policy
              </Translate>
            </a>
          </p>

          <h2>
            <Translate id="privacyPolicy.email.title">
              5. Contact by email
            </Translate>
          </h2>

          <p>
            <Translate id="privacyPolicy.email.text">
              If you contact me by email, I process your email address,
              your message and any other information you provide to
              respond to your enquiry. Processing is based on Article
              6(1)(f) GDPR, reflecting my legitimate interest in responding
              to enquiries. Where processing is necessary for a contract
              or pre-contractual steps requested by you, Article 6(1)(b)
              GDPR applies.
            </Translate>
          </p>

          <p>
            <Translate id="privacyPolicy.email.provider">
              I use Gmail to receive and send email. Google therefore
              processes message content and associated technical data
              as part of providing the email service. Information about
              Google's processing and international data transfers is
              available in Google's privacy policy.
            </Translate>{' '}
            <a
              href="https://policies.google.com/privacy"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Translate id="privacyPolicy.email.link">
                Google Privacy Policy
              </Translate>
            </a>
          </p>

          <p>
            <Translate id="privacyPolicy.email.retention">
              I retain your message and contact details for as long as
              necessary to respond to your enquiry and any follow-up
              questions. I then delete the data unless statutory
              retention obligations or other legal grounds require
              continued storage.
            </Translate>
          </p>

          <h2>
            <Translate id="privacyPolicy.links.title">
              6. Links to external websites
            </Translate>
          </h2>

          <p>
            <Translate id="privacyPolicy.links.text">
              Links to GitHub, LinkedIn, XING and other external websites
              take you to services operated by third parties. When you
              follow a link, the destination website processes data under
              its own privacy policy. These links are not embedded social
              media plugins.
            </Translate>
          </p>

          <p>
            <Translate id="privacyPolicy.links.xing">
              The XING profile link uses a locally embedded icon. No XING
              plugins, tracking scripts or external XING content are
              loaded through this link when you visit this website. If
              you click the link, you leave this website and access XING.
              XING then processes personal data, such as your IP address,
              according to its own privacy policy.
            </Translate>{' '}
            <a
              href="https://privacy.xing.com/de/datenschutzerklaerung"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Translate id="privacyPolicy.links.xingPolicy">
                XING Privacy Policy
              </Translate>
            </a>
          </p>

          <h2>
            <Translate id="privacyPolicy.rights.title">
              7. Your rights
            </Translate>
          </h2>

          <p>
            <Translate id="privacyPolicy.rights.text">
              Subject to the applicable legal conditions, you have the
              right to access, rectify and erase your personal data,
              restrict its processing and receive portable data. Where
              processing is based on consent, you may withdraw that
              consent at any time with effect for the future. Please
              contact me using the email address above.
            </Translate>
          </p>

          <p>
            <Translate id="privacyPolicy.rights.objection">
              Where processing is based on Article 6(1)(f) GDPR, you have
              the right to object on grounds relating to your particular
              situation.
            </Translate>
          </p>

          <p>
            <Translate id="privacyPolicy.rights.complaint">
              You also have the right to lodge a complaint with a data
              protection supervisory authority, particularly in the
              country of your habitual residence, place of work or the
              alleged infringement. In Schleswig-Holstein, you can
              contact the Independent Centre for Data Protection
              Schleswig-Holstein (ULD).
            </Translate>{' '}
            <a
              href="https://www.datenschutzzentrum.de/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Translate id="privacyPolicy.rights.authority">
                ULD Schleswig-Holstein
              </Translate>
            </a>
          </p>
        </div>
      </main>

      <Footer />
    </Layout>
  );
}