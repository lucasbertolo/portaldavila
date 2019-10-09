/* eslint-disable react/destructuring-assignment */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */

import React, { useState } from 'react';

const getNavStyles = (indx, length) => {
  const styles = [];
  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < length; i++) {
    if (i < indx) {
      styles.push('done');
    } else if (i === indx) {
      styles.push('doing');
    } else {
      styles.push('todo');
    }
  }
  return styles;
};

const getButtonsState = (indx, length) => {
  if (indx > 0 && indx < length - 1) {
    return {
      showPreviousBtn: true,
      showNextBtn: true,
    };
  } if (indx === 0) {
    return {
      showPreviousBtn: false,
      showNextBtn: true,
    };
  }
  return {
    showPreviousBtn: true,
    showNextBtn: false,
  };
};

export default function MultiStep(props) {
  const [stylesState, setStyles] = useState(getNavStyles(0, props.steps.length));
  const [compState, setComp] = useState(0);
  const [buttonsState, setButtons] = useState(getButtonsState(0, props.steps.length));

  function setStepState(indx) {
    setStyles(getNavStyles(indx, props.steps.length));
    setComp(indx < props.steps.length ? indx : compState);
    setButtons(getButtonsState(indx, props.steps.length));
  }

  const next = () => setStepState(compState + 1);

  const previous = () => setStepState((compState > 0) ? compState - 1 : compState);

  const handleKeyDown = (evt) => (evt.which === 13 ? next(props.steps.length) : {});

  const handleOnClick = (evt) => {
    // eslint-disable-next-line max-len

    if (evt.currentTarget.value === props.steps.length - 1
      && compState === props.steps.length - 1) {
      setStepState(props.steps.length);
    } else {
      setStepState(evt.currentTarget.value);
    }
  };

  const renderSteps = () => props.steps.map((s, i) => (
    // eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions
    <li
      className={`progtrckr-${stylesState[i]}`}
      onClick={handleOnClick}
      // eslint-disable-next-line react/no-array-index-key
      key={i}
      value={i}
    >
      <em>{i + 1}</em>
      <span>{props.steps[i].name}</span>
    </li>
  ));

  return (
    <div className="container" onKeyDown={handleKeyDown}>
      <ol className="progtrckr">
        {renderSteps()}
      </ol>
      {props.steps[compState].component}
      <div className="prog-button">
        <button
          style={buttonsState.showPreviousBtn ? {} : { display: 'none' }}
          onClick={previous}
          type="button"
        >
            Anterior
        </button>

        <button
          style={buttonsState.showNextBtn ? {} : { display: 'none' }}
          onClick={next}
          type="button"
        >
            Seguinte
        </button>
      </div>
    </div>
  );
}

MultiStep.defaultProps = {
  showNavigation: true,
};
