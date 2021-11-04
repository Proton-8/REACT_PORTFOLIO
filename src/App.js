
import './App.css';
import React, { Fragment } from 'react';
import { Navbar } from "./components/Navbar";
import { Header} from "./components/Header";
import { Project} from "./components/Project";
import { Form} from "./components/Contact";
import { Footer} from "./components/Footer";
function App() {
  return (
    <Fragment>
      <div id="showcase">   
   <Navbar/>
   <Header/>
    </div>
    <Project/>
    <Form/>
    <Footer />
       </Fragment>
  );
}

export default App;
