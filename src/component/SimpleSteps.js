import React from 'react';
import './simpleStep.css';

const SimpleSteps = () => {
    return <>
    <div className='simple_step-heading'>
        <h1>Simple Steps</h1>
    <div className='simple_steps'>
        <div className='img'><img src='./Assest/Find-Banquet-1.png'></img></div>
        <div className='step1'>
            <div className='icon' ><img src='./Assest/Find-Banquet-Icon.png'></img></div>
            <div className='desc'>
                <h1>Find Banquet</h1>
                <p>Discover custom for your home or batch formulas for <br/>
                       restaurants and commercial.</p>
            </div>
            <div className='line'></div>
        </div>
    </div>

{/*2nd step */}
<div className='simple_steps'>
        
        <div className='step1'>
            <div className='icon' ><img src='./Assest/Bookiing-Your-Space-icon.png'></img></div>
            <div className='desc'>
                <h1>Booking Your Space</h1>
                <p>Discover custom for your home or batch formulas for <br/>
                       restaurants and commercial.</p>
            </div>
            <div className='line2'></div>
        </div>
        <div className='img'><img src='./Assest/Booking-Your-Space-2.png'></img></div>
    </div>


           {/*3rd step */}


           <div className='simple_steps'>
        <div className='img'><img src='./Assest/Enjoy-Your-Moment-1.png'></img></div>
        <div className='step1'>
            <div className='icon' ><img src='./Assest/Enjoy-your-moments-icon.png'></img></div>
            <div className='desc'>
                <h1>Enjoy Your Moments</h1>
                <p>Discover custom for your home or batch formulas for <br/>
                       restaurants and commercial.</p>
            </div>
            <div className='line3'></div>
        </div>
    </div>

</div>
        
    </>;
}

export default SimpleSteps;