import React, { useState } from 'react'

const ApiFetch = () => {
    const [input,setInput] = useState(0)
  return (
    <>
        <h1 className="test"> React Class Project 03</h1>
<div className='test'>
    <h4 >Fetch pexel api {input}</h4>
    <input className='input' placeholder='search'   onChange={(e)=>e.target.value} />
</div>
    </>
  )
}

export default ApiFetch