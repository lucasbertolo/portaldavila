import React from 'react';

const CardIcons = ({
  bathroom, area, dormitory, garage,
}) => (
  <span className="card__icons">
    <span className="icon-container">
      <svg className="svg garage-icon" viewBox="0 0 333 416.25" role="presentation" aria-hidden="true" focusable="false">
        <path className="fil0" d="M122 213l89 0c0,-14 -7,-31 -23,-31l-21 0 -22 0c-16,0 -23,17 -23,31zm-86 -89c-13,7 -24,-12 -11,-20l142 -82 142 82c12,8 1,27 -12,20l-9 -6 0 193 -35 0 0 -182 -173 0 0 182 -34 0 0 -192 -10 5zm186 146l0 10c0,16 -25,16 -25,0l0 -10 -61 0 0 10c0,16 -25,16 -25,0l0 -10 -16 0 0 -37c0,-9 6,-17 14,-19l-7 0c-3,0 -5,-3 -5,-5l0 -6 14 0c3,-17 16,-33 34,-33l22 0 21 0c19,0 31,16 34,33l15 0 0 6c0,2 -3,5 -5,5l-8 0c8,2 14,10 14,19l0 37 -16 0zm-99 -35c6,0 11,5 11,11 0,6 -5,11 -11,11 -6,0 -11,-5 -11,-11 0,-6 5,-11 11,-11zm87 0c6,0 11,5 11,11 0,6 -5,11 -11,11 -6,0 -11,-5 -11,-11 0,-6 5,-11 11,-11z" />
      </svg>
      <p className="icon-info">{garage}</p>
    </span>
    <span className="icon-container">
      <svg className="svg bed-icon" viewBox="0 0 24 24" role="presentation" aria-hidden="true" focusable="false">
        <path d="m23.96 14.81-2.96-7.41v-5.02a1.39 1.39 0 0 0 -1.39-1.38h-15.22c-.77 0-1.39.62-1.39 1.38v5.02l-2.96 7.41-.04.19v5.61c0 .64.43 1.17 1.01 1.33 0 .02-.01.04-.01.06v1.5a.5.5 0 0 0 1 0v-1.5h20v1.5a.5.5 0 0 0 1 0v-1.5c0-.02-.01-.04-.01-.06a1.39 1.39 0 0 0 1.01-1.33v-5.61zm-19.96-12.43c0-.21.17-.38.39-.38h15.22a.39.39 0 0 1 .39.39v4.61h-1v-1.61c0-.77-.62-1.39-1.39-1.39h-3.21c-.78 0-1.4.62-1.4 1.39v1.61h-2v-1.61c0-.77-.62-1.39-1.39-1.39h-3.22c-.77 0-1.39.62-1.39 1.39v1.61h-1zm14 3.01v3.21a.39.39 0 0 1 -.39.39h-3.21a.39.39 0 0 1 -.4-.38v-3.22a.39.39 0 0 1 .39-.39h3.21a.39.39 0 0 1 .39.39zm-8 0v3.21a.39.39 0 0 1 -.39.4h-3.22a.39.39 0 0 1 -.39-.39v-3.22a.39.39 0 0 1 .39-.39h3.21a.39.39 0 0 1 .39.39zm-6.16 2.61h1.16v.61c0 .77.62 1.39 1.39 1.39h3.21c.78 0 1.4-.62 1.4-1.39v-.61h2v .61c0 .78.62 1.39 1.39 1.39h3.21c.78 0 1.4-.62 1.4-1.39v-.61h1.16l2.8 7h-21.92zm19.16 12.61c0 .21-.18.39-.39.39h-21.22a.39.39 0 0 1 -.39-.39v-4.61h22z" />
      </svg>
      <p className="icon-info" style={{ marginLeft: '8px' }}>{dormitory}</p>
    </span>
    <span className="icon-container">
      <svg className="svg bath-icon" viewBox="0 0 64 80" role="presentation" aria-hidden="true" focusable="false">
        <path d="M9.53,35.18L9.35,11.59c0-2.65,2.29-3.6,4.44-3.6c2.02,0,4.13,0.85,4.39,3.15c-2.58,0.28-4.6,2.44-4.6,5.1v0.5h10.31v-0.5  c0-2.69-2.07-4.87-4.7-5.11C18.95,8.61,16.9,7,13.79,7c-3.3,0-5.44,1.81-5.44,4.6l0.19,23.58H4.58v8.65  c0,5.94,4.49,10.84,10.25,11.52l-0.96,0.96L14.58,57l1.58-1.58c0.01,0,0.02,0,0.03,0h31.63c0.01,0,0.02,0,0.03,0L49.42,57l0.71-0.71  l-0.96-0.96c5.76-0.67,10.25-5.58,10.25-11.52v-8.65h-37.2H9.53z M18.73,12.09c2.12,0,3.88,1.6,4.12,3.65H14.6  C14.85,13.69,16.61,12.09,18.73,12.09z M58.42,43.82c0,5.85-4.76,10.6-10.6,10.6H16.19c-5.85,0-10.6-4.76-10.6-10.6v-4.51h52.83  V43.82z M58.42,38.31H5.58v-2.13h3.45h13.18h36.2V38.31z" />
      </svg>
      <p className="icon-info">{bathroom}</p>
    </span>
    <span className="icon-container">
      {area}
      <p className="icon-info">m&#178;</p>
    </span>
  </span>
);

export default CardIcons;
