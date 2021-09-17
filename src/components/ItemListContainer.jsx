import React from 'react'
import { useEffect, useState } from 'react';
import ItemList from './ItemList';
import CardUno from '../assets/images/cardUno.jpg'
import CardDos from '../assets/images/cardDos.jpg'
import CardTres from '../assets/images/cardTres.jpg'
import CardCuatro from '../assets/images/cardCuatro.jpg'
import { useParams } from 'react-router-dom';

const productos = [
    { id: 1, imagen: CardUno, categoria: "Remeras, Hombre", title: "mens’s black t-shirt", precio: "$ 480.00", categoryId: "hombre", descripcion: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book." },
    { id: 2, imagen: CardDos, categoria: "Buzos, Mujer", title: "baby pink sweater", precio: "$ 1040.00", categoryId: "mujer", descripcion: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book." },
    { id: 3, imagen: CardTres, categoria: "Buzos, Mujer", title: "rock n’ roll hood", precio: "$ 89.00", categoryId: "mujer", descripcion: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book." },
    { id: 4, imagen: CardCuatro, categoria: "Camperas, Mujer", title: "women’s wrap coat", precio: "$ 225.00", categoryId: "mujer", descripcion: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book." },
    { id: 5, imagen: CardUno, categoria: "Remeras, Hombre", title: "mens’s black t-shirt", precio: "$ 480.00", categoryId: "hombre", descripcion: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book." },
    { id: 6, imagen: CardDos, categoria: "Buzos, Mujer", title: "baby pink sweater", precio: "$ 1040.00", categoryId: "mujer", descripcion: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book." },
    { id: 7, imagen: CardTres, categoria: "Buzos, Mujer", title: "rock n’ roll hood", precio: "$ 89.00", categoryId: "mujer", descripcion: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book." },
    { id: 8, imagen: CardCuatro, categoria: "Camperas, Mujer", title: "women’s wrap coat", precio: "$ 225.00", categoryId: "mujer", descripcion: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book." },
]

const getProduct = new Promise ((resuelta) =>{
    setTimeout(() => {
        resuelta(productos)
    }, 5000);
})


function ItemListContainer() {

    
    
    const [arrayProductos, setArrayProductos] = useState()
    const {categoriaId} = useParams()

    useEffect(() => {
        console.log("useEffect se ejecuta");
        console.log(categoriaId);
        if (categoriaId === undefined) {
            
            getProduct.then((respuesta)=>{
                 setArrayProductos(respuesta)
            })
        } else {
            getProduct.then((respuesta)=>{
                setArrayProductos(respuesta.filter( x =>{return categoriaId === x.categoryId}))
                
           })
        
        }
    }, [categoriaId])

    return (
        <div>
             <ItemList arrayProductos= {arrayProductos}></ItemList>
        </div>
    )
}

export default ItemListContainer
