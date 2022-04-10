import React from 'react'
import Intermediate from '../Intermediate';
import RecipeList from './RecipeList'
export const liveContext=React.createContext()
export default function LiveUpdate(props) {
    const{name, cookTime, servings, instructions,click}=props;
    if(click===true){
    return (
        <>
        {/* // <RecipeList {...{name:'Name'}}/>//passing an empty object */}
        <liveContext.Provider value={props}>
        {/* <Intermediate /> */}
        </liveContext.Provider>
        </>

    )
    }
}