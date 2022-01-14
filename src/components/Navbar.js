import React from 'react'

export const Navbar = () => {
    return (
        <div>
            <nav className="cf">
                <ul className="cf">
                    <li className="hide-on-small">
                        <a href="#about" className="bold"> About
                            Me</a>
                    </li>
                    <li>
                        <a href="#projects"> Portfolio</a>
                    </li>
                    <li>
                        <a href="#contact"> Contact Me</a>
                    </li>
                
                    <li>
                        <a href="https://docs.google.com/document/d/19j4K0bpUyif7yZOFB5m1Rk0-A9qcCLFh/edit?usp=sharing&ouid=115475312727942649219&rtpof=true&sd=true">  My Resume</a>
                    </li>
                </ul>
                <a href="/about" id="openup"> Ronald Shutter</a>

            </nav>
        </div>
    )
}
