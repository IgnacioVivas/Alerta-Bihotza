import React from 'react';
import CheckOut from './CheckOut';
import { useState } from 'react';
import { useCartContext } from '../context/CartContext';
import { getFirestore } from '../service/GetFireBase';
import firebase from 'firebase/app';
import 'firebase/firestore';

function CheckOutConteiner() {
  const { cart, totalPrice, clear } = useCartContext();
  const [orderBuy, setOrderBuy] = useState();
  const [formData, setFormData] = useState(initialState);

  function infoForm(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  }

  function formSubmit(e) {
    e.preventDefault();

    if (
      formData.email === formData.revalidarEmail &&
      formData.email !== '' &&
      formData.revalidarEmail !== ''
    ) {
      const newOrder = {
        buyer: formData,
        items: cart,
        total: totalPrice(),
        date: firebase.firestore.Timestamp.fromDate(new Date()),
      };
      const baseDeDatos = getFirestore();
      const orders = baseDeDatos.collection('orders');

      orders
        .add(newOrder)
        .then((resp) => {
          setOrderBuy(resp.id);
          alert('Su compra fue un éxito. Su número de orden es ' + orderBuy + '.');
        })
        .catch((err) => console.log(err))
        .finally(() => {
          setFormData(initialState);
          clear();
        });
    } else {
      alert('Los emails no coinciden');
    }
  }

  return (
    <>
      <CheckOut infoForm={infoForm} formSubmit={formSubmit} formData={formData}></CheckOut>
    </>
  );
}

const initialState = {
  nombre: '',
  apellido: '',
  email: '',
  revalidarEmail: '',
  telefono: '',
  direccion: '',
  ciudad: '',
  localidad: '',
  codigoPostal: '',
};

export default CheckOutConteiner;
