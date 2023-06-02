import  { Component } from 'react'


type CounterProps ={
    message:string
}
type CounterState ={
    count :number
}

export default class Counter extends Component <CounterProps,CounterState> {

    state = {
        count :0
    }
    handleClick =()=>{
        this.setState(prevState=>({count :prevState.count +1}))
    }
  render() {
    return (
      <div>
       <button onClick={this.handleClick}> CounterButton</button>
       <p>{this.state.count}<br/> {this.props.message}</p>
      </div>
    )
  }
}
