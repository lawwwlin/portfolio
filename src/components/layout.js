import * as React from 'react';
import TopNav from '../components/topNav';

// const temp = [{text:'home', link:'/'}, {text:'about', link:'/about'}, {text:'projects', link:'/projects'}];

const Layout = ({ pageTitle, children }) => {
  return (
    <div>
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