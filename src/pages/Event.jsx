import React from 'react';
import { Link } from 'react-router';

const Event = ({ events }) => {
 
 
    return (
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mx-auto">
      {events.map((event) => (

<div key={event.id} className="card bg-base-100 w-96 shadow-sm">
  <figure>
    <img
      src={event.thumbnail}
      alt="Event" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">{event.name}</h2>
    <p>{event.description}</p>
   <div className='flex gap-2'>
   <p><span className='font-semibold'>Event Date:</span>  {event.date}</p>
   <p><span className='font-semibold'>Event Category :</span>  {event.category}</p>
   </div>
    <p><span className='font-semibold'>Event Location:  </span> {event.location}</p>
    <p><span className='font-semibold'>Entry Fee:  </span> <span className='text-red-500'>{event.entry_fee}</span></p>
    <div className="card-actions justify-end">
      <Link className='btn btn-dash  btn-accent text-black' to={`/eventDetails/${event.id}`}>View More</Link>
    </div>
  </div>
</div>

     
      ))}
    </div>
  );
};

export default Event;
