import React from 'react'

const Greeting = ({texto}) => {
    console.log(texto)
    return(
        <>
        {alert(texto)}
        </>
        
    )

}

function ItemListContainer() {
    return (
        <div>
            <Greeting texto={"Bienvenido, solo por hoy tenes un -15%!!"}/>
        </div>
    )
}

export default ItemListContainer
