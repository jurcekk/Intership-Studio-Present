import './Rating.scss';
import jrelogo from 'assets/img/jrelogo.png';

const Rating = () => {
  return (
    <section id='rating'>
      <div>
        <img src={jrelogo} alt='jrelogo' />
        <div className='rating-text'>
          <h2>Metzgerei Brath ist Mitglied im Genussnetzwerk</h2>
          <a href='#'>Gehen zu site</a>
        </div>
      </div>
    </section>
  );
};

export default Rating;
