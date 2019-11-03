import React from 'react';

const SliderImages = ({ images }) => (
  <div className="container-slider">
    <div className="cover-photo">
      <figure>
        <img src="" alt="main" />
      </figure>
    </div>
    <div className="slider-photos">
      <div className="slider-left">
        <figure>
          <img src="" alt="lef" />
        </figure>
        <figure>
          <img src="" alt="lef" />
        </figure>
      </div>
      <div className="slider-right">
        <figure>
          <img src="" alt="rig" />
        </figure>
        <figure>
          <img src="" alt="rig" />
        </figure>
      </div>

    </div>
    {/* <ul className="slides md-shadow">
      {images.map((item, index) => (
        <li key={item.url} id={index}><img src={item.url} alt={item.alt} /></li>
      ))}
    </ul> */}
    {/* <ul className="thumbnails">
      {images.map((item, index) => (
        <li key={item.url}>
          <a href={`#${index}`}>
            <img alt={item.alt} src={item.url} />
          </a>
        </li>
      ))}
    </ul> */}
  </div>
);


export default SliderImages;
