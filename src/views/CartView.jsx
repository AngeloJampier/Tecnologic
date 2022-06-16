import React from 'react'
import Cart from '../components/Cart/Cart'
import Form from '../components/Form/Form'

const cartViewContainer = {
  display: 'flex',
  width: '100%',
  height: '100%',
  marginTop: '60px'
}

const CartView = () => {

  return (
    <div className='cartViewContainer' style={cartViewContainer}>
      <div style={{display: 'flex', width: '100%'}}>
        <Cart />
        <Form />
      </div>
      
    </div>
  )
}

export default CartView