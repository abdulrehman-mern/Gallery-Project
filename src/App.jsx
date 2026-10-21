import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Card from './components/Card'
import Buttons from './components/Buttons'


const App = () => {

  const [userData, setUserData] = useState([])
  const [index, setIndex] = useState(1)

  const getData = async () => {
    const response = await axios.get(`https://picsum.photos/v2/list?page=${index}&limit=10`)
    setUserData(response.data)
  }

  useEffect(function(){
    getData()
  },[index])

  let printUserData = <h3 className='text-gray-300 font-semibold absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>Loading...</h3>
  if(userData.length>0){
    printUserData = userData.map(function(elem, idx){
      return <div key = {idx}>
         <Card elem = {elem}/>
      </div>
    })
  }

  return (
    <div className='bg-black overflow-auto h-screen text-white'>
      <div className='flex h-[82%] flex-wrap ml-5 mt-5 gap-5 p-2'>
        {printUserData}
        </div>
        <div className='flex justify-center items-center p-4 gap-6'>
          <Buttons index = {index} setIndex = {setIndex} setUserData = {setUserData}/>
        </div>
    </div>
  )
}

export default App
