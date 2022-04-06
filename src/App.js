import React,{useState} from 'react';
import Recipe from './components/Recipe';

function App(){
  const sampleRecipes=[
    {
      id:1,
      name:'Momo',
      cookTime:'1hr',
      servings: '5 plates',
      instructions:['1.Put kima in momo wrapper',
        '2.Steam the momo ',
        '3.Eat the momo',
        
      ],
      ingredients:{
        flour:'1 kg',
        kima:'1 Tablespoon/wrap'
      }
    },
    {
      id:2,
      name:'Pizza',
      cookTime:'0.5hr',
      servings: '14\' inch',
      instructions:['1.Put the pizza base',
        '2.Add the pizza topings and put in the oven',
        '3.Eat the pizza'
      ],
      ingredients:{
        flour:'1.5 kg',
        cheese:'0.3 kg',
        sauce:'1 Tablespoon/wrap'
      }
    }
  ]
  return(
    <>
      <Recipe sampleRecipes={sampleRecipes}/>
    </>
  )
  
}

export default App;
