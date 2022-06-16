import { Button } from '@mui/material'
import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { GlobalContext } from '../../context/GlobalStateContext'
import './ItemCount.css'

const ItemCount = ({product, amount}) => {
    const {addToCart, toCart, setToCart} = useContext(GlobalContext)

    const [stock, setStock] = useState(1)
    const [cartProduct, setCartProduct] = useState({
        id: product.id,
        name: product.productName,
        img: product.image,
        price: product.price * stock,
        amount: stock,
        description: product.description
    })

    useEffect(() => {
        setCartProduct({
            id: product.id,
            name: product.productName,
            img: product.image,
            individualPrice: product.price,
            price: product.price * stock,
            amount: stock,
            description: product.description
        })
    
      return () => {
        
      }
    }, [product,stock])
    

    const increaseAmount = () => stock < amount ? setStock(stock + 1) : setStock(stock)
    const decreaseAmount = () => stock > 1 ? setStock(stock - 1) : setStock(stock)

    return (
        <>
        {!toCart ? (
            <div className='generalContainer'>
                <div className='optionContainer'>
                    <button className='countButton' onClick={decreaseAmount}>--</button>
                    <div className='stockContainer'><span>{stock}</span></div>
                    <button className='countButton' onClick={increaseAmount}>+</button>
                </div>
                <Button
                onClick={() => setToCart(!toCart)}
                className='addButton'
                variant='contained'
                size='large'
                style = {{backgroundColor: 'black'}}
                >
                Add to cart
                </Button>
            </div>
            ) : (
                <div className='generalContainer'>
                    <Button
                    onClick={() => {
                        addToCart(cartProduct)
                        setToCart(!toCart)
                    }}
                    className='addButton'
                    component={Link}
                    to={'/'}
                    variant='contained'
                    size='large'
                    color='info'
                    style={{fontSize: '12px',height: 'auto', textAlign: 'center', margin: '8px', backgroundColor: 'black'}}
                    >
                    Seguir comprando
                    </Button>
                    <Button
                    onClick={() => {
                        addToCart(cartProduct)
                        setToCart(!toCart)
                    }}
                    className='addButton'
                    component={Link}
                    to={'/cart'}
                    variant='contained'
                    size='large'
                    color='info'
                    style={{fontSize: '12px',height: 'auto', textAlign: 'center', margin: '8px', backgroundColor: 'black'}}
                    >
                    Terminar la compra
                    </Button>
                </div>
            )
        }
        </>
    )
}

export default ItemCount