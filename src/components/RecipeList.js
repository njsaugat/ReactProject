import React from 'react'

// export default function RecipeList({recipe}) {
export default function RecipeList(recipe) {
    // console.log(props)
    const { name, cookTime, servings, instructions } = recipe;
    return (
        <>
            <div>
                <div>
                    <h1>{name}</h1>
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
                    <div>
                        <span>Flour  </span>
                        <span>1 kg</span>
                    </div>
                    <div>
                        <span>Kima </span>
                        <span>1 Tablespoon/wrap</span>
                    </div>
                </div>

            </div>
            
        </>
    )
}
