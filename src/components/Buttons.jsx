import React from 'react'

const Buttons = ({index, setIndex, setUserData}) => {
  const isFirst = index === 1
  return (
    <div>
      <button 
      disabled = {isFirst}
      style={{opacity: isFirst ? 0.5 : 1,
        cursor : isFirst ? 'not-allowed' : 'pointer'
      }}
          className={`bg-amber-400 text-black rounded px-4 py-2 font-semibold ${isFirst ? '' : 'active:scale-95'}`}
          onClick={() => {
            
            if(index>1){
              setUserData([])
              setIndex(index - 1)
            }
          }}
          >
            Prev
            </button>
            <span className='mx-4'>Page {index}</span>
          <button 
          className='bg-amber-400 text-black rounded cursor-pointer active:scale-95 px-4 py-2 font-semibold'
          onClick={() => {
           setUserData([])
           setIndex(index + 1)
          }}
          >
            Next
            </button>
    </div>
  )
}

export default Buttons
