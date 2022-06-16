import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar, faStarHalf, faTruckFast, faBolt, faLocationDot, faShop, faArrowRotateLeft, faShieldHalved, faTrophy } from '@fortawesome/free-solid-svg-icons'
import React from 'react'
import ItemCount from '../ItemCount/ItemCount'
import { Box, CircularProgress, Link } from '@mui/material'
import './ItemDetail.css'

const priceFormat = price => {
  return price.length > 3 && !price.includes('.') ? price.slice(0, 1) + "," + price.slice(1, price.length) + ".00" : price + ".00"
}

const ItemDetail = ({currentItem}) => {

  return (
    <div className='itemDetailContainer'>
      {currentItem != null ? (
        <div className='product'>
          <div className='div1'>
            <img src={currentItem.image} alt="" className='img' />
          </div>
          <div className='div2'>
            <div className='details'>
              <p>Nuevo | {parseInt(Math.random() * 1000)} vendidos</p>
              <h2>{currentItem.productName}</h2>
              <div>
                <FontAwesomeIcon icon={faStar} className='stars' />
                <FontAwesomeIcon icon={faStar} className='stars' />
                <FontAwesomeIcon icon={faStar} className='stars' />
                <FontAwesomeIcon icon={faStar} className='stars' />
                <FontAwesomeIcon icon={faStarHalf} className='stars' />
                {parseInt(Math.random() * 100)} opiniones
              </div>
              <div className='recommendedContainer'>
                <div className='recommended'>
                  RECOMENDADO
                </div>
                en {currentItem.categoria.slice(0, 1).toUpperCase() + currentItem.categoria.slice(1, currentItem.categoria.length)}
              </div>
              <div className='beforePrice'>
                S/{priceFormat(parseInt(currentItem.price * 1.15))}
              </div>
              <div className='priceContainer'>
                <div className='price'>
                  S/{priceFormat(currentItem.price)}
                  <div className='green'>
                    15% OFF
                  </div>
                </div>
                <div className='interes'>
                  en
                  <div className='green'>
                    10 x S/{priceFormat(parseInt((currentItem.price / 9)))}, los intereses mas bajos!
                  </div>
                </div>
              </div>
              <div>
                <Link href='#' underline='none'>Ver los medios de pago</Link>
              </div>
            </div>

            <div>
              <div className='counterContainer'>
                <div style={{ width: '100%', display: 'flex' }}>
                  <div style={{ width: '50%' }}>
                    <div style={{ display: 'flex' }}>
                      <FontAwesomeIcon icon={faTruckFast} className='greenCounter' />
                      <div style={{ fontSize: '14px' }}>
                        <div className='greenCounter'>
                          Llega gratis mañana
                          <b>
                            <FontAwesomeIcon icon={faBolt} className='green' /> full
                          </b>
                        </div>
                        <div>
                          Comprando dentro de las próximas {parseInt(Math.random() * 5) + 10} h {parseInt(Math.random() * 5) + 20} m
                        </div>
                        <div style={{ color: '#3483FA' }}>
                          <FontAwesomeIcon icon={faLocationDot} />  Enviar a <Link href="#">mi ubicación</Link>.
                        </div>
                      </div>
                    </div>
                    <div style={{ display: 'flex', margin: '15px 0' }}>
                      <FontAwesomeIcon icon={faShop} className='greenCounter' />
                      <div style={{ fontSize: '14px' }}>
                        <div className='greenCounter'>
                          Retiralo gratis a partir de mañana en correos y otros puntos
                        </div>
                        <div>
                          Comprando antes de las 23hs.
                        </div>
                        <div style={{ color: '#3483FA' }}>
                          Ver en el mapa
                        </div>
                      </div>
                    </div>
                  </div>
                  <div style={{ width: '50%' }}>
                    <div style={{ display: 'flex' }}>
                      <FontAwesomeIcon icon={faArrowRotateLeft} className='greenCounter' />
                      <div style={{ fontSize: '14px' }}>
                        <div className='greenCounter'>
                          Devolución gratis:
                        </div>
                        <div>
                          Tienes 30 días desde que lo recibes.
                        </div>
                      </div>
                    </div>
                    <div style={{ display: 'flex', margin: '15px 0' }}>
                      <FontAwesomeIcon icon={faShieldHalved} className='greenCounter' />
                      <div style={{ fontSize: '14px' }}>
                        <div className='greenCounter'>
                          Compra protegida:
                        </div>
                        <div>
                          Recive el producto que esperabas o te devolvemos tu dinero.
                        </div>
                      </div>
                    </div>
                    <div style={{ display: 'flex', margin: '15px 0' }}>
                      <FontAwesomeIcon icon={faTrophy} className='greenCounter' />
                      <div style={{ fontSize: '14px' }}>
                        <div className='greenCounter'>
                          Tienda Puntos Pe':
                        </div>
                        <div>
                          Suma puntos para futuras compras.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div style={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '15px' }}>
                  <div style={{ fontSize: '14px' }} >
                    <b>Stock disponible ({currentItem.stock} disponibles)</b>
                  </div>
                  <ItemCount product={currentItem} className='itemCount' amount={currentItem.stock}></ItemCount>
                </div>
              </div>
            </div>
          </div>
        </div>

      ) : (
        <div className='itemDetailContainer'>
          <Box sx={{ display: 'flex', height: '100vh', overflow: 'hidden', justifyContent: 'center', alignItems: 'center'}}>
              <CircularProgress />
          </Box>
        </div>
        
      )}

    </div>
  )
}

export default ItemDetail