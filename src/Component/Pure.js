import React from 'react';

class Pure extends React.Component {
constructor() {
    super();

    this.state = {
        count:0
    };
}

    render() {
        return(
            <>
            <h1>THIS IS PURE COMPONENT</h1>
           <h1> {this.state.count}</h1>
            <button onClick={()=>this.setState({count:this.state.count+1})}>click</button>
            
            </>
        )
    }
}



export default Pure;