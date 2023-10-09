import React from 'react';
import './navBar.css';
import { IoMdMenu } from 'react-icons/io';

const NavBar = () => {
  return <div className='nav_bar'>
    <div className='menu_bar'>
      <IoMdMenu/>

    </div>
    <div className='tabs'>
      <p>
        <select className='toggle' name="cars" id="cars">
          <option value="volvo">Banglor</option></select></p>

      <p>
        <select className='toggle' name="cars" id="cars">
          <option value="volvo">Chennai</option></select></p>
      <p>
        <select className='toggle' name="cars" id="cars">
          <option value="volvo">Delhi</option></select></p>
      <p>
        <select className='toggle' name="cars" id="cars">
          <option value="volvo">Gurgaon</option></select></p>
      <p>
        <select className='toggle' name="cars" id="cars">
          <option value="volvo">Hyderabad</option></select></p>
      <p>
        <select className='toggle' name="cars" id="cars">
          <option value="volvo">Kolkata</option></select></p>
      <p>
        <select className='toggle' name="cars" id="cars">
          <option value="volvo">Mumbai</option></select></p>
      <p>
        <select className='toggle' name="cars" id="cars">
          <option value="volvo">Noida</option></select></p>
    </div>
    <div className='nav_search'>

      <input placeholder='search cities'></input><span><img src='./Assest/Main-Search-Icon.png' alt=''></img></span>
    </div>
    


  </div>;
}


export default NavBar;