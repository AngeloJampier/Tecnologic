import React from 'react'
import ItemListContainer from '../components/ItemListContainer/ItemListContainer'

const filteredProductsContainer = {
    height: '100vh',
    textAlign: 'center',
    marginTop: '60px'
}

const FilteredProducts = (props) => {

  return (
    <div className="filteredProductsContainer" style={filteredProductsContainer}>
      <ItemListContainer/>
    </div>
  )
}

export default FilteredProducts