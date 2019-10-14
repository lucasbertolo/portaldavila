/* eslint-disable camelcase */
/* eslint-disable jsx-a11y/control-has-associated-label */
import React from 'react';

import { db } from '../Helpers/ApiFetch';

export default class HouseDescription extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      neighborhoodList: [],
      typeList: [],
    };
  }

  async componentDidMount() {
    const resultBlock = await db.get('/neighborhood');
    const options = resultBlock.data.map((item) => item.name);

    const resultType = await db.get('/typeofproperty');
    const optionsType = resultType.data.map((item) => item.type);

    this.setState((prevState) => ({
      ...prevState,
      neighborhoodList: options,
      typeList: optionsType,
    }));
  }


  render() {
    const { typeList, neighborhoodList } = this.state;

    const { initialState } = this.props;
    const { type_id, neighborhood_id } = initialState.info;

    return (
      <div className="hs-wrapper">
        <h1>
          {typeList[type_id]}
              -
          {neighborhoodList[neighborhood_id]}
        </h1>
        <div className="general-info" />
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
              <a href="#slide1"><img alt="property" src="https://images.unsplash.com/photo-1549836067-1aba91c8d8b6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1934&q=80" /></a>
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

        <div className="box-wrapper">
          {/* <h2>R$2500,00</h2> */}
          <div className="box">
            <div className="text">
              <div>
                <span className="innertext">Text goes here</span>
              </div>
            </div>
          </div>

          <div className="box">
            <div className="text">
              <div>
                <span className="innertext">Features</span>
              </div>
            </div>
          </div>
        </div>
        <div className="info-box">
          <div className="map-container" />
          <div className="contact-container">
            <span>Documentação</span>
            <span>Contate-nos</span>
          </div>
        </div>


        <button type="button" className="visit-button">Agendar visita</button>
      </div>


    );
  }
}
