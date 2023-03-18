import React from 'react';
import Tshirt from '../Tshirt/Tshirt';
import './Cart.css'

const Cart = ({ cart, handleRemovedItem }) => {
    // let massage;
    //     if (cart.length === 0) {
    //         massage = <p>Please select one item</p>
    //     }
    //     else if(cart.length === 1){
    //         massage = <p>Buy one more</p>
    //     }
    //   else {
    //     massage = <p>Thanks for buying</p>
    // }
    // 22222
    let massage;
    massage = cart.length === 0 ? <p>Please buy</p> : <p>Thanks for buying</p>

    let massage2;
    massage2 = cart.length === 2 && <h1>Ami tinta nite bolci</h1>

    let massage3;
    massage3 = cart.length === 3 || <h1>Sudhu tinta naw</h1>

    return (
        <div>
            <h1 className={cart.length===2? 'red':'blue' } >Order Summary </h1>
            <h5 className={`bolt ${cart.length===3? 'green':'yellow'}`}>Order Quantity : {cart.length}</h5>
            {
                cart.map(tshirt => <p key={tshirt._id}>
                    {tshirt.name}
                    <button onClick={() => handleRemovedItem(tshirt)}>X</button>
                </p>)
            }
            {/* {massage} */}
            {massage}
            {massage2}
            {massage3}
        </div>
    );
};

export default Cart; <h1>Order Summary</h1>