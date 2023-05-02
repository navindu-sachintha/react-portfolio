import React from "react";
import Homepage from "../components/Homepage/Homepage";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";

export default function Home (){
  return (
    <div>
      <header>
        <Navbar />
      </header>
      <main>
        <Homepage />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  )  
}