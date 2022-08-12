import './ReviewCard.scss';
import coffee from 'assets/img/coffee.png';
import star from 'assets/img/star.png';
import { ReviewCardProps } from './ReviewCardProps';

const ReviewCard = ({ comment, activeIndex }: ReviewCardProps) => {
  return (
    <div className='card' key={comment.attributes.author}>
      <div className={`${comment.id !== activeIndex ? 'hide' : ''}`}>
        <img src={coffee} alt='coffee' />
        <div className='stars'>
          <img src={star} alt='star' width='20px' height='20px' />
          <img src={star} alt='star' />
          <img src={star} alt='star' width='20px' height='20px' />
        </div>
      </div>
      <p>{comment.attributes.comment}</p>
      <p>
        <strong>{comment.attributes.author}</strong>
      </p>
      <span className={`${comment.id !== activeIndex ? 'hide' : 'quotes'}`}>
        ,,
      </span>
    </div>
  );
};

export default ReviewCard;
