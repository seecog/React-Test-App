import React,{Component} from 'react';

class Add extends Component{

constructor(){
    super();
    this.state = {
        a : 2,
        b : 5,
        c : 0
    }
}

sumNumbers=()=>{
let sum = parseInt(this.state.a) + parseInt(this.state.b);
this.setState({
    c : sum
})
}

changeFirst=(event)=>{
this.setState({
    a : event.target.value
})
}

changeSecond=(event)=>{
    this.setState({
        b : event.target.value
    })
    }

render(){
    return (
        <div>
<p>
First Number : <input onChange={(event)=>this.changeFirst(event)} value={this.state.a} />
</p>
<p>
Second Number : <input onChange={(event)=>this.changeSecond(event)} value={this.state.b} /> 
</p>
<p>
Sum : {this.state.c}
</p>
<p>
<button onClick={this.sumNumbers}>Add</button>
    </p>
     </div>
    )
}

}

export default Add;