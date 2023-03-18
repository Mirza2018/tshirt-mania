import React from 'react';
import './Tshirt.css'

const Tshirt = ({ tshirt, handleAddToCart }) => {

    const { id,name, picture, price } = tshirt;
    // console.log(tshirt);
    return (
        <div className='t-shirt'>
            <img hight={150} width={150} src={picture} alt="" />
            <h2>{name}</h2>
            <h4>Price: ${price}</h4>
            <button onClick={()=>handleAddToCart(tshirt)}>Add To Cart</button>
        </div>
    );
};

export default Tshirt;