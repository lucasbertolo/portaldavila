import React from 'react';
import GuestVisitCard from './GuestVisitCard';
import Legend from './Legend';
import './GuestView.scss';

const GuestView = ({ data }) => {
  const entries = data.sort(
    (a, b) => new Date(a.date_register) - new Date(b.date_register),
  );

  return (
    <div className="wrapper-vst-guest">
      {entries.length > 0 && (
        entries.map((x, i) => (
        // eslint-disable-next-line react/no-array-index-key
          <div key={i}>
            <GuestVisitCard
              url={x.url}
              code={x.property_id}
              date={x.date_register}
              time={x.time_register}
              contact={x.contact_type}
              status={x.status}
            />
          </div>
        ))
      )}

      <Legend classes="visit-legend" />
    </div>
  );
};

export default GuestView;
