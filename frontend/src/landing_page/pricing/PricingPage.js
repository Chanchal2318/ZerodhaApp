import React from 'react';
import Navbar from '../Navbar';
import Brojkerage from './Brojkerage';
import Hero from './Hero';
import Footer from '../Footer';

import OpenAccount from '../OpenAccount';

function PricingPage() {
    return ( 
        <>
        <Navbar/>
        <Hero/>
        <OpenAccount/>
        <Brojkerage/>
        <Footer/>
        </>
    );
}

export default PricingPage;