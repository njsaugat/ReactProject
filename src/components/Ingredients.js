import React from 'react'
import IngredientsList from './IngredientsList'

export default function Ingredients(ingredients) {
    // ingredients.map(ingredient=>{
    //     return ingredient.key
    // })
    // console.log(typeof (ingredients))
    // console.log(Object.keys(ingredients))
    // console.log(Object.values(ingredients))
    const array = [];
    for(const keys in ingredients){
        console.log(keys);
        console.log(ingredients[keys]);

        array.push(<IngredientsList keys={keys} values={ingredients[keys]} />)
    }

    return (
        <>
            {array}
            {/* <div>
                {Object.keys(ingredients) + ""}
            </div>
            <div>
                {Object.values(ingredients) + ""}
            </div> */}
            {/* <div>
                {Object.keys(ingredients).map(function (key, index) {
                    ingredients[key] +='1' 
                })
                }
            </div> */}
        </>
    )
}


