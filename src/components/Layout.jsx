import React from "react";
import Header from "./Header";
import Home from "./Home";
import Skills from "./Skills";
import Contact from "./Contact";
import Jobs from "./Jobs";

const Layout = () => {
  return (
    <div className="relative overflow-x-hidden">
      <Header />

      <main className="relative max-w-7xl mx-auto mt-16">
        <Home />
        <Skills />
        <Jobs/>
        <Contact />
      </main>
    </div>
  );
};

export default Layout;
