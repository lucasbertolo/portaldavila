import React, { useEffect, useState } from 'react';

const SliderImages = ({ images }) => {
  const [coverSize, setCoverSize] = useState(700);
  const [leftAsideSize, setLeftAsideSize] = useState(400);
  const [rightAsideSize, setRightAsideSize] = useState(400);
  useEffect(() => {
    if (process.browser) {
      const item = document.querySelector('#cover');
      setCoverSize(item.width);

      const left = document.querySelector('#left-aside');
      const right = document.querySelector('#right-aside');

      if (left) setLeftAsideSize(left.width);
      if (right) setRightAsideSize(right.width);
    }
  }, []);

  const defineSize = (mode, src) => {
    switch (mode) {
      case 'cover':
        return `${src}?tr=w-${coverSize}`;
      case 'left-aside':
        return `${src}?tr=w-${leftAsideSize}`;
      case 'right-aside':
        return `${src}?tr=w-${rightAsideSize}`;
      default:
        return src;
    }
  };
  const cover = images
    .filter((item) => item.iscover)
    .map((x) => (
      <figure key={x.url} className="shine">
        <img src={defineSize('cover', x.cdn) || x.url} alt={x.alt} id="cover" />
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
          <img
            src={defineSize('left-aside', x.cdn) || x.url}
            alt={x.alt}
            id="left-aside"
          />
        </figure>
      ));

      return (
        <div className="slider-photos">
          <div className="slider-left">{slide}</div>
        </div>
      );
    }

    if (slideImages.length >= 3) {
      const leftSlider = slideImages.slice(0, 2).map((x) => (
        <figure key={x.url} className="shine">
          <img
            src={defineSize('left-aside', x.cdn) || x.url}
            alt={x.alt}
            id="left-aside"
          />
        </figure>
      ));

      const rightslider = slideImages.slice(2, 4).map((x) => (
        <figure key={x.url} className="shine">
          <img
            src={defineSize('right-aside', x.cdn) || x.url}
            alt={x.alt}
            id="right-aside"
          />
        </figure>
      ));

      return (
        <div className="slider-photos">
          <div className="slider-left">{leftSlider}</div>
          <div className="slider-right">{rightslider}</div>
        </div>
      );
    }

    return null;
  };

  const sliderImages = slider();

  return images.length > 0 ? (
    <div className="container-slider">
      <div className="cover-photo">{cover}</div>
      {sliderImages}
    </div>
  ) : null;
};

export default SliderImages;
