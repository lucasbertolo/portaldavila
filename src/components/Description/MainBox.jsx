import React from 'react';
import Box from '../Common/Box';
import { GarageIcon, BedIcon, BathIcon } from '../Common/Icons';


const MainBox = ({ features }) => (
  <div className="box-wrapper">
    {/* {features.description ? ( */}
    <div className="box-description sm-shadow">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industrys standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. It was popularised in the 1960s with the release
        of Letraset sheets containing Lorem Ipsum passages, and more recently
        with desktop publishing software like Aldus PageMaker including versions
        of Lorem Ipsum.
    </div>
    {/* ) : null} */}
    <div className="box-details">
      <div className="box-column">
        <span className="box-details-icons">
          <GarageIcon />
          <p className="icon-info" />
        </span>

        <span className="box-details-icons">
          <GarageIcon />
          <p className="icon-info" />
        </span>

        <span className="box-details-icons">
          <GarageIcon />
          <p className="icon-info">Dormitorios - 4</p>
        </span>

        <span className="box-details-icons">
          <GarageIcon />
          <p className="icon-info" />
        </span>
      </div>
      <div className="box-column">
        <span className="box-details-icons">
          <GarageIcon />
          <p className="icon-info" />
        </span>

        <span className="box-details-icons">
          <GarageIcon />
          <p className="icon-info" />
        </span>

        <span className="box-details-icons">
          <GarageIcon />
          <p className="icon-info">Dormitorios - 4</p>
        </span>

        <span className="box-details-icons">
          <GarageIcon />
          <p className="icon-info" />
        </span>
      </div>

      <Box text="Extras" />

    </div>
  </div>
);

export default MainBox;
