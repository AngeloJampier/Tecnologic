import React from 'react'
import ItemListContainer from '../components/ItemListContainer/ItemListContainer'

const homeContainer = {
    height: '100vh',
    textAlign: 'center',
    marginTop: '60px'
}

const Home = () => {
  return (
    <div className="homeContainer" style={homeContainer}>
      <ItemListContainer category = {null}/>
    </div>
  )
}

export default Home