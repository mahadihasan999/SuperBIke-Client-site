import React from 'react';
import AboutUs from '../components/About/AboutUs';
import Places from '../components/Places View/Places';
import Footer from '../components/Footer/Footer';
import Banner from '../components/Header/Banner';

const HomeScreen = () => {
    return (
        <>
            <Banner />
            <Places />
            <AboutUs />
            <Footer />
        </>
    )
}

export default HomeScreen
