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
            From the bootcamp, I experienced various aspects of web development and learned the basic skills to contribute or develop a web application.
            <br /><br />
            These are some of the tech stacks that I've used:
            <ul>
              <li>JavaScript</li>
              <li>React</li>
              <li>Node.js</li>
              <li>Express.js</li>
              <li>Ruby on Rails</li>
              <li>PostgreSQL</li>
              <li>ActiveRecord</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;