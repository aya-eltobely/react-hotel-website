import React from 'react';
import './style.css';
import Aboutcart from '../about/aboutcart'
import Destinationcart from '../destination/destinationcart';
import Popularhotel from '../popularhotel/popularhotel';



export default function Home() {

  return (
    <div>

      <header className='headersec'>

        <div className='container'>
          <article>
            <h1>Enjoy Your Holiday</h1>
            <h2>Search and Book Hotel</h2>

            <form>
              <div>
                <input type='text' placeholder='Search City' name='city' />
              </div>
              <div>
                <input type='date' name='startdate' />
                <input type='date' name='enddate' />
              </div>
              <div>
                <input type='number' name='adult' placeholder='Adult(s)' />
                <input type='number' name='child' placeholder='Children(0-17)' />
              </div>
              <div>
                <input type='submit' value='Send' name='submit' />

              </div>
            </form>
          </article>
        </div>
      </header>

      <Aboutcart />

      <Popularhotel />

      <section className='desthome'>
        <h1>Most Popular Destination</h1>
         <Destinationcart />
      </section>





    </div>




  )
}
