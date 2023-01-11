import WrapperHeader from "@common/components/core/WrapperHeader";
import style from "@styles/modules/Layout.module.css";
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
      <div className={style.wrapper}>
        <WrapperHeader />
      </div>
      <main className={style.main}>
        <div className="container-fluid">
          {children}
        </div>
      </main>
    </Fragment>
  );
};

export default Layout;
