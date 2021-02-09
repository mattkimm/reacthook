import React, { Component } from 'react';

class ClassCounterOne extends Component{

    constructor(props){
        super(props)
        this.state = {
            count : 0,
            name : '',
        }
    }
    componentDidMount(){
        document.title = `Clicked ${this.state.count} times`
    }
    componentDidUpdate(prevProps, prevState){
        if(prevState.count !== this.state.count){
            console.log('Updating Document title..');
            document.title = `Clicked ${this.state.count} times`;
        }
    }

    render(){
        return (
            <div>
                <input type="text"
                       onChange = {e=> this.setState({name : e.target.value})} 
                       value ={this.state.name}/>
                <button onClick = {()=> this.setState({count : this.state.count + 1})}>
                    Click {this.state.count} times
                </button>
            </div>
        )
    }
}

export default ClassCounterOne;