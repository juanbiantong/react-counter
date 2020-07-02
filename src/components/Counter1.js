import React, { Component } from 'react'

class Counter1 extends Component {
    constructor(props){
        super(props);
        this.state={count:0}
    }
    addition = () => {
        this.setState ({
            count: this.state.count +1
        })
    }

    subtraction = () => {
        if(this.state.count === 0){
            this.setState({count:0})
        }else{
            this.setState ({
                count :this.state.count -1
            })
        }
    }

    reset = () => {
        this.setState({
            count: 0
        })
    }
    

    render(){
        const {count} = this.state
        return(
            <div>
                <h1>Count:{count}</h1>
                <button onClick ={this.addition}>+</button>
                <button onClick ={this.subtraction}>-</button>
                <button onClick ={this.reset}>Reset</button>
            </div>
        )
    }
}

export default Counter1;