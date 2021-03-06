import React from 'react'
import IngredientsList from './IngredientsList'

export default function Ingredients({ingredients}) {
    // console.log(typeof ingredients)
    // console.log(ingredients)
    // ingredients.map(ingredient=>{
    //     return ingredient.key
    // })
    // console.log(typeof (ingredients))
    // console.log(Object.keys(ingredients))
    // console.log(Object.values(ingredients))
    // sampleRecipes.map(recipe => {
    //     // console.log(recipe.id);
    //     // return <RecipeList key={recipe.id} recipe={recipe} />
    //     return <RecipeList key={recipe.id} {...recipe} />
    // })
    // const array = [];
    // //using of for loops apparantley because these are objects
    // // and not arrays, but like I created a proper array to store
    // // the contents of the object and like pass them




    // thought of using the other way round but due to like the thing being an array, had to use this mapping
    // for (const keys in ingredients) {
    //     // console.log(keys);
    //     // console.log(ingredients[keys]);

    //     array.push(<IngredientsList keys={keys}
    //                 values={ingredients[keys]} />)
    // }
    // console.log(ingredients)
    // const array=ingredients.map(ingredient => {
    //     // console.log(ingredient);
    //      <IngredientsList ingredient={ingredient} />
    // })
    const ingredientItems=ingredients.map(ingredient=>{
        return <IngredientsList keys={ingredient.id} {...ingredient}/>
    })
    return (
        <>
            {/* {array} */}
            <div>

            { ingredientItems}
            </div>
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


