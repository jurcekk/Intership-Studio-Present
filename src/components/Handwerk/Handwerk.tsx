import { useEffect, useState } from 'react';
import './Handwerk.scss';

interface HandwerkData {
  Title: string;
  subTitle: string;
  firstParagraph: string;
  secondParagraph: string;
  thridParagraph: string;
  button: string;
}

const Handwerk = () => {
  const [handwerkData, setHandwerkData] = useState<HandwerkData>();

  useEffect(() => {
    async function fetchData() {
      try {
        let response = await fetch('http://localhost:1337/api/handwerk');
        if (!response.ok) {
          throw new Error(response.statusText);
        }
        let data = await response.json();
        setHandwerkData(data.data.attributes);
      } catch (error) {
        console.log(error);
      }
    }

    fetchData();
  }, []);

  return (
    <section id='das-handwerk' className='handwerk'>
      <div className='handwerk-body'>
        <h2 className='handwerk-heading'>{handwerkData?.Title}</h2>

        <h3 className='handwerk-subheading'>{handwerkData?.subTitle}</h3>

        <p className='handwerk-text'>{handwerkData?.firstParagraph}</p>
        <p className='handwerk-text'>{handwerkData?.secondParagraph} </p>
        <p className='handwerk-text'>{handwerkData?.thridParagraph}</p>

        <a className='handwerk-btn' href='#das-handwerk'>
          {handwerkData?.button}
        </a>
      </div>
    </section>
  );
};

export default Handwerk;
