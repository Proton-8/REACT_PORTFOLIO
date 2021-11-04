import React from 'react'

export const Navbar = () => {
    return (
        <div>
            <nav className="cf">
                <ul className="cf">
                    <li className="hide-on-small">
                        <a href="/#" className="bold"> About
                        Me</a>
                    </li>
                    <li>
                        <a href="/#"> Portfolio</a>
                    </li>
                    <li>
                        <a href="/#"> Contact Me</a>
                    </li>
                    {/* <li> </li> */}
                    <li>
                        <a href="https://docs.google.com/document/d/1xV13u2ruQU41HeSb9MlHEL8p5AtqM4gR/edit?usp=sharing&ouid=115475312727942649219&rtpof=true&sd=true">  My Resume</a>
                    </li>
                </ul>
<a href="/#" id="openup"> Ronald Shutter</a>

                </nav>
        </div>
    )
}
