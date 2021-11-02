
import './App.css';
import React, { Fragment } from 'react';
import { Navbar } from "./components/Navbar";
import { Header} from "./components/Header";
import { Project} from "./components/Project";
import { Footer} from "./components/Footer";
function App() {
  return (
    <Fragment>
      <div id="showcase">   
   <Navbar/>
   <Header/>
    </div>
    <Project/>
    <Footer />
       </Fragment>
  );
}

export default App;