import React, { useContext } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './CardWidget.css'
import { GlobalContext } from '../../context/GlobalStateContext'
import { Link } from 'react-router-dom'

const CardWidget = () => {
  const {cartProducts, setToCart} = useContext(GlobalContext)
  let initialAmount = 0
  cartProducts.forEach(a => initialAmount += a.amount)
  
  return (
    <>
      {cartProducts.length >= 1 &&
        <div style={{
          display: 'flex'
        }}>
          <Link to={'/cart'} onClick={() => setToCart(false)}>
              <FontAwesomeIcon icon={faShoppingCart} className="carrito"/>
          </Link>
          <div style={{
            alignSelf: 'end',
            fontSize: '18px',
            fontWeight: 'bold',
            color: 'white',
            textAlign: 'center',
            marginLeft: '5px'
          }}>{initialAmount}</div>
        </div>
      }
        
    </>
  )
}

export default CardWidget