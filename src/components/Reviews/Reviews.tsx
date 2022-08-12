import './Reviews.scss';
import leftarr from 'assets/icons/leftarr.png';
import rightarr from 'assets/icons/rightarr.png';
import ReviewCard from './ReviewCard/ReviewCard';
import { useEffect, useState } from 'react';

const Reviews = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [comments, setComments] = useState([]);

  useEffect(() => {
    async function fetchReviews() {
      try {
        let response = await fetch('http://localhost:1337/api/reviews');
        if (!response.ok) {
          throw new Error(response.statusText);
        }
        let reviews = await response.json();
        setComments(reviews.data);
      } catch (error) {
        console.log(error);
      }
    }
    fetchReviews();
  }, []);

  useEffect(() => {
    if (activeIndex === 0) {
      setActiveIndex(3);
    } else if (activeIndex > 3) {
      setActiveIndex(1);
    }
  }, [activeIndex]);

  return (
    <section id='review'>
      <p className='first-p'>Empfehlungs</p>
      <h2>Was die Leute über uns sagen</h2>
      <div className='cards'>
        {comments.map((comment: any) => (
          <ReviewCard comment={comment} activeIndex={activeIndex} />
        ))}
        <div className='navigation'>
          <img
            src={leftarr}
            alt='left'
            className='str-left'
            onClick={() => setActiveIndex((prevState) => prevState - 1)}
          />

          <img
            src={rightarr}
            alt='right'
            className='str-right'
            onClick={() => setActiveIndex((prevState) => prevState + 1)}
          />
        </div>
      </div>
      <div className='left-right'>
        <img
          src={leftarr}
          alt='left'
          id='left'
          onClick={() => setActiveIndex((prevState) => prevState - 1)}
        />
        <img
          src={rightarr}
          alt='right'
          id='right'
          onClick={() => setActiveIndex((prevState) => prevState + 1)}
        />
      </div>
      <a href='#'>Alle Berichte</a>
    </section>
  );
};

export default Reviews;
