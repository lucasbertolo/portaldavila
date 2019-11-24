/* eslint-disable no-alert */
import React from 'react';
import Router from 'next/router';
import db from '../Helpers/ApiFetch';

import './DeleteButton.scss';

const DeleteButton = ({ propertyId, edit }) => {
  const handleDelete = () => {
    // eslint-disable-next-line no-restricted-globals
    const result = confirm('Want to delete?');

    if (result) {
      db.delete(`property/${propertyId}`)
        .then(() => Router.push('/property'))
        .catch();
    }
  };
  return (
    <>
      <div className="manager-delete-container">
        <button
          onClick={handleDelete}
          type="button"
          className="button-delete button--delete"
          disabled={!edit}
        >
          <span role="img" aria-label="save-img">
            🗑️
          </span>
          Deletar
        </button>
      </div>
    </>
  );
};

export default DeleteButton;
