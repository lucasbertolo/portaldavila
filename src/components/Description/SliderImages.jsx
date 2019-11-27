import React from 'react';

const SliderImages = ({ images }) => {
  const cover = images.filter((item) => item.iscover).map((x) => (
    <figure key={x.url} className="shine">
      <img src={x.cdn || x.url} alt={x.alt} />
    </figure>
  ));

  const slider = () => {
    if (images.length === 0) {
      return null;
    }

    const slideImages = images.filter((x) => !x.iscover);

    if (slideImages.length >= 1 && slideImages.length < 3) {
      const slide = slideImages.map((x) => (
        <figure key={x.url} className="shine">
          <img src={x.cdn || x.url} alt={x.alt} />
        </figure>
      ));

      return (
        <div className="slider-photos">

          <div className="slider-left">
            {slide}
          </div>
        </div>
      );
    }

    if (slideImages.length >= 3) {
      const leftSlider = slideImages.slice(0, 2).map((x) => (
        <figure key={x.url} className="shine">
          <img src={x.cdn || x.url} alt={x.alt} />
        </figure>
      ));

      const rightslider = slideImages.slice(2, 4).map((x) => (
        <figure key={x.url} className="shine">
          <img src={x.cdn || x.url} alt={x.alt} />
        </figure>
      ));

      return (
        <div className="slider-photos">

          <div className="slider-left">
            {leftSlider}
          </div>
          <div className="slider-right">
            {rightslider}
          </div>
        </div>

      );
    }

    return null;
  };

  const sliderImages = slider();


  return (
    images.length > 0
      ? (
        <div className="container-slider">
          <div className="cover-photo">
            {cover}
          </div>
          {sliderImages}
        </div>
      ) : null
  );
};


export default SliderImages;
