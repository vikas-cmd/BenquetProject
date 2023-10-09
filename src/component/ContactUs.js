import React from 'react';
import './contact_us.css'

const ContactUs = () => {
    return <>
        <div className='contact_us'>
            <div className='part-1'>
                <div className='col-1'>
                    <div className='row-1'>
                        <img src='./Assest/BanquetBooking-Logo.png' alt=''></img>
                    </div>
                    <p>BankquetBooking is committed towords building<br />an arganization centred on the highest <br />standards of transparency and corporate</p>
                    <div className='row-3'>
                        <img src='./Assest/Download.png' alt=''></img>
                    </div>
                </div>
            </div>
            <div className='part-2'>
                <div className='part-2-2'>
                    <div className='verticle-line'></div>
                    <div className='col-2'>

                        <div className="heading">USEFULL LINKS</div>
                        <p>About US</p>
                        <p>Team/Career</p>
                        <p>News Blog</p>
                        <p>Support</p>
                        <p>Frames</p>
                        <p>Circle</p>
                        <p>Press Kit</p>
                    </div>
                </div>
                <div className='part-2-2'>
                    <div className='verticle-line'></div>
                    <div className='col-3'>
                        <p>Terms & Conditions</p>
                        <p>Privacy Policy</p>
                        <p>Quest Policy</p>
                        <p>Responsible Disclosure</p>
                    </div>
                </div>
                <div className='part-2-2'>
                    <div className='verticle-line'></div>
                    <div className='col-4'>
                        <div className='heading'>NEWS LETTER</div>
                        <p>Subscribe to Our Newsletter</p>
                        <div className='forms'>
                            <input placeholder='Name' /><br />
                            <input placeholder='Email' /><br />
                            <button>Submit</button>
                        </div>
                    </div>
                </div>
            </div>
        </div >


    </>;
}


export default ContactUs;