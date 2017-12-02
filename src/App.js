import React, { Component } from 'react';
import './App.css';
import FaPhone from 'react-icons/lib/fa/phone';
import FaEnvelope from 'react-icons/lib/fa/envelope';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className='top'>
          <header> Jason's Dent Works </header>

        </div>
        <div className='middle'>
          <contactus>
            <callus>
              <a href="tel:1-502-758-2832"><FaPhone /> 1-502-758-2832</a>
            </callus>
            <emailus>
              <a href="mailto:JasonsDentWorks@Gmail.com?Subject=I'm interested in a quote" target="_top"><FaEnvelope /> JasonsDentWorks@Gmail.com</a>
            </emailus>
          </contactus>



        </div>
        <div className='bottom'>
          <div className='bottomImg'></div>
        </div>
        <footer> <p>Handmade by Michael J. Hutchison © 2017. </p>
        <a href="http://MyNextDev.com" target="blank"> MyNextDev.com</a>
        </footer>
      </div>
    );
  }
}

export default App;


