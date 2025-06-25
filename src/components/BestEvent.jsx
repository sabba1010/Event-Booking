import React from 'react';
import Marquee from 'react-fast-marquee';

const BestEvent = () => {
    return (
        <div className='flex items-center p-3 gap-5 bg-blue-300'>
           <p className='px-3 py-2 text-base-100 bg-red-500'>Services</p>
           <Marquee className='gap-6' pauseOnHover={true}>
           <p className='font-bold'>
           Event services offer complete planning and support for weddings, parties, and corporate programs — including venue, decor, catering, and entertainment.
           They ensure a smooth and memorable experience by handling all event essentials professionally.
           </p>
           </Marquee>
        </div>
    );
};

export default BestEvent;