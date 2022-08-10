import { useState } from 'react';
import './Navbar.scss';
import logo from '../../assets/img/unknown.png';
import pdf from '../../assets/icons/pdf.png';
import clock from '../../assets/img/clock.png';

const Navbar = () => {
  const [isActiveNav, setIsActiveNav] = useState(false);
  return (
    <header>
      <nav>
        <div className='slider'>
          <img src={logo} alt='logo' className='logo' />
        </div>
        <div className={`link `}>
          <a href='#'>Die Metzgerei</a>
          <a href='#'>Dry Aged</a>
          <a href='#'>Fleischversand</a>
          <a href='#'>Events/Kurse</a>
          <a href='#'>Partyservice</a>
          <a href='#'>Tagesessen</a>
          <a href='#'>Impressum</a>
          <a href='#'>Kontakt</a>
          <a href='#'>
            <img src={pdf} alt='download' width='24' height='28' />
            &nbsp; download
          </a>
        </div>

        <div className='link-mobile'>
          <div className='download'>
            <a href='#'>
              <img src={pdf} alt='download' width='24' height='28' />
              &nbsp; download
            </a>
          </div>

          <div
            className='hamburger-menu'
            onClick={() => setIsActiveNav((prevState) => !prevState)}
          >
            <span className='hamburger'></span>
            <span className='hamburger'></span>
            <span className='hamburger'></span>
          </div>
        </div>

        <div className='time'>
          <div className='time-content'>
            <img src={clock} alt='clock' width='15' height='15' />
            <p>
              <strong>Opentime:</strong> Di. - Fr.: 07:00-13:00 und 15:00-18:30.
              Sa.: 07:30 - 12:30
            </p>
          </div>
        </div>

        <div className='time-mobile'>
          <p>
            <strong>Christmas opentime: </strong>
            Di. - Fr.: 07:00-13:00 und 15:00-18:30. Sa.: 07:30 - 12:30
          </p>
        </div>

        <div className={`mobile-nav ${isActiveNav ? 'showNav' : ''}`}>
          <div className='x-icon-container'>
            <div
              className='x-icon'
              onClick={() => setIsActiveNav((prevState) => !prevState)}
            >
              <span className='x-icon-line'></span>
              <span className='x-icon-line'></span>
            </div>
          </div>
          <a href='#'>Die Metzgerei</a>
          <a href='#'>Dry Aged</a>
          <a href='#'>Fleischversand</a>
          <a href='#'>Events/Kurse</a>
          <a href='#'>Partyservice</a>
          <a href='#'>Tagesessen</a>
          <a href='#'>Impressum</a>
          <a href='#'>Kontakt</a>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
