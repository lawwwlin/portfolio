import * as React from 'react';
import { Link } from 'gatsby';

const topNav = () => {
  return (
    <div className="topNav">
      <div><Link to='/'>home</Link></div>
      <div><Link to='/about'>about</Link></div>
    </div>
  )
};

export default topNav;