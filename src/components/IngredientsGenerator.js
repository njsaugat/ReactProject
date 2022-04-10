import React from 'react'
import AddIngredient from './AddIngredient'
export default function IngredientsGenerator({counter}) {
    const ingredientList=[]
    console.log(counter)
    for(let i=0;i<counter;i++){
        ingredientList.push(<AddIngredient key={i}/>)
    }
    return (
        <>
        {ingredientList}
        </>
    )
}
