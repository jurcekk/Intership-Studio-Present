import React from 'react';
import './Buchen.scss';
import meat5 from '../../assets/img/meat5.png';

const Buchen = () => {
  return (
    <section id='buchen' className='buchen'>
      <div className='buchen-body'>
        <h2 className='buchen-heading'>Buchen Sie den Grillkurs jetzt</h2>
        <ul className='buchen-list'>
          <li className='buchen-list-item'>professioneller Lehrer</li>
          <li className='buchen-list-item'>ausgezeichneter Metzger</li>
          <li className='buchen-list-item'>1 Tag</li>
          <li className='buchen-list-item'>
            lernen Sie die Kunst des Grillens
          </li>
        </ul>
        <a className='buchen-btn' href='#buchen'>
          Grillkurs
        </a>
      </div>
      <img src={meat5} alt='Meat on a platter' className='buchen-img' />
    </section>
  );
};

export default Buchen;
