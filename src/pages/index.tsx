import React, { ReactNode } from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Head from '@docusaurus/Head';

import Header from '../components/header';
import Hero from '../components/hero';
import Skills from '../components/skills';
import Projects from '../components/projects';
import Contact from '../components/contact';
import Footer from '../components/footer'; // 1. Importiere deine Footer-Komponente!

export default function Home(): ReactNode {
  const { siteConfig } = useDocusaurusContext();

  return (
    <Layout 
      title={`Home | ${siteConfig.title}`} 
      description="DevSecOps Engineer Portfolio"
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
        <Contact />
      </main>

      <Footer />
    </Layout>
  );
}
