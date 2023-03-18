import React from 'react';
import Cousin from '../Cousin/Cousin';

const Anty = ({ house }) => {
    return (
        <div>
            <h1>Anty</h1>
            <h1>{house}</h1>

            <section className='flex'>
                <Cousin house={house}></Cousin>
                <Cousin  house={house}></Cousin>
            </section>
        </div>
    );
};

export default Anty;