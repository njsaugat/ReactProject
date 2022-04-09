import React, { useState } from 'react'
import RecipeEdit from './RecipeEdit';
import RecipeList from './RecipeList'
import App from '../App';
import LiveUpdate from './LiveUpdate';
export default function Recipe({ sampleRecipes }) {
    const [click, setClick] = useState(false);
    const handleClick = () => {
        setClick(() => true)
    }
    return (
        // <div>Recipe</div>
        <>
            <div className='contain__left-side'>
                {/* <RecipeList {...sampleRecipes} /> */}
                {sampleRecipes.map(recipe => {
                    // console.log(recipe.id);
                    // return <RecipeList key={recipe.id} recipe={recipe} />
                    return <RecipeList key={recipe.id}
                        {...recipe} />
                    //  like used map function because had used an araay
                    // for storing sample items
                    // I had kinda had every element of the array(object)
                    // have its own id, so it was easier for me to pass

                })}
                <LiveUpdate click={click} />

                <div className='recipe__base'>
                    <button className='recipe__add-recipe btn btn--blue'
                        onClick={handleClick}>
                        Add Recipe
                    </button>
                </div>
            </div>
            {/* <App click={click}/> */}
            <div className='contain__border'></div>
            <div className='contain__right-side'>
                <RecipeEdit click={click} />
            </div>
            {/* <RecipeEdit click={click}/> */}
        </>
    )
}
