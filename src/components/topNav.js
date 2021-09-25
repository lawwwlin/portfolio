import * as React from 'react';
import { Link } from 'gatsby';

const topNav = () => {
  return (
    <header>
      <div className='container'>
        <div className='logo'>
          <Link className='nav-link' to='/'>home</Link>
        </div>
        <nav className="navigation">
          <div className="nav-item"><Link className='nav-link' to='/about'>ABOUT</Link></div>
          <div className="nav-item"><Link className='nav-link' to='/projects'>PROJECTS</Link></div>
          <div className="nav-item"><Link className='nav-link' to='/contact'>CONTACT</Link></div>
        </nav>
      </div>
    </header>
  )
};

export default topNav;