import React from 'react'
import x from "../notes"

export default function Note() {

function extracter(notes)
{
  return(
    <div className='note'>
        <h1>{notes.titile}</h1>
        <p>{notes.content} </p>
   </div>
  )
}

  return (
   
   <>

   {x.map(extracter)}

</>
  )
}
