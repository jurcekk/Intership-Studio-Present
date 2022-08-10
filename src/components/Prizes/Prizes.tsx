import './Prizes.scss';
import line from 'assets/img/line.png';
import specoffer from 'assets/img/specoffer.png';
import geniune from 'assets/img/genuine.png';
import bestchoice from 'assets/img/bestchoice.png';
import highq from 'assets/img/highq.png';

const Prizes = () => {
  return (
    <section id='prizes'>
      <div className='container'>
        <div className='logo'>
          <img src={line} alt='line' />
        </div>

        <div className='prizes-images'>
          <h2>Auszeichnungen</h2>
          <div className='badges'>
            <div className='badge'>
              <img src={specoffer} alt='specoffer' />
              <p className='text'>Tollit argumentum genau Saepe lobortis</p>
            </div>

            <div className='badge'>
              <img src={geniune} alt='genuine' />
              <p className='text'>Schneewittchen denique</p>
            </div>

            <div className='badge'>
              <img src={bestchoice} alt='bestchoice' />
              <p className='text'>Grimms Märchen expetenda</p>
            </div>

            <div className='badge'>
              <img src={highq} alt='highquality' />
              <p className='text'>Mettwurst mei ullum gloriatur</p>
            </div>
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
