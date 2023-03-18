import React from 'react'
import Special from '../Special/Special';


const Myself = ({house}) => {
    return (
        <div>
            <h4>Myself</h4>
            <h1>{house}</h1>
            <section>
                <Special></Special>
            </section>
        </div>
    );
};

export default Myself;