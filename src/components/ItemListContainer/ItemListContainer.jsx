import './ItemListContainer.css'
import React, {useEffect, useContext} from 'react'
import ItemList from '../ItemList/ItemList'
import Filter from '../Filter/Filter'
import { GlobalContext } from '../../context/GlobalStateContext'
import { db } from '../../service/Firebase'
import { getDocs, collection, query, where } from 'firebase/firestore'
import { useParams } from 'react-router-dom'

const ItemListContainer = (props) => {
  const {category} = useParams()
  const {productList, setProductList, productName, minPrice, maxPrice} = useContext(GlobalContext)

  const getData = async () =>{
    const col = collection(db, 'products')
    try {
      const data = category === undefined ? await getDocs(col) : await getDocs(query(col, where('categoria', '==', category)))
      const res = data.docs.map(doc => doc = {id: doc.id, ...doc.data()} )
      setProductList(res.filter(product => {
        return product.productName.toLowerCase().includes(productName.toLowerCase()) && minPrice <= product.price && product.price <= maxPrice
      }))
    } catch (error) {
      console.log(error)
    }
  }

  useEffect( () => {
    setProductList(null)
    getData()

    return () => {
    }
  }, [category, productName, minPrice, maxPrice])

  return (
    <>
      <div className='itemListContainer'>
        <Filter></Filter>
        <div className='itemListGeneralContainer'>
          <h2>Lista de productos</h2>
          <ItemList productList={productList} />
        </div>
      </div>
    </>
  )
}

export default ItemListContainer