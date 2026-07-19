import React from "react";
import Header from "./header";
import Footer from "./footer";
import WhyDapixel from "@/components/why-dapixel";

const Layout = ({children}: {children: React.ReactNode}) => {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="sticky top-0 z-50">
        <Header />
      </header>
      <main className="grow my-20 mb-50">
        {children}
        <WhyDapixel className="mt-30" />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default Layout;
