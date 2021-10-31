import React from 'react';
import AboutUs from '../components/About/AboutUs';
import Places from '../components/Places View/Places';
import Footer from '../components/Footer/Footer';
import Banner from '../components/Header/Banner';
import Subscribe from '../components/Subscribe/Subscribe';

const HomeScreen = () => {
    return (
        <>
            <Banner />
            <Places />
            <AboutUs />
            <Subscribe />
            <Footer />
        </>
    )
}

export default HomeScreen
