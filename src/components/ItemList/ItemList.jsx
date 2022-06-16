import './ItemList.css'
import React from 'react'
import Item from '../Item/Item'
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

const ItemList = ({ productList }) => {

  return (
    <>
        <div className='itemList'>
            {productList != null ? (
                productList.length > 0 ? (
                    productList.map((element,index) => (
                        <div key={'container' + element.id} className='itemFlexContainer'>
                            <Item
                            key = {element.id}
                            product = {element}
                            />
                        </div>
                    ))
                ) : <h1 style={{textAlign: 'center', gridColumn: '1/5'}}>No se encontraron productos</h1>
            ) : (
                <Box sx={{ display: 'flex', height: '100%', justifyContent: 'center', alignItems: 'center', gridColumn: '1/5' }}>
                    <CircularProgress />
                </Box>
            )}
        </div>
    </>
  )
}

export default ItemList