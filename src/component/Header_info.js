import React from 'react';
import './header_info.css'

const Header_info = () => {
    return <div className='header'>
        <div className='logo'><img src='./Assest/BanquetBooking-Logo.png'></img></div>
        <div className='header_info'>
            <div className='header_info-icon'><img src='./Assest/Phone.png' alt=''></img></div>
            <div className='contact'>
                <p className='phone_N heading'>Call US:(+84)123 456789</p>
                <p className='email'>E-mail:support@Banquetbooking.com</p>
            </div>
            <div className='header_info-icon'><img src='./Assest/Working-Hours.png' alt=''></img></div>
            <div className='working_hours'>
                <p className='heading'>Working Hours:</p>
                <p >Mon-sun(8.00am-12.00am)</p>
            </div>




        </div>




    </div>;
}


export default Header_info;