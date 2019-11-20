import React from 'react';
import './GuestView.scss';
import GuestVisitCard from './GuestVisitCard';

const GuestView = ({ data }) => (
  <div className="wrapper-vst-guest">
    {data.length > 0 && (
      data.map((x, i) => (
        // eslint-disable-next-line react/no-array-index-key
        <div key={i}>
          <GuestVisitCard
            url={x.url}
            code={x.code}
            date={x.date_register}
            time={x.time_register}
            contact={x.contact_type}
          />
        </div>
      ))
    )}
  </div>
);

export default GuestView;
