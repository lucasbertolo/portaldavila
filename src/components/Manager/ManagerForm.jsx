/* eslint-disable react/destructuring-assignment */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */

import React, { useState } from 'react';
import MultiStageProgress from '../Common/MultiStageProgress';

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
      showSaveBtn: false,
      showPreviousBtn: true,
      showNextBtn: true,
    };
  } if (indx === 0) {
    return {
      showSaveBtn: false,
      showPreviousBtn: false,
      showNextBtn: true,
    };
  }
  if (indx === length - 1) {
    return {
      showPreviousBtn: true,
      showSaveBtn: true,
    };
  }
  return {
    showSaveBtn: false,
    showPreviousBtn: true,
    showNextBtn: false,
  };
};

export default function ManagerForm(props) {
  const [stylesState, setStyles] = useState(getNavStyles(0, props.steps.length));
  const [compState, setComp] = useState(0);
  const [buttonsState, setButtons] = useState(getButtonsState(0, props.steps.length));


  function setStepState(indx) {
    setStyles(getNavStyles(indx, props.steps.length));
    setComp(indx < props.steps.length ? indx : compState);
    setButtons(getButtonsState(indx, props.steps.length));
  }


  const next = () => {
    if (props.isValid) { setStepState(compState + 1); } else console.log('teste2');
  };

  const previous = () => setStepState((compState > 0) ? compState - 1 : compState);

  const handleKeyDown = (evt) => (evt.which === 13 ? next(props.steps.length) : {});

  const handleOnClick = (evt) => {
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
    <div>
      <div className="container" onKeyDown={handleKeyDown}>
        <MultiStageProgress
          handleKeyDown={handleKeyDown}
          steps={props.steps}
          renderSteps={renderSteps}
          compState={compState}
        />
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
          <button
            style={buttonsState.showSaveBtn ? {} : { display: 'none' }}
            onClick={props.onSubmit}
            type="button"
          >
            Salvar
          </button>
        </div>
      </div>
    </div>
  );
}

ManagerForm.defaultProps = {
  showNavigation: true,
};
