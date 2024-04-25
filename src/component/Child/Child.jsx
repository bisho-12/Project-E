import React,{Component} from "react";
export default class Child extends Component
{
 state = {
  count:0
}


changecount =()=>{
    this.setState({count:Math.random()})
}
render(){
return <>
<button onClick={this.changecount} className="btn btn-info">changeCount</button>
    <h2>{this.state.count}</h2>
</>
}
}