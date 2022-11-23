import React from 'react'
import { useEffect, useState } from 'react';
import ItemList from './ItemList';
import { useParams } from 'react-router-dom';
import { getFirestore } from '../service/GetFireBase';
import Spinner from 'react-bootstrap/Spinner'

function ItemListContainer() {

    const [loanding, setLoanding] = useState(true)
    const [arrayProductos, setArrayProductos] = useState()
    const {category} = useParams()
    useEffect(() => {

        const baseDeDatos = getFirestore()
        const itemCollection = baseDeDatos.collection("Items")

        const conditionItemCollection = category ? 
                itemCollection.where('categoryId', '==', category)
            :
                itemCollection

        conditionItemCollection.get()
        .then(data => {
            if (data.size === 0) {
                console.log("no hay productos");
            }
            setArrayProductos(data.docs.map(item => ({id:item.id, ...item.data()})))
            setLoanding(false)
        })

    }, [category])
    return (
        <>
            {loanding ?
                    <Spinner animation="grow" variant="dark" />
                :
                    <div>
                    <ItemList arrayProductos= {arrayProductos}></ItemList>
                    </div>
                    
            }
        </>
    )
}

export default ItemListContainer
