import React from 'react'
import { useEffect, useState } from 'react';
import ItemList from './ItemList';
import CardUno from '../assets/images/cardUno.jpg'
import CardDos from '../assets/images/cardDos.jpg'
import CardTres from '../assets/images/cardTres.jpg'
import CardCuatro from '../assets/images/cardCuatro.jpg'

const productos = [
    { id: 1, imagen: CardUno, categoria: "Remeras, Hombre", title: "mens’s black t-shirt", precio: "$ 480.00" },
    { id: 2, imagen: CardDos, categoria: "Buzos, Mujer", title: "baby pink sweater", precio: "$ 1040.00" },
    { id: 3, imagen: CardTres, categoria: "Buzos, Mujer", title: "rock n’ roll hood", precio: "$ 89.00" },
    { id: 4, imagen: CardCuatro, categoria: "Camperas, Mujer", title: "women’s wrap coat", precio: "$ 225.00" },
    { id: 5, imagen: CardUno, categoria: "Remeras, Hombre", title: "mens’s black t-shirt", precio: "$ 480.00" },
    { id: 6, imagen: CardDos, categoria: "Buzos, Mujer", title: "baby pink sweater", precio: "$ 1040.00" },
    { id: 7, imagen: CardTres, categoria: "Buzos, Mujer", title: "rock n’ roll hood", precio: "$ 89.00" },
    { id: 8, imagen: CardCuatro, categoria: "Camperas, Mujer", title: "women’s wrap coat", precio: "$ 225.00" },
]

const getProduct = new Promise ((resuelta) =>{
    setTimeout(() => {
        resuelta(productos)
    }, 5000);
})


function ItemListContainer() {

    const [arrayProductos, setArrayProductos] = useState()

    useEffect(() => {
       getProduct.then((respuesta)=>{
            setArrayProductos(respuesta)
       })
    }, [])

    return (
        <div>
             <ItemList arrayProductos= {arrayProductos}></ItemList>
        </div>
    )
}

export default ItemListContainer
