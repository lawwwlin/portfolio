import * as React from 'react';
import Layout from '../components/layout';
import '../styles/global.scss';

const IndexPage = () => {
  return (
    <Layout pageTitle="const Lawrence = {};">
      <p>Lawrence.occupation = 'full-stack developer';</p>
    </Layout>
  )
};

export default IndexPage;