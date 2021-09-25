import * as React from 'react';
import { Link } from 'gatsby';
import '../styles/topNav.scss';

const topNav = () => {
  return (
    <nav className="topNav">
      <div className="nav-item"><Link className='nav-link' to='/'>HOME</Link></div>
      <div className="nav-item"><Link className='nav-link' to='/about'>ABOUT</Link></div>
    </nav>
  )
};

export default topNav;