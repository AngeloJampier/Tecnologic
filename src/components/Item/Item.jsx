import './Item.css'
import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from '@mui/material'

const priceFormat = price => {
    return price.length > 3 && !price.includes('.') ? price.slice(0, 1) + "," + price.slice(1, price.length) : price
}

const Item = ({product}) => {
    return (
        <>
            <div className='itemContainer'>
                <div className='product'>
                    <div style={{height: '80%'}}>
                        <img src={product.image} alt="" />
                        <div>
                            <h3>{product.productName}</h3>
                            <h4>S/{priceFormat(product.price)}</h4>
                            <p className='stock'>(Stock: {product.stock})</p>
                            <p>{product.description}</p>
                        </div>
                    </div>
                    <div style={{height: '20%'}}>
                        <Button
                        component = {Link}
                        to = {'/item/' + product.id}
                        className = 'detailButton'
                        product = {product}
                        style = {{backgroundColor: 'black', color: 'white'}}
                        >
                        Detalles
                        </Button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Item