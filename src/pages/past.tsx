import React from 'react';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import PastEvents from '../components/PastEvents';

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      description="Past DA Poly Exchanges">
      <main>
        <PastEvents />
      </main>
    </Layout>
  );
}
