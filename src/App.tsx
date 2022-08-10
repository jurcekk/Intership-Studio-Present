import './App.css';
import ImageCarousel from './components/Image-carousel/ImageCarousel';
import Navbar from './components/Navbar/Navbar';
import DryAged from './components/DryAged/DryAged';
import Buchen from './components/Buchen/Buchen';
import './sass/main.scss';
import Handwerk from 'components/Handwerk/Handwerk';
import ImageGallery from 'components/ImageGallery/ImageGallery';

function App() {
  return (
    <>
      <Navbar />
      <ImageCarousel />
      <DryAged />
      <Buchen />
      <Handwerk />
      <ImageGallery />
    </>
  );
}

export default App;
