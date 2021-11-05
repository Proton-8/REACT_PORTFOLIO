import React from 'react'
import avatar from '../images/mug-1c.jpg';
export const Header = () => {
    return (
        <main className="container background-trans-50" id="about"
        >    <h1>
                Ronald Shutter <img src={avatar} alt="User avatar" className="avatar" />
            </h1>
            

            {/* <img className ="mug" src="assets\images\mug-1c.jpg" > */}
            
                   
            <span className="lead hide-on-small">
<h3> ABOUT ME:</h3>
               A creative Full STACK Developer with SKILLS in:
               <li> HTML </li>
               <li> CSS </li>
               <li> JAVASCRIPT </li>
               <li> MYSQL DB</li>
               <li> MONGO DB </li>
               <li> EXPRESS JS </li>
               <li> more to come soon ... </li>
               <li> ...</li>
               <li> ... </li>
               <li> ... </li>
             
            </span>
            <p> </p>
            



        </main>
    )
}
