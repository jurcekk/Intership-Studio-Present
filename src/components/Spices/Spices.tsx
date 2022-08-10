import './Spices.scss';
import spices from '../../assets/img/spices.png';

const Spices = () => {
  return (
    <section id='spices' className='spices'>
      <div className='spices-body'>
        <h2 className='spices-heading'>Custome spices for your meat</h2>
        <h3 className='spices-subheading'>
          Turnbeutel nostrud exercitation ullamco Sprechen Sie deutsch
        </h3>
        <p className='spices-text'>
          Odio principes iracundia Müller Rice pri. Ut vel solum mandamus,
          Kartoffelkopf natum adversarium ei ius, diam Schmetterling honestatis
          eum.
        </p>
        <p className='spices-text'>
          Wiener Schnitzel amet, consectetur Handtasche elit, sed do eiusmod
          tempor Stuttgart ut labore et dolore magna 99 Luftballons Ut enim ad
          minim veniam, Turnbeutel nostrud exercitation ullamco laboris nisi
          Sprechen Sie deutsch aliquip ex ea commodo consequat.
        </p>
      </div>
      <img src={spices} alt='Various spices' className='spices-img' />
    </section>
  );
};

export default Spices;
