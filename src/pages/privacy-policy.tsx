import React, { ReactNode } from 'react';
import Layout from '@theme/Layout';
import Head from '@docusaurus/Head';
import Translate from '@docusaurus/Translate';

import Header from '../components/header';
import Footer from '../components/footer';
import styles from './privacy-policy.module.scss';

import GeneralInformation from '../components/GeneralInformation';
import DataCollection from '../components/DataCollection';

export default function PrivacyPolicy(): ReactNode {
  return (
    <Layout
        title="Privacy Policy"
        description="Privacy Policy - Datenschutzerklärung"
        noFooter
    >
        <Head>
            <style>{`
                .navbar { display: none !important; }
            `}</style>
        </Head>

        <Header />

        <main className="container margin-vert--lg">
            <div className={styles.privacyPolicyPage}>
                <h1 className={styles.headingPage}>
                    <Translate
                        id="privacyPolicy.title"
                        description="Heading for the privacy policy page"
                        >
                            Privacy Policy
                    </Translate>
                </h1>
                
                {/* GeneralInformation */}
                <GeneralInformation />

                <hr className="margin-vert--md" />

                {/* DataCollection */}
                <DataCollection />
            </div>
        </main>

        <Footer />
    </Layout>
  );
}
