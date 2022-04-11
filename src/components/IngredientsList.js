import React from 'react'

export default function IngredientsList({name,amount}) {
    // console.log(ingredient)
    // console.log(keys)
    // console.log(values)
    // console.log(props)
    // for(const ke)
    // console.log(ingredient);

    return (
       <div className='ingredients__grid'>
           <span className='first__span'>{name}</span>
           <span className='first__span'>{amount }</span>
           {/* {<span>{ingredient}</span>} */}
       </div>
    )
}
