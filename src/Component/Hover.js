import React from 'react';
import HigherOrder from './HigherOrder';

const Hovercp = ({count,increment}) => {
    return (
        <>
        <h1>THIS IS HOVER COMPONENT</h1>
        <h1>{count}</h1>
        <button onMouseOver={increment}>click</button>
        
        </>
    )
}


export default HigherOrder(Hovercp);