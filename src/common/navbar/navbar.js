import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './style.css';

export default function Navbar() {

    const [click , setclick] = useState(false);

    const opennav = () =>
    {
        setclick(!click);
    }

    const closenav = () =>
    {
        setclick(false)     
    }

    return (
        <nav className='navsec'>
            <div className='container'>

                <div className='nav-left'>

                    <i className="fa-solid fa-bars" onClick={opennav}></i>

                    <ul className={click? 'nav-menu actv' : 'nav-menu'}>
                        <li> <NavLink to='/' onClick={closenav}>Home</NavLink> </li>
                        <li> <NavLink to='/about' onClick={closenav}>About</NavLink> </li>
                        <li> <NavLink to='/gallery' onClick={closenav}>Gallery</NavLink> </li>
                        <li> <NavLink to='/destinations' onClick={closenav}>Destinations</NavLink> </li>
                        <li> <NavLink to='/blog' onClick={closenav}>Blog</NavLink> </li>
                        <li> <NavLink to='/testimonial' onClick={closenav}>Testimonial</NavLink> </li>
                        <li> <NavLink to='/contact' onClick={closenav}>Contact</NavLink> </li>
                    </ul>

                </div>



                <div className='nav-right'>
                    <ul>
                        <li> <NavLink to='/signin'> Sign In</NavLink> </li>
                        <li> <NavLink to='/register'>Register</NavLink> </li>
                        <li> <NavLink to='/quote' className='alast'>Request a Quote</NavLink> </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}
