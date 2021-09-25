import * as React from 'react';
import TopNav from '../components/topNav';

const Layout = ({ pageTitle, children }) => {
  return (
    <div className="container">
      <title>Lawrence Lin</title>
      <TopNav />
      <main>
        <h1>{pageTitle}</h1>
        {children}
      </main>
    </div>
  );
};

export default Layout;