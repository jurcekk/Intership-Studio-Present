import './ImageCarousel.scss';
import leftArrow from 'assets/icons/leftarr.png';
import rightArrow from 'assets/icons/rightarr.png';
import image1 from 'assets/img/image1.png';

const ImageCarousel = () => {
  return (
    <section id='image-carousel'>
      <img src={image1} alt='' className='car-img' />
      <div className='image-text'>
        <h2>Heiko Brath Metzgermeister</h2>

        <p>
          Deutsches Ipsum Dolor deserunt dissentias Grimms Märchen et. Tollit
          argumentum ius an. Pfannkuchen lobortis elaboraret per ne, nam Aperol
          Spritz probatus pertinax.
        </p>
      </div>

      <div className='arrows'>
        <img src={leftArrow} alt='left-arrow' className='leftar' />
        <div className='dot1'></div>

        <div className='dot2'></div>

        <div className='dot3'></div>

        <div className='dot4'></div>

        <div className='dot5'></div>

        <img src={rightArrow} alt='right-arrow' className='rightar' />
      </div>
    </section>
  );
};

export default ImageCarousel;
