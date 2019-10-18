import React from 'react';

const ManagerButtons = ({
  previous, buttonsState, next, onSubmit,
}) => (
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
      onClick={onSubmit}
      type="button"
    >
            Salvar
    </button>
  </div>
);

export default ManagerButtons;
