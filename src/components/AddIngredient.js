import React,{useState} from 'react'
import Ingredients from './Ingredients';

export default function AddIngredient({key}) {
    console.log(key);
    const [display,setDisplay]=useState(true);
    const listClearer=(e)=>{
        e.preventDefault()
        setDisplay(()=>false)
    }
    const [name,setName]=useState();
    const [amount,setAmount]=useState();
    const handleName=(event)=>{
        setName(()=> event.target.value)
    }
    const handleAmount=(event)=>{
        setAmount(()=> event.target.value)
    }
    const objPack={[name]:[amount]}
    if(display===true){
        return (
            <>
                <div className='rightSide__grid--input'>
                    <input type='text'
                    onChange={handleName}></input>
                    <input type='text'
                    onChange={handleAmount}></input>
                    <button className='btn  btn--red'
                    onClick={listClearer}
                    >
                        &times;</button>
                </div>
                {/* <Ingredients {...objPack}/> */}
            </>
        )
    }
}
