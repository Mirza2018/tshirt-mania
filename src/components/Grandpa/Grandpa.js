import React, { createContext, useState } from 'react';
import Anty from '../Anty/Anty';
import Father from '../Father/Father';
import Uncle from '../Uncle/Uncle';
import './Grandpa.css'
export const ringContext = createContext()
export const myHouse=createContext()

const Grandpa = () => {
    const [house,setHouse] = useState(3);
    return (
        <myHouse.Provider value={[house,setHouse]}>
            <ringContext.Provider value='300'>
            <div className='grandpa'>
                <h1>Grandpa</h1>
                <section className='flex'>
                    <Father house={house}></Father>
                    <Uncle house={house}></Uncle>
                    <Anty house={house}> </Anty>
                </section>
            </div>
        </ringContext.Provider>
        </myHouse.Provider>
        

    );
};

export default Grandpa;