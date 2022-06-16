import React, { useContext } from 'react'
import { Button, IconButton } from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete'
import { Link } from 'react-router-dom'
import { GlobalContext } from '../../context/GlobalStateContext'
import './Cart.css'

const Cart = () => {
    const {cartProducts, removeItem, clear, totalPrice} = useContext(GlobalContext)
    return (
    <div className='cartContainer'>
      <h1>Productos agregados</h1>
      <div className='cartList'>
        {cartProducts.length > 0 ? cartProducts.map((item, index) => (
          <div key={`container-${item.id}`} className='cartItem'>
            <IconButton key={`button-${item.id}`} style={{margin: '20px', color: 'black'}} aria-label="delete" onClick={() => removeItem(item.id)}>
              <DeleteIcon/>
            </IconButton>
            <div className='cartItemImg'>
              <img src={item.img} alt={item.name}/>
            </div>
            <div className='cartItemInfo'>
              <p><b>{item.name}</b></p>
              <p>Cantidad: {item.amount} | S/{item.individualPrice} xUN.</p>
            </div>
            <div className='cartItemTotalPrice'>
              <p>Precio: S/{item.price}</p>
            </div>
          </div>
          
        )) : <h1>El carrito esta vacío</h1>}
      </div>
      
      <div className='buttonsContainer'>
      <Button LinkComponent={Link} style={{margin: '20px', backgroundColor: 'black'}} variant="contained" to={'/'}>Seguir comprando</Button>
      <Button style={{margin: '20px'}} variant="contained" color="error" onClick={() => clear()}>Vaciar el carrito</Button>
      <h1 style={{textAlign: 'right'}}>Total: S/{totalPrice}</h1>
      </div>
    </div>
  )
}

export default Cart