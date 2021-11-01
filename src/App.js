
import './App.css';
import React, { Fragment } from 'react';
import { Navbar } from "./components/Navbar";
import { Header} from "./components/Header";
import { Show} from "./components/Show";
import { Footer} from "./components/Footer";
function App() {
  return (
    <Fragment>
      <div id="showcase">   
   <Navbar/>
   <Header/>
    </div>
    <Show/>
    <Footer />
       </Fragment>
  );
}

export default App;
