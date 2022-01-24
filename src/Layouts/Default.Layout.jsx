import React from 'react';


//Components
import HeroCarousel from '../components/HeroCarousel/HeroCarousel.Component';
import Navbar from '../components/navbar/Navbar.Component';

const DefaultLayout = (props) => {
    return (
        <>
            <Navbar />
            <HeroCarousel />
            {props.children}
            
        </>
    );
};

export default DefaultLayout;

