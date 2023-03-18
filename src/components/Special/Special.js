import React, { useContext } from 'react';
import { myHouse, ringContext } from '../Grandpa/Grandpa';


const Special = () => {
    const ring = useContext(ringContext)
    const [house, setHouse] = useContext(myHouse)
    return (
        <div>
            <h4>Specail</h4>
            gift: {ring}
            <p>House {house}</p>
            <button onClick={()=>setHouse(house + 1)}>Increase</button>
        </div>
    );
};

export default Special;