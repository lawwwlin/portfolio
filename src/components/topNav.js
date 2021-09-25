import * as React from 'react';
import { Link } from 'gatsby';
import '../components/topNav.scss';

const topNav = () => {
  return (
    <nav className="topNav">
      <div className="nav-item"><Link to='/'>home</Link></div>
      <div className="nav-item"><Link to='/about'>about</Link></div>
    </nav>
  )
};

export default topNav;