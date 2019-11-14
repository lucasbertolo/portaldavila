import React from 'react';
import './Schedule.scss';

export default function Schedule({ data }) {
  const entries = data.sort(
    (a, b) => new Date(a.date_register) - new Date(b.date_register),
  );

  function filterUniqueDates(array) {
    const lookup = new Set();

    return array.filter((item) => {
      const serialised = new Date(item.date_register).getDate();
      if (lookup.has(serialised)) {
        return false;
      }
      lookup.add(serialised);
      return true;
    });
  }

  const filteredDates = filterUniqueDates(data);

  return (
    <ul className="main">
      <h3 className="lbl-title">Agendamento de Visitas</h3>
      {filteredDates.map((x) => {
        const date = new Date(x.date_register);
        const month = date.toLocaleString('br', { month: 'short' });
        const day = date.getDate();
        return (
          <>
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
                  .map((el) => (
                    <li>
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
                        <span className="lbl-property">Código Imóvel - </span>
                        {' '}
                        {el.property_id}
                      </span>
                    </li>
                  ))}
              </ul>
            </li>
          </>
        );
      })}
    </ul>
  );
}
