import React from 'react';
import Products from '../components/DisplayProducts/Products';
import Footer from '../components/Footer/Footer';
import Banner from '../components/Header/Banner';
import Review from '../components/Review/Review';


const HomeScreen = () => {
    return (
        <>
            {/* <Banner2></Banner2> */}
            <Banner />
            <Products />
            {/* <TopBike></TopBike> */}
            <Review excat path="/homeReview" />
            <Footer />
        </>
    )
}

export default HomeScreen
