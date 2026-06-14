import React from 'react'
import { ClipLoader } from "react-spinners";

const Loader = () => {
   return (
      <div className='absolute z-999 backdrop-blur-2xl bg-white left-1/2 right-1/2 -translate-x-1/2 -translate-y-1/2'>
         <ClipLoader color="green" cssOverride={{
            borderWidth: "6px",
         }} size={50} />
      </div>
   )
}

export default Loader