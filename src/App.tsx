import './App.css';
import ImageCarousel from './components/Image-carousel/ImageCarousel';
import Navbar from './components/Navbar/Navbar';
import DryAged from './components/DryAged/DryAged';

import './sass/main.scss';

function App() {
  return (
    <>
      <Navbar />
      <ImageCarousel />
      <DryAged />
    </>
  );
}

export default App;
