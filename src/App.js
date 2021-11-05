
import './App.css';
import React, { Fragment } from 'react';
import { Navbar } from "./components/Navbar";
import { Header} from "./components/Header";
import { Project} from "./components/Project";
import { Contact} from "./components/Contact";
import { Footer} from "./components/Footer";

function App() {

  return (
    <Fragment>
      <div id="showcase">   
   <Navbar/>
   <Header/>
    </div>
    <Project />
    <Contact />
    <Footer />
       </Fragment>
  );
}

export default App;
