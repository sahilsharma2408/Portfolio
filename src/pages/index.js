import React from 'react';
import Layout from '../components/layout';
import SEO from '../components/seo';
import Resume from '../components/Resume/resume';

const Page = () => {
  return (
    <Layout>
      <SEO />
      <Resume />
    </Layout>
  );
};

export default Page;
