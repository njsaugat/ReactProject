import React from 'react'
import RecipeList from './RecipeList'

export default function Recipe({ sampleRecipes }) {
    return (
        // <div>Recipe</div>
        <>
            {/* <RecipeList {...sampleRecipes} /> */}
            {sampleRecipes.map(recipe => {
                // console.log(recipe.id);
                // return <RecipeList key={recipe.id} recipe={recipe} />
                return <RecipeList key={recipe.id} {...recipe} />
            })}
            <div>
                <button>Add Recipe</button>
            </div>
        </>
    )
}
