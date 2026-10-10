import React, { ReactNode } from 'react';
import { translate } from '@docusaurus/Translate';
import Layout from '@theme/Layout';
import Head from '@docusaurus/Head';

import Header from '../components/header';
import Hero from '../components/hero';
import Skills from '../components/skills';
import Projects from '../components/projects';
import Contact from '../components/contact';
import Career from '../components/career';
import Footer from '../components/footer';

export default function Home(): ReactNode {

  return (
    <Layout 
      title=""
      description={translate({ id: 'home.description', message: "Collins Dicka \u2014 software developer with almost ten years of frontend experience. Web development, application support and practical projects in automation and DevSecOps." })}
      noFooter
    >
      <Head>
        <style>{`
          .navbar {
          display: none !important; }
        `}</style>
      </Head>

      <Header />
      
      <main>
        <Hero />
        <Skills />
        <Projects />
        <Career />
        <Contact />
      </main>

      <Footer />
    </Layout>
  );
}
