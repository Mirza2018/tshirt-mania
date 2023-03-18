import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Cart from '../Cart/Cart';
import Tshirt from '../Tshirt/Tshirt';
import './Home.css'

const Home = () => {
    const tshirts = useLoaderData()
    const [cart, setCart] = useState([]);

    const handleAddToCart = tshirt => {
        const exixt = cart.find(fs => fs._id === tshirt._id)
        if (exixt) {
            alert('This item alrady exits')
            return;
        }
        let newCart = [...cart, tshirt]
        setCart(newCart)
    }

    const handleRemovedItem = (tshirt) => {
        console.log(tshirt);
        const exixt = cart.filter(fs => fs._id !== tshirt._id)
        setCart(exixt)



    }

    // console.log(cart);
    return (

        <div className="home-container">
            <div className="t-shirt-container">
                {
                    tshirts.map(tshirt => <Tshirt
                        tshirt={tshirt}
                        key={tshirt._id}
                        handleAddToCart={handleAddToCart}>

                    </Tshirt>)
                }
            </div>
            <div className="cart-container">
                <Cart cart={cart}
                    handleRemovedItem={handleRemovedItem}
                ></Cart>

            </div>

        </div>

    );
};

export default Home;