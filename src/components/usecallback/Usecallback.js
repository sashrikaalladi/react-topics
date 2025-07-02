import React, { useCallback } from 'react'
import Usecallbackchild from './Usecallbackchild'
const Usecallback = () => {
  const [count, setCount] = React.useState(0)
  const newfunc=useCallback(()=>{},[])
  return (
    <div>
      <h1>usecallback</h1>
      <Usecallbackchild newfun={newfunc}/>
      <h2>{count}</h2>
      <button onClick={()=>setCount(prev=>prev+1)}>count increment</button>
    </div>
  )
}

export default Usecallback
