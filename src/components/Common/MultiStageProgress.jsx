/* eslint-disable react/destructuring-assignment */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */

import React from 'react';

export default function MultiStep({
  handleKeyDown, renderSteps, steps, compState,
}) {
  return (
    <>
      <div className="container" onKeyDown={handleKeyDown}>
        <ol className="progtrckr">
          {renderSteps()}
        </ol>
        {steps[compState].component}

      </div>
    </>
  );
}
