import './App.css';
import './sass/main.scss';
import ImageCarousel from './components/Image-carousel/ImageCarousel';
import Navbar from './components/Navbar/Navbar';
import DryAged from './components/DryAged/DryAged';
import Buchen from './components/Buchen/Buchen';
import Handwerk from 'components/Handwerk/Handwerk';
import ImageGallery from 'components/ImageGallery/ImageGallery';
import Spices from 'components/Spices/Spices';
import Fleisch from 'components/Fleisch/Fleisch';
import Rating from 'components/Rating/Rating';
import Prizes from 'components/Prizes/Prizes';

function App() {
  return (
    <>
      <Navbar />
      <ImageCarousel />
      <DryAged />
      <Buchen />
      <Handwerk />
      <ImageGallery />
      <Spices />
      <Fleisch />
      <Rating />
      <Prizes />
    </>
  );
}

export default App;
