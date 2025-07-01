// useMemo def:  
// useMemo is a React hook that remembers the result of a function so it doesn’t have to run again unless needed.

// Difference between useeffect an useMemo 
// 1.useeffect is called when ever the component is renderered 
// usememo is called during the compponent rendering process and it doesnot run evry time the compoenent is rerendered only when the dependy is changed it renders again
// it can be used to filtering,sorting for large number of data 

//THIS IS AN EXAMPLE OF USEMEMO USING FACTORIAL .

import React ,{useMemo, useState} from 'react'

const Usememo = () => {
  const [count,setCount]= useState(0)
  const [number,setNumber] =useState(5)
  const factorialresult = useMemo(()=>{ return fact(number)},[number])
  return (
    <div>
      <h1>usememo</h1>
      <h3>factorial of {number} is {factorialresult}</h3>
      <button onClick={()=>setCount(count+1)}>Increment - {count}</button>
      <button onClick={()=>setNumber(number+1)}> click to trigger factorial only when number is changed</button>
     </div>
  )
}

const fact =(n)=>{
let result=1 

for (var i=n; i >=1 ; i--){
  result = result *i 
}
console.log("calling factorial function")
return result

}


export default Usememo
