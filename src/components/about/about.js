import React from 'react';
import Aboutcart from './aboutcart';
import Headtitle from '../../common/headtitle/headtitle';

export default function About() {
    return (

        <section>
            <Headtitle />
            <Aboutcart />

            <section className='aboutcart'>

                <div className='container'>

                    <figure>
                        <img src='images/about-img-1.jpg' />
                    </figure>

                    <article>
                        <h6 className='feat-h6'>Our Features</h6>
                        <p>Lorem ipsum dolor sit amet consectetur adipiscing elit amet consectetur piscing elit amet consectetur adipiscing elit sed et eletum nulla eu placerat felis etiam tincidunt orci lacus id varius dolor fermum sit amet.</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipiscing elit amet consectetur piscing elit amet consectetur adipiscing elit sed et eletum nulla eu placerat felis etiam tincidunt orci lacus id varius dolor fermum sit amet.</p>
                        <a href='#'> Explore More </a>
                    </article>



                </div>



            </section>
        </section>
    )
}
