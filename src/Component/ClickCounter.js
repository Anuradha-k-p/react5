import React from 'react';
import HigherOrder from './HigherOrder';

const ClickCounter = ({count,increment}) => {
    return (
        <>
        <h1> THIS IS CLICK COUNTER</h1>
        <h1>{count}</h1>
        <button onClick={increment}>click</button>
        
        </>
    )
}


export default HigherOrder(ClickCounter);