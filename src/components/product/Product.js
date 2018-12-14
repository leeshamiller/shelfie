import React from 'react';
import './Product.css'

export default function Product(props) {
    return (
        <div>
            <div className='display_name'>{props.name}</div>
            <span className='display_price'>{props.price}</span>
            <div className='display_image'>{props.img}</div>
            <button className='delete_button' 
            onClick={props.deleteProduct}
            >Delete</button>
            {/* <button onClick={() => this.updateProduct()}
            >Save Changes</button> */}
        </div>
    )
}