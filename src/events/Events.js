import React from 'react';
import './Events.scss';

const Events = events => (
  <div className="Events">
    {events.map(({ date, title, description }) =>
      <li>{date}-{title}-{description}</li>
    )}
    </div>
);


export default Events;