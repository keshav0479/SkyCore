import React from 'react';
import Navbar from '../components/navbar';
import Hero from '../components/hero';
import Cards from '../components/cards';
import CardFolder from '../components/cardfolder';
// import Approach from '../components/approach';

const Homepage = () => {
    return (
        <div className='/'>
            <Navbar />
            <Hero />
            {/* <Hero /> */}
            <Cards />
            <CardFolder />
            {/* <Approach /> */}
        </div>
    );
};

export default Homepage;
