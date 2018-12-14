import React, {Component} from 'react';

class Form extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: '',
            price: 0,
            imgurl: ''
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
            imgurl: ''
        })
        console.log(this.state.name)
    }

    render() {
        return (
            <div>
                <span>Image URL:</span>
                <input className='img_url' 
                value={this.state.imgurl}
                onChange={(e) => this.handleChange('imgurl', e.target.value)}
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
                    <button>Add to Inventory</button>
                </div>
            </div>
        )
    }
}

export default Form