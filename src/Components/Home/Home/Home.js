import React from 'react';
import Blogs from '../Blogs/Blogs';
import Feature from '../Feature/Feature';
import Header from '../Header/Header';


const Home = () => {
    return (
        <div>
            <Header></Header>
            <Blogs></Blogs>
            <Feature></Feature>
        </div>
    );
};

export default Home;