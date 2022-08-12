import { useEffect, useState } from 'react';
import './DryAged.scss';

interface DryAge {
  title: string;
  subTitle: string;
  firstParagraph: string;
  secondParagraph: string;
  button1: string;
  button2: string;
  meatPictures: any;
}

const DryAged = () => {
  const [dryAgeData, setDryAgeData] = useState<DryAge>();

  useEffect(() => {
    async function fetchData() {
      try {
        let response = await fetch(
          'http://localhost:1337/api/dry-age/?populate=*'
        );
        if (!response.ok) {
          throw new Error(response.statusText);
        }
        let dryAgeData = await response.json();
        setDryAgeData(dryAgeData.data.attributes);
      } catch (error) {
        console.log(error);
      }
    }

    fetchData();
  }, []);

  return (
    <section id='dry-aged'>
      <div className='dry-aged-container'>
        <div className='dry-aged-text'>
          <h2>{dryAgeData?.title}</h2>

          <h4>{dryAgeData?.subTitle}</h4>

          <p>{dryAgeData?.firstParagraph}</p>
          <p>{dryAgeData?.secondParagraph}</p>

          <div className='buttons'>
            <a href='#'>{dryAgeData?.button1}</a>
            <a href='#'>{dryAgeData?.button2}</a>
          </div>
        </div>

        <div className='images'>
          {dryAgeData?.meatPictures.data.map((meatPicture: any) => (
            <img
              src={'http://localhost:1337' + meatPicture.attributes.url}
              alt={meatPicture.attributes.alternativeText}
              key={meatPicture.id}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default DryAged;
