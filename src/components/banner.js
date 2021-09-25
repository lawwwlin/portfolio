import * as React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import img from 'gatsby-image';

const Banner = () => {
  return (
    <header>
      <div className='container'>
        <div className='inner-header'> 
          <div className='logo'>
            <Link to='/'>HOME</Link>
          </div>
          <div className='navigation'>
            <nav>
              <Link to='/about'>ABOUT</Link>
              <Link to='/projects'>PROJECTS</Link>
              <Link to='/contact'>CONTACT</Link>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Banner;