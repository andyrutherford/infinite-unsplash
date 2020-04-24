import React from 'react';
import ScrollToTop from 'react-scroll-up';
import Images from './components/Images';
import './App.css';

function App() {
  return (
    <div id='root'>
      <div className='hero is-fullheight is-bold is-info'>
        <div className='hero-body'>
          <div className='container'>
            <div className='header content'>
              <h2 className='subtitle is-6'>Find your inspiration</h2>
              <h1 className='title is-1'>Infinite Unsplash</h1>
            </div>
            <Images />
            <ScrollToTop showUnder={160} duration={1000}>
              <img src='./up_arrow.png' alt='Top' />
            </ScrollToTop>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
