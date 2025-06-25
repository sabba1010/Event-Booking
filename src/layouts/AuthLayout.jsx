import React from 'react';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import { Outlet } from 'react-router';

const AuthLayout = () => {
    return (
        <div>
           <Nav/>

        <main>
            <Outlet/>
        </main>


           <Footer/>
        </div>
    );
};

export default AuthLayout;