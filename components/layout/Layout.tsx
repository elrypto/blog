import React from 'react';
import Header from './Header';

interface Props {
  children: React.ReactNode;
}

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <>
      <Header />
      <div className="max-w-screen-xl m-auto">{children}</div>
    </>
  );
};

export default Layout;
