import React, { useState, useContext } from 'react'
import Intermediate from '../Intermediate';
// import AddIngredient from './AddIngredient'
import IngredientsGenerator from './IngredientsGenerator';
import LiveUpdate from './LiveUpdate';
import RecipeList from './RecipeList';
export const recipesContext = React.createContext();
export default function RecipeEdit({ recipe,handleRecipeChange }) {
    // console.log(click)
    function handleChange(changes){
        handleRecipeChange(recipe.id,{...recipe,...changes})
    }
    
    const [counter, setCounter] = useState(1);
    const listGenerator = (e) => {
        e.preventDefault();

        setCounter((prevCounter) => prevCounter + 1)
    }
    // const [obj,setObj]=useState({name:'Name',cookTime:'',servings:'',instructions:'',ingredients:''})
    // const [name, setName] = useState(recipes.name)
    // const [cookTime, setCookTime] = useState('')
    // const [servings, setServings] = useState('')
    // const [instructions, setInstructions] = useState('')
    // const [ingredient, setIngredient] = useState('')
    // const handleChange=(event)=>{
    //     setName(()=> event.target.value)
    //     setCookTime(()=>event.target.value)
    //     setServings(()=>event.target.value)
    //     setInstructions(()=>event.target.value)
    //     setIngredient(()=>event.target.value)
    // }
    // const objContext = { name, cookTime, servings, instructions,click }
    // if (click === true) {
        return (
            <>
            {/* <recipesContext.Provider value={objContext}> */}
                <div className='rightSide_button'>
                    <button className='btn recipeEdit--x-btn btn--red'>
                        &times;
                    </button>
                </div>
                <div className='rightSide__field'>
                    <form className='rightSide__field--name rightSide--attr'>
                        <div className='rightSide__flex'>
                            <div className='rightSide__flex--label'>
                                <label htmlFor='name'>Name</label>
                            </div>
                            <div className='rightSide__flex--input'>
                                <input type='text'
                                value={recipe.name}
                                onChange={e=>handleChange({name:e.target.value})}
                                    // onChange={(event) => setName(() => event.target.value)}
                                    ></input>
                            </div>
                        </div>
                        <div className='rightSide__flex'>
                            <div className='rightSide__flex--label'>
                                <label htmlFor='name'>Cook Time</label>
                            </div>
                            <div className='rightSide__flex--input'>
                                <input type='text'
                                    value={recipe.cookTime}
                                    onChange={e=>handleChange({cookTime:e.target.value})}
                                    // onChange={(event) => setCookTime(() => event.target.value)} 
                                    ></input>
                            </div>
                        </div>
                        <div className='rightSide__flex'>
                            <div className='rightSide__flex--label'>
                                <label htmlFor='name'>Servings</label>
                            </div>
                            <div className='rightSide__flex--input'>
                                <input type='text'
                                value={recipe.servings}
                                onChange={e=>handleChange({servings:e.target.value})}
                                    // onChange={(event) => setServings(() => event.target.value)}
                                    ></input>
                            </div>
                        </div>
                        <div className='rightSide__flex'>
                            <div className='rightSide__flex--label' >
                                <label htmlFor='name'>Instructions</label>
                            </div>
                            <div className='rightSide__flex--input'>
                                <textarea rows="5" cols="81"
                                    value={recipe.instructions}
                                    onChange={e=>handleChange({servings:e.target.value})}
                                    // onChange={(event) => setInstructions(() => event.target.value)}
                                    ></textarea>
                            </div>
                        </div>
                        <div >
                            <div className='rightSide__flex--label'>Ingredients</div>
                            <div className='rightSide--grid'>
                                <span>Name</span>
                                <span>Amount</span>
                                {/* <span>Amount</span>     */}
                            </div>
                            <IngredientsGenerator counter={counter} />
                            <div className='rightSide__grid--addIngredients'>
                                <button className='recipe__add-recipe btn btn--blue'
                                    onClick={listGenerator}>
                                    Add Ingredients
                                    {/* using counter to like render more divs */}
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
                {/* <RecipeList {...objContext}/> */}
                <div>
            {/* <div className='contain__left-side'>
            <RecipeList {...{obj}}/>
            </div> */}
            </div>
                {/* </recipesContext.Provider > */}
                {/* <LiveUpdate {...objContext}/> */}
                {/* <Intermediate {...objContext}/> */}
            </>
                )
    // }
}
