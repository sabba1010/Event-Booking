import React from 'react';
import Banner from '../components/Banner';
import BestEvent from '../components/BestEvent';
import Events from '../pages/Events';




const HomeLayout = () => {
    return (
 <div>
    <section className='my-5  mx-auto text-center'>
    <BestEvent/>
    </section>
           <div>
        <Banner></Banner>
        <Events/>




        </div>
 </div>
    );
};

export default HomeLayout;