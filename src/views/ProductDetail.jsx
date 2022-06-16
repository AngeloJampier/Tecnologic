import React from 'react'
import ItemDetailContainer from '../components/ItemDetailContainer/ItemDetailContainer'

const productDetailContainer = {
    height: 'calc(100vh - 60px)',
    textAlign: 'center',
    marginTop: '60px'
}

const ProductDetail = () => {

  return (
    <div className="productDetailContainer" style={productDetailContainer}>
      <ItemDetailContainer/>
    </div>
  )
}

export default ProductDetail