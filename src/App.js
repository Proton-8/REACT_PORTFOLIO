import "./App.css";
import { Link } from "react-router-dom";
import React, { Fragment } from "react";
import { Navbar } from "./components/Navbar";
import { Header } from "./components/Header";
import { Project } from "./components/Project";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";

function App() {
  return (
    <Fragment>
      <div id="showcase">
        <Link to="/about">About</Link>
        <Navbar />
        <Header />
      </div>
      <Project />
      <br />
      <Contact />
      <Footer />
    </Fragment>
  );
}

export default App;
