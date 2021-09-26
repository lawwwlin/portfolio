import * as React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithubSquare, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faFile } from '@fortawesome/free-solid-svg-icons';

// import img from 'gatsby-image';

const Banner = () => {
  return (
    <div className='banner'>
      <div className='fixed-contacts'>
        <a href='https://github.com/lawwwlin' target='blank'><FontAwesomeIcon icon={faGithubSquare} /></a>
        <a href='https://www.linkedin.com/in/lawrence-lin-vancouver/' target='blank'><FontAwesomeIcon icon={faLinkedin} /></a>
        <a href='https://resume.creddle.io/resume/6pb2h22k1x1' target='blank'><FontAwesomeIcon icon={faFile} /></a>
      </div>
      <div className='container'>
        <div className='row'>
          <div className='main-text'>Lawrence Lin</div>
        </div>
      </div>
      <div className='fixed-email'><h3>lawwwlin@gmail.com</h3></div>
    </div>
  );
};

export default Banner;