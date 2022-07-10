import React from 'react';
import './style.css'

export default function Contactform() {
    return (

        <section className='contactsec'>
            <div className='container'>

                <main>

                    <figure>
                        <h1>Contact Form</h1>
                        <p>Fill out the form below, we will get back you soon.</p>

                        <form action='' method='post'>

                            <div>
                                <label>
                                    <p>First Name</p>
                                    <input type='text' name='fname' />
                                </label>
                                <label>
                                    <p>Last Name</p>
                                    <input type='text' name='lname' />
                                </label>
                            </div>

                            <div>
                                <label>
                                    <p>Phone Number</p>
                                    <input type='text' name='phone' />
                                </label>
                                <label>
                                    <p>Email</p>
                                    <input type='text' name='email' />
                                </label>
                            </div>

                            <div>
                                <label>
                                    <p>Subject</p>
                                    <input type='text' name='subj' />
                                </label>
                                <label>
                                    <p>Your Company</p>
                                    <input type='text' name='copmany' />
                                </label>
                            </div>

                            <label>
                                <p>Write Your Message</p>
                                <textarea rows='10'></textarea>
                            </label>

                            <div>
                                <input type='submit' name='Submit Now' />
                            </div>

                        </form>
                    </figure>

                    <article>
                        <div>
                            <h1>Visit Our Location</h1>
                            <p>Lorem ipsum dolor sit amet consectetur adipiscing elit amet consectetur.</p>
                        </div>
                        <div>
                            <h1>Message us</h1>
                            <p>info@exampal.com</p>
                            <p>+01 123 456 789</p>
                        </div>
                        <div>
                            <h1>Follow Us</h1>
                            <div className='social'>
                                <i className="fa-brands fa-facebook-f"></i>
                                <i className="fa-brands fa-twitter"></i>                                
                                <i className="fa-brands fa-linkedin"></i>                                
                                <i className="fa-brands fa-pinterest"></i> 
                                <i className="fa-brands fa-youtube"></i>
                                <i className="fa-brands fa-instagram-square"></i>
                            </div>
                        </div>
                    </article>

                </main>
            </div>
        </section>


    )
}
