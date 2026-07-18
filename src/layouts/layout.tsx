import React from "react";
import Header from "./header";

const Layout = ({children}: {children: React.ReactNode}) => {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="sticky top-0 z-50">
        <Header />
      </header>
      <main className="grow my-5 mb-50">{children}</main>
      <footer></footer>
    </div>
  );
};

export default Layout;
