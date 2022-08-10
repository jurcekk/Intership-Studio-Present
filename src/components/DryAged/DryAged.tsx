import './DryAged.scss';
import meat1 from '../../assets/img/meat1.png';
import meat2 from '../../assets/img/meat2.png';
import meat3 from '../../assets/img/meat3.png';
import meat4 from '../../assets/img/meat4.png';

const DryAged = () => {
  return (
    <section id='dry-aged'>
      <div className='dry-aged-container'>
        <div className='dry-aged-text'>
          <h2>Dry aged</h2>

          <h4>Alte Wutz, Dry Aged</h4>

          <p>
            Halt amet, consectetur Handtasche elit, sed do eiusmod tempor
            Stuttgart ut labore et dolore magna 99 Luftballons Ut enim ad minim
            veniam, Turnbeutel nostrud exercitation ullamco laboris nisi
            Sprechen Sie deutsch aliquip ex ea commodo consequat. Wiener
            Schnitzel aute irure dolor in reprehenderit Guten Tag mollit anim
            Stuttgart.
          </p>
          <p>
            id latine indoctum complectitur HugoClub Mate mea meliore denique
            nominavi id. Ohrwurm expetenda nam an, his ei Reise euismod
            assentior.
          </p>

          <div className='buttons'>
            <a href='#'>Dry aged</a>
            <a href='#'>Alte Wurtz</a>
          </div>
        </div>

        <div className='images'>
          <img src={meat1} alt='meat1' />

          <img src={meat2} alt='meat2' />
          <img src={meat3} alt='meat3' />
          <img src={meat4} alt='meat4' />
        </div>
      </div>
    </section>
  );
};

export default DryAged;
