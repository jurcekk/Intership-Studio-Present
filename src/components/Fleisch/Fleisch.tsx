import { useEffect, useState } from 'react';
import './Fleisch.scss';

interface FleischData {
  title: string;
  button: string;
}

const Fleisch = () => {
  const [fleischData, setFleischData] = useState<FleischData>();

  useEffect(() => {
    async function fetchPrizes() {
      try {
        let response = await fetch('http://localhost:1337/api/fleisch');
        if (!response.ok) {
          throw new Error(response.statusText);
        }
        let fleisch = await response.json();
        setFleischData(fleisch.data.attributes);
      } catch (error) {
        console.log(error);
      }
    }

    fetchPrizes();
  }, []);

  return (
    <section id='fleisch'>
      <div className='dim'>
        <h2>{fleischData?.title}</h2>
        <a href='#'>{fleischData?.button}</a>
      </div>
    </section>
  );
};

export default Fleisch;
