import React, { useContext, useState } from 'react';
import { myHouse } from '../Grandpa/Grandpa';

const Cousin = () => {
   
    const [house, setHouse] = useContext(myHouse)

    return (
        <div>
            <h4>Cousin</h4>
            <h3>House :{house}</h3>
            
            <button onClick={() => setHouse(house - 1)}>
                Drease
            </button>

        </div>
    );
};

export default Cousin;