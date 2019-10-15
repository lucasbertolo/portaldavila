import React from 'react';

const SliderImages = ({ images }) => (
  <div className="container-slider">
    <ul className="slides md-shadow">
      {images.map((item, index) => (
        <li id={index}><img src={item.url} alt={item.alt} /></li>
      ))}
    </ul>
    <ul className="thumbnails">
      {images.map((item, index) => (
        <li key={item.url}>
          <a href={`#${index}`}>
            <img alt={item.alt} src={item.url} />
          </a>
        </li>
      ))}
    </ul>
  </div>
);


export default SliderImages;
