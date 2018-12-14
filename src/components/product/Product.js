import React from 'react';

export default function Product(props) {
    return (
        <div>
            <div className='display_name'>{props.name}</div>
            <span className='display_price'>{props.price}</span>
            <div className='display_image'>{props.img}</div>
        </div>
    )
}