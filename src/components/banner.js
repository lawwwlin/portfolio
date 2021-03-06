import * as React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { faFileAlt } from '@fortawesome/free-solid-svg-icons';

// import img from 'gatsby-image';

const Banner = () => {
  return (
    <div className='banner'>
      <div className='fixed-contacts'>
        <a href='https://github.com/lawwwlin' target='blank'><FontAwesomeIcon icon={faGithub} /></a>
        <a href='https://www.linkedin.com/in/lawrence-lin-vancouver/' target='blank'><FontAwesomeIcon icon={faLinkedinIn} /></a>
        <a href='https://resume.creddle.io/resume/6pb2h22k1x1' target='blank'><FontAwesomeIcon icon={faFileAlt} /></a>
      </div>
      <div className='container'>
        <div className='main-text'>
          <div className='text-header'>hi, my name is</div>
          <div className='text-name'>Lawrence Lin.</div>
          <div className='text-about'>I am a full-stack web developer. <br />
          Passionate and eager to learn new technologies and frameworks.</div>
        </div>
      </div>
      <div className='fixed-email'><a href='https://google.ca' target='blank'>lawwwlin@gmail.com</a></div>
    </div>
  );
};

export default Banner;