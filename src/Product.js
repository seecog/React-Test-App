import React from 'react';
import './Product.css';
const Product = (props)=>{

    return (
        <div className="Product">
<h2>{props.name}</h2>
<h4>Cost : {props.cost}</h4>
<p>
<img src={props.img} width="100" height="100" />
</p>   
<p>
<button onClick={props.click}>Update Name</button>
    </p>

        </div>
    )

}

export default Product;