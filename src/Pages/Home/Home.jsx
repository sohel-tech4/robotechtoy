import React from 'react';
import Banner from './Banner/Banner';
import Gallery from './Gallery/Gallery';
import Categories from './Categories/Categories';
import CountDown from './CountDown/CountDown';
import FAQ from './FAQ/FAQ';
import Comment from './Comment/Comment';
import OtherBenifit from './OtherBenifit/OtherBenifit';

const Home = () => {
    return (

        < div >
            <Banner></Banner>
            <Gallery></Gallery>
            <Categories></Categories>
            <OtherBenifit></OtherBenifit>
            <FAQ></FAQ>
            <CountDown></CountDown>
            <Comment></Comment>
        </div >
    );
};

export default Home;