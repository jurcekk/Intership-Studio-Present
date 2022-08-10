import './Reviews.scss';
import leftarr from 'assets/icons/leftarr.png';
import rightarr from 'assets/icons/rightarr.png';
import coffee from 'assets/img/coffee.png';
import star from 'assets/img/star.png';

const Reviews = () => {
  return (
    <section id='review'>
      <p className='first-p'>Empfehlungs</p>
      <h2>Was die Leute über uns sagen</h2>
      <div className='cards'>
        <div className='side-card first-card'>
          <p>
            Sprechen Sie deutsch aliquip ex ea commodo consequat. Wiener
            Schnitzel aute irure dolor in reprehenderit Guten Tag mollit anim
            Stuttgart.
          </p>
          <p>Maria Kartofeln</p>
        </div>
        <img src={leftarr} alt='left' className='str-left' />
        <div className='center-card'>
          <img src={coffee} alt='coffee' />
          <div className='stars'>
            <img src={star} alt='star' width='20px' height='20px' />
            <img src={star} alt='star' />
            <img src={star} alt='star' width='20px' height='20px' />
          </div>
          <p>
            Wiener Schnitzel amet, consectetur Handtasche elit, sed do eiusmod
            tempor Stuttgart ut labore et dolore magna Luftballons Ut Turnbeutel
            nostrud exercitation ullamco .
          </p>
          <p>
            <strong>Halling Tobias</strong>
          </p>
          <p>Koch</p>
          <span>,,</span>
        </div>
        <img src={rightarr} alt='right' className='str-right' />
        <div className='side-card'>
          <p>
            Achtung fur atine indoctum complectitur HugoClub Mate mea meliore
            denique nominavi id. Ohrwurm expetenda nam an, his ei Reise euismod
            assentior.
          </p>
          <p>Rene Weinstein</p>
        </div>
      </div>
      <div className='left-right'>
        <img src={leftarr} alt='left' id='left' />
        <img src={rightarr} alt='right' id='right' />
      </div>
      <a href='#'>Alle Berichte</a>
    </section>
  );
};

export default Reviews;
