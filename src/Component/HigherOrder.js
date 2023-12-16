import React, { useState } from 'react';

const HigherOrder = (OriginalCompo) => {
    const NewCompo = ()=>{


    const[count,setcount]=useState(0)
    


    const increment =()=>{
        setcount(count+1)
    }

    return <OriginalCompo count={count} increment={increment}/>
}
return NewCompo;

}




export default HigherOrder;