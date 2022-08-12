import { useEffect, useState } from 'react';
import './Spices.scss';

interface SpicesData {
  title: string;
  subTitle: string;
  firstParagraph: string;
  secondParagraph: string;
  spicesImage: any;
}

const Spices = () => {
  const [spicesData, setSpicesData] = useState<SpicesData>();

  useEffect(() => {
    async function fetchPrizes() {
      try {
        let response = await fetch(
          'http://localhost:1337/api/spice/?populate=*'
        );
        if (!response.ok) {
          throw new Error(response.statusText);
        }
        let spices = await response.json();
        setSpicesData(spices.data.attributes);
      } catch (error) {
        console.log(error);
      }
    }

    fetchPrizes();
  }, []);

  return (
    <section id='spices' className='spices'>
      <div className='spices-body'>
        <h2 className='spices-heading'>{spicesData?.title}</h2>
        <h3 className='spices-subheading'>{spicesData?.subTitle}</h3>
        <p className='spices-text'>{spicesData?.firstParagraph}</p>
        <p className='spices-text'>{spicesData?.secondParagraph}</p>
      </div>
      <img
        src={
          'http://localhost:1337' + spicesData?.spicesImage.data.attributes.url
        }
        alt={spicesData?.spicesImage.data.attributes.alternativeText}
        className='spices-img'
      />
    </section>
  );
};

export default Spices;
