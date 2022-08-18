import React from 'react'
import { useState, useEffect } from 'react';
import ItemDetail from './ItemDetail';
import { useParams } from 'react-router-dom';
import { getFirestore } from '../service/GetFireBase';
import Spinner from 'react-bootstrap/Spinner'



function ItemDetailConteiner() {

    const { id } = useParams();
    const [product, setProduct] = useState({})
    const [loanding, setLoanding] = useState(true)

    useEffect(() => {

        const baseDeDatos = getFirestore();
        const itemCollection = baseDeDatos.collection("Items");
        const item = itemCollection.doc(id)
        item.get().then((resp) => {
            if (!resp.exists) {
                return
            }
            setProduct({ id: resp.id, ...resp.data() })
            setLoanding(false)

        })

    }, [])

    return (
        <>

            {loanding ?
                <Spinner animation="grow" variant="dark" />
                :

                <ItemDetail producto={product}></ItemDetail>
            }

        </>
    )
}
export default ItemDetailConteiner
