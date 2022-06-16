import React, { createContext, useState } from 'react'


export const GlobalContext = createContext()

const GlobalStateContext = ({children}) => {
    const [productList, setProductList] = useState(null)
    const [currentItem, setCurrentItem] = useState(null)
    const [cartProducts, setCartProducts] = useState([])
    const [totalPrice, setTotalPrice] = useState(0)
    const [toCart, setToCart] = useState(false)
    const [category, setCategory] = useState('')
    const [productName, setProductName] = useState('')
    const [minPrice, setMinPrice] = useState(0)
    const [maxPrice, setMaxPrice] = useState(Number.MAX_VALUE)

    const addToCart = (product) => {
      if(isInCart(product.id)){
        cartProducts.forEach((element,index) =>{
          if(element.id === product.id){
            cartProducts[index].amount += product.amount
            cartProducts[index].price += product.price
          }
        })
      } else setCartProducts([...cartProducts, product])

      setTotalPrice(totalPrice + product.price)
    }

    const isInCart = (id) => {
      return cartProducts.filter( product => product.id === id).length > 0 ? true : false
    }

    const removeItem = (id) => {
      setTotalPrice(totalPrice - cartProducts.filter(product => product.id === id)[0].price)
      setCartProducts(cartProducts.filter( product => product.id !== id))
    }

    const clear = () => {
      setTotalPrice(0)
      setCartProducts([])
    }

  return (
    <GlobalContext.Provider value={{
      cartProducts,
      setCartProducts,
      addToCart,
      removeItem,
      clear,
      productList,
      setProductList,
      totalPrice,
      setTotalPrice,
      toCart,
      setToCart,
      currentItem,
      setCurrentItem,
      category,
      setCategory,
      productName,
      setProductName,
      minPrice,
      setMinPrice,
      maxPrice,
      setMaxPrice
      }}>
        { children }
    </GlobalContext.Provider>
  )
}

export default GlobalStateContext