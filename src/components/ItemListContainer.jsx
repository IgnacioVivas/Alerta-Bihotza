import React from 'react'



function ItemListContainer(prop) {
    console.log(prop)
    return (
        <div>
             {alert(prop.greeting)}
        </div>
    )
}

export default ItemListContainer
