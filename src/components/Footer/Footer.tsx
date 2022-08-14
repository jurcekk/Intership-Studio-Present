import './Footer.scss';
import { useEffect, useState } from 'react';

interface FooterData {
  address: string;
  phone: string;
  email: string;
  twitterLink: string;
  facebookLink: string;
  instagramLink: string;
  youtubeLink: string;
  logo: any;
  twitterIcon: any;
  facebookIcon: any;
  instagramIcon: any;
  youtubeIcon: any;
}

const Footer = () => {
  const [footerData, setFooterData] = useState<FooterData>();

  useEffect(() => {
    async function fetchData() {
      try {
        let response = await fetch(
          'http://localhost:1337/api/footer/?populate=*'
        );
        if (!response.ok) {
          throw new Error(response.statusText);
        }
        let footer = await response.json();
        setFooterData(footer.data.attributes);
      } catch (error) {
        console.log(error);
      }
    }

    fetchData();
  }, []);

  return (
    <footer className='footer'>
      <div className='footer-main'>
        <div className='information'>
          <div>
            <span className='lnr lnr-map-marker hidden'></span>
            <p>{footerData?.address}</p>
          </div>
          <div>
            <span className='lnr lnr-phone hidden'></span>
            <p>{footerData?.phone}</p>
          </div>
          <div>
            <span className='lnr lnr-envelope hidden'></span>
            <p>{footerData?.email}</p>
          </div>
        </div>

        <img
          src={'http://localhost:1337' + footerData?.logo.data.attributes.url}
          alt={footerData?.logo.data.attributes.alternativeText}
          className='footer-logo'
        />

        <div className='social'>
          <p>Besuchen Sie uns auf:</p>
          <div className='social-icons'>
            <a
              href={footerData?.facebookLink}
              target='_blank'
              className='pulse'
            >
              <img
                src={
                  'http://localhost:1337' +
                  footerData?.twitterIcon.data.attributes.url
                }
                alt={footerData?.twitterIcon.data.attributes.alternativeText}
                width='50'
                height='50'
              />
            </a>
            <a
              target='_blank'
              href={footerData?.facebookLink}
              className='pulse'
            >
              <img
                src={
                  'http://localhost:1337' +
                  footerData?.facebookIcon.data.attributes.url
                }
                alt={footerData?.facebookIcon.data.attributes.alternativeText}
                width='50'
                height='50'
              />
            </a>
            <a
              href={footerData?.facebookLink}
              target='_blank'
              className='pulse'
            >
              <img
                src={
                  'http://localhost:1337' +
                  footerData?.instagramIcon.data.attributes.url
                }
                alt={footerData?.instagramIcon.data.attributes.alternativeText}
                width='50'
                height='50'
              />
            </a>
            <a
              href={footerData?.facebookLink}
              target='_blank'
              className='pulse'
            >
              <img
                src={
                  'http://localhost:1337' +
                  footerData?.youtubeIcon.data.attributes.url
                }
                alt={footerData?.youtubeIcon.data.attributes.alternativeText}
                width='50'
                height='50'
              />
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
