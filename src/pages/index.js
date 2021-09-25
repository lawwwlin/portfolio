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
      <h1>Hi, I'm Lawrence Lin</h1>
      <h2>I'm a full-stack web developer</h2>
    </div>
  );
};

export default IndexPage;