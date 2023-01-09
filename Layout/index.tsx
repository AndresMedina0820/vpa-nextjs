import React, { Fragment } from "react";
import Navbar from "../common/components/core/Navbar";
import Sidebar from "../common/components/core/Sidebar";

type LayoutProps = {
  children?: React.ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <Fragment>
      <header>
        <Navbar />
        <Sidebar />
      </header>
      <main className="container-fluid">{children}</main>
      <style jsx>{`
        main {
          margin-left: 5rem;
          width: calc(100% - 5rem);
          height: 100%;
          padding: 2rem;
        }
      `}</style>
    </Fragment>
  );
};

export default Layout;
