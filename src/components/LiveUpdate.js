import React from 'react'
import RecipeList from './RecipeList'

export default function LiveUpdate({click}) {
    if(click===true){
    return (
        <RecipeList {...{name:'Name'}}/>//passing an empty object

    )
    }
}