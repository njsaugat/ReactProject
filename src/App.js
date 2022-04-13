import React, { useState } from 'react';
import Recipe from './components/Recipe';
import RecipeEdit from './components/RecipeEdit';
const sampleRecipes = [
  {
    id: 1,
    name: 'Momo',
    cookTime: '1hr',
    servings: '5 plates',
    instructions: ['1.Put kima in momo wrapper\n', '2.Steam the momo \n', '3.Eat the momo\n',

    ],
    ingredients: [{
      id: 1,
      name: 'Flour',
      amount: '1 kg',
    },
    {
      id: 2,
      name: 'Kima',
      amount: '1 Tablespoon/wrap',
    }]
  },
  {
    id: 2,
    name: 'Pizza',
    cookTime: '0.5hr',
    servings: '14\' inch',
    instructions: ['1.Put the pizza base \n',
      '2.Add the pizza topings and put in the oven \n',
      '3.Eat the pizza'
    ],
    ingredients: [{
      id: 1,
      name: 'Flour',
      amount: '1.5 kg',
    },
    {
      id: 2,
      name: 'Cheese',
      amount: '0.3 kg',
    },
    {
      id: 3,
      name: 'Sauce',
      amount: '2 Tablespoon/wrap',
    }
    ]
  }
  // ,
  // {
  //   id: 23,
  //   name: 'New',
  //   cookTime: '1hr',
  //   servings: ' 1plater',
  //   instructions: ['instre'
  //   ],
  //   ingredients: [{
  //     id: 1,
  //     name: 'Flour',
  //     amount: '1.5 kg',
  //   }
  //   ]
  // }
]
function App() {
  const [recipes, setRecipes] = useState(sampleRecipes);
  const [selectedRecipeId,setSelectedRecipeId]=useState()
  const selectedRecipe=recipes.find(recipe=>recipe.id===selectedRecipeId)
  // console.log(selectedRecipe);
  // const handleClick = () => {
  //   setClick(() => true)
  // }
  function handleSelectedRecipe(id){
    setSelectedRecipeId(id);
  }

  function handleAddRecipes() {
    const newRecipes =
    {
      id: Date.now(),
      name: 'New',
      cookTime: '1hr',
      servings: ' 1plater',
      instructions: ['instre'],
      ingredients: [{
        id: Date.now(),
        name: 'Flour',
        amount: '1.5 kg',
      }
      ]
    }
    setRecipes([...recipes, newRecipes])
  }
  function handleDeleteRecipes(id) {
    setRecipes(recipes.filter(recipe => recipe.id !== id))

  }
  function handleRecipeChange(id,recipe){
    const newRecipes=[...recipes];
    const index=newRecipes.findIndex(r=>r.id===id);
    newRecipes[index]=recipe;
    setRecipes(newRecipes)
  }

  return (<>

    <div className='contain'>
      {/* <div className='contain__left-side'> */}
      <Recipe
        sampleRecipes={recipes}
        handleAddRecipes={handleAddRecipes}
        handleDeleteRecipes={handleDeleteRecipes}
        handleSelectedRecipe={handleSelectedRecipe}
         />
      {/* <div className='recipe__base'>
        <button className='recipe__add-recipe btn btn--blue'
          onClick={handleClick}>
          Add Recipe
        </button>
      </div> */}
      {/* </div> */}
      {/* <div className='contain__border'></div> *
        this had caused alot of problem of like having to 
        not being placed int the right place 
        so making them placed in recipe file made it easier
      /}
      {/* <div className='contain__right-side'> */}
      {/* <RecipeEdit click={false}/> */}
      {/* </div> */}
      {/* <div className='contain__right-side'>
      <RecipeEdit click={click} />
    </div> */}
      <div className='contain__right-side'>
        {/* {console.log(click)} */}
        {selectedRecipe && <RecipeEdit  recipe={selectedRecipe} handleRecipeChange={handleRecipeChange} />}
      </div>
    </div>

  </>
  )


}

export default App;
