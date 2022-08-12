import { useEffect, useState } from 'react';
import line from 'assets/img/line.png';
import './Prizes.scss';

const Prizes = () => {
  const [prizes, setPrizes] = useState([]);

  useEffect(() => {
    async function fetchPrizes() {
      try {
        let response = await fetch(
          'http://localhost:1337/api/prizes/?populate=*'
        );
        if (!response.ok) {
          throw new Error(response.statusText);
        }
        let prizes = await response.json();
        setPrizes(prizes.data);
      } catch (error) {
        console.log(error);
      }
    }

    fetchPrizes();
  }, []);

  return (
    <section id='prizes'>
      <div className='container'>
        <div className='logo'>
          <img
            src='http://localhost:1337/uploads/line_1f7066599f.png?updated_at=2022-08-11T12:12:05.377Z'
            alt='line'
          />
        </div>

        <div className='prizes-images'>
          <h2>Auszeichnungen</h2>
          <div className='badges'>
            {prizes.map((prize: any) => (
              <div className='badge' key={prize.attributes.prizeName}>
                <img
                  src={
                    'http://localhost:1337' +
                    prize.attributes.Image.data.attributes.url
                  }
                  alt='specoffer'
                />
                <p className='text'>{prize.attributes.prizeName}</p>
              </div>
            ))}
          </div>
        </div>
        <div className='logo'>
          <img src={line} alt='line' />
        </div>
      </div>
    </section>
  );
};

export default Prizes;
