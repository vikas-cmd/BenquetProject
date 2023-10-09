import React from 'react';
import './Home.css';
import HeaderTop from './HeaderTop';
import Header_info from './Header_info';
import NavBar from './NavBar';
import Slider from './Slider';

import Product_List from './Product_List';
import SimpleSteps from './SimpleSteps';
import UserCity from './UserCity';
import Offers from './Offers';
import ContactUs from './ContactUs';
import Footer from './Footer';

const Home = () => {
    return <>
<div className='home'>
        <HeaderTop />
        <Header_info />
        <NavBar />
        <Slider/>
        <Product_List/>
        <SimpleSteps/>
        <UserCity/>
        <Offers/>
        <ContactUs/>
        <Footer/>
        
    

    </div>
    </>;
}


export default Home;