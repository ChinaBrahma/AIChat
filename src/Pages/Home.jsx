import React from 'react';
import Header from './Header';
import Search from '../components/Search';
import Output from '../components/Output';

const Home = () => {
    return (
        <div>
            <Header />
            <Output />
            <Search />
        </div>
    );
};

export default Home;