import React, {useContext, useEffect, useState} from 'react'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select from '@mui/material/Select'
import {Link} from 'react-router-dom'
import { GlobalContext } from '../../context/GlobalStateContext'
import { Box, FormHelperText, TextField } from '@mui/material'
import './Filter.css'

const Filter = () => {
  const {
    productName, setProductName,
    category, setCategory,
    minVal, maxVal,
    minPrice, setMinPrice,
    maxPrice, setMaxPrice
  } = useContext(GlobalContext)

  const [validPrice, setValidPrice] = useState(true)

  const handleChange = (event) => setCategory(event.target.value)
  const handleProductName = (event) => setProductName(event.target.value)
  const handleMaxPrice = (event) => setMaxPrice(event.target.value === "" ? Number.MAX_VALUE : parseFloat(event.target.value))
  const handleMinPrice = (event) => setMinPrice(event.target.value === "" ? 0 : parseFloat(event.target.value))
  const handleValidPrice = () => setValidPrice( minPrice <= maxPrice ? true : false )

  useEffect(() => {
    handleValidPrice()
  }, [minPrice,maxPrice])
  
  return (
    <>
      <div className='filterContainer'>
        <h2 className='h2'>Filtros</h2>
        <FormControl fullWidth>
          <h3 className='h3'>Filtrar por categoría:</h3>
          <Select
            id='categorySelect'
            value={category}
            onChange={handleChange}
            className='select'
            style={{marginTop: '10px', backgroundColor: 'white', borderRadius: '5px'}}
          >
            <MenuItem component={Link} to='/' value={'*'}>Todas las categorías</MenuItem>
            <MenuItem component={Link} to='/category/accesorios' value={'accesorios'}>Accesorios</MenuItem>
            <MenuItem component={Link} to='/category/consolas' value={'consolas'}>Consolas</MenuItem>
            <MenuItem component={Link} to='/category/equiposdesonido' value={'equiposdesonido'}>Equipos de Sonido</MenuItem>
            <MenuItem component={Link} to='/category/impresoras' value={'impresoras'}>Impresoras</MenuItem>
            <MenuItem component={Link} to='/category/laptops' value={'laptops'}>Laptops</MenuItem>
            <MenuItem component={Link} to='/category/moviles' value={'moviles'}>Moviles</MenuItem>
            <MenuItem component={Link} to='/category/televisores' value={'televisores'}>Televisores</MenuItem>
          </Select>
        </FormControl>

        <FormControl className='formControl' fullWidth>
          <h3 className='h3'>Filtrar por nombre:</h3>
          <TextField
          id="productInput"
          name='productName'
          placeholder="Nombre del producto"
          autoComplete='off'
          value={productName}
          onChange={handleProductName}
          style={{marginTop: '10px', backgroundColor: 'white', borderRadius: '5px'}}
          />
        </FormControl>

        <div className='aditionalFiltersContainer'>
          <h3 className='h3'>Filtrar por nombre:</h3>
          <Box className='priceFilterContainer'>
            <Box className='box'>
              <div>S/</div>
            </Box>

            <TextField
            type={'number'}
            InputProps={{ inputProps: { min: 0 } }}
            id="maxPriceInput"
            name='maxPrice'
            placeholder="Precio min."
            value={minVal}
            onChange={handleMinPrice}
            style={{backgroundColor: 'white', borderRadius: '5px'}}
            />

            <Box className='box'>
              <div>-</div>
            </Box>

            <Box className='box'>
              <div>S/</div>
            </Box>

            <FormControl>
              <TextField
              type='number'
              InputProps={{ inputProps: { min: 1 } }}
              id="minPriceInput"
              name='minPrice'
              placeholder="Precio max."
              value={maxVal}
              onChange={handleMaxPrice}
              style={{backgroundColor: 'white', borderRadius: '5px'}}
              />
            </FormControl>
          </Box>
          {!validPrice && <FormHelperText style={{color: 'red', textAlign: 'right'}}>Ingrese un rango de precio válido</FormHelperText>}
        </div>
      </div>
    </>
  )
}

export default Filter