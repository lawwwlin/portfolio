import * as React from 'react';
import TopNav from '../components/topNav';
import '../components/topNav.scss';

const Layout = ({ pageTitle, children }) => {
  return (
    <div className="container">
      <title>{pageTitle}</title>
      <TopNav />
      <main>
        <h1>{pageTitle}</h1>
        {children}
      </main>
    </div>
  )
};

export default Layout;