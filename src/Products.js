import React,{Component} from 'react';
import Product from './Product';

class Products extends Component{

constructor(){
    super();
    this.state = {
        products : [
            {name :"Apple",
             cost : "200", 
             img : "https://cdn.vox-cdn.com/thumbor/-bKrYahnwqww9sH9v2h34v9ViA0=/0x114:585x559/1200x800/filters:focal(248x297:340x389)/cdn.vox-cdn.com/uploads/chorus_image/image/57272301/Screen_Shot_2017_10_23_at_10.16.32_AM.0.png" 
            },
            {
                name : "Banana",
                cost : "100",
                img : "https://target.scene7.com/is/image/Target/GUEST_f5d0cfc3-9d02-4ee0-a6c6-ed5dc09971d1?wid=488&hei=488&fmt=pjpeg"
            },
            {
                name : "Blackberry",
                cost : "500", 
                img : "https://images-na.ssl-images-amazon.com/images/I/41pp-vKndpL.jpg"
            }
        ]
    }
}

showMessage = ()=>{
alert('Hello world');
}

changeName = (evt)=>{
let tmpProducts = this.state.products;
tmpProducts[0].name = evt
this.setState({
    products : tmpProducts
})
}


render(){
    return (
        <div>           
<Product click={this.changeName.bind(this,"New Apple")} name={this.state.products[0].name} cost={this.state.products[0].cost} img={this.state.products[0].img} >An apple is a sweet, edible fruit produced by an apple tree (Malus pumila).</Product>
<Product click={this.changeName.bind(this,"New Banana")} name={this.state.products[1].name} cost={this.state.products[1].cost} img={this.state.products[1].img} />
<Product click={this.changeName.bind(this,"New Blackberry")} name={this.state.products[2].name} cost={this.state.products[2].cost} img={this.state.products[2].img} />
</div>
    )
}

}

export default Products;