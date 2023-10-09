import React from 'react';
import './offer.css';
const Offers = () => {
    return <>

        <div className='offers_heading'>
            <div ><h1>Offers for you</h1></div>
            <div className='line_bar'></div>
        </div>

        <div className='offer_boxes'>
            <div className='boxx bg-color2'>
                <div className='topp'>
                    <div className='img1'>
                        <img src='./Assest/offers-icon.png' alt=''></img>
                    </div>
                    <div className='name1'>
                        <h3>Paul Scholes</h3>
                        <p>15 Jan,2020</p>

                    </div>

                </div>
                <div className='line_bar2'></div>
                <div className='descri'>
                    <h3>Creative media helps million<br />bussinesses grow</h3>
                    <p>Lorem ipsum dolor sit amet,<br />consectetur adipisci elit sour.<br />Commodo amet posuere parta<br />ener shlpee up.</p>
                    <h4 className='button'>Read more</h4>
                </div>




            </div>

            {/* 2nd section */}




            <div className='boxx'>
                <div className='topp'>
                    <div className='img1'>
                        <img src='./Assest/offers-icon.png' alt=''></img>
                    </div>
                    <div className='name'>
                        <h3>Paul Scholes</h3>
                        <p>15 Jan,2020</p>

                    </div>

                </div>
                <div className='line_bar2'></div>
                <div className='descri'>
                    <h3>Creative media helps million<br />bussinesses grow</h3>
                    <p>Lorem ipsum dolor sit amet,<br />consectetur adipisci elit sour.<br />Commodo amet posuere parta<br />ener shlpee up.</p>
                    <h4 className='button'>Read more</h4>
                </div>


            </div>



            {/*3rd section */}


            <div className='boxx bg-color1'>
                <div className='topp'>
                    <div className='img1'>
                        <img src='./Assest/offers-icon.png' alt=''></img>
                    </div>
                    <div className='name'>
                        <h3>Paul Scholes</h3>
                        <p>15 Jan,2020</p>

                    </div>

                </div>
                <div className='line_bar2'></div>
                <div className='descri'>
                    <h3>Creative media helps million<br />bussinesses grow</h3>
                    <p>Lorem ipsum dolor sit amet,<br />consectetur adipisci elit sour.<br />Commodo amet posuere parta<br />ener shlpee up.</p>
                    <h4 className='button'>Read more</h4>
                </div>


            </div>

        </div>


    </>;
}


export default Offers;