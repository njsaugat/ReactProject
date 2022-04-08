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
                    <span className='first__span'>Ingredients:</span>
                    <div className='recipe__instructions--value'>
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
