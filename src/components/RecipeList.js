import React,{useContext} from 'react'
import Ingredients from './Ingredients';
import recipesContext from './RecipeEdit';
// export default function RecipeList({recipe}) {
export default function RecipeList(recipe) {
    const recipe2=useContext(recipesContext)
//     const [click, setClick] = useState(false);
//   const handleClick = () => {
//     setClick(() => true)
//   }

    const { id,
        name,
        cookTime,
        servings,
        instructions,
        ingredients,
        handleDeleteRecipes,
        handleSelectedRecipe } = recipe;
        console.log( handleDeleteRecipes)
    

    return (
        <>
            <div className='recipe'>
                <div className='recipe__flex'>
                    <div className='recipe__flex--name'>
                        <h1>{name}</h1>
                    </div>
                    <div className='recipe__flex--buttons'>
                        <button className='recipe__buttons--edit btn btn--blue'
                        onClick={()=>handleSelectedRecipe(id)}>Edit</button>
                        <button className='recipe__buttons--delete btn btn--red'
                        onClick={()=>handleDeleteRecipes(id)}>Delete</button>
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
                    <Ingredients ingredients={ingredients} />
                    {/* calling the ingredients like this bcz
                    it had like the array and each stuff of the array had to 
                    printed */}
                    {/* <div>
                        <span>Flour  </span>
                        <span>1 kg</span>
                    </div>
                    <div>
                        <span>Kima </span>
                        <span>1 Tablespoon/wrap</span>
                    </div> */}
                </div>
                {/* <div className='recipe__base'>
      <button className='recipe__add-recipe btn btn--blue'
        onClick={handleClick}>
        Add Recipe
      </button>
    </div> */}
            </div>

        </>
    )
}
