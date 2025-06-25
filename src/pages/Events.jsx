import React, { useEffect, useState } from 'react';
import Event from './Event';

const Events = () => {
  const [allevents, setAllEvents] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/eventdata.json")
      .then(res => res.json())
      .then(data => {
        setAllEvents(data);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <span className="loading loading-dots loading-xl"></span>;
  }

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Upcoming Events</h1>
      <Event events={allevents} />
    </div>
  );
};

export default Events;
