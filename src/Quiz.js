import React from "react";
// import logo from "./logo.svg";
import "./App.css";
import Hero from "./components/Hero/Hero";
import Turn from "./components/Turn/Turn";
import Continue from "./components/Continue/Continue";
import Footer from "./components/Footer/Footer";

const Quiz = ({turnData}) => {
    return (
      <div className="container-fluid">
        <Hero />
        <Turn {...turnData}/>
        <Continue />
        <Footer/>
      </div>
    );
  }

export default Quiz;
