import * as React from 'react';
import '../styles/styles.scss';

// Import componenets
import Header from '../components/header';
import Banner from '../components/banner.js';

const IndexPage = () => {
  return (
    <div>
      <title>Lawrence Lin</title>
      <Header />
      <Banner />
    </div>
  );
};

export default IndexPage;