import React, { ReactNode } from 'react';
import Layout from '@theme/Layout';
import Head from '@docusaurus/Head';
import Translate, { translate } from '@docusaurus/Translate';

import Header from '../components/header';
import Footer from '../components/footer';
import styles from './legal-notice.module.scss';

export default function LegalNotice(): ReactNode {
  return (
    <Layout
      title={translate({
        id: 'legal.title',
        message: 'Legal Notice',
      })}
      description={translate({
        id: 'legal.meta.description',
        message: 'Website operator and contact information.',
      })}
      noFooter
    >
      <Head>
        <style>{`.navbar { display: none !important; }`}</style>
      </Head>

      <Header />

      <main className="container margin-vert--xl">
        <div className={styles.legalNoticePage}>
          <h1 className={styles.headingPage}>
            <Translate id="legal.title">Legal Notice</Translate>
          </h1>

          <h2>
            <Translate id="legal.operator.title">
              Website operator
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
          </address>

          <h2>
            <Translate id="legal.contact.title">Contact</Translate>
          </h2>

          <p>
            <Translate id="legal.contact.email">Email:</Translate>{' '}
            <a href="mailto:collins.dicka@gmail.com">
              collins.dicka@gmail.com
            </a>
          </p>

          <h2>
            <Translate id="legal.content.title">
              About this website
            </Translate>
          </h2>

          <p>
            <Translate id="legal.content.text">
              This personal portfolio presents my professional experience,
              qualifications and projects. I am responsible for the content
              I publish on this website.
            </Translate>
          </p>

          <h2>
            <Translate id="legal.external.title">
              External links
            </Translate>
          </h2>

          <p>
            <Translate id="legal.external.text">
              This website links to external websites, including GitHub and
              LinkedIn. Their respective operators are responsible for
              their content. If you notice a potentially unlawful linked
              page, please contact me so that I can review the link.
            </Translate>
          </p>

          <h2>
            <Translate id="legal.rights.title">
              Copyright and licences
            </Translate>
          </h2>

          <p>
            <Translate id="legal.rights.text">
              The applicable copyright rules and licences govern the use
              of the content, source code and assets presented here.
              Third-party materials remain subject to the rights and
              licences of their respective owners. For source code
              published on GitHub, please consult the licence information
              in the relevant repository.
            </Translate>
          </p>
        </div>
      </main>

      <Footer />
    </Layout>
  );
}