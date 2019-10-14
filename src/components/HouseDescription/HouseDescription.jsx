/* eslint-disable jsx-a11y/control-has-associated-label */
import React from 'react';

export default class HouseDescription extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    //   test: '',
    };
  }

  //   componentDidMount() {
  //   }

  render() {
    // const { test } = this.state;
    return (
      <div className="container-slider">
        <ul className="slides md-shadow">
          <li id="slide1"><img src="https://cdn.rawgit.com/huijing/filerepo/gh-pages/lw1.jpg" alt="" /></li>
          <li id="slide2"><img src="https://cdn.rawgit.com/huijing/filerepo/gh-pages/lw2.jpg" alt="" /></li>
          <li id="slide3"><img src="https://cdn.rawgit.com/huijing/filerepo/gh-pages/lw3.jpg" alt="" /></li>
          <li id="slide4"><img src="https://cdn.rawgit.com/huijing/filerepo/gh-pages/lw4.jpg" alt="" /></li>
          <li id="slide5"><img src="https://images.unsplash.com/photo-1549836067-1aba91c8d8b6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1934&q=80" alt="" /></li>
        </ul>

        <ul className="thumbnails">
          <li>
            <a href="#slide1"><img src="https://images.unsplash.com/photo-1549836067-1aba91c8d8b6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1934&q=80" /></a>
          </li>
          <li>
            <a href="#slide2"><img alt="property" src="https://cdn.rawgit.com/huijing/filerepo/gh-pages/lw2.jpg" /></a>
          </li>
          <li>
            <a href="#slide3"><img alt="property" src="https://cdn.rawgit.com/huijing/filerepo/gh-pages/lw3.jpg" /></a>
          </li>
          <li>
            <a href="#slide4"><img alt="property" src="https://cdn.rawgit.com/huijing/filerepo/gh-pages/lw4.jpg" /></a>
          </li>
          <li>
            <a href="#slide5"><img alt="property" src="https://cdn.rawgit.com/huijing/filerepo/gh-pages/lw5.jpg" /></a>
          </li>
        </ul>
      </div>
    );
  }
}
