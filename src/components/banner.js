import * as React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
// import img from 'gatsby-image';

const Banner = () => {
  return (
    <div className='banner'>
      <div className='container'>
        <div className='row'>
          <div className='main-text'>Lawrence Lin</div>
        </div>
      </div>
    </div>
  );
};

export default Banner;