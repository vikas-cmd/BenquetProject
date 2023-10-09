import React from 'react';
import './product.css'

const Product = ({ data }) => {
    return <>
        <div className='product'>
            <div className='img'>
                <img src={data.image} />

                <div className='comment'>
                    <div><img src='./Assest/Heart-Icon.png' alt=''></img></div>

                    <div> <img src='./Assest/Comment.png' alt=''></img></div>


                </div>
            </div>


            <div className='post'>
                <p className='name'>Posted by <span>{data.name}</span></p>
                <div className='post_info' >
                    <div className='line-height'>
                        <h2>Indian Banquet</h2>
                        <h3>{data.food}</h3>
                    </div>
                    <div className='text '>
                        <p>Spicy combination of beef,</p>
                        <p>beans and tomatto sauce</p>
                    </div>


                    <p className='button'>View Detail{'>>'}</p>

                </div>
            </div>

        </div>


    </>;

}

export default Product;




