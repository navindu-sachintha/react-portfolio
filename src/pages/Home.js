import React from "react";
import Homepage from "../components/Homepage/Homepage";
import Navbar from "../components/Navbar/Navbar";

export default function Home (){
  return (
    <div>
      <header>
        <Navbar />
      </header>
      <main>
        <Homepage />
      </main>
    </div>
  )  
}