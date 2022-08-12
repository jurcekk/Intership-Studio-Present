import Buchen from 'components/Buchen/Buchen';
import DryAged from 'components/DryAged/DryAged';
import Fleisch from 'components/Fleisch/Fleisch';
import Footer from 'components/Footer/Footer';
import Handwerk from 'components/Handwerk/Handwerk';
import ImageCarousel from 'components/Image-carousel/ImageCarousel';
import ImageGallery from 'components/ImageGallery/ImageGallery';
import Prizes from 'components/Prizes/Prizes';
import Rating from 'components/Rating/Rating';
import Reviews from 'components/Reviews/Reviews';
import Spices from 'components/Spices/Spices';

const HomePage = () => {
  return (
    <>
      <ImageCarousel />
      <DryAged />
      <Buchen />
      <Handwerk />
      <ImageGallery />
      <Spices />
      <Fleisch />
      <Rating />
      <Prizes />
      <Reviews />
      <Footer />
    </>
  );
};

export default HomePage;
