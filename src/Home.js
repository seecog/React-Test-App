import React,{Component} from 'react';
import Products from './Products';
class Home extends Component{
 
    render(){
        return (
            <div>
<h1>Inside the Home component</h1>
<Products/>
            </div>
        )
    }

}

export default Home;