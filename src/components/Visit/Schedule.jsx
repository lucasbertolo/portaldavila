import React from 'react';
import './Schedule.scss';

export default function Schedule({ data }) {
  return (
    <ul className="main">
      <li className="date">
        <h3>Dec 18</h3>
      </li>
      <li className="events">
        <ul className="events-detail">
          {data.map((x) => (
            <li>
              <span className="event-time">
                {x.time_register}
                {' '}
-
                {' '}
              </span>
              <span className="event-name">
Codigo -
                {' '}
                {x.property_id}
              </span>
              <br />
              <span className="event-location">Nova Piracicaba</span>
            </li>
          ))}
        </ul>
      </li>

      <li className="date">
        <h3>Dec 19</h3>
      </li>
      <li className="events cf">
        <ul className="events-detail">
          <li>
            <span className="event-time">2:00pm - </span>
            <span className="event-name">Kickoff Ceremony</span>
            <br />
            <span className="event-location">Headquarters</span>
          </li>

          <li>
            <span className="event-time">2:00pm - </span>
            <span className="event-name">Kickoff Ceremony</span>
            <br />
            <span className="event-location">Headquarters</span>
          </li>

          <li>
            <span className="event-time">2:00pm - </span>
            <span className="event-name">Kickoff Ceremony</span>
            <br />
            <span className="event-location">Headquarters</span>
          </li>

          <li>
            <span className="event-time">2:00pm - </span>
            <span className="event-name">Kickoff Ceremony</span>
            <br />
            <span className="event-location">Headquarters</span>
          </li>

          <li>
            <span className="event-time">2:00pm - </span>
            <span className="event-name">Kickoff Ceremony</span>
            <br />
            <span className="event-location">Headquarters</span>
          </li>
        </ul>
      </li>

      <li className="date">
        <h3>Dec 18</h3>
      </li>
      <li className="events">
        <ul className="events-detail">
          <li>
            <span className="event-time">2:00pm - </span>
            <span className="event-name">Kickoff Ceremony</span>
            <br />
            <span className="event-location">Headquarters</span>
          </li>

          <li>
            <span className="event-time">2:00pm - </span>
            <span className="event-name">Kickoff Ceremony</span>
            <br />
            <span className="event-location">Headquarters</span>
          </li>

          <li>
            <span className="event-time">2:00pm - </span>
            <span className="event-name">Kickoff Ceremony</span>
            <br />
            <span className="event-location">Headquarters</span>
          </li>

          <li>
            <span className="event-time">2:00pm - </span>
            <span className="event-name">Kickoff Ceremony</span>
            <br />
            <span className="event-location">Headquarters</span>
          </li>

          <li>
            <span className="event-time">2:00pm - </span>
            <span className="event-name">Kickoff Ceremony</span>
            <br />
            <span className="event-location">Headquarters</span>
          </li>
        </ul>
      </li>
    </ul>
  );
}
