import React from 'react';

import Header from '~/components/Header/Header';
import Footer from '~/components/Footer/Footer';
import '~/static/styles/index.scss';

const Layout = (props) => {
  const { children } = props;

  return (
    <div className="layout">
      <Header />
      <main className="main">
        { children }
      </main>
      <Footer />
    </div>
  );
};

export default Layout;