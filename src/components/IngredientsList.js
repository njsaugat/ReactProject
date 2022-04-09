import React from 'react'

export default function IngredientsList({keys,values}) {
    // console.log(keys)
    // console.log(values)
    // console.log(props)
    // for(const ke)
    // console.log(ingredient);

    return (
       <div className='ingredients__grid'>
           <span className='first__span'>{keys }</span>
           <span className='first__span'>{values }</span>
           {/* {<span>{ingredient}</span>} */}
       </div>
    )
}
