import React, {Component} from 'react';
import Product from '../product/Product';
import axios from 'axios';
import './Dashboard.css'

class Dashboard extends Component {
   
    deleteProduct(id){
       axios.delete(`/api/product/${id}`).then(res => {
           this.props.afterDeleteInventory(res.data)
        }) 
    }

    

    render(){
        
        const displayProducts = this.props.inventory.map(product => {
            return(
                <Product 
                    key={product.id}
                    name={product.name}
                    price={product.price}
                    img={product.img}
                    deleteProduct={() => this.deleteProduct(product.id)}
                    // updateProduct={() => this.updateProduct(product.id,product)}
                />
            )
        })
        return(
            <div className='Dashboard_display'>
                {displayProducts}
            </div>
        )
    }
}

export default Dashboard