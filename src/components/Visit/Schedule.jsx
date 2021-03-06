import React, { useState } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faTimes } from '@fortawesome/free-solid-svg-icons';
import InfoDialog from './InfoDialog';

import db from '../Helpers/ApiFetch';

import './Schedule.scss';
import Legend from './Legend';

export default function Schedule({ data }) {
  const entries = data.sort(
    (a, b) => new Date(a.date_register) - new Date(b.date_register),
  );

  function filterUniqueDates(array) {
    const lookup = new Set();

    return array.filter((item) => {
      const date = new Date(item.date_register).getDate();

      // Checking if data is higher than today
      const today = new Date();
      const checkDate = new Date(item.date_register);

      const serialised = date;
      if (lookup.has(serialised)) {
        return false;
      }

      if (checkDate > today) {
        lookup.add(serialised);
        return true;
      }

      return null;
      // lookup.add(serialised);
      // return true;
    });
  }

  const filteredDates = filterUniqueDates(data);

  const [user, setUser] = useState({});
  const [open, setOpen] = useState(false);
  const [target, setTarget] = useState(0);
  const [status, setStatus] = useState(true);

  const openConfirmation = (e) => {
    const getInfo = data.filter((x) => x.visit_id === Number(e.target.id));

    setStatus(true);
    setUser(getInfo[0]);
    setTarget(Number(e.target.id));
    setOpen(true);
  };

  const openNegative = (e) => {
    const getInfo = data.filter((x) => x.visit_id === Number(e.target.id));
    setStatus(false);
    setUser(getInfo[0]);
    setTarget(Number(e.target.id));
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleConfirm = () => {
    const item = document.querySelector(`#line${target}`);
    db.put('/visit', {
      visit_id: target,
      consultor_id: user.id,
      status: true,
    })
      .then(() => {
        setOpen(false);
        item.classList.add('confirm');
      })
      .catch();
  };

  const handleDenying = () => {
    const item = document.querySelector(`#line${target}`);
    db.put('/visit', {
      visit_id: target,
      status: false,
    })
      .then(() => {
        setOpen(false);
        item.classList.add('denied');
      })
      .catch();
  };

  return (
    <div className="schedule-container">
      <ul className="main">
        <h3 className="lbl-title">Controle de Visitas</h3>
        {filteredDates.map((x) => {
          const date = new Date(x.date_register);
          const month = date.toLocaleString('pt-BR', { month: 'short' });
          const day = date.getDate();
          return (
            <div key={x.date_register}>
              <li className="date">
                <h3>
                  {month}
                  {' '}
                  {day}
                </h3>
              </li>
              <li className="events">
                <ul className="events-detail">
                  {entries
                    .filter((item) => {
                      const itemDate = new Date(item.date_register);
                      return itemDate.getDate() === day;
                    })
                    .sort((a, b) => a.time_register.localeCompare(b.time_register))
                    .map((el) => {
                      const bkClasses = el.status
                        ? 'event-box confirm'
                        : 'event-box denied';
                      return (
                        <li
                          id={`line${el.visit_id}`}
                          key={el.date_register}
                          className={
                            el.status !== null ? bkClasses : 'event-box'
                          }
                        >
                          <div className="event-info">
                            <span className="event-time">
                              {el.time_register}
                              {' '}
                          -
                              {' '}
                            </span>
                            <span className="event-name">
                              <span className="lbl-name">
                                Nome do Solicitante -
                              </span>
                              {' '}
                              {el.username}
                            </span>
                            <br />
                            <span className="event-location">
                              <span className="lbl-property">
                                Código Imóvel -
                                {' '}
                              </span>
                              {' '}
                              {el.property_id}
                            </span>
                          </div>
                          {el.status === null && (
                            <div className="confirmation-box">
                              <div className="visit-icon">
                                <span
                                  name="deny"
                                  id={el.visit_id}
                                  className="hvr-icn"
                                  onClick={openNegative}
                                  role="presentation"
                                />
                                <i className="times">
                                  <FontAwesomeIcon icon={faTimes} />
                                </i>
                              </div>
                              <div className="visit-icon">
                                <div
                                  name="confirm"
                                  id={el.visit_id}
                                  className="hvr-icn"
                                  onClick={openConfirmation}
                                  role="presentation"
                                />
                                <i className="check">
                                  <FontAwesomeIcon icon={faCheck} />
                                </i>
                              </div>
                            </div>
                          )}
                        </li>
                      );
                    })}
                </ul>
              </li>
            </div>
          );
        })}
      </ul>
      <InfoDialog
        open={open}
        handleClose={handleClose}
        action={status ? handleConfirm : handleDenying}
        user={user}
        status={status}
      />
      <Legend classes="visit-legend" />
    </div>
  );
}
