import React from 'react'

const Usecallbackchild = () => {
   console.log("usecallbackchild")
  return (
    <div>
      <h1>usecallbackchild</h1>
    </div>
  )
}

export default React.memo(Usecallbackchild) //Usecallbackchild
