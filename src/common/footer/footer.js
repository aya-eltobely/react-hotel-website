import React from 'react';
import './style.css';

export default function Footer() {
    return (

        <footer>
            <div className="container">

                <figure>
                    <h1>About Us</h1>
                    <div>
                        <p>Lorem ipsum dolor sit amet sectetur adipiscing elit amet consectetur scing elit amet consectetur adipiscing elit sed et eletum.</p>
                        <p>Lorem ipsum dolor sit amet sectetur adipiscing elit amet consectetur scing elit amet.</p>
                    </div>
                    <div className='social'>
                        <i className="fa-brands fa-facebook-f"></i>
                        <i className="fa-brands fa-twitter"></i>
                        <i className="fa-brands fa-linkedin"></i>
                        <i className="fa-brands fa-pinterest"></i>
                        <i className="fa-brands fa-youtube"></i>
                        <i className="fa-brands fa-instagram-square"></i>
                    </div>
                </figure>

                <figure>
                    <h1>Navigation</h1>
                    <ul>
                        <li> <a href="#">Home</a> </li>
                        <li> <a href="#">About US</a> </li>
                        <li> <a href="#">Gallery</a> </li>
                        <li> <a href="#">Destination</a> </li>
                        <li> <a href="#">Blog</a> </li>
                        <li> <a href="#">Testimonial</a> </li>
                        <li> <a href="#">Contact US</a> </li>
                    </ul>
                </figure>

                <figure>
                    <h1>Recent Posts</h1>
                    <div>
                        <p>Lorem ipsum dolor sit amet sectetur adipiscing elit amet</p>
                        <p> <i className="fa-solid fa-calendar-days"></i> 01 Oct 2020</p>
                    </div>
                    <div>
                        <p>Lorem ipsum dolor sit amet sectetur adipiscing elit amet</p>
                        <p> <i className="fa-solid fa-calendar-days"></i> 01 Oct 2020</p>
                    </div>
                    <div>
                        <p>Lorem ipsum dolor sit amet sectetur adipiscing elit amet</p>
                        <p> <i className="fa-solid fa-calendar-days"></i> 01 Oct 2020</p>
                    </div>
                </figure>

                <figure>
                    <h1>Newsletter</h1>
                    <p>Lorem ipsum dolor sit amet sectetur adipiscing elit amet</p>
                    <div className="newsleter">
                        <input type='text' />
                        <input type='submit' value='SUBSCRIBE'/>
                    </div>
                   
                </figure>

            </div>
        </footer>

    )
}
