import React,{useState} from 'react'

export default function AddIngredient({key}) {
    console.log(key);
    const [display,setDisplay]=useState(true);
    const listClearer=(e)=>{
        e.preventDefault()
        setDisplay(()=>false)
    }
    if(display===true){
        return (
            <>
                <div className='rightSide__grid--input'>
                    <input type='text'></input>
                    <input type='text'></input>
                    <button className='btn  btn--red'
                    onClick={listClearer}
                    >
                        &times;</button>
                </div>
            </>
        )
    }
}
