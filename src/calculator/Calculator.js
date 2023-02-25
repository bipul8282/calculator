import React, { useState } from 'react'
import "./Calculator.css";

function Calculator() {
    const [result,setResult] = useState("")

    function clickHandler(e){
  setResult(result.concat(e.target.value))
    }
  
    function clearResult(){
      setResult("");
    }
  
    const calculate =()=>{
      setResult(eval(result).toString())
    }
  


  return (
    <div className='container'>
    <div className='calc'>
      <div>
   <input className='input' type="text" placeholder='0' value={result}/></div>
   <div className='container2'>
   <div  >
   <input className='button1' type="button" value="9" onClick={clickHandler}/>
   <input className='button1'type="button" value="8" onClick={clickHandler}/>
   <input className='button1'type="button" value="7" onClick={clickHandler}/>
   <input className='button1' type="button" value="6" onClick={clickHandler}/>
   <input className='button1' type="button" value="5" onClick={clickHandler}/>
   </div>
   <div>
   <input className='button1' type="button" value="4" onClick={clickHandler}/>
   <input className='button1' type="button" value="3" onClick={clickHandler}/>
   <input className='button1' type="button" value="2" onClick={clickHandler}/>
   <input className='button1' type="button" value="1" onClick={clickHandler}/>
   <input className='button1'type="button" value="0" onClick={clickHandler}/>

   </div>
   <div>
   <input className='button1' type="button" value="+" onClick={clickHandler}/>
   <input className='button1' type="button" value="-" onClick={clickHandler}/>
   <input className='button1' type="button" value="*" onClick={clickHandler}/>
   <input className='button1' type="button" value="/" onClick={clickHandler}/>
   <input className='button1' type="button" value="." onClick={clickHandler}/>
   </div>
   <div className='input2'>
   <input className='button1'type="button" value="clear" onClick={clearResult}/>
   <input className='button1'type="button" value="=" onClick={calculate}/>
   </div>
   </div>
    </div>
    </div>
  )
}

export default Calculator;
      

