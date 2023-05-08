import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import ContactPage from "../components/Contactpage/Contactpage";

export default function Contact (){
    return (
        <div>
            <header>
                <Navbar />
            </header>
            <main>
                <ContactPage/>
            </main>
            <footer>
                <Footer/>
            </footer>
        </div>
    )
}