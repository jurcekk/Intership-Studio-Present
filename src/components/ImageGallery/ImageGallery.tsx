import './ImageGalerry.scss';
import line from 'assets/img/line.png';
import wurst from 'assets/img/wurst.png';
import hanch from 'assets/img/hanch.png';
import schwein from 'assets/img/schwein.png';
import ring from 'assets/img/rind.png';

const ImageGallery = () => {
  return (
    <section id='image-gallery'>
      <div className='container'>
        <div className='img-logo'>
          <img src={line} alt='line' className='logo' />
        </div>

        <div className='slike'>
          <img src={wurst} alt='wurst' />
          <img src={hanch} alt='hanch' />
          <img src={schwein} alt='schwein' />
          <img src={ring} alt='rind' />
        </div>
      </div>
    </section>
  );
};

export default ImageGallery;
