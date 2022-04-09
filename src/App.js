import React,{useState} from 'react';
import Recipe from './components/Recipe';
import RecipeEdit from './components/RecipeEdit';
import main from './css/main.css'
function App(){
  const sampleRecipes=[
    {
      id:1,
      name:'Momo',
      cookTime:'1hr',
      servings: '5 plates',
      instructions:['1.Put kima in momo wrapper\n','2.Steam the momo \n','3.Eat the momo\n',
        
      ],
      ingredients:{
        Flour:'1 kg',
        Kima:'1 Tablespoon/wrap'
      }
    },
    {
      id:2,
      name:'Pizza',
      cookTime:'0.5hr',
      servings: '14\' inch',
      instructions:['1.Put the pizza base \n', 
      '2.Add the pizza topings and put in the oven \n',
       '3.Eat the pizza'
      ],
      ingredients:{
        Flour:'1.5 kg',
        Cheese:'0.3 kg',
        Sauce:'1 Tablespoon/wrap'
      }
    }
  ]
  return(
    <div className='contain'>
      <div className='contain__left-side'>
      <Recipe sampleRecipes={sampleRecipes}/>
      </div>
      <div className='contain__border'></div>
      <div className='contain__right-side'>
        <RecipeEdit/>
      </div>
    </div>
  )
  
}

export default App;
