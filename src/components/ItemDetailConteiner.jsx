import React from 'react'
import { useState, useEffect } from 'react';
import ItemDetail from './ItemDetail';
import { useParams } from 'react-router-dom';
import { getFirestore } from '../service/GetFireBase';


function ItemDetailConteiner() {

    const {id} = useParams();
    const [product, setProduct] = useState({})

    useEffect(() => {
   
        const baseDeDatos = getFirestore();
        const itemCollection = baseDeDatos.collection("Items");
        const item = itemCollection.doc(id)
        item.get().then((resp) => {
            if (!resp.exists) {
                return
            }
            setProduct({id: resp.id, ...resp.data()})
        })  

    }, [])

    
        

    return (
        <>
            
            <ItemDetail producto = {product}></ItemDetail>  
        </>
    )
}

export default ItemDetailConteiner
