import React, {Component} from 'react';
import Product from '../product/Product'

class Dashboard extends Component {
    // constructor(props) {
    //     super(props)
    // }

    render(){
        
        const displayProducts = this.props.inventory.map(product => {
            return(
                <Product 
                    // key={product.id}
                    name={product.name}
                    price={product.price}
                    img={product.img}
                />
            )
        })
        return(
            <div>
                Dashboard
                {displayProducts}
            </div>
        )
    }
}

export default Dashboard