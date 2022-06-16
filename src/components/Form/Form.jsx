import { Button, FormControl, TextField } from '@mui/material'
import { addDoc, collection } from 'firebase/firestore'
import React, { useContext, useEffect, useState } from 'react'
import { GlobalContext } from '../../context/GlobalStateContext'
import { db } from '../../service/Firebase'
import './Form.css'
import Swal from 'sweetalert2'
import emailjs from 'emailjs-com'

const Form = () => {

  emailjs.init("7kSQB0hQCdvxHkLj2")

  const { cartProducts, setCartProducts, totalPrice, setTotalPrice } = useContext(GlobalContext)
  const [phoneStatus, setPhoneStatus] = useState(false)
  const [emailStatus, setEmailStatus] = useState(false)
  const [nameStatus, setNameStatus] = useState(false)
  const [lastNameStatus, setLastNameStatus] = useState(false)
  const [formStatus, setFormStatus] = useState(false)
  const [formValue, setFormValue] = useState({
    buyer: {
      name: "",
      lastName: "",
      email: "",
      phone: ""
    },
    items: cartProducts,
    date: new Date().getDate() + '/' + new Date().getMonth() + '/' + new Date().getFullYear(),
    totalPrice: totalPrice
  })

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormValue({
      ...formValue,
      buyer: {
        ...formValue.buyer,
        [name]: value
      }
    })

    if (e.target.name === 'phone') {
      setPhoneStatus(e.target.value.length < 1 ? false : true)
      setFormStatus(phoneStatus && emailStatus && nameStatus && lastNameStatus)
    } else if (e.target.name === 'name') {
      setNameStatus(e.target.value.length < 1 ? false : true)
      setFormStatus(phoneStatus && emailStatus && nameStatus && lastNameStatus)
    } else if (e.target.name === 'lastName') {
      setLastNameStatus(e.target.value.length < 1 ? false : true)
      setFormStatus(phoneStatus && emailStatus && nameStatus && lastNameStatus)
    } else if (e.target.name === 'email') {
      setEmailStatus(e.target.value.length < 1 ? false : true)
      setFormStatus(phoneStatus && emailStatus && nameStatus && lastNameStatus)
    }
  }

  const sendData = async () => {
    try {
      if (cartProducts.length > 0) {
        const col = collection(db, 'orders')
        const order = await addDoc(col, formValue)
        Swal.fire(
          'Pedido realizado!',
          `Se ha enviado un correo con el resumen de su compra.
            El id de su compra: ${order.id}`,
          'success'
        )

        let list =  {}
        for(let i = 0; i<formValue.items.length; i++) list[`producto${i}`] = `${i+1}.- ${formValue.items[i].name} | ${formValue.items[i].description} | x${formValue.items[i].amount}UN. | Sub-total: S/${formValue.items[i].price}`

        emailjs.send('service_sbwd6zo', 'template_sxqkapx', {...formValue, ...list, order: order.id})
          .then(function (response) {
            console.log('SUCCESS!', response.status, response.text)
            console.log({...formValue, ...list})
          }, function (error) {
            console.log('FAILED...', error)
          })

        setCartProducts([])
        setTotalPrice(0)
        setFormValue({
          buyer: {
            name: "",
            lastName: "",
            email: "",
            phone: "",
          },
          items: cartProducts,
          date: new Date().getDate() + '/' + new Date().getMonth() + '/' + new Date().getFullYear(),
          totalPrice: totalPrice
        })
        setNameStatus(false)
        setLastNameStatus(false)
        setPhoneStatus(false)
        setEmailStatus(false)
        setFormStatus(false)
      } else {
        Swal.fire({
          icon: 'error',
          title: 'Carrito vacío',
          text: 'Debe tener productos en el carrito'
        })
      }
    } catch (error) {
      console.log(error)
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Al parecer ocurrió un error!'
      })
    }
  }

  useEffect(() => { }, [formStatus])

  return (
    <div className='formContainer'>
      <h1>Confirmación del pedido</h1>
      <FormControl className='form'>
        <TextField
          className='formItem'
          id="nameInput"
          name='name'
          placeholder="Nombres"
          autoComplete='off'
          value={formValue.buyer.name}
          onChange={handleInputChange}
          onBlur={handleInputChange}
        />
        <TextField
          className='formItem'
          id="lastNameInput"
          name='lastName'
          placeholder="Apellidos"
          autoComplete='off'
          value={formValue.buyer.lastName}
          onChange={handleInputChange}
          onBlur={handleInputChange}
        />
        <TextField
          className='formItem'
          type={'email'}
          id="emailInput"
          placeholder="Email"
          name='email'
          autoComplete='off'
          value={formValue.buyer.email}
          onChange={handleInputChange}
          onBlur={handleInputChange}
        />
        <TextField
          className='formItem'
          type={'tel'}
          id="phoneInput"
          name='phone'
          placeholder="Teléfono"
          autoComplete='off'
          value={formValue.buyer.phone}
          onChange={handleInputChange}
          onBlur={handleInputChange}
        />
        <div className='buttonContainer'>
          <Button onClick={sendData} disabled={!formStatus} variant='contained' className='btnSend'>Enviar</Button>
        </div>
      </FormControl>
    </div>
  )
}

export default Form