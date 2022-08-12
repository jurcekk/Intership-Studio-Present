import { useEffect, useState } from 'react';
import './Buchen.scss';

interface BuchenData {
  Title: string;
  button: string;
  buchenImage: any;
}
const Buchen = () => {
  const [buchenData, setBuchenData] = useState<BuchenData>();
  useEffect(() => {
    async function fetchPrizes() {
      try {
        let response = await fetch(
          'http://localhost:1337/api/buchen/?populate=*'
        );
        if (!response.ok) {
          throw new Error(response.statusText);
        }
        let data = await response.json();
        setBuchenData(data.data.attributes);
      } catch (error) {
        console.log(error);
      }
    }

    fetchPrizes();
  }, []);

  return (
    <section id='buchen' className='buchen'>
      <div className='buchen-body'>
        <h2 className='buchen-heading'>{buchenData?.Title}</h2>
        <ul className='buchen-list'>
          <li className='buchen-list-item'>professioneller Lehrer</li>
          <li className='buchen-list-item'>ausgezeichneter Metzger</li>
          <li className='buchen-list-item'>1 Tag</li>
          <li className='buchen-list-item'>
            lernen Sie die Kunst des Grillens
          </li>
        </ul>
        <a className='buchen-btn' href='#buchen'>
          {buchenData?.button}
        </a>
      </div>
      <img
        src={
          'http://localhost:1337' + buchenData?.buchenImage.data.attributes.url
        }
        alt={buchenData?.buchenImage.data.attributes.alternativeText}
        className='buchen-img'
      />
    </section>
  );
};

export default Buchen;
