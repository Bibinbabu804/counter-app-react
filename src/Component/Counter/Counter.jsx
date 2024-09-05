import React, { useState } from 'react'

function Counter() {
const  [counter,setcounter]=useState(0)
const handleincrement =()=>{

    setcounter(counter+1)
}

const handledecrement =()=>{

setcounter(counter-1)

}

const reset=()=>{

    setcounter(0)
}

  return (
    <div>


<div className='container  border border-2 border-dark p-5 m-5'>

    <div className='text-center'>

<h1> {counter} </h1>
<div className='d-flex justify-content-evenly'>
<button onClick={handleincrement} className='btn btn-success '>Increment</button>
<button onClick={handledecrement} className='btn btn-danger '>Decrement</button>
<button onClick={reset} className='btn btn-primary'>Reset</button>

</div>

    </div>


</div>


    </div>
  )
}

export default Counter