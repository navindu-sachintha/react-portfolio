import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Aboutpage from "../components/Aboutpage/Aboutpage";
import Footer from "../components/Footer/Footer";

export default function About(){
  return (
    <div className="about">
      <header>
        <Navbar />
      </header>
      <main>
        <Aboutpage />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  )
}