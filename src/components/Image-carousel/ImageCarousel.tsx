import { useEffect, useState } from 'react';
import './ImageCarousel.scss';

interface Text {
  Title: string;
  textBody: string;
}

const ImageCarousel = () => {
  const [images, setImages] = useState([]);
  const [text, setText] = useState<Text>();
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    async function fetchImages() {
      try {
        let response = await fetch(
          'http://localhost:1337/api/carousels/?populate=*'
        );
        if (!response.ok) {
          throw new Error(response.statusText);
        }
        let images = await response.json();
        setImages(images.data);
      } catch (error) {
        console.log(error);
      }
    }

    async function fetchText() {
      try {
        let response = await fetch(
          'http://localhost:1337/api/image-carousel-text'
        );
        if (!response.ok) {
          throw new Error(response.statusText);
        }
        let text = await response.json();
        setText(text.data.attributes);
      } catch (error) {
        console.log(error);
      }
    }

    fetchText();
    fetchImages();
  }, []);

  const slides: string[] = [];
  images.map((image: any) =>
    slides.push(
      'http://localhost:1337' +
        image.attributes.carouselImage.data.attributes.url
    )
  );

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex: number) => {
    setCurrentIndex(slideIndex);
  };

  const slideStylesWidthBackground = {
    backgroundImage: `url(${slides[currentIndex]})`,
  };

  return (
    <section id='image-carousel'>
      <div style={slideStylesWidthBackground} className='mySlides fade'></div>
      <div className='image-text'>
        <h1>{text?.Title}</h1>

        <p>{text?.textBody}</p>
      </div>

      <div className='arrows'>
        <img
          src='http://localhost:1337/uploads/leftarr_78daa2267b.png?updated_at=2022-08-11T12:12:27.185Z'
          alt='left-arrow'
          className='leftar'
          onClick={goToPrevious}
        />

        {slides.map((slide, slideIndex) => (
          <div
            className='dot'
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
          ></div>
        ))}

        <img
          src='http://localhost:1337/uploads/rightarr_340a7852f5.png?updated_at=2022-08-11T12:12:27.280Z'
          alt='right-arrow'
          className='rightar'
          onClick={goToNext}
        />
      </div>
    </section>
  );
};

export default ImageCarousel;
