import React from 'react'
import x from "../notes"

export default function Note(props) {
return(
    <div className='note'>
        <h1>{props.title}</h1>
        <p>{props.content} </p>
   </div>
)



  
}
