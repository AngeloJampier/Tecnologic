import React, {useContext, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import { GlobalContext } from '../../context/GlobalStateContext'
import ItemDetail from '../ItemDetail/ItemDetail'
import { db } from '../../service/Firebase'
import { doc, getDoc } from 'firebase/firestore'
import './ItemDetailContainer.css'

const ItemDetailContainer = (props) => {
  const {currentItem, setCurrentItem} = useContext(GlobalContext)
  let {id} = useParams()
  
  const getItem = async () => {
    setCurrentItem(null)
    const item = doc(db, 'products', id)
    getDoc(item).then( snapshot => {
      if(snapshot.exists()){
        setCurrentItem({id: snapshot.id, ...snapshot.data()})
      }
    })
  }

  useEffect(() => {
    getItem()
    return () => {
      
    }
  }, [])
  
  return (
    <div className='itemDetailContainer'>
      <ItemDetail
      currentItem = {currentItem}
      />
    </div>
  )
}

export default ItemDetailContainer