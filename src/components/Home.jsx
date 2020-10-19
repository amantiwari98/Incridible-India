import React from 'react';
import './Navbar.css';
import HomeCarousel1 from './Home_Carousel1';
import HomeCarousel2 from './Home_Carousel2';
import Places from './Places';
import Places2 from './Places2';
import Card3 from './Card3';
import Blog from './Blog';
import Social from './Socialfeed';
import Sponser from './Sponsers';
import Footer from './Footer';


const Home = () => {
    return (
        <>
            <HomeCarousel1 />
            <HomeCarousel2 />
            <Places />
            <Places2 />
            <Card3 />
            <Blog />
            <Social />
            <Sponser />
            <Footer />
        </>
    );
};

export default Home;