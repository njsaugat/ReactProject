import React, { useState, useContext } from 'react'
import { liveContext } from './components/LiveUpdate'
import RecipeList from './components/RecipeList';
import Ingredients from './components/Ingredients';
export default function Intermediate(recipeValue) {
    const recipe = useContext(liveContext);
    // if(recipe.click===true){
    //     return (
    //         <div>
    //             <RecipeList {...recipe}/>
    //         </div>
    //     )
    // }

    const { name,
        cookTime,
        servings,
        instructions,
        ingredients } = recipeValue;
    return (
        <>
            <div className='recipe'>
                <div className='recipe__flex'>
                    <div className='recipe__flex--name'>
                        <h1>{name}</h1>
                    </div>
                    <div className='recipe__flex--buttons'>
                        <button className='recipe__buttons--edit btn btn--blue'>Edit</button>
                        <button className='recipe__buttons--delete btn btn--red'>Delete</button>
                    </div>
                </div>
                <div className='recipe__cook recipe__align'>
                    <span className='first__span'>Cook Time:</span>
                    <span>{cookTime}</span>
                </div>
                <div className='recipe__servings recipe__align'>
                    <span className='first__span'>Servings:</span>
                    <span>{servings}</span>
                </div>
                <div className='recipe__instructions recipe__align'>
                    <span className='first__span'>Instructions:</span>
                    <pre><div className='recipe__instructions--value'>
                        {instructions}
                    </div></pre>

                </div>
                {/* <br /> */}
                <div className='recipe__align'>
                    <span className='first__span'>Ingredients:</span>
                    {/* <Ingredients ingredients={ingredients} /> */}
                </div>
            </div>
        </>
    )
}
