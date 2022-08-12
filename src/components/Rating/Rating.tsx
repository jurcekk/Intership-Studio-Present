import { useEffect, useState } from 'react';
import './Rating.scss';

interface RatingData {
  title: string;
  button: string;
  logo: any;
}

const Rating = () => {
  const [ratingData, setRatingData] = useState<RatingData>();

  useEffect(() => {
    async function fetchPrizes() {
      try {
        let response = await fetch(
          'http://localhost:1337/api/rating/?populate=*'
        );
        if (!response.ok) {
          throw new Error(response.statusText);
        }
        let rating = await response.json();
        setRatingData(rating.data.attributes);
      } catch (error) {
        console.log(error);
      }
    }

    fetchPrizes();
  }, []);
  return (
    <section id='rating'>
      <div>
        <img
          src={'http://localhost:1337' + ratingData?.logo.data.attributes.url}
          alt={ratingData?.logo.data.attributes.alternativeText}
        />
        <div className='rating-text'>
          <h2>{ratingData?.title}</h2>
          <a href='#'>{ratingData?.button}</a>
        </div>
      </div>
    </section>
  );
};

export default Rating;
