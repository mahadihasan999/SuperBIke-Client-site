import React from 'react';
import AboutUs from '../components/About/AboutUs';
import Products from '../components/DisplayProducts/Products';
import Footer from '../components/Footer/Footer';
import Banner from '../components/Header/Banner';
import Subscribe from '../components/Subscribe/Subscribe';
import Review from '../components/Review/Review';

const HomeScreen = () => {
    return (
        <>
            <Banner />
            <Products />
            <AboutUs />
            <Review excat path="/homeReview" />
            <Subscribe />
            <Footer />
        </>
    )
}

export default HomeScreen
