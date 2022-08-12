import { useEffect, useState } from 'react';
import './ImageGalerry.scss';

const ImageGallery = () => {
  const [images, setImages] = useState<any>([]);

  useEffect(() => {
    async function fetchImages() {
      try {
        let response = await fetch(
          'http://localhost:1337/api/image-galleries/?populate=*'
        );
        if (!response.ok) {
          throw new Error(response.statusText);
        }
        let data = await response.json();
        setImages(data.data[0].attributes.images.data);
      } catch (error) {
        console.log(error);
      }
    }

    fetchImages();
  }, []);

  return (
    <section id='image-gallery'>
      <div className='container'>
        <div className='img-logo'>
          <img
            src='http://localhost:1337/uploads/line_1f7066599f.png?updated_at=2022-08-11T12:12:05.377Z'
            alt='line'
            className='logo'
          />
        </div>

        <div className='slike'>
          {images?.map((image: any) => (
            <img
              src={'http://localhost:1337' + image.attributes.url}
              alt={image.attributes.alternativeText}
              key={image.id}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImageGallery;
