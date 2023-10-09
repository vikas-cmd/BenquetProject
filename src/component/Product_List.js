import React from 'react';
import Product from './Product';
import'./product_list.css';

const Product_List = () => {
    const product_Data=[
        {
id:1,
image:'./Assest/Banquet-1.png' ,
name:'Catelyn stark',
food:'Light Meal'

        },
        {
            id:2,
            image:'./Assest/Banquet-2.png' ,
            name:'Magic Rhee',
            food:'Main Dish'
        },
        {
            id:3,
            image:'./Assest/Banquet-3.png' ,
            name:'Etep Suretep',
            food:'Exotic'
        },
        {
            id:4,
            image:'./Assest/Banquet-4.png' ,
            name:'Catelyn stark',
            food:'Light Meal'
        },
        {
            id:5,
            image:'./Assest/Banquet-5.png' ,
            name:'Magic Rhee',
            food:'Main Dish'
        },
        {
            id:6,
            image:'./Assest/Banquet-6.png' ,
            name:'Etep Suretep',
            food:'Exotic'
        }

    ]

    
    return <>
    <div className='products-heading'>
        <h1>Our Top Benquetes</h1>
        <h4>Make you function more impressive with Banquest Booking</h4>
        
        
    <div className='product_list'>
        
        {product_Data.map((item)=> <div className='product-item'><Product data={item} /></div>)}

        {/*<div><Product /></div>
        <div><Product/></div>
        <div><Product/></div>
        <div><Product/></div>
        <div><Product/></div>
<div><Product/></div>*/}
        
        
        
        </div>
        <button>Find Out More</button>
        <div className='border-line'></div>
        </div>
    </>;
}


export default Product_List;