import './Footer.scss';
import brlogo from 'assets/img/brlogo-transp.png';
import twitter from 'assets/icons/twitter.png';
import facebook from 'assets/icons/facebook.png';
import youtube from 'assets/icons/youtube.png';
import instagram from 'assets/icons/instagram.png';

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='footer-main'>
        <div className='information'>
          <div>
            <span className='lnr lnr-map-marker hidden'></span>
            <p>
              Klauprechtstraße 25
              <br />
              76137 Karlsruhe, Germany
            </p>
          </div>
          <div>
            <span className='lnr lnr-phone hidden'></span>
            <p>+49 721 358060</p>
          </div>
          <div>
            <span className='lnr lnr-envelope hidden'></span>
            <p>info@partyservice-brath.de</p>
          </div>
        </div>

        <img src={brlogo} alt='logo' className='footer-logo' />

        <div className='social'>
          <p>Besuchen Sie uns auf:</p>
          <div className='social-icons'>
            <a href='https://twitter.com/' target='_blank' className='pulse'>
              <img src={twitter} alt='twitter' width='50' height='50' />
            </a>
            <a
              href='https://www.facebook.com/'
              target='_blank'
              className='pulse'
            >
              <img src={facebook} alt='facebook' width='50' height='50' />
            </a>
            <a
              href='https://www.instagram.com/'
              target='_blank'
              className='pulse'
            >
              <img src={instagram} alt='instagram' width='50' height='50' />
            </a>
            <a
              href='https://www.youtube.com/'
              target='_blank'
              className='pulse'
            >
              <img src={youtube} alt='youtube' width='50' height='50' />
            </a>
          </div>
        </div>
      </div>

      <div className='footer-copyright'>
        <div className='cc-content'>
          <p>&copy; 2020 by Metzgerei Heiko Brath GmbH, Deutschland</p>
          <p className='sp'>
            Code and design by
            <a href='https://www.studiopresent.rs/' target='_blank'>
              StudioPresent
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
