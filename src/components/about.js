import * as React from 'react';
import { Link } from 'gatsby';

const About = () => {
  return (
    <div className="about">
      <div className="container">
        <div className="main-text" id='about'>
          <div className="text-header">
            About Me
          </div>
          <div className="text-about">
            My coding journey started when I was pursuing an undergraduate degree in Mathematics. I had experience with Python, Java and C++ from taking Computer Science courses and exposure to topics such as basic algorithms and data structures.
            <br /><br />
            I have strong critical thinking and problem solving skills from my Mathematics background, and after graduation, I pursued my interest in programming by taking the Lighthouse Labs web development bootcamp.
            <br /><br />
            In-depth understanding of programming skills including but not
            limited to: front-end development with React and HTML/CSS, back-end
            with NodeJS and ​PostgreSQL. Enjoys problem solving and
            communicating with other developers to enhance programming
            knowledge.
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;