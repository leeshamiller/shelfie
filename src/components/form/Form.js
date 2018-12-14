import React, {Component} from 'react';
import axios from 'axios';
import './Form.css'

class Form extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: '',
            price: 0,
            img: ''
        }
    }

    handleChange(props, val){
        this.setState({
            [props]: val
        })
        console.log(val)
    }

    inputReset(){
        this.setState({
            name: '',
            price: 0,
            img: ''
        })
    }

    addProduct(){
        const {newInventory} = this.props
        const {name, price, img} = this.state
        axios.post('/api/product', {name, price, img}).then((res) => {
            newInventory(res.data)
        })
        this.inputReset()
    }

    // updateProduct(id, obj){
    //     const {newInventory} = this.props
    //     const {name, price, img} = obj
    //     axios.put(`/api/product/${id}`,{name, price, img}).then(res => {
    //         newInventory(res.data)
    //     })
    // }


    render() {
        return (
            <div className='greenbox'>
                <span>Image URL:</span>
                <input className='img_url' 
                value={this.state.img}
                onChange={(e) => this.handleChange('img', e.target.value)}
                type='text'
                />
                <span>Product Name:</span>
                <input className='product_name' 
                value={this.state.name}
                onChange={(e) => this.handleChange('name', e.target.value)}
                type='text'
                />
                <span>Price:</span>
                <input className='price' 
                value={this.state.price}
                onChange={(e) => this.handleChange('price', e.target.value)}
                type='text'
                />

                <div>
                    <button onClick={() => this.inputReset()}>Cancel</button>
                    <button onClick={() => this.addProduct()}>Add to Inventory</button>
                    
                </div>
            </div>
        )
    }
}

export default Form