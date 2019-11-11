import React from 'react';
import './DescriptionBox.scss';

const DescriptionBox = ({ description }) => (
  <>
    {description ? (
      <div className="box-description sm-shadow">
        {description}
      </div>
    ) : null}
  </>
);

export default DescriptionBox;
