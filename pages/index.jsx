import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';

class Index extends React.PureComponent {
  render() {
    return (
      <div className="idx">
        <img
          src="https://images.unsplash.com/photo-1546292993-2b8f80c7f35b?ixlib=rb-1.2.1&auto=format&fit=crop&w=668&q=80"
          alt=""
          className="idx-image"
        />
        <div className="idx-text">
          <span className="idx-logo" />
          Remax/Portal

          <div className="arr-down">
            <FontAwesomeIcon icon={faAngleDown} />
          </div>
        </div>
      </div>
    );
  }
}

export default Index;
