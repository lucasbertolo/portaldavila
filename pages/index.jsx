import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';

class Index extends React.PureComponent {
  render() {
    return (
      <div className="idx">

        <div className="idx-logo-container">
          <span className="idx-logo" />
        </div>
        <h1>Remax/Portal</h1>


        <div className="arr-down">
          <FontAwesomeIcon icon={faAngleDown} />
        </div>
      </div>
    );
  }
}

export default Index;
