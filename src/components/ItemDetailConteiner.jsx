import React from 'react'
import { useState, useEffect } from 'react';
import ItemDetail from './ItemDetail';
import CardUno from '../assets/images/cardUno.jpg'
import CardDos from '../assets/images/cardDos.jpg'
import CardTres from '../assets/images/cardTres.jpg'
import CardCuatro from '../assets/images/cardCuatro.jpg'


const productos = [
    { id: 1, imagen: CardUno, categoria: "Remeras, Hombre", title: "mens’s black t-shirt", precio: "$ 480.00", descripcion: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book." },
    { id: 2, imagen: CardDos, categoria: "Buzos, Mujer", title: "baby pink sweater", precio: "$ 1040.00", descripcion: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book." },
    { id: 3, imagen: CardTres, categoria: "Buzos, Mujer", title: "rock n’ roll hood", precio: "$ 89.00", descripcion: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book." },
    { id: 4, imagen: CardCuatro, categoria: "Camperas, Mujer", title: "women’s wrap coat", precio: "$ 225.00", descripcion: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book." },
    { id: 5, imagen: CardUno, categoria: "Remeras, Hombre", title: "mens’s black t-shirt", precio: "$ 480.00", descripcion: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book." },
    { id: 6, imagen: CardDos, categoria: "Buzos, Mujer", title: "baby pink sweater", precio: "$ 1040.00", descripcion: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book." },
    { id: 7, imagen: CardTres, categoria: "Buzos, Mujer", title: "rock n’ roll hood", precio: "$ 89.00", descripcion: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book." },
    { id: 8, imagen: CardCuatro, categoria: "Camperas, Mujer", title: "women’s wrap coat", precio: "$ 225.00", descripcion: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book." },
]

const getProductos = new Promise ((resuelta) =>{
    setTimeout(() => {
        resuelta(productos)
    }, 5000);

})



function ItemDetailConteiner() {

    const [product, setProduct] = useState({})

    useEffect(() => {
        getProductos.then((respuesta) =>{
            setProduct(respuesta[2])
        })
    }, [])


    return (
        <>
          <ItemDetail producto = {product}></ItemDetail>  
        </>
    )
}

export default ItemDetailConteiner
