import React from 'react';
import Header from './Header';
import Search from '../components/Search';
import Output from '../components/Output';

const Home = () => {
    return (
        <>
            <Header />
            <Output />
            <Search />
        </>
    );
};

export default Home;