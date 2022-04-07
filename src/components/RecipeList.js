import React from 'react'
import Ingredients from './Ingredients';

// export default function RecipeList({recipe}) {
export default function RecipeList(recipe) {
    // console.log(props)
    const { name,
        cookTime,
        servings,
        instructions,
        ingredients } = recipe;
    return (
        <>
            <div className='recipe'>
                <div className='recipe__name'>
                    <h1>{name}</h1>
                </div>
                <div className='recipe__buttons'>
                    <button className='recipe__buttons--edit btn'>Edit</button>
                    <button className='recipe__buttons--delete btn'>Delete</button>
                </div>
                <div>
                    <span>Cook Time:</span>
                    <span>{cookTime}</span>
                </div>
                <div>
                    <span>Servings:</span>
                    <span>{servings}</span>
                </div>
                <div>
                    <span>Ingredients:</span>
                    <div>
                        {instructions}
                    </div>

                </div>
                <br />
                <div>
                    <span>Ingredients:</span>
                    <Ingredients {...ingredients} />
                    {/* <div>
                        <span>Flour  </span>
                        <span>1 kg</span>
                    </div>
                    <div>
                        <span>Kima </span>
                        <span>1 Tablespoon/wrap</span>
                    </div> */}
                </div>

            </div>

        </>
    )
}
