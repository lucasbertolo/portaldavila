import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';

import db from '../Helpers/ApiFetch';
import Router from 'next/router';

const DeleteButton = ({ propertyId }) => {
  const handleDelete = () => {
    db.delete(`property/${propertyId}`)
    .then(() => Router.push('/property'))
    .catch()
  };
  return (
    <>
      <span className="manager-delete-container">
        <i className="fa" onClick={handleDelete} role="presentation">
          <FontAwesomeIcon icon={faTrashAlt} />
        </i>
      </span>
    </>
  );
};


export default DeleteButton;
